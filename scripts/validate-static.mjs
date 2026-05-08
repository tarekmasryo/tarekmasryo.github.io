import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import vm from 'node:vm';

const ROOT = process.cwd();
const IMAGE_EXTENSIONS = ['webp'];
const REQUIRED_FILES = [
  'index.html',
  '404.html',
  'styles.css',
  'app.js',
  'projects.js',
  'site.webmanifest',
  'robots.txt',
  'sitemap.xml',
  'assets/og.jpg',
  'assets/profile-image.png',
  'assets/profile-image.webp',
  '.nojekyll',
  '.npmrc',
  'package.json',
  'package-lock.json',
  '.github/workflows/ci.yml',
];

const errors = [];
const warnings = [];

function readFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(ROOT, relativePath));
}

function ensure(condition, message) {
  if (!condition) errors.push(message);
}

function warn(condition, message) {
  if (!condition) warnings.push(message);
}

function cleanPath(value) {
  return String(value || '')
    .split('?')[0]
    .split('#')[0]
    .trim();
}

function isLocalAsset(value) {
  const target = String(value || '').trim();
  if (!target) return false;
  return (
    !/^(?:[a-z]+:)?\/\//i.test(target) &&
    !target.startsWith('mailto:') &&
    !target.startsWith('tel:')
  );
}

function slugify(value) {
  return String(value || '')
    .trim()
    .replace(/[—–]/g, '-')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function imageCandidates(baseName) {
  const raw = String(baseName || '').trim();
  if (!raw) return [];
  const slug = slugify(raw);
  const candidates = IMAGE_EXTENSIONS.flatMap((extension) => [
    path.join('assets', `${slug}.${extension}`),
    path.join('assets', `${raw}.${extension}`),
  ]);
  return [...new Set(candidates)];
}

function isolateProjectArray(source, label) {
  const marker = 'PROJECTS_RAW';
  const start = source.indexOf(marker);

  ensure(start >= 0, `${label} is missing PROJECTS_RAW`);
  if (start < 0) return [];

  const arrayStart = source.indexOf('[', start);
  ensure(arrayStart > start, `Unable to locate PROJECTS_RAW array start in ${label}`);
  if (arrayStart <= start) return [];

  let depth = 0;
  let inString = false;
  let stringQuote = '';
  let escaped = false;
  let arrayEnd = -1;

  for (let index = arrayStart; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === '\\') {
        escaped = true;
        continue;
      }
      if (char === stringQuote) {
        inString = false;
        stringQuote = '';
      }
      continue;
    }

    if (char === "'" || char === '"' || char === '`') {
      inString = true;
      stringQuote = char;
      continue;
    }

    if (char === '[') depth += 1;
    if (char === ']') {
      depth -= 1;
      if (depth === 0) {
        arrayEnd = index + 1;
        break;
      }
    }
  }

  ensure(arrayEnd > arrayStart, `Unable to isolate PROJECTS_RAW in ${label}`);
  if (arrayEnd <= arrayStart) return [];

  return source.slice(arrayStart, arrayEnd).trim();
}

function extractProjectsRaw() {
  const sourcePath = fileExists('projects.js') ? 'projects.js' : 'app.js';
  const source = readFile(sourcePath);
  const literal = isolateProjectArray(source, sourcePath);

  if (!literal) return [];

  try {
    const projects = vm.runInNewContext(literal);
    ensure(Array.isArray(projects), 'PROJECTS_RAW must evaluate to an array');
    return Array.isArray(projects) ? projects : [];
  } catch (error) {
    ensure(false, `Unable to parse PROJECTS_RAW from ${sourcePath}: ${error.message}`);
    return [];
  }
}
function extractMetaContent(html, httpEquiv) {
  const patterns = [
    new RegExp(`<meta[^>]+http-equiv=["']${httpEquiv}["'][^>]+content="([^"]+)"[^>]*>`, 'i'),
    new RegExp(`<meta[^>]+content="([^"]+)"[^>]+http-equiv=["']${httpEquiv}["'][^>]*>`, 'i'),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return match[1] || '';
  }

  return '';
}

