import { Dom } from '../core/dom.js';
import { ImageResolver } from './media.js';

export class ProjectCardFactory {
  constructor({ onDetails }) {
    this.onDetails = onDetails;
  }

  create(project) {
    const card = Dom.create('article', {
      className: 'card p-card fade',
      attributes: { 'aria-label': project.title },
    });
    const typeBar = Dom.create('div', { className: 'p-typebar', text: project.type });
    const media = Dom.create('div', { className: 'p-top' });
    const body = Dom.create('div', { className: 'p-body' });
    const tags = Dom.create('div', { className: 'p-tags' });
    const actions = Dom.create('div', { className: 'p-actions' });

    ImageResolver.mount(media, project, { mode: 'card' });
    for (const tag of project.tags || []) {
      tags.appendChild(Dom.create('span', { className: 'tag', text: tag }));
    }

    actions.appendChild(this.createDetailsButton(project));
    const repositoryLink = this.createRepositoryLink(project);
    if (repositoryLink) actions.appendChild(repositoryLink);

    body.append(
      Dom.create('h3', { text: project.title }),
      Dom.create('p', { className: 'p-impact', text: project.impact }),
      Dom.create('p', { text: project.desc }),
      tags,
      actions,
    );
    card.append(typeBar, media, body);
    return card;
  }

  createDetailsButton(project) {
    const button = Dom.create('button', {
      className: 'btn ghost small',
      text: 'View Details',
      attributes: { type: 'button', 'aria-haspopup': 'dialog' },
    });
    button.addEventListener('click', () => this.onDetails(project));
    return button;
  }

  createRepositoryLink(project) {
    if (!project.hasRepoLink) return null;
    return Dom.create('a', {
      className: 'btn repo small',
      text: project.linkLabel || 'View Repo',
      attributes: {
        href: project.githubUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    });
  }
}
