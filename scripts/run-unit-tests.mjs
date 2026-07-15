import { readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const UNIT_TEST_ROOT = resolve('tests/unit');

function collectTestFiles(directory) {
  return readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const absolutePath = join(directory, entry.name);
      if (entry.isDirectory()) return collectTestFiles(absolutePath);
      return entry.isFile() && entry.name.endsWith('.test.js') ? [absolutePath] : [];
    })
    .sort();
}

const testFiles = collectTestFiles(UNIT_TEST_ROOT);
if (testFiles.length === 0) {
  console.error('No unit test files were found.');
  process.exit(1);
}

const result = spawnSync(process.execPath, ['--test', ...testFiles], {
  stdio: 'inherit',
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
