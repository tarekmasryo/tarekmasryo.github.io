import { Dom } from '../core/dom.js';

export class IconRenderer {
  static NS = 'http://www.w3.org/2000/svg';

  static isIconifyId(value) {
    if (!value) return false;
    const s = String(value).trim();
    return /^[a-z0-9]+:[a-z0-9-]+$/i.test(s);
  }
  static svgBase(size) {
    const svg = document.createElementNS(this.NS, 'svg');
    const dim = Number.isFinite(size) ? String(size) : '1em';
    svg.setAttribute('width', dim);
    svg.setAttribute('height', dim);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.classList.add('inline-icon');
    return svg;
  }
  static make(tag, attrs = {}) {
    const el = document.createElementNS(this.NS, tag);
    for (const [key, value] of Object.entries(attrs)) {
      el.setAttribute(key, String(value));
    }
    return el;
  }
  static strokeAttrs(el) {
    el.setAttribute('fill', 'none');
    el.setAttribute('stroke', 'currentColor');
    el.setAttribute('stroke-width', '2');
    el.setAttribute('stroke-linecap', 'round');
    el.setAttribute('stroke-linejoin', 'round');
  }
  static appendStroke(svg, tag, attrs) {
    const el = this.make(tag, attrs);
    this.strokeAttrs(el);
    svg.appendChild(el);
    return el;
  }
  static appendFill(svg, tag, attrs) {
    const el = this.make(tag, attrs);
    el.setAttribute('fill', 'currentColor');
    svg.appendChild(el);
    return el;
  }
  static appendText(svg, text, attrs = {}) {
    const el = this.make('text', {
      'font-family': 'Arial, Helvetica, sans-serif',
      'font-size': attrs['font-size'] || '9',
      'font-weight': attrs['font-weight'] || '700',
      'text-anchor': attrs['text-anchor'] || 'middle',
      x: attrs.x || '12',
      y: attrs.y || '14',
      fill: 'currentColor',
    });
    el.textContent = text;
    svg.appendChild(el);
    return el;
  }
  static drawSparkle(svg, points) {
    this.appendStroke(svg, 'path', { d: points });
    return svg;
  }
  static inlineSvg(id, size) {
    const key = String(id || '').trim();
    if (!key) return null;
    const svg = this.svgBase(size);

    switch (key) {
      case 'lucide:menu':
        this.appendStroke(svg, 'path', { d: 'M4 6h16M4 12h16M4 18h16' });
        return svg;
      case 'lucide:chevron-up':
        this.appendStroke(svg, 'path', { d: 'm18 15-6-6-6 6' });
        return svg;
      case 'lucide:moon':
        this.appendStroke(svg, 'path', { d: 'M12 3a7.5 7.5 0 0 0 9 9A9 9 0 1 1 12 3Z' });
        return svg;
      case 'lucide:sun': {
        this.appendStroke(svg, 'circle', { cx: '12', cy: '12', r: '4' });
        const rays = [
          [12, 2, 12, 5],
          [12, 19, 12, 22],
          [2, 12, 5, 12],
          [19, 12, 22, 12],
          [4.5, 4.5, 6.7, 6.7],
          [17.3, 17.3, 19.5, 19.5],
          [17.3, 6.7, 19.5, 4.5],
          [4.5, 19.5, 6.7, 17.3],
        ];
        for (const [x1, y1, x2, y2] of rays) {
          this.appendStroke(svg, 'line', { x1, y1, x2, y2 });
        }
        return svg;
      }
      case 'lucide:activity':
        this.appendStroke(svg, 'polyline', { points: '2 12 6 12 9 4 15 20 18 12 22 12' });
        return svg;
      case 'lucide:bar-chart-3':
        this.appendStroke(svg, 'path', { d: 'M3 3v18h18M8 16v-5M12 16V8M16 16V4' });
        return svg;
      case 'lucide:box':
      case 'lucide:package':
        this.appendStroke(svg, 'path', {
          d: 'M21 8.5 12 3 3 8.5v7L12 21l9-5.5zM3 8.5 12 14l9-5.5M12 14v7',
        });
        return svg;
      case 'lucide:brain':
        this.appendStroke(svg, 'path', {
          d: 'M9.5 3a3.5 3.5 0 0 0-3.5 3.5V7A3 3 0 0 0 3 10v1a3 3 0 0 0 2 2.83V15.5A3.5 3.5 0 0 0 8.5 19H10m4-16a3.5 3.5 0 0 1 3.5 3.5V7A3 3 0 0 1 21 10v1a3 3 0 0 1-2 2.83V15.5A3.5 3.5 0 0 1 15.5 19H14M10 3a3 3 0 0 1 4 0m-4 4a3 3 0 0 0 4 0m-4 4a3 3 0 0 0 4 0m-2 0v8',
        });
        return svg;
      case 'lucide:check-circle':
        this.appendStroke(svg, 'circle', { cx: '12', cy: '12', r: '9' });
        this.appendStroke(svg, 'path', { d: 'm9 12 2 2 4-4' });
        return svg;
      case 'lucide:clipboard-check':
        this.appendStroke(svg, 'rect', { x: '6', y: '5', width: '12', height: '16', rx: '2' });
        this.appendStroke(svg, 'path', {
          d: 'M9 5.5h6M9.5 3.5h5a1 1 0 0 1 1 1v1H8.5v-1a1 1 0 0 1 1-1ZM9 13l2 2 4-4',
        });
        return svg;
      case 'lucide:code-2':
        this.appendStroke(svg, 'path', { d: 'm9 18-6-6 6-6M15 6l6 6-6 6' });
        return svg;
      case 'lucide:cpu':
        this.appendStroke(svg, 'rect', { x: '8', y: '8', width: '8', height: '8', rx: '1.5' });
        this.appendStroke(svg, 'path', {
          d: 'M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M5 19l2-2',
        });
        return svg;
      case 'lucide:database':
        this.appendStroke(svg, 'ellipse', { cx: '12', cy: '6', rx: '7', ry: '3' });
        this.appendStroke(svg, 'path', {
          d: 'M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6',
        });
        return svg;
      case 'lucide:git-branch':
        this.appendStroke(svg, 'circle', { cx: '6', cy: '6', r: '2.5' });
        this.appendStroke(svg, 'circle', { cx: '18', cy: '18', r: '2.5' });
        this.appendStroke(svg, 'circle', { cx: '18', cy: '6', r: '2.5' });
        this.appendStroke(svg, 'path', { d: 'M8.5 6H15.5M6 8.5v7a4 4 0 0 0 4 4h5.5' });
        return svg;
      case 'lucide:layers':
        this.appendStroke(svg, 'path', {
          d: 'm12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5',
        });
        return svg;
      case 'lucide:layout-dashboard':
        this.appendStroke(svg, 'rect', { x: '3', y: '3', width: '18', height: '18', rx: '2' });
        this.appendStroke(svg, 'path', { d: 'M9 3v18M9 9h12' });
        return svg;
      case 'lucide:search':
        this.appendStroke(svg, 'circle', { cx: '11', cy: '11', r: '6.5' });
        this.appendStroke(svg, 'line', { x1: '16', y1: '16', x2: '21', y2: '21' });
        return svg;
      case 'lucide:server':
        this.appendStroke(svg, 'rect', { x: '3', y: '4', width: '18', height: '6', rx: '2' });
        this.appendStroke(svg, 'rect', { x: '3', y: '14', width: '18', height: '6', rx: '2' });
        this.appendFill(svg, 'circle', { cx: '7', cy: '7', r: '1' });
        this.appendFill(svg, 'circle', { cx: '7', cy: '17', r: '1' });
        return svg;
      case 'lucide:building-2':
        this.appendStroke(svg, 'path', {
          d: 'M4 21V7a1 1 0 0 1 1-1h6v15M14 21V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v18M8 10h2M8 14h2M16 7h2M16 11h2M16 15h2',
        });
        return svg;
      case 'lucide:car':
        this.appendStroke(svg, 'path', {
          d: 'M5 16 6.5 9.5A2 2 0 0 1 8.45 8H15.55a2 2 0 0 1 1.95 1.5L19 16M3 16h18M7 16v2M17 16v2',
        });
        this.appendStroke(svg, 'circle', { cx: '7.5', cy: '16.5', r: '1.5' });
        this.appendStroke(svg, 'circle', { cx: '16.5', cy: '16.5', r: '1.5' });
        return svg;
      case 'lucide:credit-card':
        this.appendStroke(svg, 'rect', { x: '3', y: '5', width: '18', height: '14', rx: '2' });
        this.appendStroke(svg, 'path', { d: 'M3 10h18M7 15h4' });
        return svg;
      case 'lucide:dollar-sign':
        this.appendStroke(svg, 'path', {
          d: 'M12 2v20M16 6c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.8 3 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3',
        });
        return svg;
      case 'lucide:droplet':
        this.appendStroke(svg, 'path', {
          d: 'M12 2.7c-2.8 4.1-6 7-6 11a6 6 0 0 0 12 0c0-4-3.2-6.9-6-11Z',
        });
        return svg;
      case 'lucide:file-text':
        this.appendStroke(svg, 'path', {
          d: 'M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z',
        });
        this.appendStroke(svg, 'path', { d: 'M14 2v5h5M9 12h6M9 16h6' });
        return svg;
      case 'lucide:flame':
        this.appendStroke(svg, 'path', {
          d: 'M12 2c1 3-1 4.5-1 6.5S12.5 12 12.5 14a3.5 3.5 0 1 1-7 0c0-4.5 4-6.5 6.5-12Zm3 7c3 2 4.5 4.2 4.5 7a5.5 5.5 0 0 1-11 0',
        });
        return svg;
      case 'lucide:globe':
        this.appendStroke(svg, 'circle', { cx: '12', cy: '12', r: '9' });
        this.appendStroke(svg, 'path', {
          d: 'M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18',
        });
        return svg;
      case 'lucide:image':
        this.appendStroke(svg, 'rect', { x: '3', y: '5', width: '18', height: '14', rx: '2' });
        this.appendStroke(svg, 'circle', { cx: '9', cy: '10', r: '1.5' });
        this.appendStroke(svg, 'path', { d: 'm21 16-4.5-4.5L7 21M14 14l2-2 5 5' });
        return svg;
      case 'lucide:line-chart':
        this.appendStroke(svg, 'path', { d: 'M3 3v18h18M7 14l4-4 3 3 5-6' });
        return svg;
      case 'lucide:mail':
        this.appendStroke(svg, 'rect', { x: '3', y: '5', width: '18', height: '14', rx: '2' });
        this.appendStroke(svg, 'path', { d: 'm4 7 8 6 8-6' });
        return svg;
      case 'lucide:palette':
        this.appendStroke(svg, 'path', {
          d: 'M12 3a9 9 0 0 0 0 18h1.3a2.2 2.2 0 0 0 0-4.4H12a1.6 1.6 0 0 1 0-3.2h2A4.5 4.5 0 0 0 14 4h-2Z',
        });
        for (const [cx, cy] of [
          [7.5, 9],
          [10.5, 6.7],
          [15.8, 7.8],
          [16, 12],
        ]) {
          this.appendFill(svg, 'circle', { cx, cy, r: '1' });
        }
        return svg;
      case 'lucide:plug':
        this.appendStroke(svg, 'path', { d: 'M8 7V3M16 7V3M7 7h10v4a5 5 0 0 1-5 5H9v3M12 16v5' });
        return svg;
      case 'lucide:puzzle':
        this.appendStroke(svg, 'path', {
          d: 'M8 4h3a2 2 0 1 1 4 0h3a2 2 0 0 1 2 2v3h-2a2 2 0 1 0 0 4h2v5a2 2 0 0 1-2 2h-5v-2a2 2 0 1 0-4 0v2H6a2 2 0 0 1-2-2v-5h2a2 2 0 1 0 0-4H4V6a2 2 0 0 1 2-2Z',
        });
        return svg;
      case 'lucide:smile':
        this.appendStroke(svg, 'circle', { cx: '12', cy: '12', r: '9' });
        this.appendFill(svg, 'circle', { cx: '9', cy: '10', r: '1' });
        this.appendFill(svg, 'circle', { cx: '15', cy: '10', r: '1' });
        this.appendStroke(svg, 'path', { d: 'M8 14c1 1.6 2.3 2.4 4 2.4S15 15.6 16 14' });
        return svg;
      case 'lucide:stethoscope':
        this.appendStroke(svg, 'path', {
          d: 'M6 3v6a4 4 0 0 0 8 0V3M8 3v4M12 3v4M14 13v1a4 4 0 0 0 8 0v-1M18 13v5M18 18a3 3 0 1 0 0 6',
        });
        return svg;
      case 'lucide:target':
        this.appendStroke(svg, 'circle', { cx: '12', cy: '12', r: '8' });
        this.appendStroke(svg, 'circle', { cx: '12', cy: '12', r: '4' });
        this.appendStroke(svg, 'path', { d: 'M12 2v3M12 19v3M2 12h3M19 12h3' });
        return svg;
      case 'lucide:tool':
        this.appendStroke(svg, 'path', {
          d: 'M14.7 6.3a4 4 0 0 0 3.8 5.3l-7.2 7.2a2 2 0 1 1-2.8-2.8l7.2-7.2a4 4 0 0 1-5.3-3.8l2.5 2.5 2.8-2.8Z',
        });
        return svg;
      case 'lucide:trophy':
        this.appendStroke(svg, 'path', {
          d: 'M8 3h8v3a4 4 0 0 1-8 0V3Zm0 0H5a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h1m8-7h3a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h-1M12 10v4M8 21h8M10 17h4v4h-4z',
        });
        return svg;
      case 'lucide:video':
        this.appendStroke(svg, 'rect', { x: '3', y: '6', width: '13', height: '12', rx: '2' });
        this.appendStroke(svg, 'path', { d: 'm16 10 5-3v10l-5-3z' });
        return svg;
      case 'lucide:shield-check':
        this.appendStroke(svg, 'path', {
          d: 'M12 3 5 6v5c0 5 3.5 8 7 10 3.5-2 7-5 7-10V6l-7-3Zm-3 9 2 2 4-4',
        });
        return svg;
      case 'lucide:sparkles':
        this.drawSparkle(svg, 'M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2Z');
        this.drawSparkle(svg, 'M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14Z');
        this.drawSparkle(svg, 'M6 13l.9 2.1L9 16l-2.1.9L6 19l-.9-2.1L3 16l2.1-.9L6 13Z');
        return svg;
      case 'lucide:table':
        this.appendStroke(svg, 'rect', { x: '3', y: '5', width: '18', height: '14', rx: '2' });
        this.appendStroke(svg, 'path', { d: 'M3 10h18M9 5v14M15 5v14' });
        return svg;
      case 'lucide:terminal':
        this.appendStroke(svg, 'path', { d: 'm4 6 4 4-4 4M11 18h9' });
        return svg;

      case 'lucide:banknote':
        this.appendStroke(svg, 'rect', { x: '3', y: '6', width: '18', height: '12', rx: '2' });
        this.appendStroke(svg, 'circle', { cx: '12', cy: '12', r: '2.5' });
        this.appendStroke(svg, 'path', { d: 'M6 9h.01M18 15h.01' });
        return svg;
      case 'lucide:chart-line':
        this.appendStroke(svg, 'path', { d: 'M3 3v18h18' });
        this.appendStroke(svg, 'path', { d: 'm6 16 4-5 3 3 5-7' });
        return svg;
      case 'lucide:heart':
        this.appendStroke(svg, 'path', {
          d: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z',
        });
        return svg;
      case 'lucide:heart-pulse':
        this.appendStroke(svg, 'path', {
          d: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l3-2.9',
        });
        this.appendStroke(svg, 'path', { d: 'M3 13h4l2-4 4 8 2-4h6' });
        return svg;
      case 'lucide:hospital':
        this.appendStroke(svg, 'path', { d: 'M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16' });
        this.appendStroke(svg, 'path', { d: 'M9 21v-5h6v5M9 8h6M12 5v6M6 21h12' });
        return svg;
      case 'lucide:message-square-text':
        this.appendStroke(svg, 'path', {
          d: 'M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z',
        });
        this.appendStroke(svg, 'path', { d: 'M8 8h8M8 12h6' });
        return svg;
      case 'lucide:message-square-warning':
        this.appendStroke(svg, 'path', {
          d: 'M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z',
        });
        this.appendStroke(svg, 'path', { d: 'M12 7v5M12 15h.01' });
        return svg;
      case 'lucide:microscope':
        this.appendStroke(svg, 'path', {
          d: 'M6 18h8M3 22h18M14 22a7 7 0 0 0 7-7M9 14l6-6M8 12 4 8l4-4 4 4-4 4Z',
        });
        this.appendStroke(svg, 'path', { d: 'M14 6 16 4l4 4-2 2' });
        return svg;
      case 'lucide:network':
        this.appendStroke(svg, 'rect', { x: '9', y: '2', width: '6', height: '6', rx: '1' });
        this.appendStroke(svg, 'rect', { x: '3', y: '16', width: '6', height: '6', rx: '1' });
        this.appendStroke(svg, 'rect', { x: '15', y: '16', width: '6', height: '6', rx: '1' });
        this.appendStroke(svg, 'path', { d: 'M12 8v4M6 16v-2h12v2' });
        return svg;
      case 'lucide:search-check':
        this.appendStroke(svg, 'circle', { cx: '10', cy: '10', r: '6' });
        this.appendStroke(svg, 'path', { d: 'm14.5 14.5 5 5M7.5 10l1.7 1.7L13 8' });
        return svg;
      case 'lucide:trending-up':
        this.appendStroke(svg, 'path', { d: 'M3 17 9 11l4 4 7-7' });
        this.appendStroke(svg, 'path', { d: 'M14 8h6v6' });
        return svg;
      case 'simple-icons:linkedin':
        this.appendText(svg, 'in', { 'font-size': '10', 'font-weight': '800', y: '15' });
        return svg;
      case 'simple-icons:github':
        this.appendText(svg, 'GH', { 'font-size': '8.5', 'font-weight': '800', y: '14.5' });
        return svg;
      case 'simple-icons:huggingface':
        this.appendText(svg, 'HF', { 'font-size': '8.5', 'font-weight': '800', y: '14.5' });
        return svg;
      case 'simple-icons:x':
        this.appendStroke(svg, 'path', { d: 'M5 4 19 20M19 4 5 20' });
        return svg;
      case 'simple-icons:gmail':
        this.appendStroke(svg, 'rect', { x: '3', y: '5', width: '18', height: '14', rx: '2' });
        this.appendStroke(svg, 'path', { d: 'm4 7 8 6 8-6' });
        return svg;
      default:
        return null;
    }
  }
  static node(icon, { size } = {}) {
    const px = Number.isFinite(size) ? size : 18;
    if (this.isIconifyId(icon)) {
      const svg = this.inlineSvg(String(icon).trim(), px);
      if (svg) return svg;
    }
    const fallback = document.createElement('span');
    fallback.textContent = icon || '•';
    fallback.className = `icon-fallback icon-fallback--${px}`;
    return fallback;
  }
  static mount(el, icon, opts) {
    if (!el) return;
    Dom.clear(el);
    el.appendChild(this.node(icon, opts));
  }
}
