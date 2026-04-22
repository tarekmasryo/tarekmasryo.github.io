const PROJECTS_RAW = [
  {
    cat: 'genai',
    icon: 'lucide:activity',
    type: 'Workflow',
    title: 'LLM Production Telemetry Workflow',
    desc: 'LLM observability workflow over 9,000 interactions, 1,595 sessions, and 438 users to review quality, latency, failures, routing, and cost in production GenAI systems.',
    priority: 92,
    problem:
      'How do you measure and improve LLM/RAG reliability in production (quality, latency, failures, and cost) with evidence and repeatable evaluation?',
    approach: [
      'Define a strict, schema-friendly log format for requests, retrieval, responses, and tool calls.',
      'Model evaluation as a regression problem: compare runs, detect regressions, and gate rollout.',
      'Track cost/latency budgets and failure modes (timeouts, retries, fallbacks) to inform routing decisions.',
    ],
    signals: [
      '9,000 interactions · 1,595 sessions · 438 users',
      'Quality metrics + human review flags (where available)',
      'Latency, error rates, and failure categories',
      'Cost per request / per conversation, budget burn',
      'Drift / distribution shifts on inputs and retrieval behavior',
    ],
    stack: ['Python', 'Pandas', 'FastAPI', 'Plotly', 'MLflow', 'Jupyter'],
    tags: ['LLMOps', 'Observability', 'Telemetry'],
    repo: 'llm-system-ops-production-telemetry-sft-data',
    imageBase: 'llm-system-ops-production-telemetry-sft-data',
    impact: 'Outcome: decision-ready observability workflow for reviewing quality, latency, failures, routing, and cost in production LLM systems.',
  },

  {
    cat: 'healthcare',
    icon: 'lucide:building-2',
    type: 'Healthcare ML',
    title: 'Hospital Deterioration — Next 12h Early Warning',
    desc: 'Early-warning risk scoring baseline with leak-safe evaluation and decision-oriented reporting (next 12h). XGBoost: ROC-AUC 0.9519 / PR-AUC 0.6909 on held-out data.',
    priority: 95,
    problem:
      'How can clinicians and operators identify patients at risk of deterioration within the next 12 hours while avoiding leakage and producing decision-ready outputs?',
    approach: [
      'Leak-safe splits and evaluation aligned with time-dependent clinical workflows.',
      'Calibrated risk scores and threshold candidates for different review capacities.',
      'A dashboard-style review view to support triage and auditability.',
    ],
    signals: [
      'XGBoost held-out: ROC-AUC 0.9519 / PR-AUC 0.6909',
      'Logistic Regression + HistGradientBoosting baselines for comparison',
      'Threshold policy tables: balanced, high-recall, and low-alert regimes',
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
    problem:
      'How can wellness and behavior data be translated into a decision-ready view that surfaces the most important lifestyle signals without overwhelming the user?',
    approach: [
      'Model the experience around core health KPIs, segment views, and trend summaries rather than raw charts alone.',
      'Combine behavioral features, wellbeing indicators, and clean drill-downs to support quick interpretation.',
      'Use dashboard-style storytelling so insights are scan-friendly for product, ops, and end-user review.',
    ],
    signals: [
      'Lifestyle and wellbeing KPI summaries across key segments',
      'Trend and distribution views for habit patterns and health indicators',
      'Decision-friendly layouts that reduce scan time and improve interpretability',
    ],
    stack: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'Dashboard Design'],
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
    desc: 'Calibrated fraud risk scoring + threshold policies, KPI monitoring, and SHAP explainability. RF F1 0.882 · XGBoost F1 0.876 on validation.',
    priority: 100,
    problem:
      'How can a fraud model be operated as a decision system (not just a classifier) with thresholds tuned to cost and review capacity?',
    approach: [
      'Train baseline models, then calibrate probabilities for reliable risk scores.',
      'Define threshold policies that balance cost, recall, and reviewer workload.',
      'Expose decision KPIs, segment cuts, and explanations to guide triage and audits.',
    ],
    signals: [
      'Random Forest validation F1: 0.882 · XGBoost: 0.876',
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
    problem:
      'How can accident likelihood be scored in a way that supports prevention decisions, not just offline model evaluation?',
    approach: [
      'Build a leak-safe tabular risk workflow with feature preparation, validation, and interpretable outputs.',
      'Evaluate threshold trade-offs so the model can support intervention capacity and alert policy design.',
      'Frame outputs as operational risk slices for reviewers, planners, and safety stakeholders.',
    ],
    signals: [
      'Classification quality with threshold-aware reporting',
      'Segment-level risk views to identify higher-risk scenarios',
      'Explainability-ready outputs for safer decision review',
    ],
    stack: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib', 'Risk Modeling'],
    tags: ['Road Safety', 'Risk Modeling', 'Explainability'],
    repo: 'road-accident-risk-ps5e10',
    repoUrl: 'https://github.com/tarekmasryo/road-accident-risk-ps5e10',
    imageBase: 'Road Accident Risk',
  },

  {
    cat: 'social',
    icon: 'lucide:video',
    type: 'Dashboard',
    title: 'Short Video Intelligence Dashboard',
    desc: 'Virality and engagement analytics for short-form content with decision-ready views.',
    priority: 80,
    problem:
      'How can short-form content performance be monitored in a way that helps creators or operators spot momentum, engagement quality, and likely breakout content early?',
    approach: [
      'Surface engagement, reach, and virality indicators in a compact dashboard with fast comparison views.',
      'Highlight trend signals and content-level cuts so users can identify what is working without manual spreadsheet review.',
      'Design the UI around actionability: scan, compare, and prioritize the next content decisions quickly.',
    ],
    signals: [
      'Virality, engagement, and trend-oriented KPI panels',
      'Content comparison views for standout and underperforming posts',
      'Decision-ready summaries for prioritization and iteration',
    ],
    stack: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'Analytics Design'],
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
    type: 'Workflow',
    title: 'RAG Evaluation Workflow',
    desc: 'Multi-table RAG evaluation workflow for retrieval quality, answer quality, groundedness, and failure analysis across 3,824 QA runs and 93,375 retrieval events.',
    priority: 90,
    problem:
      'How do you evaluate RAG beyond a single score—separating retrieval failure from generation failure while tracking operational cost and latency?',
    approach: [
      'Provide realistic QA logs + corpus with retrieval traces to benchmark retrieval/reranking.',
      'Score answer quality and groundedness with citations + targeted error slices.',
      'Track latency/cost signals to iterate under budget constraints.',
    ],
    signals: [
      '3,824 QA eval runs · 93,375 retrieval events',
      'Correctness-risk baseline: Logistic Regression ROC-AUC 0.755',
      'Retrieval metrics (recall@k, MRR / nDCG when applicable)',
      'Answer quality + groundedness / citation coverage',
      'Operational telemetry: latency, token/cost budgets',
    ],
    stack: ['Python', 'Pandas', 'FAISS', 'pgvector', 'Jupyter'],
    tags: ['RAG Evaluation', 'Citations', 'Retrieval/Reranking'],
    repo: 'rag-qa-logs-corpus-data',
    imageBase: 'RAG QA Logs & Corpus Data',
    impact: 'Outcome: decision-ready RAG evaluation workflow for groundedness review, retrieval analysis, and rollout decisions.',
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
    problem:
      'How can EV charging infrastructure data be turned into a practical dashboard for comparing station coverage, connector mix, and power availability?',
    approach: [
      'Clean and normalize infrastructure attributes such as connector types, power tiers, and location signals.',
      'Expose map-oriented and KPI-oriented views to compare regions, station density, and charging capability.',
      'Structure the dashboard for quick scanability so infrastructure patterns are visible without deep manual filtering.',
    ],
    signals: [
      'Regional station coverage and connector distribution',
      'Power-class breakdowns and availability comparisons',
      'Interactive views built for exploration and operational interpretation',
    ],
    stack: ['Python', 'Pandas', 'Plotly', 'Geo Analytics', 'Dashboard Design'],
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

(() => {
  'use strict';

  const CONFIG = Object.freeze({
    assetsDir: 'assets',
    githubProfile: 'https://github.com/tarekmasryo',
    imageExtensions: ['webp'],
    revealThreshold: 0.12,
    projectLimit: 6,
    themeStorageKey: 'tm_theme',
  });

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
        const active = document.activeElement;
        ta.value = value;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        ta.setSelectionRange(0, ta.value.length);
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        if (active && typeof active.focus === 'function') active.focus();
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
      svg.style.display = 'block';
      svg.style.flex = '0 0 auto';
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
        const id = String(icon).trim();
        const localInline = new Set([
          'lucide:menu',
          'lucide:chevron-up',
          'lucide:moon',
          'lucide:sun',
        ]);
        if (localInline.has(id)) {
          const svg = this.inlineSvg(id, px);
          if (svg) return svg;
        }
        const span = document.createElement('span');
        span.className = 'iconify';
        span.setAttribute('data-icon', id);
        span.setAttribute('aria-hidden', 'true');
        span.style.fontSize = `${px}px`;
        span.style.display = 'inline-flex';
        span.style.lineHeight = '1';
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
    static hydrate() {}
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

  class Motion {
    static prefersReduced() {
      return Boolean(
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      );
    }

    static scrollBehavior() {
      return this.prefersReduced() ? 'auto' : 'smooth';
    }
  }

  class HistoryState {
    static canUse() {
      return Boolean(window.history && typeof window.history.replaceState === 'function');
    }

    static replace(url) {
      if (!this.canUse()) return;
      window.history.replaceState(null, '', url);
    }

    static push(url) {
      if (!window.history || typeof window.history.pushState !== 'function') return;
      window.history.pushState(null, '', url);
    }
  }

  class Github {
    static normalizeRepoSlug(repo) {
      const slug = String(repo || '').trim();
      return /^[A-Za-z0-9._-]+$/.test(slug) ? slug : '';
    }

    static url(repo) {
      const slug = this.normalizeRepoSlug(repo);
      if (!slug) return '';
      return `${CONFIG.githubProfile}/${slug}`;
    }
  }

  class UrlUtils {
    static isSafeHttpUrl(value) {
      const input = String(value || '').trim();
      if (!input) return false;
      try {
        const parsed = new URL(input, window.location.origin);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
      } catch {
        return false;
      }
    }
    static normalizeExternalUrl(value) {
      const input = String(value || '').trim();
      if (!input) return '';
      if (!this.isSafeHttpUrl(input)) return '';
      return new URL(input, window.location.origin).href;
    }
  }

  const UrlState = Object.freeze({
    base: '#projects',
    setProject(repo) {
      const r = String(repo || '').trim();
      if (!r) return;
      const next = `${this.base}?project=${encodeURIComponent(r)}`;
      HistoryState.replace(next);
    },
    clearProject() {
      HistoryState.replace(this.base);
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
      const out = [];
      const encodedRaw = encodeURIComponent(raw);
      for (const ext of CONFIG.imageExtensions) {
        out.push(`${CONFIG.assetsDir}/${encodedRaw}.${ext}`);
      }
      if (slug !== raw && slug !== raw.toLowerCase()) {
        for (const ext of CONFIG.imageExtensions) {
          out.push(`${CONFIG.assetsDir}/${slug}.${ext}`);
        }
      }
      return out;
    }
    static mount(container, project, { mode } = { mode: 'card' }) {
      if (!container) return;
      container.classList.remove('is-icon');
      Dom.clear(container);

      const seen = new Set();
      const dedup = (arr) => arr.filter((u) => (seen.has(u) ? false : (seen.add(u), true)));

      const candidates = dedup([
        ...this.candidates(project.imageBase),
        ...this.candidates(project.repo),
      ]);

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
      for (const el of Dom.qsa(selector)) {
        if (el.classList.contains('in')) continue;
        this.observer.observe(el);
      }
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
    getNavOffset() {
      const nav = document.getElementById('navBar');
      return nav ? nav.offsetHeight + 32 : 120;
    }
    update() {
      const y = window.scrollY;
      const offset = this.getNavOffset();
      let current = 'home';
      for (const s of this.sections) {
        const id = s.id || 'home';
        const top = s.getBoundingClientRect().top + window.scrollY;
        if (y >= top - offset) current = id;
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
      return Motion.prefersReduced();
    }
    start() {
      if (!this.el || !Array.isArray(this.lines) || this.lines.length === 0) return;
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
      return Motion.prefersReduced();
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
      repoUrl,
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
      this.cat = Project.cleanText(cat);
      this.icon = Project.cleanText(icon);
      this.type = Project.cleanText(type);
      this.title = Project.cleanText(title);
      this.desc = Project.cleanText(desc);
      this.repo = Project.cleanText(repo);
      this.repoUrl = UrlUtils.normalizeExternalUrl(repoUrl);
      this.imageBase = Project.cleanText(imageBase);
      const pr = Number(priority);
      this.priority = Number.isFinite(pr) ? pr : 0;
      this.problem = Project.cleanText(problem);
      this.approach = Project.cleanList(approach);
      this.signals = Project.cleanList(signals);
      this.stack = Project.cleanList(stack);
      this.alt = Project.cleanAlt(alt);
      this.tags = Project.cleanList(tags) || Project.buildTags(this);
      this.stack = this.stack || Project.buildStack({ ...this, tags: this.tags });
      this.impact = Project.cleanText(impact) || Project.buildImpact(this);
      this._searchText = null;
    }
    static cleanText(value) {
      const text = String(value || '')
        .replace(/\s+/g, ' ')
        .trim();
      return text || '';
    }
    static cleanList(values) {
      if (!Array.isArray(values)) return null;
      const out = [];
      for (const value of values) {
        const item = this.cleanText(value);
        if (!item || out.includes(item)) continue;
        out.push(item);
      }
      return out.length ? out : null;
    }
    static cleanAlt(alt) {
      if (!alt || typeof alt !== 'object') return null;
      const href = UrlUtils.normalizeExternalUrl(alt.href);
      const label = this.cleanText(alt.label);
      if (!href) return null;
      return { href, label: label || 'Secondary link' };
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
        if (!v || out.includes(v)) return;
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
      if (text.includes('dashboard'))
        return 'Outcome: decision-ready dashboard for monitoring and triage.';
      if (t.includes('dataset') || text.includes('dataset'))
        return 'Outcome: ML-ready dataset package with schema and reproducible baselines.';
      if (text.includes('workflow'))
        return 'Outcome: reproducible workflow with evaluation-ready artifacts.';
      if (text.includes('rag') || text.includes('llm') || cat === 'genai')
        return 'Outcome: production-oriented GenAI workflow with reliability guardrails.';
      if (text.includes('risk') || cat === 'finance')
        return 'Outcome: risk-focused ML pipeline with evaluation for real decisions.';
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
        if (!v || out.includes(v)) return;
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
    static normalizeSearchValue(value) {
      return String(value || '')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim();
    }
    get searchText() {
      if (this._searchText) return this._searchText;
      this._searchText = Project.normalizeSearchValue(
        [
          this.title,
          this.desc,
          this.type,
          this.cat,
          this.repo,
          this.impact,
          ...(Array.isArray(this.tags) ? this.tags : []),
          ...(Array.isArray(this.stack) ? this.stack : []),
        ]
          .filter(Boolean)
          .join(' '),
      );
      return this._searchText;
    }
    get githubUrl() {
      return this.repoUrl || Github.url(this.repo);
    }
    get hasRepoLink() {
      return UrlUtils.isSafeHttpUrl(this.githubUrl);
    }
    matchesQuery(q) {
      const query = Project.normalizeSearchValue(q);
      if (!query) return true;
      return this.searchText.includes(query);
    }
  }

  class ProjectCollection {
    constructor(projects) {
      this.projects = (Array.isArray(projects) ? projects.slice() : []).sort((a, b) => {
        const pa = Number(a && a.priority) || 0;
        const pb = Number(b && b.priority) || 0;
        if (pb !== pa) return pb - pa;
        return String((a && a.title) || '').localeCompare(String((b && b.title) || ''));
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

  class FocusTrap {
    constructor(el) {
      this.el = el;
      this._handler = null;
    }
    getFocusable() {
      return Array.from(
        this.el.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.closest('[hidden]'));
    }
    activate() {
      this._handler = (e) => {
        if (e.key !== 'Tab') return;
        const focusable = this.getFocusable();
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      this.el.addEventListener('keydown', this._handler);
    }
    deactivate() {
      if (this._handler) {
        this.el.removeEventListener('keydown', this._handler);
        this._handler = null;
      }
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
      this.previousHash = '';
      this.active = null;
      this.trap = root ? new FocusTrap(root.querySelector('.modal-card') || root) : null;
    }
    isOpen() {
      return !!this.root && this.root.classList.contains('show');
    }
    open(project) {
      if (!this.root || !project) return;
      this.active = project;
      this.lastFocus = document.activeElement;
      this.previousHash = String(window.location.hash || '');
      if (project.repo) UrlState.setProject(project.repo);
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
      this.setLink(this.repoEl, {
        href: project.hasRepoLink ? project.githubUrl : '',
        label: 'View Repo',
      });
      this.setLink(this.altEl, project.alt);
      if (this.trap) this.trap.activate();
      if (this.closeBtn) this.closeBtn.focus();
    }
    close() {
      if (!this.root) return;
      this.root.classList.remove('show');
      this.root.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (this.trap) this.trap.deactivate();
      this.setLink(this.repoEl, null);
      this.setLink(this.altEl, null);
      if (this.previousHash && !this.previousHash.startsWith(UrlState.base)) {
        HistoryState.replace(this.previousHash);
      } else {
        UrlState.clearProject();
      }
      const toFocus = this.lastFocus;
      this.lastFocus = null;
      this.previousHash = '';
      this.active = null;
      if (toFocus && toFocus.focus) toFocus.focus();
    }
    setLink(anchor, link) {
      if (!anchor) return;
      const href = link && UrlUtils.normalizeExternalUrl(link.href);
      const label = link && Project.cleanText(link.label);
      if (!href) {
        anchor.hidden = true;
        anchor.removeAttribute('href');
        return;
      }
      anchor.hidden = false;
      anchor.href = href;
      if (label) anchor.textContent = label;
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
      const closers = [...Dom.qsa('[data-close="1"]', this.root), this.closeBtn].filter(Boolean);
      for (const el of new Set(closers)) {
        el.addEventListener('click', () => this.close());
      }
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
          'RAG and LLM workflows built for real-world use.',
          'Evaluation, monitoring, and model health checks.',
          'Cost and latency trade-offs engineered by design.',
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
      if (!repo) {
        if (this.modal.isOpen()) this.modal.close();
        return;
      }
      const project = this.projects.findByRepo(repo);
      if (!project) {
        if (this.modal.isOpen()) this.modal.close();
        return;
      }
      if (this.modal.active && this.modal.active.repo === project.repo && this.modal.isOpen())
        return;
      this.modal.open(project);
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
          this.projectsToggle.hidden = true;
        } else {
          this.projectsToggle.hidden = false;
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
      const actions = document.createElement('div');
      actions.className = 'p-actions';
      const detailsBtn = document.createElement('button');
      detailsBtn.className = 'btn ghost small';
      detailsBtn.type = 'button';
      detailsBtn.textContent = 'View Details';
      detailsBtn.setAttribute('aria-haspopup', 'dialog');
      detailsBtn.addEventListener('click', () => this.modal.open(project));
      actions.append(detailsBtn);
      if (project.hasRepoLink) {
        const a = document.createElement('a');
        a.className = 'btn repo small';
        a.href = project.githubUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = 'View Repo';
        actions.append(a);
      }
      body.append(h, impact, d, tags, actions);
      card.append(typeBar, top, body);
      return card;
    }
    bindFilters() {
      const btns = Dom.qsa('.fbtn');
      for (const b of btns) {
        b.setAttribute('aria-pressed', b.classList.contains('active') ? 'true' : 'false');
        b.addEventListener('click', () => {
          for (const x of btns) {
            x.classList.remove('active');
            x.setAttribute('aria-pressed', 'false');
          }
          b.classList.add('active');
          b.setAttribute('aria-pressed', 'true');
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
        this.clearSearch.hidden = !this.searchInput.value;
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
    prefersReducedMotion() {
      return Motion.prefersReduced();
    }
    scrollBehavior() {
      return Motion.scrollBehavior();
    }
    scrollToHash(hash, { replace = false } = {}) {
      const href = String(hash || '').trim();
      if (!href || href === '#') return false;
      const target = document.querySelector(href);
      if (!target) return false;
      target.scrollIntoView({ behavior: this.scrollBehavior(), block: 'start' });
      if (replace) HistoryState.replace(href);
      else HistoryState.push(href);
      return true;
    }
    bindBrandHome() {
      if (!this.brandBtn) return;
      this.brandBtn.addEventListener('click', () => {
        if (this.scrollToHash('#home', { replace: true })) return;
        window.scrollTo({ top: 0, behavior: this.scrollBehavior() });
      });
    }
    bindSmoothAnchors() {
      for (const a of Dom.qsa('a[href^="#"]')) {
        a.addEventListener('click', (e) => {
          const href = String(a.getAttribute('href') || '').trim();
          if (!href || href === '#') return;
          const isCurrent = String(window.location.hash || '') === href;
          const changed = this.scrollToHash(href, { replace: isCurrent });
          if (!changed) return;
          e.preventDefault();
        });
      }
    }
    init() {
      this.theme.init();
      IconRenderer.hydrate(document);
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
