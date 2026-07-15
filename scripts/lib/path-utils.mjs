import path from 'node:path';

/**
 * Convert a filesystem-style path to a stable POSIX representation.
 * This keeps validation output and path comparisons deterministic on Windows,
 * macOS, and Linux without changing how files are accessed on disk.
 */
export function normalizeRelativePath(value) {
  const portable = String(value ?? '').replaceAll('\\', '/');
  const normalized = path.posix.normalize(portable);
  if (normalized === '.') return '';
  return normalized.replace(/^\.\/+/, '');
}

export function joinRelativePath(...segments) {
  return normalizeRelativePath(path.posix.join(...segments.map(normalizeRelativePath)));
}

export function resolveRelativeImport(importerPath, specifier) {
  const importer = normalizeRelativePath(importerPath);
  return joinRelativePath(path.posix.dirname(importer), specifier);
}

export function isSameRelativePath(left, right) {
  return normalizeRelativePath(left) === normalizeRelativePath(right);
}
