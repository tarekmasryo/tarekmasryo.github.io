(() => {
  'use strict';

  const CONFIG = Object.freeze({
    assetsDir: 'assets',
    imageExtensions: ['webp', 'png', 'jpg', 'jpeg'],
    revealThreshold: 0.12,
    projectLimit: 6,
    themeStorageKey: 'tm_theme',
  });

  const PROJECTS_RAW = [
    {
      cat: 'genai',
      icon: 'lucide:activity',
      type: 'Dataset',
      title: 'LLM Production Telemetry — Decision-Grade Observability',
      desc: 'Multi-table LLM system telemetry + SFT samples for observability, cost governance, routing backtests, drift watch, and operator triage.',
      priority: 92,
      problem:
        'How do you measure and improve LLM/RAG reliability in production (quality, latency, failures, and cost) with evidence and repeatable evaluation?',
      approach: [
        'Define a strict, schema-friendly log format for requests, retrieval, responses, and tool calls.',
        'Model evaluation as a regression problem: compare runs, detect regressions, and gate rollout.',
        'Track cost/latency budgets and failure modes (timeouts, retries, fallbacks) to inform routing decisions.',
      ],
      signals: [
        'Quality metrics + human review flags (where available)',
        'Latency, error rates, and failure categories',
        'Cost per request / per conversation, budget burn',
        'Drift / distribution shifts on inputs and retrieval behavior',
      ],
      stack: ['Python', 'FastAPI', 'Pydantic', 'Docker', 'MLflow', 'Streamlit', 'Plotly'],
      tags: ['LLMOps', 'Observability', 'Cost Analytics'],
      repo: 'llm-system-ops-production-telemetry-sft-data',
      imageBase: 'llm-system-ops-production-telemetry-sft-data',
    },

    {
      cat: 'healthcare',
      icon: 'lucide:building-2',
      type: 'Healthcare ML',
      title: 'Hospital Deterioration — Next 12h Early Warning',
      desc: 'Early-warning risk scoring baseline with leak-safe evaluation and decision-oriented reporting (next 12h).',
      priority: 95,
      problem:
        'How can clinicians and operators identify patients at risk of deterioration within the next 12 hours while avoiding leakage and producing decision-ready outputs?',
      approach: [
        'Leak-safe splits and evaluation aligned with time-dependent clinical workflows.',
        'Calibrated risk scores and threshold candidates for different review capacities.',
        'A dashboard-style review view to support triage and auditability.',
      ],
      signals: [
        'AUC/PR-AUC + calibration curves',
        'Threshold trade-offs: recall vs false alarms vs review workload',
        'Error slices by cohort/segment (when applicable)',
      ],
      stack: ['Python', 'scikit-learn', 'XGBoost', 'Streamlit', 'Plotly', 'Pandas'],
      tags: ['Clinical ML', 'Early Warning', 'Time Series'],
      repo: 'hospital-deterioration-next-12h-early-warning-baseline',
      imageBase: 'hospital-deterioration-next-12h-early-warning',
    },
    {
      cat: 'healthcare',
      icon: 'lucide:database',
      type: 'Dataset',
      title: 'Hospital Deterioration Dataset',
      desc: 'Clean ML-ready tables for deterioration prediction with reproducible splits and documentation.',
      tags: ['Clinical Dataset', 'Time Series', 'Label Quality'],
      repo: 'hospital-deterioration-dataset',
      imageBase: 'Hospital Deterioration Dataset',
    },
    {
      cat: 'healthcare',
      icon: 'lucide:brain',
      type: 'Dashboard',
      title: 'Health Intelligence Platform',
      desc: 'Dashboard exploring digital lifestyle patterns, wellbeing signals, and decision insights.',
      priority: 78,
      tags: ['Health Analytics', 'KPI Dashboard', 'Decision Insights'],
      repo: 'health-intelligence-platform',
      imageBase: 'Health Intelligence Platform',
    },
    {
      cat: 'healthcare',
      icon: 'lucide:target',
      type: 'Healthcare ML',
      title: 'Cancer Risk Prediction',
      desc: 'End-to-end risk prediction workflow with robust evaluation and model reporting.',
      tags: ['Cancer Risk', 'Tabular ML', 'Model Evaluation'],
      repo: 'cancer-risk-prediction',
      imageBase: 'Cancer Risk Prediction',
    },
    {
      cat: 'healthcare',
      icon: 'lucide:database',
      type: 'Dataset',
      title: 'Cancer Risk Factors Data',
      desc: 'Clean dataset for cancer risk analysis with documentation and practical baselines.',
      tags: ['Medical Dataset', 'Feature Engineering', 'Data Dictionary'],
      repo: 'cancer-risk-factors-data',
      imageBase: 'Cancer Risk Factors Data',
    },
    {
      cat: 'healthcare',
      icon: 'lucide:droplet',
      type: 'Dataset',
      title: 'Blood Donation Registry Dataset',
      desc: 'Synthetic ops dataset for donor eligibility, outreach policy modeling, and compatibility lookup.',
      tags: ['Synthetic Dataset', 'Healthcare Ops', 'Predictive Modeling'],
      repo: 'blood-donation-registry-dataset',
      imageBase: 'Blood Donation Registry Dataset',
    },

    {
      cat: 'healthcare',
      icon: 'lucide:stethoscope',
      type: 'ML Pipeline',
      title: 'Pima Diabetes Pipeline',
      desc: 'End-to-end diabetes risk prediction pipeline with validation, reproducible training, and decision-ready reporting.',
      priority: 88,
      problem:
        'How can we ship a small, reliable tabular ML pipeline for diabetes risk prediction with clean data contracts and leak-safe evaluation?',
      approach: [
        'Validate inputs with a strict schema (types, ranges, missingness guards).',
        'Train a baseline + tuned model with leak-safe splits and calibrated probabilities.',
        'Package artifacts for repeatable inference and regression checks.',
      ],
      signals: [
        'ROC-AUC / PR-AUC + calibration (Brier / reliability)',
        'Threshold trade-offs for sensitivity vs false positives',
        'Data quality checks: missingness, outliers, schema drift',
      ],
      stack: ['Python', 'scikit-learn', 'Pandas', 'Pydantic', 'pytest', 'GitHub Actions'],
      tags: ['ML Pipeline', 'Clinical Risk', 'Reproducible'],
      repo: 'pima-diabetes-pipeline',
      imageBase: 'pima-diabetes-pipeline',
    },

    {
      cat: 'finance',
      icon: 'lucide:shield-check',
      type: 'Dashboard',
      title: 'Fraud Detection Dashboard',
      desc: 'Calibrated fraud risk scoring + threshold policies, KPI monitoring, and SHAP explainability to support human review workflows.',
      priority: 100,
      problem:
        'How can a fraud model be operated as a decision system (not just a classifier) with thresholds tuned to cost and review capacity?',
      approach: [
        'Train baseline models, then calibrate probabilities for reliable risk scores.',
        'Define threshold policies that balance cost, recall, and reviewer workload.',
        'Expose decision KPIs, segment cuts, and explanations to guide triage and audits.',
      ],
      signals: [
        'PR-AUC / ROC-AUC + calibration metrics',
        'KPI monitoring for review volume, approvals/declines, and drift cues',
        'SHAP-driven explanations for reviewer trust and faster triage',
      ],
      stack: [
        'Python',
        'scikit-learn',
        'XGBoost',
        'Streamlit',
        'FastAPI',
        'Docker',
        'MLflow',
        'SHAP',
      ],
      tags: ['Fraud Detection', 'Threshold Policies', 'Monitoring'],
      repo: 'fraud-detection-dashboard',
      imageBase: 'Fraud Detection Dashboard',
    },
    {
      cat: 'finance',
      icon: 'lucide:credit-card',
      type: 'ML Pipeline',
      title: 'Credit Card Fraud Detection',
      desc: 'Fraud classification workflow with reproducibility, evaluation, and threshold-aware analysis.',
      tags: ['Imbalanced Learning', 'XGBoost', 'PR-AUC'],
      repo: 'creditcard-fraud-detection',
      imageBase: 'Credit Card Fraud Detection',
    },
    {
      cat: 'finance',
      icon: 'lucide:dollar-sign',
      type: 'Kaggle PS',
      title: 'Loan Payback Prediction',
      desc: 'Playground Series solution: feature engineering, training, and model selection.',
      tags: ['Credit Scoring', 'Cross-Validation', 'Kaggle'],
      repo: 'loan-payback-ps5e11',
      imageBase: 'Loan Payback Prediction',
    },
    {
      cat: 'finance',
      icon: 'lucide:car',
      type: 'Risk Model',
      title: 'Road Accident Risk',
      desc: 'Risk assessment modeling with production-style evaluation and reporting.',
      priority: 84,
      tags: ['Road Safety', 'Risk Modeling', 'Explainability'],
      repo: 'road-accident-risk',
      imageBase: 'Road Accident Risk',
    },

    {
      cat: 'social',
      icon: 'lucide:video',
      type: 'Dashboard',
      title: 'Short Video Intelligence Dashboard',
      desc: 'Virality and engagement analytics for short-form content with decision-ready views.',
      priority: 80,
      tags: ['Social Analytics', 'Trend Forecasting', 'KPI Dashboard'],
      repo: 'Short-video-intelligence-dashboard',
      imageBase: 'Short Video Intelligence Dashboard',
    },
    {
      cat: 'social',
      icon: 'lucide:flame',
      type: 'Dataset',
      title: 'YouTubeTikTok Trends Dataset',
      desc: 'Trends dataset to analyze content performance and short-form dynamics (2025 snapshot).',
      tags: ['Engagement Metrics', 'Trend Mining', 'Social Dataset'],
      repo: 'youtube-tiktok-trends-dataset-2025',
      imageBase: 'YouTubeTikTok Trends Dataset',
    },
    {
      cat: 'social',
      icon: 'lucide:smile',
      type: 'NLP',
      title: 'Text Sentiment Analysis',
      desc: 'Sentiment classification with classical baselines and deep learning extensions.',
      tags: ['Sentiment Analysis', 'Transformers', 'NLP'],
      repo: 'text-sentiment-analysis',
      imageBase: 'Text Sentiment Analysis',
    },
    {
      cat: 'social',
      icon: 'lucide:mail',
      type: 'NLP',
      title: 'SMS Spam Detection',
      desc: 'Spam detection pipeline with feature engineering, validation, and model evaluation.',
      tags: ['Spam Filtering', 'Text Classification', 'Precision/Recall'],
      repo: 'sms-spam-detection',
      imageBase: 'SMS Spam Detection',
    },

    {
      cat: 'genai',
      icon: 'lucide:file-text',
      type: 'Dataset',
      title: 'RAG QA Logs & Corpus Data',
      desc: 'Multi-table RAG evaluation logs + corpus for retrieval quality, answer quality, and grounded outputs.',
      priority: 90,
      problem:
        'How do you evaluate RAG beyond a single score—separating retrieval failure from generation failure while tracking operational cost and latency?',
      approach: [
        'Provide realistic QA logs + corpus with retrieval traces to benchmark retrieval/reranking.',
        'Score answer quality and groundedness with citations + targeted error slices.',
        'Track latency/cost signals to iterate under budget constraints.',
      ],
      signals: [
        'Retrieval metrics (recall@k, MRR / nDCG when applicable)',
        'Answer quality + groundedness / citation coverage',
        'Operational telemetry: latency, token/cost budgets',
      ],
      stack: ['Python', 'Pandas', 'FAISS', 'pgvector', 'Jupyter'],
      tags: ['RAG Evaluation', 'Citations', 'Retrieval/Reranking'],
      repo: 'rag-qa-logs-corpus-data',
      imageBase: 'RAG QA Logs & Corpus Data',
    },
    {
      cat: 'genai',
      icon: 'lucide:tool',
      type: 'Tooling',
      title: 'QuickStart',
      desc: 'Generate quick artifacts and scaffolds from Hugging Face URLs (fast reusable workflow).',
      tags: ['Starter Template', 'Python', 'Developer Tooling'],
      repo: 'QuickStart',
      imageBase: 'QuickStart',
    },
    {
      cat: 'genai',
      icon: 'lucide:image',
      type: 'App',
      title: 'Old Photo Restorer',
      desc: 'Gradio app for photo restoration with batch export and clean UX.',
      tags: ['Image Restoration', 'Gradio App', 'Computer Vision'],
      repo: 'Old-Photo-Restorer',
      imageBase: 'Old Photo Restorer',
    },
    {
      cat: 'genai',
      icon: 'lucide:puzzle',
      type: 'Dataset',
      title: 'GenAI Tools & Platforms Data',
      desc: 'Dataset mapping GenAI tools/platforms for comparisons and analysis.',
      tags: ['GenAI Landscape', 'Tools Dataset', 'Market Research'],
      repo: 'genai-tools-platforms-data',
      imageBase: 'GenAI Tools & Platforms Data',
    },
    {
      cat: 'genai',
      icon: 'lucide:brain',
      type: 'Baseline',
      title: 'GenAI Tools Baseline',
      desc: 'Baseline comparisons and practical notes for GenAI tools, platforms, and model usage patterns.',
      tags: ['Model Benchmark', 'GenAI Comparison', 'Scoring'],
      repo: 'genai-tools-baseline',
      imageBase: 'GenAI Tools Baseline',
    },

    {
      cat: 'analytics',
      icon: 'lucide:plug',
      type: 'Dashboard',
      title: 'EV Charging Dashboard',
      desc: 'Interactive analytics for global EV charging infrastructure and power classifications.',
      priority: 82,
      tags: ['EV Charging', 'Geo Analytics', 'KPI Dashboard'],
      repo: 'ev-charging-dashboard',
      imageBase: 'EV Charging Dashboard',
    },
    {
      cat: 'analytics',
      icon: 'lucide:globe',
      type: 'Dataset',
      title: 'EV Infra Dataset',
      desc: 'EV infrastructure dataset: stations, connectors, and derived power categories.',
      tags: ['EV Infrastructure', 'Stations Dataset', 'Data Cleaning'],
      repo: 'global-ev-infra-dataset',
      imageBase: 'EV Infra Dataset',
    },
    {
      cat: 'analytics',
      icon: 'lucide:trophy',
      type: 'Dashboard',
      title: 'Football Matches Dashboard',
      desc: 'Football analytics dashboard for match performance and season-level insights.',
      tags: ['Football Analytics', 'Interactive Dashboard', 'Season Trends'],
      repo: 'football-matches-dashboard',
      imageBase: 'Football Matches Dashboard',
    },
    {
      cat: 'analytics',
      icon: 'lucide:package',
      type: 'Dataset',
      title: 'Football Matches Dataset 2025',
      desc: 'Dataset for football match results/statistics (2025) designed for analysis and dashboards.',
      tags: ['Football Dataset', 'Match Results', 'Feature Set'],
      repo: 'football-matches-2025-dataset',
      imageBase: 'Football Matches Dataset 2025',
    },
    {
      cat: 'analytics',
      icon: 'lucide:line-chart',
      type: 'Tutorial',
      title: 'Matplotlib Tutorials',
      desc: 'Production-style plotting patterns and EDA templates for clean data storytelling.',
      tags: ['Matplotlib', 'Data Visualization', 'Python'],
      repo: 'matplotlib-tutorials',
      imageBase: 'Matplotlib Tutorials',
    },
    {
      cat: 'analytics',
      icon: 'lucide:database',
      type: 'Tutorial',
      title: 'Seaborn Tutorials',
      desc: 'Seaborn recipes and best practices for readable, decision-ready visuals.',
      tags: ['Seaborn', 'Statistical Plots', 'Python'],
      repo: 'seaborn-tutorials',
      imageBase: 'Seaborn Tutorials',
    },
    {
      cat: 'analytics',
      icon: 'lucide:palette',
      type: 'Visual Lab',
      title: 'Seaborn + Matplotlib Visual Lab',
      desc: 'Interactive visual lab to learn plotting patterns, styling, and visual diagnostics.',
      tags: ['Visualization Practice', 'Chart Recipes', 'Python'],
      repo: 'seaborn-matplotlib-visual-lab',
      imageBase: 'Seaborn + Matplotlib Visual Lab',
    },
  ];

  class Dom {
    static id(id) {
      return document.getElementById(id);
    }

    static qs(sel, root = document) {
      return root.querySelector(sel);
    }

    static qsa(sel, root = document) {
      return Array.from(root.querySelectorAll(sel));
    }

    static clear(el) {
      if (!el) return;
      el.textContent = '';
    }
  }

  class Storage {
    static get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    }

    static set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        return;
      }
    }
  }

  class Clipboard {
    static async writeText(text) {
      const value = String(text || '');
      if (!value) return false;

      const canUse =
        typeof navigator !== 'undefined' &&
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === 'function' &&
        window.isSecureContext;

      if (canUse) {
        try {
          await navigator.clipboard.writeText(value);
          return true;
        } catch {
          return this.fallback(value);
        }
      }
      return this.fallback(value);
    }

    static fallback(value) {
      try {
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return Boolean(ok);
      } catch {
        return false;
      }
    }
  }

  class Toast {
    constructor(el) {
      this.el = el;
      this.timer = null;
    }

    show(message, ms = 1200) {
      if (!this.el) return;
      const text = String(message || '').trim();
      if (!text) return;

      this.el.textContent = text;
      this.el.classList.add('show');
      if (this.timer) window.clearTimeout(this.timer);

      this.timer = window.setTimeout(
        () => {
          this.el.classList.remove('show');
        },
        Number(ms) || 1200,
      );
    }
  }

  class EmailCopy {
    constructor({ selector, toast }) {
      this.selector = selector;
      this.toast = toast;
    }

    buildEmail(el) {
      const user = (el.getAttribute('data-email-user') || '').trim();
      const domain = (el.getAttribute('data-email-domain') || '').trim();
      if (!user || !domain) return '';
      return `${user}@${domain}`;
    }

    bind(el) {
      el.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = this.buildEmail(el);
        if (!email) return;
        const ok = await Clipboard.writeText(email);
        if (ok) this.toast?.show('Copied');
      });
    }

    init() {
      const nodes = Dom.qsa(this.selector);
      for (const el of nodes) this.bind(el);
    }
  }

  class IconRenderer {
    static isIconifyId(value) {
      if (!value) return false;
      const s = String(value).trim();
      return /^[a-z0-9]+:[a-z0-9-]+$/i.test(s);
    }

    static svgBase(px) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', String(px));
      svg.setAttribute('height', String(px));
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      svg.style.display = 'block';
      svg.style.flex = '0 0 auto';
      return svg;
    }

    static strokeAttrs(el) {
      el.setAttribute('fill', 'none');
      el.setAttribute('stroke', 'currentColor');
      el.setAttribute('stroke-width', '2');
      el.setAttribute('stroke-linecap', 'round');
      el.setAttribute('stroke-linejoin', 'round');
    }

    static inlineSvg(id, px) {
      const key = String(id || '').trim();
      if (!key) return null;

      if (key === 'lucide:menu') {
        const svg = this.svgBase(px);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        this.strokeAttrs(path);
        svg.appendChild(path);
        return svg;
      }

      if (key === 'lucide:chevron-up') {
        const svg = this.svgBase(px);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'm18 15-6-6-6 6');
        this.strokeAttrs(path);
        svg.appendChild(path);
        return svg;
      }

      if (key === 'lucide:moon') {
        const svg = this.svgBase(px);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M12 3a7.5 7.5 0 0 0 9 9A9 9 0 1 1 12 3Z');
        this.strokeAttrs(path);
        svg.appendChild(path);
        return svg;
      }

      if (key === 'lucide:sun') {
        const svg = this.svgBase(px);

        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx', '12');
        c.setAttribute('cy', '12');
        c.setAttribute('r', '4');
        this.strokeAttrs(c);
        svg.appendChild(c);

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

        for (const r of rays) {
          const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          l.setAttribute('x1', String(r[0]));
          l.setAttribute('y1', String(r[1]));
          l.setAttribute('x2', String(r[2]));
          l.setAttribute('y2', String(r[3]));
          this.strokeAttrs(l);
          svg.appendChild(l);
        }

        return svg;
      }

      return null;
    }

    static node(icon, { size } = {}) {
      const px = Number.isFinite(size) ? size : 18;
      if (this.isIconifyId(icon)) {
        const id = String(icon).trim();
        const svg = this.inlineSvg(id, px);
        if (svg) return svg;
        const span = document.createElement('span');
        span.className = 'iconify';
        span.setAttribute('data-icon', id);
        span.style.fontSize = `${px}px`;
        return span;
      }
      const t = document.createElement('span');
      t.textContent = icon || '•';
      t.style.fontSize = `${px}px`;
      return t;
    }

    static mount(el, icon, opts) {
      if (!el) return;
      Dom.clear(el);
      el.appendChild(this.node(icon, opts));
    }
  }

  class ThemeManager {
    constructor({ storageKey }) {
      this.storageKey = storageKey;
      this.root = document.documentElement;
      this.toggleBtn = Dom.id('themeToggle');
      this.themeMeta = document.querySelector('meta[name="theme-color"]');
      this.mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
    }

    isStoredTheme(v) {
      return v === 'light' || v === 'dark';
    }

    getStoredTheme() {
      const v = Storage.get(this.storageKey);
      return this.isStoredTheme(v) ? v : null;
    }

    getInitialTheme() {
      const stored = this.getStoredTheme();
      if (stored) return stored;
      const prefersLight = this.mq ? this.mq.matches : false;
      return prefersLight ? 'light' : 'dark';
    }

    themeColor(theme) {
      return theme === 'light' ? '#f7f9ff' : '#070a12';
    }

    syncThemeColor(theme) {
      if (!this.themeMeta) return;
      this.themeMeta.setAttribute('content', this.themeColor(theme));
    }

    apply(theme) {
      if (theme === 'light') this.root.setAttribute('data-theme', 'light');
      else this.root.removeAttribute('data-theme');
      this.syncThemeColor(theme);
    }

    get current() {
      return this.root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    }

    syncToggleLabel() {
      if (!this.toggleBtn) return;
      const isLight = this.current === 'light';
      Dom.clear(this.toggleBtn);
      this.toggleBtn.appendChild(
        IconRenderer.node(isLight ? 'lucide:sun' : 'lucide:moon', { size: 18 }),
      );
      this.toggleBtn.setAttribute(
        'aria-label',
        isLight ? 'Switch to dark theme' : 'Switch to light theme',
      );
      this.toggleBtn.setAttribute('title', isLight ? 'Light theme' : 'Dark theme');
    }

    bind() {
      if (!this.toggleBtn) return;
      this.syncToggleLabel();
      this.toggleBtn.addEventListener('click', () => {
        const next = this.current === 'light' ? 'dark' : 'light';
        this.apply(next);
        Storage.set(this.storageKey, next);
        this.syncToggleLabel();
      });
    }

    bindSystem() {
      if (!this.mq) return;
      const handler = (e) => {
        if (this.getStoredTheme()) return;
        const next = e && e.matches ? 'light' : 'dark';
        this.apply(next);
        this.syncToggleLabel();
      };
      if (this.mq.addEventListener) this.mq.addEventListener('change', handler);
      else if (this.mq.addListener) this.mq.addListener(handler);
    }

    init() {
      this.apply(this.getInitialTheme());
      this.bind();
      this.bindSystem();
    }
  }

  class Debounce {
    static wrap(fn, ms) {
      let t;
      return function debounced(...args) {
        clearTimeout(t);
        t = window.setTimeout(() => fn.apply(this, args), ms);
      };
    }
  }

  class Github {
    static url(repo) {
      return `https://github.com/tarekmasryo/${repo}`;
    }
  }

  const UrlState = Object.freeze({
    base: '#projects',
    setProject(repo) {
      const r = String(repo || '').trim();
      if (!r) return;
      const next = `${this.base}?project=${encodeURIComponent(r)}`;
      if (history && history.replaceState) history.replaceState(null, '', next);
    },
    clearProject() {
      if (history && history.replaceState) history.replaceState(null, '', this.base);
    },
    getProject() {
      const h = String(window.location.hash || '');
      if (!h.startsWith(this.base)) return null;
      const parts = h.split('?');
      if (parts.length < 2) return null;
      const params = new URLSearchParams(parts.slice(1).join('?'));
      const p = params.get('project');
      return p ? String(p) : null;
    },
  });

  class ImageResolver {
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
      const bases = Array.from(new Set([slug, raw].filter(Boolean)));

      const out = [];
      for (const b of bases) {
        const encoded = encodeURIComponent(b);
        for (const ext of CONFIG.imageExtensions) {
          out.push(`${CONFIG.assetsDir}/${encoded}.${ext}`);
        }
      }
      return out;
    }

    static mount(container, project, { mode } = { mode: 'card' }) {
      if (!container) return;
      container.classList.remove('is-icon');
      Dom.clear(container);

      const candidates = [
        ...this.candidates(project.imageBase),
        ...this.candidates(project.repo),
        ...this.candidates(String(project.repo || '').toLowerCase()),
      ];

      if (!candidates.length) {
        this.mountFallback(container, project);
        return;
      }

      const img = document.createElement('img');
      img.className = 'p-img';
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
        img.src = candidates[i++];
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

  class Reveal {
    constructor({ threshold }) {
      this.threshold = threshold;
      this.observer = this.create();
    }

    create() {
      if (!('IntersectionObserver' in window)) return null;
      return new IntersectionObserver(
        (entries, obs) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        },
        { threshold: this.threshold },
      );
    }

    observeAll(selector) {
      if (!this.observer) return;
      for (const el of Dom.qsa(selector)) this.observer.observe(el);
    }

    prime(selector) {
      const h = window.innerHeight || 800;
      for (const el of Dom.qsa(selector)) {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92) el.classList.add('in');
      }
    }
  }

  class NavHighlighter {
    constructor({ sections, links }) {
      this.sections = sections;
      this.links = links;
    }

    update() {
      const y = window.scrollY;
      let current = 'home';

      for (const s of this.sections) {
        const id = s.id || 'home';
        const top = s.getBoundingClientRect().top + window.scrollY;
        if (y >= top - 220) current = id;
      }

      for (const a of this.links) {
        const href = a.getAttribute('href') || '';
        const active = href.slice(1) === current;
        a.classList.toggle('active', active);
        if (active) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      }
    }
  }

  class Typewriter {
    constructor({ el, lines }) {
      this.el = el;
      this.lines = lines;
      this.lineIdx = 0;
      this.charIdx = 0;
      this.deleting = false;
      this.TYPE_MS = 78;
      this.DEL_MS = 46;
      this.HOLD_MS = 2300;
    }

    reducedMotion() {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    start() {
      if (!this.el) return;
      if (this.reducedMotion()) {
        this.el.textContent = this.lines[0] || '';
        return;
      }
      this.tick();
    }

    tick() {
      const full = this.lines[this.lineIdx] || '';

      if (!this.deleting) {
        this.charIdx += 1;
        this.el.textContent = full.slice(0, this.charIdx);

        if (this.charIdx >= full.length) {
          this.deleting = true;
          window.setTimeout(() => this.tick(), this.HOLD_MS);
          return;
        }

        window.setTimeout(() => this.tick(), this.TYPE_MS);
        return;
      }

      this.charIdx -= 1;
      this.el.textContent = full.slice(0, Math.max(0, this.charIdx));

      if (this.charIdx <= 0) {
        this.deleting = false;
        this.lineIdx = (this.lineIdx + 1) % this.lines.length;
        window.setTimeout(() => this.tick(), 780);
        return;
      }

      window.setTimeout(() => this.tick(), this.DEL_MS);
    }
  }

  class ParticlesBackground {
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
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    init() {
      if (!this.canvas) return;
      if (this.reducedMotion()) return;

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
      this.canvas.style.width = `${this.w}px`;
      this.canvas.style.height = `${this.h}px`;

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
      const key = (cx, cy) => (cx << 16) ^ cy;

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

      this.ctx.lineWidth = 1;

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
              this.ctx.strokeStyle = `rgba(79,140,255,${0.18 * alpha})`;
              this.ctx.beginPath();
              this.ctx.moveTo(a.x, a.y);
              this.ctx.lineTo(b.x, b.y);
              this.ctx.stroke();
            }
          }
        }
      }
    }

    drawDots() {
      this.ctx.fillStyle = 'rgba(79,140,255,.55)';
      for (const p of this.particles) {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        this.ctx.fill();
      }
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

  class Project {
    constructor({
      cat,
      icon,
      type,
      title,
      desc,
      repo,
      imageBase,
      priority,
      problem,
      approach,
      signals,
      stack,
      alt,
      tags,
      impact,
    }) {
      this.cat = cat;
      this.icon = icon;
      this.type = type;
      this.title = title;
      this.desc = desc;
      this.repo = repo;
      this.imageBase = imageBase;

      const pr = Number(priority);
      this.priority = Number.isFinite(pr) ? pr : 0;

      this.problem = problem;
      this.approach = approach;
      this.signals = signals;
      this.stack = Array.isArray(stack) ? stack : null;
      this.alt = alt;

      this.tags = Array.isArray(tags) ? tags : Project.buildTags({ cat, type, title, desc });
      this.stack = Array.isArray(this.stack)
        ? this.stack
        : Project.buildStack({ cat, type, title, desc, repo, tags: this.tags });

      this.impact =
        typeof impact === 'string' ? impact : Project.buildImpact({ cat, type, title, desc });
    }

    static categoryLabel(cat) {
      const map = {
        healthcare: 'Healthcare',
        finance: 'Finance & Risk',
        social: 'Social',
        genai: 'GenAI & Tools',
        analytics: 'Analytics',
      };
      return map[cat] || 'Project';
    }

    static buildTags({ cat, type, title, desc }) {
      const text = `${title || ''} ${desc || ''} ${type || ''}`.toLowerCase();

      const out = [];
      const push = (t) => {
        if (!t) return;
        const v = String(t).trim();
        if (!v) return;
        if (out.includes(v)) return;
        out.push(v);
      };

      const rules = [
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
      ];

      for (const [needle, tag] of rules) {
        if (out.length >= 3) break;
        if (text.includes(needle)) push(tag);
      }

      if (out.length < 2) push(Project.categoryLabel(cat));
      if (out.length < 3 && type) push(type);

      return out.slice(0, 3);
    }

    static buildImpact({ cat, type, title, desc }) {
      const t = (type || '').toLowerCase();
      const text = `${title || ''} ${desc || ''}`.toLowerCase();

      if (text.includes('dashboard')) {
        return 'Outcome: decision-ready dashboard for monitoring and triage.';
      }
      if (t.includes('dataset') || text.includes('dataset')) {
        return 'Outcome: ML-ready dataset package with schema and reproducible baselines.';
      }
      if (text.includes('rag') || text.includes('llm') || cat === 'genai') {
        return 'Outcome: production-oriented GenAI workflow with reliability guardrails.';
      }
      if (text.includes('risk') || cat === 'finance') {
        return 'Outcome: risk-focused ML pipeline with evaluation for real decisions.';
      }
      return 'Outcome: end-to-end project with clear evaluation and deployable artifacts.';
    }

    static buildStack({ cat, type, title, desc, repo, tags }) {
      const text = [title, desc, type, repo]
        .concat(Array.isArray(tags) ? tags : [])
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const out = [];
      const push = (t) => {
        if (!t) return;
        const v = String(t).trim();
        if (!v) return;
        if (out.includes(v)) return;
        out.push(v);
      };

      push('Python');

      const t = (type || '').toLowerCase();
      if (t.includes('dataset') || text.includes('dataset')) {
        push('Pandas');
        push('Jupyter');
        push('NumPy');
      }

      if (text.includes('pandas')) push('Pandas');
      if (text.includes('numpy')) push('NumPy');
      if (text.includes('polars')) push('Polars');
      if (text.includes('duckdb')) push('DuckDB');

      if (text.includes('streamlit')) push('Streamlit');
      if (text.includes('plotly')) push('Plotly');
      if (text.includes('gradio')) push('Gradio');

      if (text.includes('fastapi')) {
        push('FastAPI');
        push('Pydantic');
      }
      if (text.includes('docker')) push('Docker');

      if (text.includes('postgres') || text.includes('pgvector')) push('PostgreSQL / pgvector');
      if (text.includes('sqlite')) push('SQLite');
      if (text.includes('mysql')) push('MySQL');
      if (text.includes('mongodb')) push('MongoDB');
      if (text.includes('redis')) push('Redis');

      if (text.includes('faiss')) push('FAISS');
      if (text.includes('chroma')) push('Chroma');
      if (text.includes('pinecone')) push('Pinecone');
      if (text.includes('weaviate')) push('Weaviate');

      if (
        text.includes('rag') ||
        text.includes('retrieval') ||
        text.includes('llm') ||
        cat === 'genai'
      ) {
        push('Transformers');
        if (text.includes('langchain')) push('LangChain');
        if (text.includes('llamaindex')) push('LlamaIndex');
        if (text.includes('ragas')) push('RAGAS');
        if (text.includes('deepeval')) push('DeepEval');
      }

      if (text.includes('scikit') || text.includes('sklearn') || text.includes('ml '))
        push('scikit-learn');
      if (text.includes('pytorch')) push('PyTorch');
      if (text.includes('tensorflow')) push('TensorFlow');
      if (text.includes('xgboost') || text.includes('xgb')) push('XGBoost');
      if (text.includes('lightgbm') || text.includes('lgbm')) push('LightGBM');

      if (text.includes('telemetry') || text.includes('observability') || text.includes('monitor'))
        push('OpenTelemetry');

      if (out.length < 4) {
        push('Pandas');
        push('scikit-learn');
      }

      return out.slice(0, 7);
    }
    get githubUrl() {
      return Github.url(this.repo);
    }

    matchesQuery(q) {
      const query = (q || '').trim().toLowerCase();
      if (!query) return true;
      const hay = [this.title, this.desc, this.type, this.cat]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return hay.includes(query);
    }
  }

  class ProjectCollection {
    constructor(projects) {
      this.projects = (Array.isArray(projects) ? projects.slice() : []).sort((a, b) => {
        const pa = Number(a && a.priority) || 0;
        const pb = Number(b && b.priority) || 0;
        if (pb !== pa) return pb - pa;
        const ta = String((a && a.title) || '');
        const tb = String((b && b.title) || '');
        return ta.localeCompare(tb);
      });
    }

    findByRepo(repo) {
      if (!repo) return null;
      const key = String(repo).trim();
      if (!key) return null;
      return this.projects.find((p) => p && p.repo === key) || null;
    }

    byCategory(cat) {
      if (cat === 'all') return this.projects.slice();
      return this.projects.filter((p) => p.cat === cat);
    }

    filter({ cat, query }) {
      return this.byCategory(cat).filter((p) => p.matchesQuery(query));
    }

    visible({ items, query, showAll, limit }) {
      if (query && query.trim()) return items;
      return showAll ? items : items.slice(0, limit);
    }
  }

  class ProjectModal {
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
      this.active = null;
    }

    isOpen() {
      return !!this.root && this.root.classList.contains('show');
    }

    open(project) {
      if (!this.root) return;
      this.active = project;
      this.lastFocus = document.activeElement;

      if (project && project.repo) UrlState.setProject(project.repo);

      this.root.classList.add('show');
      this.root.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');

      if (this.typeEl) this.typeEl.textContent = project.type || 'Project';
      if (this.titleEl) this.titleEl.textContent = project.title || '—';

      if (this.mediaEl) {
        Dom.clear(this.mediaEl);
        ImageResolver.mount(this.mediaEl, project, { mode: 'modal' });
      }

      if (this.summaryEl) this.summaryEl.textContent = project.problem || project.desc || '—';

      this.setList(this.approachEl, Array.isArray(project.approach) ? project.approach : null);
      this.setList(this.signalsEl, Array.isArray(project.signals) ? project.signals : null);
      this.setTags(this.stackEl, Array.isArray(project.stack) ? project.stack : null);

      if (this.repoEl) {
        this.repoEl.href = project.githubUrl;
        this.repoEl.style.display = 'inline-flex';
      }

      if (this.altEl) {
        if (project.alt && project.alt.href) {
          this.altEl.href = project.alt.href;
          this.altEl.textContent = project.alt.label || 'Secondary link';
          this.altEl.style.display = 'inline-flex';
        } else {
          this.altEl.style.display = 'none';
        }
      }

      if (this.closeBtn) this.closeBtn.focus();
    }

    close() {
      if (!this.root) return;
      this.root.classList.remove('show');
      this.root.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');

      UrlState.clearProject();

      const toFocus = this.lastFocus;
      this.lastFocus = null;
      this.active = null;

      if (toFocus && toFocus.focus) toFocus.focus();
    }

    setList(ul, items) {
      if (!ul) return;
      const block = ul.closest('.modal-block');

      if (!items || !items.length) {
        Dom.clear(ul);
        if (block) block.style.display = 'none';
        return;
      }

      if (block) block.style.display = '';
      Dom.clear(ul);
      for (const x of items) {
        const li = document.createElement('li');
        li.textContent = x;
        ul.appendChild(li);
      }
    }

    setTags(container, items) {
      if (!container) return;
      const block = container.closest('.modal-block');

      if (!items || !items.length) {
        Dom.clear(container);
        if (block) block.style.display = 'none';
        return;
      }

      if (block) block.style.display = '';
      Dom.clear(container);
      for (const x of items) {
        const s = document.createElement('span');
        s.className = 'tag';
        s.textContent = x;
        container.appendChild(s);
      }
    }

    bind() {
      if (!this.root) return;

      const closers = Dom.qsa('[data-close="1"]', this.root);
      for (const el of closers) el.addEventListener('click', () => this.close());

      if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());

      document.addEventListener('keydown', (e) => {
        if (!this.isOpen()) return;
        if (e.key === 'Escape') this.close();
      });
    }
  }

  class PortfolioApp {
    constructor() {
      this.grid = Dom.id('projectsGrid');
      this.projectsMeta = Dom.id('projectsMeta');
      this.projectsToggle = Dom.id('projectsToggle');

      this.searchInput = Dom.id('projectSearch');
      this.clearSearch = Dom.id('clearSearch');

      this.scrollProgress = Dom.id('scrollProgress');
      this.topBtn = Dom.id('topBtn');
      this.navBar = Dom.id('navBar');
      this.navLinks = Dom.qsa('nav a');
      this.sections = Dom.qsa('main.hero, section');

      this.brandBtn = Dom.id('brandHome');

      this.techToggle = Dom.id('techToggle');
      this.fullTech = Dom.id('fullTech');

      this.currentCat = 'all';
      this.showAll = false;
      this.searchQuery = '';

      this.theme = new ThemeManager({ storageKey: CONFIG.themeStorageKey });
      this.reveal = new Reveal({ threshold: CONFIG.revealThreshold });
      this.nav = new NavHighlighter({ sections: this.sections, links: this.navLinks });

      this.toast = new Toast(Dom.id('toast'));
      this.emailCopy = new EmailCopy({ selector: '[data-copy-email="1"]', toast: this.toast });

      this.projects = new ProjectCollection(PROJECTS_RAW.map((p) => new Project(p)));
      this.modal = new ProjectModal(Dom.id('projectModal'));

      this.typewriter = new Typewriter({
        el: Dom.id('heroLoop'),
        lines: [
          'Production AI, from data to deployment.',
          'Deployable APIs with FastAPI and Docker.',
          'Dashboards that drive operational decisions.',
          'Monitoring, alerts, and model health checks.',
          'Evaluation and calibration for reliable models.',
          'Drift and data quality checks built in.',
          'Cost and latency tradeoffs engineered by design.',
        ],
      });

      this.bg = new ParticlesBackground(Dom.id('bgCanvas'));
    }

    setYear() {
      const y = Dom.id('year');
      if (y) y.textContent = String(new Date().getFullYear());
    }

    openProjectFromHash() {
      const repo = UrlState.getProject();
      if (!repo) return;
      const p = this.projects.findByRepo(repo);
      if (p) this.modal.open(p);
    }

    render() {
      const query = (this.searchQuery || '').trim();
      const items = this.projects.filter({ cat: this.currentCat, query });
      const total = items.length;
      const limit = CONFIG.projectLimit || 12;
      const visible = this.projects.visible({ items, query, showAll: this.showAll, limit });

      if (this.grid) {
        this.grid.innerHTML = '';
        for (const p of visible) this.grid.appendChild(this.createProjectCard(p));
      }

      if (this.projectsMeta) {
        if (total === 0) {
          this.projectsMeta.textContent = query
            ? 'No projects match your search.'
            : 'No projects to show.';
        } else if (query) {
          this.projectsMeta.textContent = `Found ${total} project${total === 1 ? '' : 's'}`;
        } else if (total <= limit) {
          this.projectsMeta.textContent = `${total} project${total === 1 ? '' : 's'}`;
        } else {
          this.projectsMeta.textContent = `Showing ${visible.length} of ${total} projects`;
        }
      }

      if (this.projectsToggle) {
        if (query || total <= limit) {
          this.projectsToggle.style.display = 'none';
        } else {
          this.projectsToggle.style.display = 'inline-flex';
          this.projectsToggle.textContent = this.showAll ? 'Show less' : 'View all projects';
          this.projectsToggle.setAttribute('aria-expanded', this.showAll ? 'true' : 'false');
        }
      }

      this.reveal.observeAll('.fade');
    }

    createProjectCard(project) {
      const card = document.createElement('article');
      card.className = 'card p-card fade';
      card.setAttribute('aria-label', project.title);
      card.setAttribute('role', 'button');
      card.setAttribute('aria-haspopup', 'dialog');
      card.tabIndex = 0;

      const top = document.createElement('div');
      top.className = 'p-top';
      ImageResolver.mount(top, project, { mode: 'card' });

      const body = document.createElement('div');
      body.className = 'p-body';

      const typeBar = document.createElement('div');
      typeBar.className = 'p-typebar';
      typeBar.textContent = project.type;

      const h = document.createElement('h3');
      h.textContent = project.title;

      const impact = document.createElement('p');
      impact.className = 'p-impact';
      impact.textContent = project.impact;

      const d = document.createElement('p');
      d.textContent = project.desc;

      const tags = document.createElement('div');
      tags.className = 'p-tags';
      (Array.isArray(project.tags) ? project.tags : []).forEach((t) => {
        const chip = document.createElement('span');
        chip.className = 'tag';
        chip.textContent = t;
        tags.appendChild(chip);
      });

      const a = document.createElement('a');
      a.className = 'btn repo';
      a.href = project.githubUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = 'View Repo';

      body.append(h, impact, d, tags, a);
      card.append(typeBar, top, body);

      const openDetails = () => this.modal.open(project);

      card.addEventListener('click', (e) => {
        const isLink = e.target && e.target.closest && e.target.closest('a');
        if (isLink) return;
        openDetails();
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDetails();
        }
      });

      return card;
    }

    bindFilters() {
      const btns = Dom.qsa('.fbtn');
      for (const b of btns) {
        b.addEventListener('click', () => {
          for (const x of btns) x.classList.remove('active');
          b.classList.add('active');
          this.currentCat = b.dataset.cat || 'all';
          this.showAll = false;
          this.render();
        });
      }
    }

    bindSearch() {
      if (!this.searchInput) return;

      const syncClear = () => {
        if (!this.clearSearch) return;
        this.clearSearch.style.display = this.searchInput.value ? 'flex' : 'none';
      };

      const apply = () => {
        this.searchQuery = this.searchInput.value || '';
        this.showAll = false;
        this.render();
        syncClear();
      };

      this.searchInput.addEventListener('input', Debounce.wrap(apply, 80));

      if (this.clearSearch) {
        this.clearSearch.addEventListener('click', () => {
          this.searchInput.value = '';
          apply();
          this.searchInput.focus();
        });
      }

      syncClear();
    }

    bindProjectsToggle() {
      if (!this.projectsToggle) return;
      this.projectsToggle.addEventListener('click', () => {
        this.showAll = !this.showAll;
        this.render();
      });
    }

    bindTechToggle() {
      if (!this.techToggle || !this.fullTech) return;

      const setOpen = (open) => {
        this.fullTech.hidden = !open;
        this.techToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        this.techToggle.textContent = open ? 'Hide Full Stack' : 'View Full Stack';
        if (open) this.reveal.observeAll('#fullTech .fade');
      };

      setOpen(false);

      this.techToggle.addEventListener('click', () => {
        setOpen(this.fullTech.hidden);
      });
    }

    bindScroll() {
      const onScroll = () => {
        const doc = document.documentElement;
        const st = doc.scrollTop || document.body.scrollTop || 0;
        const max = doc.scrollHeight - doc.clientHeight;

        if (this.scrollProgress) {
          const pct = max ? (st / max) * 100 : 0;
          this.scrollProgress.style.width = `${pct}%`;
        }

        if (this.topBtn) this.topBtn.classList.toggle('show', st > 800);
        if (this.navBar) this.navBar.classList.toggle('scrolled', st > 10);

        this.nav.update();
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    bindTopButton() {
      if (!this.topBtn) return;
      this.topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    bindMobileMenu() {
      const toggle = Dom.id('navToggle');
      const links = Dom.id('navLinks');
      if (!toggle || !links) return;

      const close = () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      };

      const open = () => {
        links.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      };

      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (links.classList.contains('open')) close();
        else open();
      });

      for (const a of links.querySelectorAll('a')) {
        a.addEventListener('click', () => close());
      }

      document.addEventListener('click', (e) => {
        if (!links.classList.contains('open')) return;
        if (links.contains(e.target) || toggle.contains(e.target)) return;
        close();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
      });
    }

    bindBrandHome() {
      if (!this.brandBtn) return;
      this.brandBtn.addEventListener('click', () => {
        const home = Dom.id('home');
        if (home) home.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    bindSmoothAnchors() {
      for (const a of Dom.qsa('a[href^="#"]')) {
        a.addEventListener('click', (e) => {
          const href = a.getAttribute('href');
          const target = href ? document.querySelector(href) : null;
          if (!target) return;
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }

    init() {
      this.theme.init();
      this.setYear();
      this.typewriter.start();

      this.emailCopy.init();

      this.modal.bind();

      this.render();
      this.openProjectFromHash();
      window.addEventListener('hashchange', () => this.openProjectFromHash());
      this.reveal.observeAll('.fade');
      this.bindFilters();
      this.bindProjectsToggle();
      this.bindSearch();
      this.bindTechToggle();
      this.bindScroll();
      this.bindTopButton();
      this.bindBrandHome();
      this.bindSmoothAnchors();
      this.bindMobileMenu();

      this.reveal.prime('.fade');
      document.documentElement.classList.remove('preload');
      this.bg.init();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp().init();
  });
})();
