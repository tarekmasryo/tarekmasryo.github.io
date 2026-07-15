import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import { listRelativeFiles } from './lib/file-system.mjs';
import { isSameRelativePath } from './lib/path-utils.mjs';

const ROOT = process.cwd();

const SECURITY_AUDIT_PATH = 'scripts/security-audit.mjs';

const CHECKED_FILES = [
  'index.html',
  '404.html',
  'app.js',
  'projects.js',
  'styles.css',
  'package.json',
  'playwright.config.js',
  'eslint.config.js',
  ...listRelativeFiles(ROOT, 'src', ['.js']),
  ...listRelativeFiles(ROOT, 'scripts', ['.mjs']).filter(
    (file) => !isSameRelativePath(file, SECURITY_AUDIT_PATH),
  ),
  ...listRelativeFiles(ROOT, 'tests', ['.js']),
];

const errors = [];

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function fail(condition, message) {
  if (!condition) errors.push(message);
}

function stripAllowedClearHtml(source) {
  return source.replace(/\.innerHTML\s*=\s*(['"])\s*\1/g, '');
}

function validateNoDangerousExecution(relativePath, source) {
  const normalized = stripAllowedClearHtml(source);
  const forbidden = [
    [/\beval\s*\(/, 'eval()'],
    [/\bnew\s+Function\s*\(/, 'new Function()'],
    [/\bdocument\.write\s*\(/, 'document.write()'],
    [/\.outerHTML\s*=/, 'outerHTML assignment'],
    [/\.insertAdjacentHTML\s*\(/, 'insertAdjacentHTML()'],
    [/\.innerHTML\s*=/, 'innerHTML assignment except safe clearing'],
  ];

  for (const [pattern, label] of forbidden) {
    fail(
      !pattern.test(normalized),
      `${relativePath} uses forbidden dynamic HTML/execution sink: ${label}`,
    );
  }
}

function validateNoInlineEventHandlers(relativePath, source) {
  if (!relativePath.endsWith('.html')) return;
  fail(!/\son[a-z]+\s*=/i.test(source), `${relativePath} contains inline event handler attributes`);
}

function validateNoSecrets(relativePath, source) {
  const patterns = [
    [/-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/, 'private key block'],
    [/\bAKIA[0-9A-Z]{16}\b/, 'AWS access key id'],
    [/\bgh[pousr]_[A-Za-z0-9_]{30,}\b/, 'GitHub token'],
    [/\bsk-[A-Za-z0-9]{32,}\b/, 'OpenAI-style secret key'],
    [
      /\b(?:api[_-]?key|secret|token|password)\s*[:=]\s*['"][^'"\s]{12,}['"]/i,
      'hardcoded credential-like assignment',
    ],
  ];

  for (const [pattern, label] of patterns) {
    fail(!pattern.test(source), `${relativePath} may contain a ${label}`);
  }
}

function validateNoWorkInProgressMarkers(relativePath, source) {
  const normalized = source.toLowerCase();
  const markers = ['todo', 'fixme', 'xxx'];
  for (const marker of markers) {
    fail(
      !normalized.includes(marker),
      `${relativePath} contains a work-in-progress marker: ${marker.toUpperCase()}`,
    );
  }
}

function validateCsp(relativePath, source) {
  const cspMatch = source.match(
    /http-equiv=["']Content-Security-Policy["'][^>]+content="([^"]+)"/i,
  );
  fail(Boolean(cspMatch), `${relativePath} is missing a CSP meta tag`);
  if (!cspMatch) return;
  const csp = cspMatch[1];
  const required = [
    "default-src 'self'",
    "object-src 'none'",
    "script-src-attr 'none'",
    "style-src 'self'",
    "style-src-attr 'none'",
    "form-action 'self'",
  ];
  for (const directive of required) {
    fail(
      csp.includes(directive),
      `${relativePath} CSP is missing required directive: ${directive}`,
    );
  }
  fail(
    !/script-src[^;]*unsafe-inline/i.test(csp),
    `${relativePath} CSP script-src must not allow unsafe-inline`,
  );
  fail(
    !/style-src[^;]*unsafe-inline/i.test(csp),
    `${relativePath} CSP style-src must not allow unsafe-inline`,
  );
  fail(
    !/(?:^|;)\s*frame-ancestors\b/i.test(csp),
    `${relativePath} CSP meta must not include frame-ancestors; browsers only honor it as an HTTP response header`,
  );
}

function validateExternalScripts(source) {
  for (const match of source.matchAll(/<script\b([^>]*?)>/gi)) {
    const attrs = match[1] || '';
    const src = attrs.match(/\bsrc=["']([^"']+)["']/i)?.[1] || '';
    if (!/^https:\/\//i.test(src)) continue;
    fail(
      /\bintegrity=["']sha(256|384|512)-[^"']+["']/i.test(attrs),
      `External script missing SRI: ${src}`,
    );
    fail(
      /\bcrossorigin=["']anonymous["']/i.test(attrs),
      `External script missing crossorigin="anonymous": ${src}`,
    );
  }
}

function validatePackageScripts() {
  const pkg = JSON.parse(read('package.json'));
  fail(Boolean(pkg.scripts?.check), 'package.json is missing check script');
  fail(Boolean(pkg.scripts?.['test:e2e']), 'package.json is missing test:e2e script');
  fail(Boolean(pkg.scripts?.['security:audit']), 'package.json is missing security:audit script');
}

for (const relativePath of CHECKED_FILES) {
  const source = read(relativePath);
  validateNoDangerousExecution(relativePath, source);
  validateNoInlineEventHandlers(relativePath, source);
  validateNoSecrets(relativePath, source);
  validateNoWorkInProgressMarkers(relativePath, source);
}

validateCsp('index.html', read('index.html'));
validateCsp('404.html', read('404.html'));
validateExternalScripts(read('index.html'));
validatePackageScripts();

if (errors.length) {
  console.error(`Security audit failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Security audit passed.');