function getDirectiveValue(csp, directive) {
  const directives = String(csp || '')
    .split(';')
    .map((entry) => entry.trim())
    .filter(Boolean);
  const entry = directives.find((item) => item.startsWith(`${directive} `) || item === directive);
  if (!entry) return '';
  return entry === directive ? '' : entry.slice(directive.length).trim();
}

function getInlineScriptHashes(html) {
  const hashes = [];
  const scriptPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;

  for (const match of html.matchAll(scriptPattern)) {
    const attributes = match[1] || '';
    if (/\bsrc\s*=\s*["'][^"']+["']/i.test(attributes)) continue;
    const content = match[2] || '';
    const digest = crypto.createHash('sha256').update(content, 'utf8').digest('base64');
    hashes.push(`'sha256-${digest}'`);
  }

  return hashes;
}

function validateRequiredFiles() {
  for (const relativePath of REQUIRED_FILES) {
    ensure(fileExists(relativePath), `Missing required file: ${relativePath}`);
  }
}

function validateAnchorSafety(html, relativePath) {
  for (const match of html.matchAll(/<a\b([^>]+)>/gi)) {
    const attrs = match[1] || '';
    const hrefMatch = attrs.match(/\bhref=['"]([^'"]+)['"]/i);
    const targetMatch = attrs.match(/\btarget=['"]([^'"]+)['"]/i);
    const relMatch = attrs.match(/\brel=['"]([^'"]+)['"]/i);
    const href = hrefMatch ? cleanPath(hrefMatch[1]) : '';
    const target = targetMatch ? String(targetMatch[1]).trim().toLowerCase() : '';
    const rel = relMatch ? String(relMatch[1]).toLowerCase() : '';

    ensure(href !== '#', `${relativePath} contains a placeholder anchor href="#"`);
    if (target === '_blank') {
      ensure(
        rel.includes('noopener') && rel.includes('noreferrer'),
        `${relativePath} has target="_blank" without rel="noopener noreferrer"`,
      );
    }
  }
}

