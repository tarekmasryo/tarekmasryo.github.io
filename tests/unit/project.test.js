import assert from 'node:assert/strict';
import test from 'node:test';

import { Project, ProjectCollection } from '../../src/domain/project.js';

function project(overrides = {}) {
  return new Project({
    cat: 'genai',
    icon: 'lucide:activity',
    type: 'RAG Evaluation',
    title: 'RAG QA Command Center',
    desc: 'Retrieval evaluation and trace review workspace.',
    repo: 'rag-qa-command-center',
    priority: 99,
    tags: ['RAG', 'RAG', 'Trace Review'],
    stack: ['Python', 'Python', 'Streamlit'],
    ...overrides,
  });
}

test('Project normalizes and freezes domain data', () => {
  const item = project({ title: '  RAG   QA Command Center  ' });

  assert.equal(item.title, 'RAG QA Command Center');
  assert.deepEqual(item.tags, ['RAG', 'Trace Review']);
  assert.deepEqual(item.stack, ['Python', 'Streamlit']);
  assert.equal(item.githubUrl, 'https://github.com/tarekmasryo/rag-qa-command-center');
  assert.equal(item.hasRepoLink, true);
  assert.equal(Object.isFrozen(item), true);
  assert.equal(Object.isFrozen(item.tags), true);
});

test('Project rejects unsafe external repository links', () => {
  const item = project({ repoUrl: 'javascript:alert(1)' });

  assert.equal(item.repoUrl, '');
  assert.equal(item.githubUrl, 'https://github.com/tarekmasryo/rag-qa-command-center');
});

test('Project search covers content, tags, and stack', () => {
  const item = project();

  assert.equal(item.matchesQuery('trace review'), true);
  assert.equal(item.matchesQuery('streamlit'), true);
  assert.equal(item.matchesQuery('computer vision'), false);
  assert.equal(item.matchesQuery(''), true);
});

test('ProjectCollection sorts, filters, and limits predictably', () => {
  const collection = new ProjectCollection([
    project({ title: 'B Project', repo: 'b-project', priority: 20, cat: 'finance' }),
    project({ title: 'A Project', repo: 'a-project', priority: 20, cat: 'finance' }),
    project({ title: 'Top Project', repo: 'top-project', priority: 100, cat: 'genai' }),
  ]);

  assert.deepEqual(
    collection.projects.map((item) => item.title),
    ['Top Project', 'A Project', 'B Project'],
  );
  assert.equal(collection.findByRepo('a-project')?.title, 'A Project');
  assert.equal(collection.byCategory('finance').length, 2);
  assert.equal(collection.filter({ cat: 'all', query: 'top' }).length, 1);
  assert.equal(
    collection.visible({ items: collection.projects, query: '', showAll: false, limit: 2 }).length,
    2,
  );
  assert.equal(
    collection.visible({ items: collection.projects, query: 'project', showAll: false, limit: 2 })
      .length,
    3,
  );
});
