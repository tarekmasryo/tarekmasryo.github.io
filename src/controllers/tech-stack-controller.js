import { Dom } from '../core/dom.js';

export class TechStackController {
  constructor({ reveal }) {
    this.reveal = reveal;
    this.toggle = Dom.id('techToggle');
    this.fullStack = Dom.id('fullTech');
    this.bound = false;
  }

  init() {
    if (!this.toggle || !this.fullStack || this.bound) return;
    this.bound = true;
    this.setOpen(false);
    this.toggle.addEventListener('click', () => this.setOpen(this.fullStack.hidden));
  }

  setOpen(isOpen) {
    this.fullStack.hidden = !isOpen;
    this.toggle.setAttribute('aria-expanded', String(isOpen));
    this.toggle.textContent = isOpen ? 'Hide Full Stack' : 'View Full Stack';
    if (isOpen) this.reveal.observeAll('#fullTech .fade');
  }
}
