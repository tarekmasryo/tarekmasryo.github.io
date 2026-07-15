import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

import { PROJECTS_RAW } from '../../projects.js';
import { Project, ProjectCollection } from '../../src/domain/project.js';

const EXPECTED_FEATURED = Object.freeze([
  'Fraud Risk Ops Platform',
  'RAG QA Command Center',
  'LLMOps Telemetry Command Center',
  'Advanced ML Sentiment Lab',
  'Health Intelligence Platform',
  'Short Video Intelligence Dashboard',
]);

function slugify(value) {
  return String(value || '')
    .trim()
    .replace(/[—–]/g, '-')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

test('the complete portfolio catalog contains every project exactly once', () => {
  assert.equal(PROJECTS_RAW.length, 30);

  const titles = PROJECTS_RAW.map((project) => project.title);
  const repositories = PROJECTS_RAW.map((project) => project.repo);

  assert.equal(new Set(titles).size, PROJECTS_RAW.length);
  assert.equal(new Set(repositories).size, PROJECTS_RAW.length);
});

test('all project records build successfully and preserve the intended featured order', () => {
  const collection = new ProjectCollection(PROJECTS_RAW.map((raw) => new Project(raw)));

  assert.equal(collection.projects.length, 30);
  assert.deepEqual(
    collection.projects.slice(0, 6).map((project) => project.title),
    EXPECTED_FEATURED,
  );
});

test('every project has a matching local WebP card image', () => {
  for (const project of PROJECTS_RAW) {
    const imageName = `${slugify(project.imageBase || project.repo)}.webp`;
    const imagePath = path.resolve('assets', imageName);
    assert.equal(existsSync(imagePath), true, `${project.title} is missing assets/${imageName}`);
  }
});

test('agreed project copy and stack corrections remain applied', () => {
  const byTitle = new Map(PROJECTS_RAW.map((project) => [project.title, project]));

  assert.match(byTitle.get('Advanced ML Sentiment Lab').desc, /ROC-AUC\/PR-AUC/);
  assert.deepEqual(byTitle.get('Health Intelligence Platform').stack, [
    'Python',
    'Streamlit',
    'Plotly',
    'Pandas',
    'scikit-learn',
  ]);

  const hospital = byTitle.get('Hospital Deterioration — Next 12h Early Warning');
  assert.match(hospital.desc, /^Decision-ready /);
  assert.match(hospital.desc, /Evaluated on simulated data\.$/);
  assert.equal(hospital.stack.includes('XGBoost'), false);
  assert.equal(JSON.stringify(hospital).includes('HistGradientBoosting'), false);
  assert.equal(JSON.stringify(hospital).includes('0.9519'), false);
  assert.equal(JSON.stringify(hospital).includes('0.6909'), false);

  const cancer = byTitle.get('Cancer Risk Prediction');
  assert.match(cancer.desc, /^Cancer-risk classification pipeline/);
  assert.match(cancer.desc, /exported model artifacts/);
  assert.match(cancer.signals.join(' '), /macro-F1 0\.764/);
  assert.match(cancer.signals.join(' '), /not intended for clinical use/);

  assert.equal(byTitle.get('RAG QA Command Center').stack.includes('FAISS'), false);
  assert.equal(byTitle.get('RAG QA Command Center').stack.includes('pgvector'), false);
  assert.equal(byTitle.get('LLMOps Telemetry Command Center').stack.includes('MLflow'), false);
});

test('synthetic-data disclosure is accurate without repetitive card copy', () => {
  const byTitle = new Map(PROJECTS_RAW.map((project) => [project.title, project]));
  const countTerm = (project, term) => {
    const publicCopy = [
      project.desc,
      project.problem,
      ...(project.approach || []),
      ...(project.signals || []),
      ...(project.stack || []),
      ...(project.tags || []),
      project.impact,
    ]
      .join(' ')
      .toLowerCase();
    return publicCopy.split(term.toLowerCase()).length - 1;
  };

  assert.equal(countTerm(byTitle.get('Digital Lifestyle Benchmark Dataset'), 'synthetic'), 1);
  assert.equal(countTerm(byTitle.get('Blood Donation Registry Dataset'), 'synthetic'), 1);
  assert.equal(countTerm(byTitle.get('Hospital Deterioration Dataset'), 'simulated'), 1);
  assert.equal(countTerm(byTitle.get('Cancer Risk Prediction'), 'synthetic'), 0);
});
