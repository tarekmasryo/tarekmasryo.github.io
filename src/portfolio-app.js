import { CONFIG, TYPEWRITER_LINES } from './config.js';
import { Dom } from './core/dom.js';
import { Project, ProjectCollection } from './domain/project.js';
import { ProjectCatalogController } from './controllers/project-catalog-controller.js';
import { PageNavigationController } from './controllers/page-navigation-controller.js';
import { TechStackController } from './controllers/tech-stack-controller.js';
import { ParticlesBackground } from './ui/media.js';
import { ProjectModal } from './ui/project-modal.js';
import { Reveal, ThemeManager, Typewriter } from './ui/behaviors.js';

export class PortfolioApp {
  constructor(projectsRaw) {
    this.theme = new ThemeManager({ storageKey: CONFIG.themeStorageKey });
    this.reveal = new Reveal({ threshold: CONFIG.revealThreshold });
    this.modal = new ProjectModal(Dom.id('projectModal'));
    this.projects = new ProjectCollection(projectsRaw.map((project) => new Project(project)));
    this.projectCatalog = new ProjectCatalogController({
      projects: this.projects,
      modal: this.modal,
      reveal: this.reveal,
      projectLimit: CONFIG.projectLimit,
    });
    this.navigation = new PageNavigationController();
    this.techStack = new TechStackController({ reveal: this.reveal });
    this.typewriter = new Typewriter({ el: Dom.id('heroLoop'), lines: TYPEWRITER_LINES });
    this.background = new ParticlesBackground(Dom.id('bgCanvas'));
  }

  init() {
    this.theme.init();
    this.setCurrentYear();
    this.modal.bind();
    this.typewriter.start();
    this.projectCatalog.init();
    this.techStack.init();
    this.navigation.init();
    this.reveal.observeAll('.fade');
    this.reveal.prime('.fade');
    document.documentElement.classList.remove('preload');
    this.background.init();
  }

  setCurrentYear() {
    const year = Dom.id('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }
}
