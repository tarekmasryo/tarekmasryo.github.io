import process from 'node:process';

import { defineConfig } from '@playwright/test';

const chromiumExecutablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined;

const launchOptions = chromiumExecutablePath
  ? { executablePath: chromiumExecutablePath, args: ['--no-sandbox'] }
  : {};

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['html', { open: 'never' }], ['list']] : 'list',
  webServer: {
    command: 'python -m http.server 8011',
    url: 'http://127.0.0.1:8011',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  use: {
    baseURL: 'http://127.0.0.1:8011',
    viewport: { width: 1280, height: 900 },
    trace: 'retain-on-failure',
    launchOptions,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
