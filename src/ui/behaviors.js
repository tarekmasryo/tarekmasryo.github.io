import { Dom } from '../core/dom.js';
import { Motion, Storage } from '../core/browser.js';
import { IconRenderer } from './icon-renderer.js';

export class ThemeManager {
  constructor({ storageKey }) {
    this.storageKey = storageKey;
    this.root = document.documentElement;
    this.toggleBtn = Dom.id('themeToggle');
    this.themeMeta = document.querySelector('meta[name="theme-color"]');
    this.mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
  }
  isStoredTheme(v) {
    return v === 'light' || v === 'dark';
  }
  getStoredTheme() {
    const v = Storage.get(this.storageKey);
    return this.isStoredTheme(v) ? v : null;
  }
  getInitialTheme() {
    const stored = this.getStoredTheme();
    if (stored) return stored;
    const prefersLight = this.mq ? this.mq.matches : false;
    return prefersLight ? 'light' : 'dark';
  }
  themeColor(theme) {
    return theme === 'light' ? '#f7f9ff' : '#070a12';
  }
  syncThemeColor(theme) {
    if (!this.themeMeta) return;
    this.themeMeta.setAttribute('content', this.themeColor(theme));
  }
  apply(theme) {
    if (theme === 'light') this.root.setAttribute('data-theme', 'light');
    else this.root.removeAttribute('data-theme');
    this.syncThemeColor(theme);
  }
  get current() {
    return this.root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }
  syncToggleLabel() {
    if (!this.toggleBtn) return;
    const isLight = this.current === 'light';
    Dom.clear(this.toggleBtn);
    this.toggleBtn.appendChild(
      IconRenderer.node(isLight ? 'lucide:sun' : 'lucide:moon', { size: 18 }),
    );
    this.toggleBtn.setAttribute(
      'aria-label',
      isLight ? 'Switch to dark theme' : 'Switch to light theme',
    );
    this.toggleBtn.setAttribute('title', isLight ? 'Light theme' : 'Dark theme');
  }
  bind() {
    if (!this.toggleBtn) return;
    this.syncToggleLabel();
    this.toggleBtn.addEventListener('click', () => {
      const next = this.current === 'light' ? 'dark' : 'light';
      this.apply(next);
      Storage.set(this.storageKey, next);
      this.syncToggleLabel();
    });
  }
  bindSystem() {
    if (!this.mq) return;
    const handler = (e) => {
      if (this.getStoredTheme()) return;
      const next = e && e.matches ? 'light' : 'dark';
      this.apply(next);
      this.syncToggleLabel();
    };
    if (this.mq.addEventListener) this.mq.addEventListener('change', handler);
    else if (this.mq.addListener) this.mq.addListener(handler);
  }
  init() {
    this.apply(this.getInitialTheme());
    this.bind();
    this.bindSystem();
  }
}

export class Reveal {
  constructor({ threshold }) {
    this.threshold = threshold;
    this.observer = this.create();
  }
  create() {
    if (!('IntersectionObserver' in window)) return null;
    return new IntersectionObserver(
      (entries, obs) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      },
      { threshold: this.threshold },
    );
  }
  observeAll(selector) {
    if (!this.observer) return;
    for (const el of Dom.qsa(selector)) {
      if (el.classList.contains('in')) continue;
      this.observer.observe(el);
    }
  }
  prime(selector) {
    const h = window.innerHeight || 800;
    for (const el of Dom.qsa(selector)) {
      const r = el.getBoundingClientRect();
      if (r.top < h * 0.92) el.classList.add('in');
    }
  }
}

export class NavHighlighter {
  constructor({ sections, links }) {
    this.sections = sections;
    this.links = links;
  }
  getActivationOffset() {
    const firstSection = this.sections[0];
    const scrollMargin = firstSection
      ? Number.parseFloat(globalThis.getComputedStyle(firstSection).scrollMarginTop)
      : Number.NaN;
    if (Number.isFinite(scrollMargin) && scrollMargin > 0) return scrollMargin + 1;

    const nav = document.getElementById('navBar');
    return nav ? nav.offsetHeight + 32 : 120;
  }
  getCurrentSectionId() {
    if (this.sections.length === 0) return 'home';

    const root = document.documentElement;
    const isAtPageEnd = globalThis.innerHeight + globalThis.scrollY >= root.scrollHeight - 2;
    if (isAtPageEnd) return this.sections.at(-1)?.id || 'home';

    const activationOffset = this.getActivationOffset();
    let current = this.sections[0]?.id || 'home';
    for (const section of this.sections) {
      if (section.getBoundingClientRect().top > activationOffset) break;
      current = section.id || current;
    }
    return current;
  }
  update() {
    const current = this.getCurrentSectionId();
    for (const link of this.links) {
      const href = link.getAttribute('href') || '';
      const active = href.slice(1) === current;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }
  }
}

export class Typewriter {
  constructor({ el, lines }) {
    this.el = el;
    this.lines = lines;
    this.lineIdx = 0;
    this.charIdx = 0;
    this.deleting = false;
    this.timer = null;
    this.running = false;
    this.TYPE_MS = 45;
    this.DEL_MS = 25;
    this.HOLD_MS = 1300;
    this.onVisibility = () => {
      if (document.hidden) {
        this.pause();
        return;
      }
      this.resume();
    };
  }
  reducedMotion() {
    return Motion.prefersReduced();
  }
  start() {
    if (!this.el || !Array.isArray(this.lines) || this.lines.length === 0) return;
    if (this.reducedMotion()) {
      this.el.textContent = this.lines[0] || '';
      return;
    }
    this.running = true;
    document.addEventListener('visibilitychange', this.onVisibility);
    this.schedule(0);
  }
  pause() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }
  resume() {
    if (!this.running || this.timer || document.hidden) return;
    this.schedule(0);
  }
  schedule(ms) {
    if (!this.running || document.hidden) return;
    if (this.timer) window.clearTimeout(this.timer);
    this.timer = window.setTimeout(
      () => {
        this.timer = null;
        this.tick();
      },
      Number(ms) || 0,
    );
  }
  tick() {
    if (!this.running || document.hidden) return;
    const full = this.lines[this.lineIdx] || '';
    if (!this.deleting) {
      this.charIdx += 1;
      this.el.textContent = full.slice(0, this.charIdx);
      if (this.charIdx >= full.length) {
        this.deleting = true;
        this.schedule(this.HOLD_MS);
        return;
      }
      this.schedule(this.TYPE_MS);
      return;
    }
    this.charIdx -= 1;
    this.el.textContent = full.slice(0, Math.max(0, this.charIdx));
    if (this.charIdx <= 0) {
      this.deleting = false;
      this.lineIdx = (this.lineIdx + 1) % this.lines.length;
      this.schedule(350);
      return;
    }
    this.schedule(this.DEL_MS);
  }
}

export class FocusTrap {
  constructor(el) {
    this.el = el;
    this._handler = null;
  }
  getFocusable() {
    return Array.from(
      this.el.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => !el.closest('[hidden]'));
  }
  activate() {
    this.deactivate();
    this._handler = (e) => {
      if (e.key !== 'Tab') return;
      const focusable = this.getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    this.el.addEventListener('keydown', this._handler);
  }
  deactivate() {
    if (this._handler) {
      this.el.removeEventListener('keydown', this._handler);
      this._handler = null;
    }
  }
}