function validateHtmlReferences() {
  const html = readFile('index.html');
  const localTargets = new Set();

  for (const match of html.matchAll(/\b(?:src|href)=['"]([^'"]+)['"]/g)) {
    const target = cleanPath(match[1]);
    if (!isLocalAsset(target) || target.startsWith('#')) continue;
    localTargets.add(target);
  }

  for (const match of html.matchAll(/\bsrcset=['"]([^'"]+)['"]/g)) {
    const srcset = match[1].split(',').map((part) => cleanPath(part.trim().split(/\s+/)[0]));
    for (const target of srcset) {
      if (!isLocalAsset(target)) continue;
      localTargets.add(target);
    }
  }

  for (const relativePath of localTargets) {
    ensure(fileExists(relativePath), `index.html references a missing local file: ${relativePath}`);
  }

  validateAnchorSafety(html, 'index.html');

  const anchorTargets = new Set(
    [...html.matchAll(/href=['"]#([^'"]+)['"]/g)].map((match) => match[1].trim()).filter(Boolean),
  );
  const ids = new Set([...html.matchAll(/\bid=['"]([^'"]+)['"]/g)].map((match) => match[1].trim()));

  for (const anchor of anchorTargets) {
    ensure(ids.has(anchor), `Anchor target is missing in index.html: #${anchor}`);
  }

  ensure(/rel=['"]canonical['"]/i.test(html), 'Canonical link is missing from index.html');
  ensure(/property=['"]og:image['"]/i.test(html), 'Open Graph image is missing from index.html');
  ensure(/src=['"][^'"]*app\.js/i.test(html), 'index.html should reference app.js');
  ensure(!/viewbox=/.test(html), 'index.html contains invalid SVG attribute casing: viewbox');
  ensure(
    /type=['"]module['"][^>]+src=['"][^'"]*app\.js/i.test(html) ||
      /src=['"][^'"]*app\.js[^>]+type=['"]module['"]/i.test(html),
    'index.html should load app.js as a JavaScript module',
  );
}

function validate404Html() {
  const html = readFile('404.html');
  validateAnchorSafety(html, '404.html');
}

function validateCssReferences() {
  const css = readFile('styles.css');
  const matches = [...css.matchAll(/url\(([^)]+)\)/g)];

  for (const match of matches) {
    const rawValue = match[1].replace(/['"]/g, '').trim();
    const relativePath = cleanPath(rawValue);
    if (!isLocalAsset(relativePath) || relativePath.startsWith('data:')) continue;
    ensure(
      fileExists(relativePath),
      `styles.css references a missing local asset: ${relativePath}`,
    );
  }
}

function validatePackageFiles() {
  const packageJson = JSON.parse(readFile('package.json'));
  const packageLock = JSON.parse(readFile('package-lock.json'));
  const gitignore = readFile('.gitignore');

  ensure(packageJson?.private === true, 'package.json should keep the repo private');
  ensure(
    typeof packageJson?.scripts?.lint === 'string' && packageJson.scripts.lint.includes('eslint'),
    'package.json is missing a lint script',
  );
  ensure(
    typeof packageJson?.scripts?.['format:check'] === 'string' &&
      packageJson.scripts['format:check'].includes('prettier'),
    'package.json is missing a format:check script',
  );
  ensure(
    typeof packageJson?.scripts?.['validate:static'] === 'string' &&
      packageJson.scripts['validate:static'].includes('validate-static.mjs'),
    'package.json is missing validate:static',
  );
  ensure(/(^|\n)node_modules\//.test(gitignore), '.gitignore must ignore node_modules/');

  const resolvedUrls = [];
  function collectResolved(node) {
    if (!node || typeof node !== 'object') return;
    if (typeof node.resolved === 'string') resolvedUrls.push(node.resolved);
    for (const value of Object.values(node)) {
      if (value && typeof value === 'object') collectResolved(value);
    }
  }
  collectResolved(packageLock);

  for (const resolved of resolvedUrls) {
    ensure(
      /^https:\/\/registry\.npmjs\.org\//.test(resolved),
      `package-lock.json contains a non-public registry URL: ${resolved}`,
    );
  }
}

function validateHtmlSecurity(relativePath, options = {}) {
  const html = readFile(relativePath);
  const csp = extractMetaContent(html, 'Content-Security-Policy');
  const scriptSrc = getDirectiveValue(csp, 'script-src');
  const styleSrc = getDirectiveValue(csp, 'style-src');
  const expectedHashes = getInlineScriptHashes(html);

  ensure(csp, `${relativePath} is missing a Content-Security-Policy meta tag`);
  ensure(scriptSrc, `${relativePath} CSP is missing script-src`);
  ensure(styleSrc, `${relativePath} CSP is missing style-src`);
  ensure(/(^|\s)'self'(\s|$)/.test(scriptSrc), `${relativePath} CSP script-src must allow 'self'`);
  ensure(
    !/unsafe-inline/i.test(scriptSrc),
    `${relativePath} CSP script-src should not include 'unsafe-inline'`,
  );
  ensure(
    !/unsafe-inline/i.test(styleSrc),
    `${relativePath} CSP style-src should not include 'unsafe-inline'`,
  );

  for (const hash of expectedHashes) {
    ensure(scriptSrc.includes(hash), `${relativePath} CSP script-src is missing ${hash}`);
  }

  if (options.requireReferrerPolicy) {
    ensure(
      /<meta[^>]+(?:name=["']referrer["'][^>]+content=["']strict-origin-when-cross-origin["']|content=["']strict-origin-when-cross-origin["'][^>]+name=["']referrer["'])/i.test(
        html,
      ),
      `${relativePath} is missing a strict referrer policy meta tag`,
    );
  }
}

function validateSecurityHardening() {
  const indexHtml = readFile('index.html');

  ensure(
    !/https:\/\/fonts\.googleapis\.com/i.test(indexHtml),
    'index.html should not load Google Fonts from a third-party origin',
  );
  ensure(
    !/https:\/\/fonts\.gstatic\.com/i.test(indexHtml),
    'index.html should not preconnect to Google font origins',
  );
  if (/https:\/\/code\.iconify\.design/i.test(indexHtml)) {
    const csp = extractMetaContent(indexHtml, 'Content-Security-Policy');
    const scriptSrc = getDirectiveValue(csp, 'script-src');
    const connectSrc = getDirectiveValue(csp, 'connect-src');
    ensure(
      /https:\/\/code\.iconify\.design/i.test(scriptSrc),
      'index.html CSP script-src must allow the Iconify runtime when it is used',
    );
    ensure(
      /https:\/\/api\.iconify\.design/i.test(connectSrc),
      'index.html CSP connect-src must allow the Iconify API when the runtime is used',
    );
    ensure(
      /<script[^>]+src=["']https:\/\/code\.iconify\.design\/3\/3\.1\.0\/iconify\.min\.js["'][^>]+integrity=["']sha256-[^"']+["'][^>]*>/i.test(
        indexHtml,
      ),
      'Iconify CDN script must include an SRI integrity hash',
    );
    ensure(
      /<script[^>]+src=["']https:\/\/code\.iconify\.design\/3\/3\.1\.0\/iconify\.min\.js["'][^>]+crossorigin=["']anonymous["'][^>]*>/i.test(
        indexHtml,
      ),
      'Iconify CDN script must include crossorigin="anonymous"',
    );
  }

  validateHtmlSecurity('index.html', { requireReferrerPolicy: true });
  validateHtmlSecurity('404.html');
}

function collectIconIds(value, out = new Set()) {
  if (Array.isArray(value)) {
    for (const item of value) collectIconIds(item, out);
    return out;
  }

  if (value && typeof value === 'object') {
    for (const item of Object.values(value)) collectIconIds(item, out);
    return out;
  }

  if (typeof value === 'string' && /^[a-z0-9-]+:[a-z0-9-]+$/i.test(value.trim())) {
    out.add(value.trim());
  }

  return out;
}

function extractSupportedIcons(appJs) {
  return new Set([...appJs.matchAll(/case '([^']+)'/g)].map((match) => match[1]));
}

function validateIconCoverage(projectsRaw) {
  const appJs = readFile('app.js');
  const indexHtml = readFile('index.html');
  const used = collectIconIds(projectsRaw);

  for (const source of [indexHtml, appJs]) {
    for (const match of source.matchAll(/data-icon=["']([^"']+)["']/g)) {
      const id = String(match[1] || '').trim();
      if (id) used.add(id);
    }
  }

  const usesIconifyCdn = /https:\/\/code\.iconify\.design/i.test(indexHtml);
  if (usesIconifyCdn) {
    for (const id of [...used].sort()) {
      ensure(/^[a-z0-9-]+:[a-z0-9-]+$/i.test(id), `Invalid icon identifier: ${id}`);
    }
    return;
  }

  const supported = extractSupportedIcons(appJs);

  for (const id of [...used].sort()) {
    ensure(supported.has(id), `Inline icon renderer is missing support for: ${id}`);
  }
}

function validateProjects(projectsRaw) {
  const titles = new Set();
  const repos = new Set();

  ensure(
    Array.isArray(projectsRaw) && projectsRaw.length > 0,
    'PROJECTS_RAW must contain at least one project',
  );

  for (const [index, project] of projectsRaw.entries()) {
    const label = `Project #${index + 1}`;
    const title = String(project?.title || '').trim();
    const repo = String(project?.repo || '').trim();
    const category = String(project?.cat || '').trim();
    const type = String(project?.type || '').trim();
    const desc = String(project?.desc || '').trim();

    ensure(title, `${label} is missing title`);
    ensure(repo, `${label} (${title || 'untitled'}) is missing repo slug`);
    ensure(category, `${label} (${title || 'untitled'}) is missing category`);
    ensure(type, `${label} (${title || 'untitled'}) is missing type`);
    ensure(desc, `${label} (${title || 'untitled'}) is missing description`);

    ensure(!titles.has(title), `Duplicate project title found: ${title}`);
    ensure(!repos.has(repo), `Duplicate project repo found: ${repo}`);
    titles.add(title);
    repos.add(repo);

    if (project?.repoUrl) {
      ensure(
        /^https?:\/\//i.test(project.repoUrl),
        `${title}: repoUrl must be an absolute http(s) URL`,
      );
    }

    const candidates = [...imageCandidates(project?.imageBase), ...imageCandidates(project?.repo)];
    ensure(
      candidates.some((candidate) => fileExists(candidate)),
      `${title}: no project WebP image found for imageBase/repo candidates`,
    );
    ensure(
      candidates.length > 0 && fileExists(candidates[0]),
      `${title}: first project image candidate is missing and would cause a browser 404: ${candidates[0] || 'none'}`,
    );

    warn(
      !project?.priority || Number(project.priority) <= 100,
      `${title}: priority is missing or unusually high`,
    );
  }
}

function validateImplementationPolish() {
  const appJs = readFile('app.js');

  ensure(
    !/\.innerHTML\s*=\s*['"]['"]/i.test(appJs),
    'app.js should use Dom.clear(...) instead of direct innerHTML clearing',
  );
  ensure(
    /const\s+key\s*=\s*\(cx,\s*cy\)\s*=>\s*`\$\{cx\},\$\{cy\}`;/.test(appJs),
    'ParticlesBackground.buildGrid should use collision-safe string keys',
  );
}

function validateResponsiveHardening() {
  const css = readFile('styles.css');
  const appJs = readFile('app.js');
  const indexHtml = readFile('index.html');

  ensure(!/var\(--bg\)/.test(css), 'styles.css references undefined CSS variable: --bg');
  ensure(
    /@media\s*\([^)]*max-width:\s*720px[^}]+#bgCanvas\s*{[^}]*display:\s*none/s.test(css),
    'styles.css should disable the animated background canvas on narrow screens',
  );
  ensure(
    /@media\s*\([^)]*max-width:\s*720px[\s\S]*backdrop-filter:\s*none/s.test(css),
    'styles.css should remove backdrop-filter effects on narrow screens',
  );
  ensure(
    /shouldDisableCanvas\(\)/.test(appJs) &&
      /\(max-width:\s*720px\),\s*\(pointer:\s*coarse\)/.test(appJs),
    'app.js should avoid starting the animated canvas on mobile/coarse-pointer devices',
  );
  ensure(
    /class=["']noscript-projects["']/.test(indexHtml),
    'index.html should include a no-JavaScript featured projects fallback',
  );
}

function validatePinnedExternalLinks() {
  const indexHtml = readFile('index.html');
  const cvUrl =
    'https://drive.google.com/file/d/1HBpu5Ej725i682uwUSp8VMyNTrPsxwmi/view?usp=sharing';
  const gmailComposeUrl =
    'https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=tarekmasryoai@gmail.com';

  ensure(indexHtml.includes(cvUrl), 'Pinned Google Drive CV link has changed or is missing');
  ensure(
    indexHtml.includes(gmailComposeUrl),
    'Pinned Gmail compose link has changed or is missing',
  );
  ensure(
    /https:\/\/code\.iconify\.design\/3\/3\.1\.0\/iconify\.min\.js/.test(indexHtml),
    'Pinned Iconify CDN runtime has changed or is missing',
  );
}

function main() {
  validateRequiredFiles();
  validateHtmlReferences();
  validate404Html();
  validateCssReferences();
  validatePackageFiles();
  validateSecurityHardening();
  validateResponsiveHardening();
  validateImplementationPolish();
  validatePinnedExternalLinks();
  const projectsRaw = extractProjectsRaw();
  validateIconCoverage(projectsRaw);
  validateProjects(projectsRaw);

  if (warnings.length) {
    console.warn(`Warnings (${warnings.length}):`);
    for (const message of warnings) console.warn(`- ${message}`);
  }

  if (errors.length) {
    console.error(`Static validation failed with ${errors.length} error(s):`);
    for (const message of errors) console.error(`- ${message}`);
    process.exit(1);
  }

  console.log('Static validation passed.');
}

main();
