import { HistoryState, Motion } from '../core/browser.js';
import { Dom } from '../core/dom.js';
import { NavHighlighter } from '../ui/behaviors.js';

export class PageNavigationController {
  constructor() {
    this.scrollProgress = Dom.id('scrollProgress');
    this.topButton = Dom.id('topBtn');
    this.navBar = Dom.id('navBar');
    this.navToggle = Dom.id('navToggle');
    this.navLinksContainer = Dom.id('navLinks');
    this.brandButton = Dom.id('brandHome');
    this.navLinks = Dom.qsa('nav a[href^="#"]');
    this.sections = Dom.qsa('main section');
    this.navHighlighter = new NavHighlighter({ sections: this.sections, links: this.navLinks });
    this.bound = false;
    this.scrollFrame = null;
  }

  init() {
    if (this.bound) return;
    this.bound = true;
    this.bindScroll();
    this.bindTopButton();
    this.bindBrandHome();
    this.bindSmoothAnchors();
    this.bindMobileMenu();
  }

  bindScroll() {
    const scheduleUpdate = () => {
      if (this.scrollFrame !== null) return;
      this.scrollFrame = globalThis.requestAnimationFrame(() => {
        this.scrollFrame = null;
        this.updateScrollState();
      });
    };
    globalThis.addEventListener('scroll', scheduleUpdate, { passive: true });
    this.updateScrollState();
  }

  updateScrollState() {
    const root = document.documentElement;
    const scrollTop = root.scrollTop || document.body.scrollTop || 0;
    const maxScroll = root.scrollHeight - root.clientHeight;

    if (this.scrollProgress) {
      this.scrollProgress.value = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    }
    this.topButton?.classList.toggle('show', scrollTop > 800);
    this.navBar?.classList.toggle('scrolled', scrollTop > 10);
    this.navHighlighter.update();
  }

  bindTopButton() {
    this.topButton?.addEventListener('click', () => {
      globalThis.scrollTo({ top: 0, behavior: Motion.scrollBehavior() });
    });
  }

  bindBrandHome() {
    this.brandButton?.addEventListener('click', () => {
      if (this.scrollToHash('#home', { replace: true })) return;
      globalThis.scrollTo({ top: 0, behavior: Motion.scrollBehavior() });
    });
  }

  bindSmoothAnchors() {
    for (const anchor of Dom.qsa('a[href^="#"]:not(.skip-link)')) {
      anchor.addEventListener('click', (event) => {
        const href = String(anchor.getAttribute('href') || '').trim();
        if (!href || href === '#') return;
        const isCurrentHash = String(globalThis.location?.hash || '') === href;
        if (!this.scrollToHash(href, { replace: isCurrentHash })) return;
        event.preventDefault();
      });
    }
  }

  scrollToHash(hash, { replace = false } = {}) {
    const normalizedHash = String(hash || '').trim();
    if (!normalizedHash || normalizedHash === '#') return false;

    let target;
    try {
      target = document.querySelector(normalizedHash);
    } catch {
      return false;
    }
    if (!target) return false;

    target.scrollIntoView({ behavior: Motion.scrollBehavior(), block: 'start' });
    if (replace) HistoryState.replace(normalizedHash);
    else HistoryState.push(normalizedHash);
    return true;
  }

  bindMobileMenu() {
    if (!this.navToggle || !this.navLinksContainer) return;

    const setOpen = (isOpen) => {
      this.navLinksContainer.classList.toggle('open', isOpen);
      this.navToggle.setAttribute('aria-expanded', String(isOpen));
    };

    this.navToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      setOpen(!this.navLinksContainer.classList.contains('open'));
    });

    for (const anchor of this.navLinksContainer.querySelectorAll('a')) {
      anchor.addEventListener('click', () => setOpen(false));
    }

    document.addEventListener('click', (event) => {
      if (!this.navLinksContainer.classList.contains('open')) return;
      if (this.navLinksContainer.contains(event.target) || this.navToggle.contains(event.target))
        return;
      setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });
  }
}
