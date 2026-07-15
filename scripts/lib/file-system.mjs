import fs from 'node:fs';
import path from 'node:path';

import { normalizeRelativePath } from './path-utils.mjs';

export function listRelativeFiles(root, relativeDirectory, extensions) {
  const directory = path.join(root, relativeDirectory);
  if (!fs.existsSync(directory)) return [];

  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const diskRelativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listRelativeFiles(root, diskRelativePath, extensions));
      continue;
    }
    if (extensions.some((extension) => entry.name.endsWith(extension))) {
      files.push(normalizeRelativePath(diskRelativePath));
    }
  }
  return files.sort();
}
