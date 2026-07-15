import { Github, UrlUtils } from '../core/browser.js';
import { UniqueStringList } from '../core/collections.js';

const CATEGORY_LABELS = Object.freeze({
  healthcare: 'Healthcare',
  finance: 'Finance & Risk',
  social: 'Social',
  genai: 'GenAI & Tools',
  analytics: 'Analytics',
});

const TAG_RULES = Object.freeze([
  ['rag', 'RAG'],
  ['retrieval', 'Retrieval'],
  ['hallucination', 'Hallucination'],
  ['llm', 'LLMOps'],
  ['genai', 'GenAI'],
  ['telemetry', 'Telemetry'],
  ['observability', 'Observability'],
  ['routing', 'Routing'],
  ['cost', 'Cost Governance'],
  ['dashboard', 'Dashboard'],
  ['streamlit', 'Streamlit'],
  ['gradio', 'Gradio'],
  ['time series', 'Time Series'],
  ['early warning', 'Early Warning'],
  ['risk', 'Risk Modeling'],
  ['fraud', 'Fraud'],
  ['calibration', 'Calibration'],
  ['threshold', 'Thresholding'],
  ['sentiment', 'Sentiment'],
  ['spam', 'Spam Detection'],
  ['transformer', 'Transformers'],
  ['feature engineering', 'Feature Engineering'],
  ['geo', 'Geo Analytics'],
  ['ev', 'EV Analytics'],
  ['football', 'Sports Analytics'],
  ['visual', 'Visualization'],
  ['matplotlib', 'Matplotlib'],
  ['seaborn', 'Seaborn'],
]);

export class Project {
  constructor(raw = {}) {
    this.cat = Project.cleanText(raw.cat);
    this.icon = Project.cleanText(raw.icon);
    this.type = Project.cleanText(raw.type);
    this.title = Project.cleanText(raw.title);
    this.desc = Project.cleanText(raw.desc);
    this.repo = Project.cleanText(raw.repo);
    this.repoUrl = UrlUtils.normalizeExternalUrl(raw.repoUrl);
    this.linkLabel = Project.cleanText(raw.linkLabel) || 'View Repo';
    this.imageBase = Project.cleanText(raw.imageBase);
    this.priority = Project.cleanPriority(raw.priority);
    this.problem = Project.cleanText(raw.problem);
    this.approach = Project.cleanList(raw.approach);
    this.signals = Project.cleanList(raw.signals);
    this.alt = Project.cleanAlt(raw.alt);

    const explicitTags = Project.cleanList(raw.tags);
    const explicitStack = Project.cleanList(raw.stack);
    this.tags = explicitTags || Project.freezeList(Project.buildTags(this));
    this.stack = explicitStack || Project.freezeList(Project.buildStack(this));
    this.impact = Project.cleanText(raw.impact) || Project.buildImpact(this);
    this.searchText = Project.buildSearchText(this);

    Object.freeze(this);
  }

