import assert from 'node:assert/strict';
import test from 'node:test';

import {
  isSameRelativePath,
  joinRelativePath,
  normalizeRelativePath,
  resolveRelativeImport,
} from '../../scripts/lib/path-utils.mjs';

test('normalizeRelativePath produces stable POSIX paths on every platform', () => {
  assert.equal(normalizeRelativePath(String.raw`src\portfolio-app.js`), 'src/portfolio-app.js');
  assert.equal(normalizeRelativePath('./src/../src/ui/behaviors.js'), 'src/ui/behaviors.js');
});

test('relative path comparison excludes the security audit on Windows paths', () => {
  assert.equal(
    isSameRelativePath(String.raw`scripts\security-audit.mjs`, 'scripts/security-audit.mjs'),
    true,
  );
});

test('path joining and import resolution stay platform independent', () => {
  assert.equal(joinRelativePath('src', 'ui', 'behaviors.js'), 'src/ui/behaviors.js');
  assert.equal(
    resolveRelativeImport(
      String.raw`src\controllers\page-navigation-controller.js`,
      '../ui/behaviors.js',
    ),
    'src/ui/behaviors.js',
  );
});
