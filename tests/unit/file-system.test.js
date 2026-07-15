import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { listRelativeFiles } from '../../scripts/lib/file-system.mjs';

test('listRelativeFiles returns deterministic portable paths', (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-files-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));

  fs.mkdirSync(path.join(root, 'src', 'nested'), { recursive: true });
  fs.writeFileSync(path.join(root, 'src', 'z.js'), '');
  fs.writeFileSync(path.join(root, 'src', 'a.js'), '');
  fs.writeFileSync(path.join(root, 'src', 'nested', 'b.js'), '');
  fs.writeFileSync(path.join(root, 'src', 'nested', 'ignore.txt'), '');

  assert.deepEqual(listRelativeFiles(root, 'src', ['.js']), [
    'src/a.js',
    'src/nested/b.js',
    'src/z.js',
  ]);
});