  static cleanText(value) {
    return String(value || '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  static cleanPriority(value) {
    const priority = Number(value);
    return Number.isFinite(priority) ? priority : 0;
  }

  static freezeList(values) {
    return values?.length ? Object.freeze(values.slice()) : null;
  }

  static cleanList(values) {
    if (!Array.isArray(values)) return null;
    const unique = new UniqueStringList();
    for (const value of values) unique.add(this.cleanText(value));
    return this.freezeList(unique.toArray());
  }

  static cleanAlt(alt) {
    if (!alt || typeof alt !== 'object') return null;
    const href = UrlUtils.normalizeExternalUrl(alt.href);
    if (!href) return null;
    return Object.freeze({
      href,
      label: this.cleanText(alt.label) || 'Secondary link',
    });
  }

  static categoryLabel(category) {
    return CATEGORY_LABELS[category] || 'Project';
  }

  static buildTags({ cat, type, title, desc }) {
    const searchable = `${title || ''} ${desc || ''} ${type || ''}`.toLowerCase();
    const tags = new UniqueStringList();

    for (const [needle, tag] of TAG_RULES) {
      if (tags.size >= 3) break;
      if (searchable.includes(needle)) tags.add(tag);
    }

    if (tags.size < 2) tags.add(this.categoryLabel(cat));
    if (tags.size < 3) tags.add(type);
    return tags.toArray(3);
  }

  static buildImpact({ cat, type, title, desc }) {
    const normalizedType = String(type || '').toLowerCase();
    const searchable = `${title || ''} ${desc || ''}`.toLowerCase();

    if (searchable.includes('dashboard')) {
      return 'Outcome: decision-ready dashboard for monitoring and triage.';
    }
    if (normalizedType.includes('dataset') || searchable.includes('dataset')) {
      return 'Outcome: ML-ready dataset package with schema and reproducible baselines.';
    }
    if (searchable.includes('workflow')) {
      return 'Outcome: reproducible workflow with evaluation-ready artifacts.';
    }
    if (searchable.includes('rag') || searchable.includes('llm') || cat === 'genai') {
      return 'Outcome: production-oriented GenAI workflow with reliability guardrails.';
    }
    if (searchable.includes('risk') || cat === 'finance') {
      return 'Outcome: risk-focused ML pipeline with evaluation for real decisions.';
    }
    return 'Outcome: end-to-end project with clear evaluation and deployable artifacts.';
  }

  static buildStack({ cat, type, title, desc, repo, tags }) {
    const searchable = [title, desc, type, repo, ...(tags || [])]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    const stack = new UniqueStringList().add('Python');
    const normalizedType = String(type || '').toLowerCase();

    if (normalizedType.includes('dataset') || searchable.includes('dataset')) {
      stack.addMany(['Pandas', 'Jupyter', 'NumPy']);
    }

    const directRules = [
      ['pandas', 'Pandas'],
      ['numpy', 'NumPy'],
      ['polars', 'Polars'],
      ['duckdb', 'DuckDB'],
      ['streamlit', 'Streamlit'],
      ['plotly', 'Plotly'],
      ['gradio', 'Gradio'],
      ['docker', 'Docker'],
      ['sqlite', 'SQLite'],
      ['mysql', 'MySQL'],
      ['mongodb', 'MongoDB'],
      ['redis', 'Redis'],
      ['faiss', 'FAISS'],
      ['chroma', 'Chroma'],
      ['pinecone', 'Pinecone'],
      ['weaviate', 'Weaviate'],
      ['pytorch', 'PyTorch'],
      ['tensorflow', 'TensorFlow'],
      ['lightgbm', 'LightGBM'],
    ];
    for (const [needle, technology] of directRules) {
      if (searchable.includes(needle)) stack.add(technology);
    }

    if (searchable.includes('fastapi')) stack.addMany(['FastAPI', 'Pydantic']);
    if (searchable.includes('postgres') || searchable.includes('pgvector')) {
      stack.add('PostgreSQL / pgvector');
    }
    if (
      searchable.includes('rag') ||
      searchable.includes('retrieval') ||
      searchable.includes('llm') ||
      cat === 'genai'
    ) {
      stack.add('Transformers');
      if (searchable.includes('langchain')) stack.add('LangChain');
      if (searchable.includes('llamaindex')) stack.add('LlamaIndex');
      if (searchable.includes('ragas')) stack.add('RAGAS');
      if (searchable.includes('deepeval')) stack.add('DeepEval');
    }
    if (
      searchable.includes('scikit') ||
      searchable.includes('sklearn') ||
      searchable.includes('ml ')
    ) {
      stack.add('scikit-learn');
    }
    if (searchable.includes('xgboost') || searchable.includes('xgb')) stack.add('XGBoost');
    if (
      searchable.includes('telemetry') ||
      searchable.includes('observability') ||
      searchable.includes('monitor')
    ) {
      stack.add('OpenTelemetry');
    }
    if (stack.size < 4) stack.addMany(['Pandas', 'scikit-learn']);
    return stack.toArray(7);
  }

  static normalizeSearchValue(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  static buildSearchText(project) {
    return this.normalizeSearchValue(
      [
        project.title,
        project.desc,
        project.type,
        project.cat,
        project.repo,
        project.impact,
        ...(project.tags || []),
        ...(project.stack || []),
      ]
        .filter(Boolean)
        .join(' '),
    );
  }

  get githubUrl() {
    return this.repoUrl || Github.url(this.repo);
  }

  get hasRepoLink() {
    return UrlUtils.isSafeHttpUrl(this.githubUrl);
  }

  matchesQuery(query) {
    const normalizedQuery = Project.normalizeSearchValue(query);
    return !normalizedQuery || this.searchText.includes(normalizedQuery);
  }
}

export class ProjectCollection {
  constructor(projects = []) {
    const normalized = Array.isArray(projects) ? projects.slice() : [];
    this.projects = Object.freeze(
      normalized.sort((a, b) => {
        const priorityDifference = (Number(b?.priority) || 0) - (Number(a?.priority) || 0);
        return priorityDifference || String(a?.title || '').localeCompare(String(b?.title || ''));
      }),
    );
    Object.freeze(this);
  }

  findByRepo(repo) {
    const normalizedRepo = String(repo || '').trim();
    return normalizedRepo
      ? this.projects.find((project) => project?.repo === normalizedRepo) || null
      : null;
  }

  byCategory(category) {
    return category === 'all'
      ? this.projects.slice()
      : this.projects.filter((project) => project.cat === category);
  }

  filter({ cat = 'all', query = '' } = {}) {
    return this.byCategory(cat).filter((project) => project.matchesQuery(query));
  }

  visible({ items = [], query = '', showAll = false, limit = 6 } = {}) {
    return query.trim() || showAll ? items : items.slice(0, limit);
  }
}
