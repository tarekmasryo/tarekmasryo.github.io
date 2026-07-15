import { CONFIG } from '../config.js';
import { Motion } from '../core/browser.js';
import { Dom } from '../core/dom.js';
import { IconRenderer } from './icon-renderer.js';

export class ImageResolver {
  static mountFallback(container, project) {
    if (!container) return;
    container.classList.add('is-icon');
    Dom.clear(container);
    const wrap = document.createElement('div');
    wrap.className = 'p-fallback';
    IconRenderer.mount(wrap, (project && project.icon) || '•', { size: 32 });
    container.appendChild(wrap);
  }
  static normalizeBaseName(s) {
    if (!s) return '';
    return String(s).trim().replace(/\s+/g, ' ').replace(/[—–]/g, '-');
  }
  static slugify(s) {
    if (!s) return '';
    return this.normalizeBaseName(s)
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
  static candidates(base) {
    const raw = String(base || '').trim();
    if (!raw) return [];
    const slug = this.slugify(raw);
    const out = [];
    const encodedRaw = encodeURIComponent(raw);

    for (const ext of CONFIG.imageExtensions) {
      out.push(`${CONFIG.assetsDir}/${slug}.${ext}`);
    }

    if (slug !== raw && slug !== raw.toLowerCase()) {
      for (const ext of CONFIG.imageExtensions) {
        out.push(`${CONFIG.assetsDir}/${encodedRaw}.${ext}`);
      }
    }

    return out;
  }
  static mount(container, project, { mode } = { mode: 'card' }) {
    if (!container) return;
    container.classList.remove('is-icon');
    Dom.clear(container);

    const candidates = [
      ...new Set([...this.candidates(project.imageBase), ...this.candidates(project.repo)]),
    ];

    if (!candidates.length) {
      this.mountFallback(container, project);
      return;
    }

    const img = document.createElement('img');
    img.className = 'p-img';
    img.width = 1280;
    img.height = 720;
    img.loading = mode === 'modal' ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.alt = project.title || 'Project';
    img.referrerPolicy = 'no-referrer';

    let i = 0;
    const tryNext = () => {
      if (i >= candidates.length) {
        this.mountFallback(container, project);
        return;
      }
      const candidate = candidates[i++];
      img.src = `${candidate}?v=${CONFIG.assetsVersion}`;
    };

    img.addEventListener('error', tryNext);
    img.addEventListener(
      'load',
      () => {
        img.removeEventListener('error', tryNext);
      },
      { once: true },
    );

    container.appendChild(img);
    tryNext();
  }
}

export class ParticlesBackground {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = null;
    this.w = 0;
    this.h = 0;
    this.dpr = 1;
    this.raf = null;
    this.running = true;
    this.CFG = Object.freeze({
      count: 55,
      maxSpeed: 0.22,
      linkDist: 140,
      radiusMin: 0.8,
      radiusMax: 1.9,
    });
    this.particles = [];
    this.onResize = () => {
      this.resize();
      this.seed();
    };
    this.onVisibility = () => {
      this.running = !document.hidden;
      if (this.running && !this.raf) this.step();
      if (!this.running && this.raf) {
        cancelAnimationFrame(this.raf);
        this.raf = null;
      }
    };
  }
  reducedMotion() {
    return Motion.prefersReduced();
  }
  shouldDisableCanvas() {
    if (this.reducedMotion()) return true;
    if (!window.matchMedia) return false;
    return window.matchMedia('(max-width: 720px), (pointer: coarse)').matches;
  }
  init() {
    if (!this.canvas) return;
    if (this.shouldDisableCanvas()) return;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    if (!this.ctx) return;
    this.resize();
    this.seed();
    this.step();
    window.addEventListener('resize', this.onResize, { passive: true });
    document.addEventListener('visibilitychange', this.onVisibility);
  }
  rand(a, b) {
    return a + Math.random() * (b - a);
  }
  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = Math.floor(this.w * this.dpr);
    this.canvas.height = Math.floor(this.h * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }
  seed() {
    this.particles.length = 0;
    for (let i = 0; i < this.CFG.count; i += 1) {
      this.particles.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        vx: this.rand(-this.CFG.maxSpeed, this.CFG.maxSpeed),
        vy: this.rand(-this.CFG.maxSpeed, this.CFG.maxSpeed),
        r: this.rand(this.CFG.radiusMin, this.CFG.radiusMax),
      });
    }
  }
  buildGrid(cellSize) {
    const grid = new Map();
    const key = (cx, cy) => `${cx},${cy}`;
    for (let i = 0; i < this.particles.length; i += 1) {
      const p = this.particles[i];
      const cx = Math.floor(p.x / cellSize);
      const cy = Math.floor(p.y / cellSize);
      const k = key(cx, cy);
      if (!grid.has(k)) grid.set(k, []);
      grid.get(k).push(i);
    }
    return { grid, key };
  }
  integrate() {
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) {
        p.x = 0;
        p.vx *= -1;
      }
      if (p.x > this.w) {
        p.x = this.w;
        p.vx *= -1;
      }
      if (p.y < 0) {
        p.y = 0;
        p.vy *= -1;
      }
      if (p.y > this.h) {
        p.y = this.h;
        p.vy *= -1;
      }
    }
  }
  drawLinks() {
    const cell = this.CFG.linkDist;
    const { grid, key } = this.buildGrid(cell);
    const bucketCount = 10;
    const buckets = Array.from({ length: bucketCount }, () => []);

    for (let i = 0; i < this.particles.length; i += 1) {
      const a = this.particles[i];
      const acx = Math.floor(a.x / cell);
      const acy = Math.floor(a.y / cell);
      for (let dx = -1; dx <= 1; dx += 1) {
        for (let dy = -1; dy <= 1; dy += 1) {
          const list = grid.get(key(acx + dx, acy + dy));
          if (!list) continue;
          for (const j of list) {
            if (j <= i) continue;
            const b = this.particles[j];
            const vx = a.x - b.x;
            const vy = a.y - b.y;
            const dist = Math.hypot(vx, vy);
            if (dist > this.CFG.linkDist) continue;
            const alpha = 1 - dist / this.CFG.linkDist;
            const bucket = Math.min(bucketCount - 1, Math.floor(alpha * bucketCount));
            buckets[bucket].push(a.x, a.y, b.x, b.y);
          }
        }
      }
    }

    this.ctx.lineWidth = 1;
    for (let i = 0; i < buckets.length; i += 1) {
      const segments = buckets[i];
      if (!segments.length) continue;
      const midAlpha = (i + 0.5) / bucketCount;
      this.ctx.strokeStyle = `rgba(79,140,255,${(0.18 * midAlpha).toFixed(3)})`;
      this.ctx.beginPath();
      for (let j = 0; j < segments.length; j += 4) {
        this.ctx.moveTo(segments[j], segments[j + 1]);
        this.ctx.lineTo(segments[j + 2], segments[j + 3]);
      }
      this.ctx.stroke();
    }
  }
  drawDots() {
    this.ctx.fillStyle = 'rgba(79,140,255,.55)';
    this.ctx.beginPath();
    for (const p of this.particles) {
      this.ctx.moveTo(p.x + p.r, p.y);
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    }
    this.ctx.fill();
  }
  step() {
    if (!this.running) return;
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.integrate();
    this.drawLinks();
    this.drawDots();
    this.raf = requestAnimationFrame(() => this.step());
  }
}
