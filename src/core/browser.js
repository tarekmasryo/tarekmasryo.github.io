import { CONFIG } from '../config.js';

export class Storage {
  static get(key) {
    try {
      return globalThis.localStorage?.getItem(key) ?? null;
    } catch {
      return null;
    }
  }

  static set(key, value) {
    try {
      globalThis.localStorage?.setItem(key, value);
    } catch {
      // Storage can be unavailable in private browsing or hardened contexts.
    }
  }
}

export class Debounce {
  static wrap(callback, delayMs) {
    let timerId;
    return function debounced(...args) {
      globalThis.clearTimeout(timerId);
      timerId = globalThis.setTimeout(() => callback.apply(this, args), delayMs);
    };
  }
}

export class Motion {
  static prefersReduced() {
    return Boolean(globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
  }

  static scrollBehavior() {
    return this.prefersReduced() ? 'auto' : 'smooth';
  }
}

export class HistoryState {
  static supports(method) {
    return typeof globalThis.history?.[method] === 'function';
  }

  static replace(url) {
    if (!this.supports('replaceState')) return;
    globalThis.history.replaceState(null, '', url);
  }

  static push(url) {
    if (!this.supports('pushState')) return;
    globalThis.history.pushState(null, '', url);
  }
}

export class Github {
  static normalizeRepoSlug(repo) {
    const slug = String(repo || '').trim();
    return /^[A-Za-z0-9._-]+$/.test(slug) ? slug : '';
  }

  static url(repo) {
    const slug = this.normalizeRepoSlug(repo);
    return slug ? `${CONFIG.githubProfile}/${slug}` : '';
  }
}

export class UrlUtils {
  static baseUrl() {
    return globalThis.location?.origin || 'https://tarekmasryo.github.io';
  }

  static parse(value) {
    const input = String(value || '').trim();
    if (!input) return null;
    try {
      return new URL(input, this.baseUrl());
    } catch {
      return null;
    }
  }

  static isSafeHttpUrl(value) {
    const parsed = this.parse(value);
    return Boolean(parsed && (parsed.protocol === 'http:' || parsed.protocol === 'https:'));
  }

  static normalizeExternalUrl(value) {
    const parsed = this.parse(value);
    if (!parsed || !this.isSafeHttpUrl(parsed.href)) return '';
    return parsed.href;
  }
}

export const UrlState = Object.freeze({
  base: '#projects',

  setProject(repo) {
    const normalizedRepo = String(repo || '').trim();
    if (!normalizedRepo) return;
    HistoryState.replace(`${this.base}?project=${encodeURIComponent(normalizedRepo)}`);
  },

  clearProject() {
    HistoryState.replace(this.base);
  },

  getProject() {
    const hash = String(globalThis.location?.hash || '');
    if (!hash.startsWith(this.base)) return null;
    const query = hash.split('?').slice(1).join('?');
    if (!query) return null;
    return new URLSearchParams(query).get('project');
  },
});
