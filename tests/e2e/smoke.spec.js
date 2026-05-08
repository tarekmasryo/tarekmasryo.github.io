import { expect, test } from '@playwright/test';

const ICONIFY_URL_PATTERNS = [
  'https://code.iconify.design/**',
  'https://api.iconify.design/**',
  'https://api.simplesvg.com/**',
  'https://api.unisvg.com/**',
];

async function blockExternalIconRequests(target) {
  for (const pattern of ICONIFY_URL_PATTERNS) {
    await target.route(pattern, (route) => route.abort());
  }
}

function attachAssetFailureTracker(page) {
  const failures = [];
  const isLocalAsset = (rawUrl) => {
    const url = new URL(rawUrl);
    return ['127.0.0.1', 'localhost'].includes(url.hostname) && url.pathname.startsWith('/assets/');
  };

  page.on('response', (response) => {
    if (!isLocalAsset(response.url())) return;
    if (response.status() >= 400)
      failures.push(`${response.status()} ${new URL(response.url()).pathname}`);
  });

  page.on('requestfailed', (request) => {
    if (!isLocalAsset(request.url())) return;
    failures.push(`request failed ${new URL(request.url()).pathname}`);
  });

  return failures;
}

test('portfolio core interactions work', async ({ page }) => {
  const failedLocalAssets = attachAssetFailureTracker(page);
  await blockExternalIconRequests(page);

  await page.goto('/');

  await expect(page).toHaveTitle(/Tarek Masryo/);
  await expect(page.locator('h1')).toContainText('Tarek Masryo');
  await expect(page.locator('#projectsGrid .p-card')).toHaveCount(6);

  await page.locator('#projectSearch').fill('fraud');
  await expect(page.locator('#clearSearch')).toBeVisible();
  await expect(page.locator('#projectsGrid .p-card').first()).toContainText(/fraud/i);

  await page.locator('#clearSearch').click();
  await expect(page.locator('#projectSearch')).toHaveValue('');
  await expect(page.locator('#projectsGrid .p-card')).toHaveCount(6);

  await page.locator('.fbtn[data-cat="finance"]').click();
  await expect(page.locator('.fbtn[data-cat="finance"]')).toHaveClass(/active/);
  await expect(page.locator('#projectsGrid .p-card').first()).toBeVisible();

  await page.locator('#projectsGrid .p-card button', { hasText: 'View Details' }).first().click();
  await expect(page.locator('#projectModal')).toHaveClass(/show/);
  await expect(page.locator('#mTitle')).not.toHaveText('—');

  await page.keyboard.press('Escape');
  await expect(page.locator('#projectModal')).not.toHaveClass(/show/);

  const initialTheme = await page.locator('html').getAttribute('data-theme');
  await page.locator('#themeToggle').click();
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', initialTheme || '');

  await expect(page.locator('footer a', { hasText: 'CV' })).toHaveAttribute(
    'href',
    /drive\.google\.com/,
  );
  await expect(page.locator('footer a[aria-label="Email Tarek via Gmail"]')).toHaveAttribute(
    'href',
    'https://mail.google.com/mail/?view=cm&fs=1&to=tarekmasryoai@gmail.com',
  );
  await page.waitForTimeout(500);
  expect(failedLocalAssets).toEqual([]);
});

test('mobile navigation opens and closes', async ({ page }) => {
  const failedLocalAssets = attachAssetFailureTracker(page);
  await blockExternalIconRequests(page);

  await page.setViewportSize({ width: 390, height: 820 });
  await page.goto('/');

  await page.locator('#navToggle').click();
  await expect(page.locator('#navToggle')).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#navLinks')).toHaveClass(/open/);

  await page.locator('#navLinks a[href="#projects"]').click();
  await expect(page.locator('#navToggle')).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#navLinks')).not.toHaveClass(/open/);

  await page.waitForTimeout(500);
  expect(failedLocalAssets).toEqual([]);
});

test('mobile visual effects are reduced for reliable rendering', async ({ page }) => {
  await blockExternalIconRequests(page);
  await page.setViewportSize({ width: 390, height: 820 });
  await page.goto('/');

  await expect(page.locator('#bgCanvas')).toHaveCSS('display', 'none');

  const navBackdrop = await page.locator('#navBar').evaluate((el) => {
    const view = el.ownerDocument.defaultView;
    const style = view.getComputedStyle(el);
    return style.backdropFilter || style.webkitBackdropFilter || 'none';
  });
  expect(navBackdrop).toBe('none');

  await expect(page.locator('#projectsGrid .p-card')).toHaveCount(6);
});

test('no-JavaScript fallback keeps featured project links discoverable', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  await blockExternalIconRequests(context);
  const page = await context.newPage();

  await page.goto('/');

  await expect(page.locator('.noscript-projects')).toBeVisible();
  await expect(page.locator('.noscript-projects a')).toHaveCount(6);
  await expect(page.locator('.noscript-projects a').first()).toHaveAttribute(
    'href',
    'https://github.com/tarekmasryo/fraud-risk-ops-platform',
  );

  await context.close();
});
