import { PROJECTS_RAW } from './projects.js';
import { PortfolioApp } from './src/portfolio-app.js';

function startPortfolio() {
  try {
    new PortfolioApp(PROJECTS_RAW).init();
  } catch (error) {
    document.documentElement.classList.remove('preload');
    document.getElementById('projectFallback')?.removeAttribute('hidden');
    console.error('Portfolio initialization failed.', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startPortfolio, { once: true });
} else {
  startPortfolio();
}
