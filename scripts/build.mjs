import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import prettier from 'prettier';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');

const moduleOrder = Object.freeze([
  'projects.js',
  'src/config.js',
  'src/core/dom.js',
  'src/core/collections.js',
  'src/core/browser.js',
  'src/ui/icon-renderer.js',
  'src/ui/behaviors.js',
  'src/ui/media.js',
  'src/domain/project.js',
  'src/ui/project-card-factory.js',
  'src/ui/project-modal.js',
  'src/controllers/project-catalog-controller.js',
  'src/controllers/page-navigation-controller.js',
  'src/controllers/tech-stack-controller.js',
  'src/portfolio-app.js',
  'app.js',
]);

function stripModuleSyntax(source) {
  return source
    .replace(/^import\s+[^;]+;\s*$/gm, '')
    .replace(/^export\s+(?=(?:class|const|let|var|function)\b)/gm, '')
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function projectUrl(project) {
  const explicit = String(project.repoUrl || '').trim();
  if (/^https?:\/\//i.test(explicit)) return explicit;
  const repo = String(project.repo || '').trim();
  return repo
    ? `https://github.com/tarekmasryo/${encodeURIComponent(repo)}`
    : 'https://github.com/tarekmasryo';
}

function renderFallback(projects) {
  const featured = [...projects]
    .sort((a, b) => (Number(b.priority) || 0) - (Number(a.priority) || 0))
    .slice(0, 6);

  const links = featured
    .map(
      (project) =>
        `              <a href="${escapeHtml(projectUrl(project))}" rel="noopener noreferrer" target="_blank">${escapeHtml(project.title)}</a>`,
    )
    .join('\n');

  return `          <!-- PROJECT_FALLBACK_START -->
          <div
            class="noscript-projects project-fallback"
            id="projectFallback"
            aria-label="Featured projects fallback"
          >
            <p class="noscript-projects-title">Featured projects</p>
            <div class="noscript-projects-grid">
${links}
            </div>
          </div>
          <!-- PROJECT_FALLBACK_END -->`;
}

async function buildBundle() {
  const sections = [];
  for (const relativePath of moduleOrder) {
    const absolutePath = path.join(rootDir, relativePath);
    const source = await readFile(absolutePath, 'utf8');
    sections.push(`/* ${relativePath} */\n${stripModuleSyntax(source)}`);
  }

  const bundle = `/*
 * Generated file. Do not edit directly.
 * Source of truth: projects.js, app.js, and the src module tree.
 */
(() => {
  'use strict';

${sections.join('\n\n')}
})();
`;

  await writeFile(path.join(rootDir, 'app.bundle.js'), bundle, 'utf8');
}

async function buildFallback() {
  const projectsModule = await import(
    `${pathToFileURL(path.join(rootDir, 'projects.js')).href}?build=${Date.now()}`
  );
  const projects = projectsModule.PROJECTS_RAW;
  if (!Array.isArray(projects) || projects.length === 0) {
    throw new Error('projects.js did not export a non-empty PROJECTS_RAW array.');
  }

  const indexPath = path.join(rootDir, 'index.html');
  const indexHtml = await readFile(indexPath, 'utf8');
  const startMarker = '<!-- PROJECT_FALLBACK_START -->';
  const endMarker = '<!-- PROJECT_FALLBACK_END -->';
  const start = indexHtml.indexOf(startMarker);
  const end = indexHtml.indexOf(endMarker);
  if (start < 0 || end < start) {
    throw new Error('Project fallback markers are missing from index.html.');
  }

  const updated = `${indexHtml.slice(0, start)}${renderFallback(projects)}${indexHtml.slice(end + endMarker.length)}`;
  const prettierConfig = (await prettier.resolveConfig(indexPath)) || {};
  const formatted = await prettier.format(updated, { ...prettierConfig, parser: 'html' });
  await writeFile(indexPath, formatted, 'utf8');
}

await buildFallback();
await buildBundle();
console.log('Built app.bundle.js and refreshed the project fallback.');
