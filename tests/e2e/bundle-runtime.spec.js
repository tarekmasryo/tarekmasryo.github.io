import { readFile } from 'node:fs/promises';

import { expect, test } from '@playwright/test';

async function loadInMemoryPortfolio(page) {
  const styles = await readFile('styles.css', 'utf8');
  let html = await readFile('index.html', 'utf8');
  html = html
    .replace(/<meta\s+http-equiv="Content-Security-Policy"[\s\S]*?\/>/i, '')
    .replace(/<link[^>]+href="styles\.css[^"]*"[^>]*>/i, `<style>${styles}</style>`)
    .replace(/<script\b[\s\S]*?<\/script>/gi, '');

  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await page.addScriptTag({ content: await readFile('app.bundle.js', 'utf8') });
}

test('generated bundle renders the complete project catalog', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });

  await loadInMemoryPortfolio(page);

  await expect(page.locator('#projectsGrid .p-card')).toHaveCount(6);
  await expect(page.locator('#projectFallback')).toBeHidden();
  await expect(page.locator('#projectsToggle')).toBeVisible();

  await page.locator('.cta a[href="#projects"]').click();
  await expect(page.locator('#navLinks a[href="#projects"]')).toHaveClass(/active/);
  await expect(page.locator('#navLinks a[href="#projects"]')).toHaveAttribute(
    'aria-current',
    'page',
  );

  await page.locator('#projectsToggle').click();
  await expect(page.locator('#projectsGrid .p-card')).toHaveCount(30);

  await page.locator('#projectSearch').fill('Old Photo Restorer');
  await expect(page.locator('#projectsGrid .p-card')).toHaveCount(1);
  await expect(page.locator('#projectsGrid .p-card h3')).toHaveText('Old Photo Restorer');

  await page.locator('#clearSearch').click();
  await page.locator('.fbtn[data-cat="genai"]').click();
  await expect(page.locator('#projectsGrid .p-card').first()).toBeVisible();

  await page.locator('#projectsGrid .p-card button', { hasText: 'View Details' }).first().click();
  await expect(page.locator('#projectModal')).toHaveClass(/show/);
  await expect(page.locator('#mTitle')).not.toHaveText('—');
  expect(errors).toEqual([]);
});
