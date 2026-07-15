import { HistoryState, UrlState, UrlUtils } from '../core/browser.js';
import { Dom } from '../core/dom.js';
import { Project } from '../domain/project.js';
import { FocusTrap } from './behaviors.js';
import { ImageResolver } from './media.js';

export class ProjectModal {
  constructor(root) {
    this.root = root;
    this.closeBtn = Dom.id('mClose');
    this.typeEl = Dom.id('mType');
    this.titleEl = Dom.id('mTitle');
    this.mediaEl = Dom.id('mMedia');
    this.summaryEl = Dom.id('mProblem');
    this.approachEl = Dom.id('mApproach');
    this.signalsEl = Dom.id('mSignals');
    this.stackEl = Dom.id('mStack');
    this.repoEl = Dom.id('mRepo');
    this.altEl = Dom.id('mAlt');
    this.lastFocus = null;
    this.previousHash = '';
    this.active = null;
    this.bound = false;
    this.trap = root ? new FocusTrap(root.querySelector('.modal-card') || root) : null;
  }

  isOpen() {
    return Boolean(this.root?.classList.contains('show'));
  }

  open(project) {
    if (!this.root || !project) return;
    this.active = project;
    this.lastFocus = document.activeElement;
    this.previousHash = String(globalThis.location?.hash || '');
    if (project.repo) UrlState.setProject(project.repo);

    this.root.classList.add('show');
    this.root.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    if (this.typeEl) this.typeEl.textContent = project.type || 'Project';
    if (this.titleEl) this.titleEl.textContent = project.title || '—';
    if (this.summaryEl) this.summaryEl.textContent = project.problem || project.desc || '—';
    if (this.mediaEl) ImageResolver.mount(this.mediaEl, project, { mode: 'modal' });

    this.renderList(this.approachEl, project.approach);
    this.renderList(this.signalsEl, project.signals);
    this.renderTags(this.stackEl, project.stack);
    this.setLink(this.repoEl, {
      href: project.hasRepoLink ? project.githubUrl : '',
      label: project.linkLabel || 'View Repo',
    });
    this.setLink(this.altEl, project.alt);

    this.trap?.activate();
    this.closeBtn?.focus();
  }

  close() {
    if (!this.root || !this.isOpen()) return;
    this.root.classList.remove('show');
    this.root.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    this.trap?.deactivate();
    this.setLink(this.repoEl, null);
    this.setLink(this.altEl, null);

    if (this.previousHash && !this.previousHash.startsWith(UrlState.base)) {
      HistoryState.replace(this.previousHash);
    } else {
      UrlState.clearProject();
    }

    const focusTarget = this.lastFocus;
    this.lastFocus = null;
    this.previousHash = '';
    this.active = null;
    focusTarget?.focus?.();
  }

  setLink(anchor, link) {
    if (!anchor) return;
    const href = link ? UrlUtils.normalizeExternalUrl(link.href) : '';
    const label = link ? Project.cleanText(link.label) : '';

    anchor.hidden = !href;
    if (!href) {
      anchor.removeAttribute('href');
      return;
    }

    anchor.href = href;
    anchor.textContent = label || 'Open link';
  }

  renderCollection(container, items, itemFactory) {
    if (!container) return;
    const block = container.closest('.modal-block');
    const values = Array.isArray(items) ? items : [];
    Dom.clear(container);
    if (block) block.hidden = values.length === 0;
    for (const item of values) container.appendChild(itemFactory(item));
  }

  renderList(container, items) {
    this.renderCollection(container, items, (item) => Dom.create('li', { text: item }));
  }

  renderTags(container, items) {
    this.renderCollection(container, items, (item) =>
      Dom.create('span', { className: 'tag', text: item }),
    );
  }

  bind() {
    if (!this.root || this.bound) return;
    this.bound = true;
    const closers = [...Dom.qsa('[data-close="1"]', this.root), this.closeBtn].filter(Boolean);
    for (const element of new Set(closers)) {
      element.addEventListener('click', () => this.close());
    }
    document.addEventListener('keydown', (event) => {
      if (this.isOpen() && event.key === 'Escape') this.close();
    });
  }
}
