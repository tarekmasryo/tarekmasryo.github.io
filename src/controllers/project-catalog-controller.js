import { UrlState } from '../core/browser.js';
import { Debounce } from '../core/browser.js';
import { Dom } from '../core/dom.js';
import { ProjectCardFactory } from '../ui/project-card-factory.js';

export class ProjectCatalogController {
  constructor({ projects, modal, reveal, projectLimit }) {
    this.projects = projects;
    this.modal = modal;
    this.reveal = reveal;
    this.projectLimit = projectLimit;
    this.grid = Dom.id('projectsGrid');
    this.fallback = Dom.id('projectFallback');
    this.meta = Dom.id('projectsMeta');
    this.toggle = Dom.id('projectsToggle');
    this.searchInput = Dom.id('projectSearch');
    this.clearSearch = Dom.id('clearSearch');
    this.filterButtons = Dom.qsa('.fbtn');
    this.currentCategory = 'all';
    this.showAll = false;
    this.searchQuery = '';
    this.bound = false;
    this.cardFactory = new ProjectCardFactory({
      onDetails: (project) => this.modal.open(project),
    });
    this.handleHashChange = () => this.openProjectFromHash();
  }

  init() {
    this.bind();
    this.render();
    this.openProjectFromHash();
  }

  bind() {
    if (this.bound) return;
    this.bound = true;
    this.bindFilters();
    this.bindSearch();
    this.bindToggle();
    globalThis.addEventListener('hashchange', this.handleHashChange);
  }

  openProjectFromHash() {
    const repo = UrlState.getProject();
    if (!repo) {
      if (this.modal.isOpen()) this.modal.close();
      return;
    }

    const project = this.projects.findByRepo(repo);
    if (!project) {
      if (this.modal.isOpen()) this.modal.close();
      return;
    }

    if (this.modal.isOpen() && this.modal.active?.repo === project.repo) return;
    this.modal.open(project);
  }

  render() {
    const query = this.searchQuery.trim();
    const items = this.projects.filter({ cat: this.currentCategory, query });
    const visible = this.projects.visible({
      items,
      query,
      showAll: this.showAll,
      limit: this.projectLimit,
    });

    if (this.grid) {
      Dom.clear(this.grid);
      const fragment = document.createDocumentFragment();
      for (const project of visible) fragment.appendChild(this.cardFactory.create(project));
      this.grid.appendChild(fragment);
      if (this.fallback) this.fallback.hidden = true;
    }

    this.renderMeta({ total: items.length, visible: visible.length, query });
    this.renderToggle({ total: items.length, query });
    this.reveal.observeAll('.fade');
  }

  renderMeta({ total, visible, query }) {
    if (!this.meta) return;
    if (total === 0) {
      this.meta.textContent = query ? 'No projects match your search.' : 'No projects to show.';
      return;
    }
    if (query) {
      this.meta.textContent = `Found ${total} ${this.projectLabel(total)}`;
      return;
    }
    this.meta.textContent =
      total <= this.projectLimit
        ? `${total} ${this.projectLabel(total)}`
        : `Showing ${visible} of ${total} projects`;
  }

  renderToggle({ total, query }) {
    if (!this.toggle) return;
    const shouldHide = Boolean(query) || total <= this.projectLimit;
    this.toggle.hidden = shouldHide;
    if (shouldHide) return;
    this.toggle.textContent = this.showAll ? 'Show less' : 'View all projects';
    this.toggle.setAttribute('aria-expanded', String(this.showAll));
  }

  projectLabel(count) {
    return count === 1 ? 'project' : 'projects';
  }

  bindFilters() {
    for (const button of this.filterButtons) {
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
      button.addEventListener('click', () => this.setCategory(button));
    }
  }

  setCategory(activeButton) {
    for (const button of this.filterButtons) {
      const isActive = button === activeButton;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    }
    this.currentCategory = activeButton.dataset.cat || 'all';
    this.showAll = false;
    this.render();
  }

  bindSearch() {
    if (!this.searchInput) return;
    const applySearch = () => {
      this.searchQuery = this.searchInput.value || '';
      this.showAll = false;
      this.syncClearSearch();
      this.render();
    };

    this.searchInput.addEventListener('input', Debounce.wrap(applySearch, 80));
    this.clearSearch?.addEventListener('click', () => {
      this.searchInput.value = '';
      applySearch();
      this.searchInput.focus();
    });
    this.syncClearSearch();
  }

  syncClearSearch() {
    if (this.clearSearch && this.searchInput) {
      this.clearSearch.hidden = !this.searchInput.value;
    }
  }

  bindToggle() {
    this.toggle?.addEventListener('click', () => {
      this.showAll = !this.showAll;
      this.render();
    });
  }
}
