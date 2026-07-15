/*
 * Generated file. Do not edit directly.
 * Source of truth: projects.js, app.js, and the src module tree.
 */
(() => {
  'use strict';

/* projects.js */
const PROJECTS_RAW = [
  {
    cat: 'finance',
    icon: 'lucide:shield-check',
    type: 'Production System',
    title: 'Fraud Risk Ops Platform',
    desc: 'Production-structured fraud risk platform for turning model scores into review-ready decisions through API contracts, policy-driven thresholds, audit logging, batch jobs, monitoring hooks, and an analyst review console.',
    priority: 100,
    problem:
      'Fraud scoring only becomes useful when analysts can act on model output through clear thresholds, review queues, audit trails, and monitoring signals.',
    approach: [
      'Separates model scoring, policy decisions, validation, audit trails, persistence, batch jobs, and monitoring so each layer can be reviewed independently.',
      'Uses configurable threshold policies to turn calibrated risk scores into approve, decline, or review actions without changing the model artifact.',
      'Pairs the FastAPI inference service with an analyst-facing Streamlit console for score review, diagnostics, and operational decision support.',
    ],
    signals: [
      'Reference validation: RF F1 0.882 · XGBoost F1 0.876.',
      'Operational signals: PR-AUC / ROC-AUC review · calibration checks · review-volume KPIs · approvals/declines monitoring · drift cues · SHAP explanations.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'Pydantic',
      'Streamlit',
      'scikit-learn',
      'XGBoost',
      'Docker',
      'Redis',
      'SQLite',
      'Prometheus',
      'Grafana',
      'pytest',
    ],
    tags: [
      'Fraud Detection',
      'Risk Scoring',
      'Model Serving',
      'Threshold Policies',
      'Audit Logging',
      'Monitoring',
    ],
    repo: 'fraud-risk-ops-platform',
    imageBase: 'Fraud Risk Ops Platform',
    impact: 'Reference validation: RF F1 0.882 · XGBoost F1 0.876.',
  },
  {
    cat: 'genai',
    icon: 'lucide:search-check',
    type: 'RAG Evaluation',
    title: 'RAG QA Command Center',
    desc: 'RAG QA evaluation workspace for reviewing retrieval quality, hallucination exposure, configuration trade-offs, trace evidence, and review-policy simulation.',
    priority: 99,
    problem:
      'RAG systems are hard to trust when retrieval failures, hallucination exposure, and configuration trade-offs are hidden inside raw logs.',
    approach: [
      'Turns QA logs and retrieval traces into an operator review flow covering quality posture, retrieval diagnostics, risk slices, configuration comparison, and trace review.',
      'Uses policy simulation to inspect how review thresholds change workload and quality posture before rollout decisions.',
      'Exports evidence-style artifacts so RAG quality review can be repeated and shared instead of judged from isolated examples.',
    ],
    signals: [
      'Evaluation asset: 3,824 QA eval runs · 93,375 retrieval events.',
      'Companion evaluation baseline: Logistic Regression ROC-AUC 0.755.',
      'Review signals: retrieval metrics · groundedness review · citation coverage · trace inspection · latency signals · token/cost budgets.',
    ],
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy', 'Docker', 'pytest'],
    tags: [
      'RAG Evaluation',
      'Retrieval Diagnostics',
      'Hallucination Review',
      'Trace Review',
      'Policy Simulation',
    ],
    repo: 'rag-qa-command-center',
    imageBase: 'RAG QA Command Center',
    linkLabel: 'View Repo',
    alt: {
      href: 'https://github.com/tarekmasryo/rag-qa-logs-and-corpus',
      label: 'Eval Asset',
    },
    impact:
      '3,824 QA eval runs · 93,375 retrieval events · ROC-AUC 0.755 correctness-risk baseline.',
  },
  {
    cat: 'genai',
    icon: 'lucide:activity',
    type: 'LLMOps',
    title: 'LLMOps Telemetry Command Center',
    desc: 'LLMOps telemetry command center for reviewing reliability, latency, cost, routing-policy behavior, triage thresholds, drift signals, model health, and evidence exports.',
    priority: 98,
    problem:
      'LLM applications need more than aggregate dashboards; operators need telemetry that explains reliability, cost, drift, routing behavior, and triage pressure.',
    approach: [
      'Organizes offline interaction telemetry into operator-facing views for operating posture, risk hotspots, routing scenarios, triage simulation, and review queues.',
      'Separates validation, quality review, drift inspection, and evidence export so operational issues remain visible and auditable.',
      'Uses routing and triage views to compare policy behavior before changing thresholds or model-routing rules.',
    ],
    signals: [
      'Telemetry asset: 9,000 interactions · 1,595 sessions · 438 users.',
      'Operational signals: quality metrics · human review flags · latency · error rates · failure categories · cost burn · drift signals · routing behavior · triage thresholds.',
    ],
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy', 'Docker', 'pytest'],
    tags: ['LLMOps', 'Telemetry', 'Observability', 'Drift Signals', 'Routing Review', 'Triage'],
    repo: 'llmops-telemetry-command-center',
    imageBase: 'LLMOps Telemetry Command Center',
    linkLabel: 'View Repo',
    alt: {
      href: 'https://github.com/tarekmasryo/llm-production-telemetry',
      label: 'Telemetry Asset',
    },
    impact: '9,000 interactions · 1,595 sessions · 438 users.',
  },
  {
    cat: 'social',
    icon: 'lucide:message-square-text',
    type: 'NLP Workspace',
    title: 'Advanced ML Sentiment Lab',
    desc: 'Interactive ML review lab for sentiment classification with TF-IDF word/char features, multi-model training, ROC-AUC/PR-AUC evaluation, threshold tuning, error analysis, and live prediction.',
    priority: 97,
    problem:
      'A sentiment classifier is difficult to trust when model comparison, threshold tuning, error review, and live prediction are scattered across notebook cells.',
    approach: [
      'Builds a structured review workflow around data loading, validation, leakage-safe training, model comparison, and artifact export.',
      'Combines TF-IDF word and character n-gram pipelines to compare complementary text representations.',
      'Adds threshold-aware prediction and error review so users can inspect false positives and false negatives rather than relying on a fixed 0.5 cutoff.',
    ],
    signals: [
      'Evaluation signals: ROC-AUC/PR-AUC evaluation · model comparison · threshold tuning · confusion matrices · error analysis · live inference checks.',
      'Modeling coverage: Logistic Regression · Naive Bayes · Random Forest · tree-based classifiers where supported.',
    ],
    stack: ['Python', 'Streamlit', 'Plotly', 'scikit-learn', 'TF-IDF', 'Docker', 'pytest'],
    tags: [
      'NLP',
      'Sentiment Analysis',
      'Text Classification',
      'Threshold Tuning',
      'Error Analysis',
    ],
    repo: 'advanced-ml-sentiment-lab',
    imageBase: 'Advanced ML Sentiment Lab',
    impact:
      'Text classification · model comparison · ROC-AUC/PR-AUC evaluation · threshold tuning · error analysis.',
  },
  {
    cat: 'healthcare',
    icon: 'lucide:brain',
    type: 'Decision App',
    title: 'Health Intelligence Platform',
    desc: 'Health intelligence dashboard for digital wellbeing signals, risk scoring, cohort KPIs, threshold diagnostics, trends, and scenario simulation.',
    priority: 96,
    problem:
      'Digital wellbeing data needs to be translated into cohort-level risk views, threshold diagnostics, and scenario exploration before it becomes useful for decisions.',
    approach: [
      'Structures behavioral and wellbeing signals into KPI cards, cohort comparisons, trend views, and risk-scoring summaries.',
      'Adds threshold diagnostics and scenario simulation so users can compare practical intervention rules instead of only reading charts.',
    ],
    signals: [
      'Operational signals: wellbeing KPI summaries · segment views · trend patterns · risk scoring · threshold diagnostics · scenario simulation.',
      'Review focus: digital wellbeing · cohort analysis · risk prioritization · decision-oriented dashboarding.',
    ],
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'scikit-learn'],
    tags: ['Health Analytics', 'Wellbeing Risk', 'KPI Dashboard', 'Scenario Simulator'],
    repo: 'health-intelligence-platform',
    imageBase: 'Health Intelligence Platform',
    impact:
      'Digital wellbeing · risk scoring · cohort KPIs · threshold diagnostics · scenario simulation.',
  },
  {
    cat: 'social',
    icon: 'lucide:video',
    type: 'Decision App',
    title: 'Short Video Intelligence Dashboard',
    desc: 'Short-form video intelligence dashboard for virality scoring, engagement metrics, creator leaderboards, timing patterns, and segment benchmarks.',
    priority: 95,
    problem:
      'Short-form content performance is noisy; creators and operators need quick ways to compare momentum, engagement, timing, and segment behavior.',
    approach: [
      'Turns content-performance data into comparison views for virality signals, engagement review, creator analysis, timing patterns, and segment prioritization.',
      'Uses interactive filters and benchmarks to make platform and content slices easier to inspect without manual spreadsheet work.',
    ],
    signals: [
      'Operational signals: virality indicators · engagement KPIs · creator leaderboards · timing patterns · content comparison views · segment benchmarks.',
      'Review focus: creator insights · short-video analytics · prioritization signals.',
    ],
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    tags: ['Short Video', 'Social Analytics', 'Virality Analytics', 'Creator Insights'],
    repo: 'short-video-intelligence-dashboard',
    imageBase: 'Short Video Intelligence Dashboard',
    impact:
      'Virality scoring · engagement KPIs · creator comparison · timing patterns · segment benchmarks.',
  },
  {
    cat: 'healthcare',
    icon: 'lucide:building-2',
    type: 'Healthcare ML',
    title: 'Hospital Deterioration — Next 12h Early Warning',
    desc: 'Decision-ready hospital-deterioration early-warning workflow for next-12h risk analysis, with patient-level leakage controls, reproducible modeling, and threshold-policy trade-offs. Evaluated on simulated data.',
    priority: 90,
    problem:
      'Hospital-deterioration early-warning workflows need patient-level evaluation, explicit leakage controls, and alert thresholds that expose the trade-off between missed events and review burden.',
    approach: [
      'Validates patient, vitals, labs, hourly-panel, and label integrity before modeling.',
      'Uses patient-level train, validation, and test separation with preprocessing inside a reproducible scikit-learn pipeline.',
      'Converts model scores into decision-oriented threshold tables covering precision, recall, alert rate, false positives, and false negatives.',
    ],
    signals: [
      'Evaluation signals: Average Precision · ROC-AUC · precision/recall trade-offs · alert rate · false positives/negatives.',
      'Operational signals: patient-level splitting · leakage-aware feature exclusion · threshold-policy tables · interpretable Logistic Regression baseline.',
    ],
    stack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
    tags: ['Healthcare ML', 'Early Warning', 'Patient Deterioration', 'Threshold Tuning'],
    repo: 'hospital-deterioration-next-12h-early-warning-baseline',
    imageBase: 'hospital-deterioration-next-12h-early-warning',
    alt: {
      href: 'https://github.com/tarekmasryo/hospital-deterioration-dataset',
      label: 'Dataset',
    },
    impact:
      'Patient-level leakage controls · Average Precision and ROC-AUC · alert-policy trade-offs.',
  },
  {
    cat: 'healthcare',
    icon: 'lucide:activity',
    type: 'ML Pipeline',
    title: 'Pima Diabetes Pipeline',
    desc: 'End-to-end diabetes risk prediction pipeline with EDA, feature engineering, calibration, cost-aware thresholds, and deployable artifacts.',
    priority: 88,
    problem:
      'A diabetes-risk workflow needs reliable preprocessing, calibrated probabilities, and clear threshold trade-offs before it can be packaged as a reusable ML artifact.',
    approach: [
      'Builds a compact tabular ML pipeline around schema checks, missingness review, leak-safe validation, and repeatable inference.',
      'Uses calibrated probability outputs and threshold comparison so risk scores can be interpreted as decision inputs.',
      'Packages validation logic, metrics, and artifacts so the workflow can be rerun and handed off cleanly.',
    ],
    signals: [
      'Evaluation signals: ROC-AUC / PR-AUC review · calibration checks · threshold trade-offs · schema and missingness checks.',
      'Delivery signals: reproducible pipeline · deployable artifacts · CI-ready project structure.',
    ],
    stack: ['Python', 'scikit-learn', 'Pandas', 'Pydantic', 'pytest', 'GitHub Actions'],
    tags: ['Clinical Risk', 'ML Pipeline', 'Calibration', 'Reproducible ML'],
    repo: 'pima-diabetes-pipeline',
    imageBase: 'pima-diabetes-pipeline',
    impact: 'Schema validation · calibrated probabilities · threshold trade-offs.',
  },
  {
    cat: 'healthcare',
    icon: 'lucide:heart-pulse',
    type: 'ML Pipeline',
    title: 'Predicting Wellbeing Risk',
    desc: 'Digital habits to wellbeing-risk modeling workflow with calibrated risk scoring, cost-aware thresholding, and deployable artifacts.',
    priority: 86,
    problem:
      'Digital behavior signals become more useful when they are converted into calibrated wellbeing-risk scores and threshold policies.',
    approach: [
      'Models digital habits as tabular behavioral features for risk scoring and segment-level review.',
      'Compares Logistic Regression, Random Forest, and XGBoost-style baselines before selecting threshold behavior.',
      'Packages the workflow around calibrated scores and cost-aware threshold discussion rather than raw classification only.',
    ],
    signals: [
      'Evaluation signals: model comparison · calibration review · threshold tuning · digital behavior slices.',
      'Review focus: digital behavior · wellbeing risk · risk scoring · reproducible notebook workflow.',
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Pandas', 'Jupyter'],
    tags: ['Wellbeing Risk', 'Calibration', 'Threshold Tuning', 'Digital Behavior'],
    repo: 'predicting-wellbeing-risk',
    imageBase: 'Predicting Wellbeing Risk',
    alt: {
      href: 'https://github.com/tarekmasryo/digital-lifestyle-benchmark-dataset',
      label: 'Dataset',
    },
    impact: 'Digital behavior · risk scoring · calibration · threshold tuning.',
  },

  {
    cat: 'finance',
    icon: 'lucide:credit-card',
    type: 'ML Pipeline',
    title: 'Credit Card Fraud Detection',
    desc: 'Cost-aware credit card fraud detection pipeline with time-based split, probability calibration, and AUPRC-first threshold tuning.',
    priority: 82,
    problem:
      'Fraud detection on imbalanced data requires time-aware validation, calibrated probabilities, and AUPRC-first threshold decisions rather than accuracy-driven reporting.',
    approach: [
      'Uses a time-based split to reduce unrealistic leakage between earlier and later transaction behavior.',
      'Evaluates models with an imbalanced-classification lens and prioritizes AUPRC plus threshold trade-offs.',
      'Frames output around business-aligned thresholds so review volume and fraud capture can be compared explicitly.',
    ],
    signals: [
      'Evaluation signals: AUPRC-first evaluation · time-based validation · probability calibration · class-imbalance handling · business-aligned thresholding.',
      'Modeling coverage: Logistic Regression · Random Forest · XGBoost.',
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Random Forest', 'Logistic Regression', 'Pandas'],
    tags: ['Credit Card Fraud', 'FinTech', 'Calibration', 'Threshold Tuning'],
    repo: 'creditcard-fraud-detection',
    imageBase: 'Credit Card Fraud Detection',
    impact: 'AUPRC-first fraud pipeline with calibrated probabilities and threshold tuning.',
  },
  {
    cat: 'social',
    icon: 'lucide:message-square-warning',
    type: 'NLP Pipeline',
    title: 'SMS Spam Detection',
    desc: 'SMS spam detection pipeline using word/char TF-IDF, calibrated Linear SVM, nested CV, threshold tuning, explainability, and robustness tests.',
    priority: 80,
    problem:
      'Spam filtering needs a careful false-positive / false-negative balance because blocking legitimate messages can be more damaging than missing some spam.',
    approach: [
      'Combines word and character TF-IDF features to capture both phrase-level and pattern-level spam signals.',
      'Uses calibrated Linear SVM-style scoring with nested validation and threshold review.',
      'Adds explainability and robustness checks so model behavior can be inspected beyond headline metrics.',
    ],
    signals: [
      'Evaluation signals: precision/recall trade-offs · false-positive review · false-negative review · calibration · robustness checks · explainability.',
      'Review focus: spam filtering · text classification · threshold-aware decisions.',
    ],
    stack: ['Python', 'scikit-learn', 'TF-IDF', 'Linear SVM', 'Jupyter'],
    tags: ['NLP', 'SMS Spam', 'Text Classification', 'Linear SVM'],
    repo: 'sms-spam-detection',
    imageBase: 'SMS Spam Detection',
    impact: 'Calibrated spam detection with nested CV and robustness checks.',
  },
  {
    cat: 'healthcare',
    icon: 'lucide:microscope',
    type: 'ML Pipeline',
    title: 'Cancer Risk Prediction',
    desc: 'Cancer-risk classification pipeline with leakage checks, stratified cross-validation, multi-model benchmarking, calibration diagnostics, permutation importance, subgroup analysis, and exported model artifacts.',
    priority: 78,
    problem:
      'Healthcare-style risk modeling must separate usable predictive inputs from leakage-prone derived fields before any model comparison is credible.',
    approach: [
      'Excludes derived risk fields and analysis-only columns before training to protect both cancer-type and risk-level tasks from target leakage.',
      'Benchmarks Logistic Regression, Random Forest, calibrated Linear SVM, Gradient Boosting, and XGBoost with stratified cross-validation and macro-F1 evaluation.',
      'Adds calibration curves, confusion matrices, permutation importance, subgroup F1 analysis, and exportable trained pipelines for structured review.',
    ],
    signals: [
      'Holdout results: Cancer_Type XGBoost accuracy 0.783 · macro-F1 0.764; Risk_Level balanced Logistic Regression accuracy 0.830 · macro-F1 0.727.',
      'Evaluation signals: leakage checks · stratified CV · calibration diagnostics · permutation importance · subgroup F1.',
      'Scope: dataset-specific evaluation for portfolio and analytical review; not intended for clinical use.',
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Pandas', 'Jupyter'],
    tags: ['Cancer Risk', 'Healthcare ML', 'Data Leakage', 'Interpretability'],
    repo: 'cancer-risk-prediction',
    imageBase: 'Cancer Risk Prediction',
    alt: {
      href: 'https://github.com/tarekmasryo/cancer-risk-factors-data',
      label: 'Data Repo',
    },
    impact:
      'Leakage-aware multi-model classification · calibrated diagnostics · exported model artifacts.',
  },
  {
    cat: 'analytics',
    icon: 'lucide:car',
    type: 'ML Pipeline',
    title: 'Road Accident Risk',
    desc: 'Road accident risk regression project using LightGBM, residual XGBoost, and model blending for stable OOF RMSE.',
    priority: 76,
    problem:
      'Road-segment risk modeling needs stable regression behavior and interpretable safety features, not just a leaderboard-style fitted model.',
    approach: [
      'Combines LightGBM, residual XGBoost, and NNLS blending to improve fold stability and reduce unstable predictions.',
      'Uses interpretable risk features such as curvature-speed interactions, accident-per-lane signals, and critical-zone flags.',
      'Frames the residual learner around what the safety prior misses so the workflow stays easier to explain.',
    ],
    signals: [
      'Evaluation signals: OOF RMSE · LightGBM baseline · residual XGBoost · NNLS blend · segment-level risk review.',
      'Review focus: road safety · calibrated risk scoring · interpretable feature engineering.',
    ],
    stack: ['Python', 'LightGBM', 'XGBoost', 'Pandas', 'scikit-learn'],
    tags: ['Road Safety', 'Accident Risk', 'Regression', 'Model Blending'],
    repo: 'road-accident-risk-ps5e10',
    imageBase: 'Road Accident Risk',
    alt: {
      href: 'https://www.kaggle.com/code/tarekmasryo/road-accident-risk-ps5e10',
      label: 'Kaggle Notebook',
    },
    impact: 'LightGBM + residual XGBoost + NNLS blend for stable OOF RMSE.',
  },
  {
    cat: 'finance',
    icon: 'lucide:banknote',
    type: 'ML Pipeline',
    title: 'Loan Payback Prediction',
    desc: 'Credit scoring project focused on feature engineering, leak-safe encodings, XGBoost/LightGBM modeling, stacked ensembling, and reusable artifacts.',
    priority: 74,
    problem:
      'Credit scoring workflows need leak-safe feature engineering, cross-validation, and model comparison before predictions can support lending decisions.',
    approach: [
      'Builds engineered credit-risk features with attention to leakage-prone encodings.',
      'Compares XGBoost and LightGBM-style models before stacking/ensembling decisions.',
      'Packages reusable artifacts so the workflow can be inspected and rerun.',
    ],
    signals: [
      'Evaluation signals: cross-validation · leak-safe encodings · XGBoost / LightGBM comparison · stacked ensemble · reusable artifacts.',
      'Review focus: credit scoring · binary classification · model selection.',
    ],
    stack: ['Python', 'XGBoost', 'LightGBM', 'Pandas', 'scikit-learn'],
    tags: ['Credit Scoring', 'Binary Classification', 'Model Selection', 'LightGBM'],
    repo: 'loan-payback-ps5e11',
    imageBase: 'Loan Payback Prediction',
    alt: {
      href: 'https://www.kaggle.com/code/tarekmasryo/loan-payback-ps5e11/notebook',
      label: 'Kaggle Notebook',
    },
    impact:
      'Credit scoring with leak-safe encodings, boosted models, and stacked ensemble comparison.',
  },
  {
    cat: 'analytics',
    icon: 'lucide:chart-line',
    type: 'ML Pipeline',
    title: 'Superstore Sales Prediction',
    desc: 'Superstore sales analysis and prediction workflow combining EDA, KPI insights, profit prediction, and time-series forecasting.',
    priority: 73,
    problem:
      'Retail sales data needs both business-facing KPI analysis and predictive modeling so profit drivers and forecast patterns can be reviewed together.',
    approach: [
      'Combines EDA, KPI views, profit prediction, and time-series forecasting in one analysis workflow.',
      'Uses Random Forest/XGBoost-style regression for profit prediction and Holt-Winters forecasting for temporal patterns.',
      'Frames outputs around business interpretation rather than model scores alone.',
    ],
    signals: [
      'Evaluation signals: sales analytics · KPI analysis · profit prediction · Random Forest/XGBoost · Holt-Winters forecasting.',
      'Review focus: regression · forecasting · retail performance insights.',
    ],
    stack: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'Time Series'],
    tags: ['Sales Analytics', 'Regression', 'Forecasting', 'KPI Insights'],
    repo: 'superstore-sales-prediction',
    imageBase: 'Superstore Sales Prediction',
    impact: 'Sales analytics · profit prediction · time-series forecasting.',
  },
  {
    cat: 'genai',
    icon: 'lucide:database',
    type: 'Evaluation Asset',
    title: 'RAG QA Logs & Corpus',
    desc: 'Multi-table RAG QA telemetry and evaluation asset for retrieval attribution, hallucination-risk slicing, and quality × cost × latency trade-offs.',
    priority: 70,
    problem:
      'RAG evaluation needs multi-table evidence covering questions, retrieval events, corpus documents, and operational signals instead of isolated prompt examples.',
    approach: [
      'Provides QA logs, corpus data, retrieval traces, evaluation labels, and operational telemetry for retrieval/reranking analysis.',
      'Structures the asset so hallucination-risk slicing and quality × cost × latency trade-offs can be reviewed systematically.',
      'Supports downstream dashboards and notebooks that need source-grounded evidence rather than ad hoc examples.',
    ],
    signals: [
      'Evaluation asset: 3,824 QA eval runs · 93,375 retrieval events.',
      'Correctness-risk baseline: Logistic Regression ROC-AUC 0.755.',
      'Operational signals: retrieval metrics · recall@k / MRR / nDCG where applicable · groundedness review · citation coverage · latency · token/cost budgets.',
    ],
    stack: ['Python', 'Pandas', 'FAISS', 'pgvector', 'Jupyter'],
    tags: ['RAG Evaluation', 'Retrieval Traces', 'Hallucination Risk', 'Cost Analysis'],
    repo: 'rag-qa-logs-and-corpus',
    imageBase: 'RAG QA Logs & Corpus Data',
    alt: {
      href: 'https://github.com/tarekmasryo/rag-qa-logs-corpus-data',
      label: 'Data Repo',
    },
    impact: '3,824 QA eval runs · 93,375 retrieval events.',
  },
  {
    cat: 'genai',
    icon: 'lucide:activity',
    type: 'Evaluation Asset',
    title: 'LLM Production Telemetry Dataset & Notebook',
    desc: 'Production-style LLM telemetry dataset and notebook for telemetry validation, SLO/budget burn, routing backtests, drift checks, triage policy, and review-ready operational artifacts.',
    priority: 68,
    problem:
      'LLM operations teams need structured telemetry data to review quality, latency, failures, routing behavior, cost, and drift without relying on anecdotal traces.',
    approach: [
      'Models LLM observability as a repeatable evaluation asset: validate telemetry, inspect quality and cost, compare routing behavior, and track drift.',
      'Exports review-ready artifacts for SLO/budget burn, routing backtests, triage policy, and model health inspection.',
      'Keeps dataset and notebook structure aligned so analysis can be reproduced and extended.',
    ],
    signals: [
      'Telemetry asset: 9,000 interactions · 1,595 sessions · 438 users.',
      'Operational signals: quality metrics · human review flags · latency · error rates · failure categories · cost per request · cost per conversation · budget burn · drift checks.',
    ],
    stack: ['Python', 'Pandas', 'Plotly', 'MLflow', 'Jupyter'],
    tags: ['LLMOps', 'Observability', 'Telemetry', 'Drift Detection', 'Cost Analysis'],
    repo: 'llm-production-telemetry',
    imageBase: 'llm-production-telemetry-dataset',
    alt: {
      href: 'https://www.kaggle.com/datasets/tarekmasryo/llm-system-ops-production-telemetry-and-sft',
      label: 'Kaggle Dataset',
    },
    impact: '9,000 interactions · 1,595 sessions · 438 users.',
  },
  {
    cat: 'analytics',
    icon: 'lucide:plug',
    type: 'Dataset',
    title: 'Global EV Infra Dataset',
    desc: 'Global EV charging infrastructure dataset for station coverage, connector analysis, power categories, and EV infrastructure analytics.',
    priority: 66,
    problem:
      'EV infrastructure analysis needs standardized station, connector, power-class, and country-level fields before coverage and network-planning questions can be answered.',
    approach: [
      'Standardizes charging-site records into an analysis-ready dataset for station coverage, connector analysis, and power-category review.',
      'Supports geospatial and market-slice analysis through consistent country and infrastructure fields.',
      'Keeps dataset structure suitable for both dashboards and notebook-based exploration.',
    ],
    signals: [
      'Data scale: 242,417 charging sites across 121 countries.',
      'Operational signals: regional coverage · connector distribution · power-class breakdowns · infrastructure comparison views.',
    ],
    stack: ['Python', 'Pandas', 'Geospatial Data', 'Dataset'],
    tags: ['EV Charging', 'Geospatial Data', 'Infrastructure Analytics', 'Dataset'],
    repo: 'global-ev-infra-dataset',
    imageBase: 'global-ev-infra-dataset',
    alt: {
      href: 'https://www.kaggle.com/datasets/tarekmasryo/global-ev-charging-stations',
      label: 'Kaggle Dataset',
    },
    impact: '242,417 charging sites across 121 countries.',
  },
  {
    cat: 'social',
    icon: 'lucide:trending-up',
    type: 'Dataset',
    title: 'YouTube/TikTok Trends Dataset 2025',
    desc: 'Analysis-ready dataset for global YouTube Shorts and TikTok trends, with raw files, ML-ready tables, rollups, data dictionary, standardized schemas, and deduplicated IDs.',
    priority: 64,
    problem:
      'Short-form trend analysis needs clean, deduplicated, analysis-ready tables before creators or analysts can compare engagement patterns across platforms and countries.',
    approach: [
      'Provides raw files, ML-ready tables, rollups, data dictionary, standardized schemas, and deduplicated IDs.',
      'Organizes platform, creator, hashtag, country, and engagement fields for trend exploration and dashboard workflows.',
    ],
    signals: [
      'Operational signals: engagement metrics · trend patterns · creator analysis · hashtags · platform/country breakdowns · short-form dynamics.',
      'Review focus: YouTube Shorts · TikTok · engagement analytics · trend mining.',
    ],
    stack: ['Python', 'Pandas', 'Data Dictionary', 'Dataset'],
    tags: ['YouTube Shorts', 'TikTok', 'Engagement Analytics', 'Trend Mining'],
    repo: 'youtube-tiktok-trends-dataset-2025',
    imageBase: 'youtube-tiktok-trends-dataset-2025',
    alt: {
      href: 'https://www.kaggle.com/datasets/tarekmasryo/youtube-shorts-and-tiktok-trends-2025',
      label: 'Kaggle Dataset',
    },
    impact: 'Short-form trend dataset with ML-ready tables and standardized schemas.',
  },
  {
    cat: 'healthcare',
    icon: 'lucide:heart',
    type: 'Dataset',
    title: 'Digital Lifestyle Benchmark Dataset',
    desc: 'Synthetic, ML-ready digital lifestyle benchmark dataset for wellbeing-risk modeling and reproducible notebooks.',
    priority: 62,
    problem:
      'Wellbeing-risk experiments need a compact benchmark dataset with behavioral signals and clear target structure for reproducible modeling workflows.',
    approach: [
      'Provides documented behavioral and wellbeing signals with a clear high-risk target for reproducible modeling.',
      'Includes schema validation, checksums, and a data dictionary so notebooks can run quickly while supporting cohort and risk-signal analysis.',
    ],
    signals: [
      'Data scale: 3,500 records · 24 features · high_risk_flag target.',
      'Review focus: digital wellbeing · screen time · risk signals · reproducible benchmark workflows.',
    ],
    stack: ['Python', 'Pandas', 'Data Validation', 'Dataset'],
    tags: ['Benchmark Dataset', 'Mental Health', 'Digital Wellbeing', 'Risk Modeling'],
    repo: 'digital-lifestyle-benchmark-dataset',
    imageBase: 'Digital Lifestyle Benchmark Dataset',
    alt: {
      href: 'https://www.kaggle.com/datasets/tarekmasryo/digital-health-and-mental-wellness',
      label: 'Kaggle Dataset',
    },
    impact: '3,500 records · 24 features · documented high-risk target.',
  },
  {
    cat: 'healthcare',
    icon: 'lucide:hospital',
    type: 'Dataset',
    title: 'Hospital Deterioration Dataset',
    desc: 'Simulated hospital deterioration dataset for early-warning modeling with hourly vitals/labs and a next-12h target.',
    priority: 60,
    problem:
      'Early-warning modeling needs patient-level temporal data with hourly vitals/labs and a next-12h target to test leakage-safe deterioration workflows.',
    approach: [
      'Provides 10,000 admissions with hourly clinical signals across a 72h cohort for early-warning experiments.',
      'Structures labels and splits to support reproducible baseline modeling and dashboard workflows.',
    ],
    signals: [
      'Data scale: 10,000 admissions · hourly vitals/labs over a 72h cohort.',
      'Review focus: clinical time series · label quality · reproducible splits · ML-ready structure.',
    ],
    stack: ['Python', 'Pandas', 'Clinical Time Series', 'Dataset'],
    tags: ['Clinical Dataset', 'Time Series', 'Early Warning', 'Patient Deterioration'],
    repo: 'hospital-deterioration-dataset',
    imageBase: 'Hospital Deterioration Dataset',
    alt: {
      href: 'https://github.com/tarekmasryo/hospital-deterioration-next-12h-early-warning-baseline',
      label: 'Baseline',
    },
    impact: '10,000 admissions · hourly vitals/labs over a 72h cohort.',
  },
  {
    cat: 'analytics',
    icon: 'lucide:trophy',
    type: 'Dataset',
    title: 'Football Matches Dataset 2025',
    desc: 'European football matches dataset for 2024/2025 season analysis and dashboard workflows.',
    priority: 58,
    problem:
      'Sports analytics dashboards need clean match-level data with derived features before standings, team comparison, and season review views can be built.',
    approach: [
      'Packages European football match data into dashboard-ready tables for the 2024/2025 season.',
      'Includes derived features and match-level structure for team explorer, league comparison, and season analysis workflows.',
    ],
    signals: [
      'Data scale: 1,941 matches across top European leagues and UCL.',
      'Review focus: match results · derived features · season analysis · dashboard-ready sports data.',
    ],
    stack: ['Python', 'Pandas', 'Sports Analytics', 'Dataset'],
    tags: ['Football Dataset', 'Sports Analytics', 'Match Results', 'Feature Set'],
    repo: 'football-matches-2025-dataset',
    imageBase: 'Football Matches Dataset 2025',
    alt: {
      href: 'https://www.kaggle.com/datasets/tarekmasryo/football-matches-20242025-top-5-leagues',
      label: 'Kaggle Dataset',
    },
    impact: '1,941 matches across top European leagues and UCL.',
  },
  {
    cat: 'genai',
    icon: 'lucide:network',
    type: 'Dataset',
    title: 'GenAI Tools & Platforms Data',
    desc: 'Dataset mapping generative AI tools and platforms for comparison, taxonomy, API coverage, and landscape analysis.',
    priority: 56,
    problem:
      'The GenAI tooling landscape is difficult to compare without a structured taxonomy for categories, modalities, API coverage, and open-source signals.',
    approach: [
      'Maps GenAI tools and platforms into comparison-ready fields for landscape analysis and taxonomy review.',
      'Captures modality, category, open-source/API flags, and platform attributes for market and tooling research.',
    ],
    signals: [
      'Data scale: 113 tools · 22 columns.',
      'Review focus: tool categories · modality taxonomy · open-source/API flags · platform mapping.',
    ],
    stack: ['Python', 'Pandas', 'Dataset', 'Market Research'],
    tags: ['GenAI Landscape', 'Tools Dataset', 'Market Research'],
    repo: 'genai-tools-platforms-data',
    imageBase: 'GenAI Tools & Platforms Data',
    alt: {
      href: 'https://www.kaggle.com/datasets/tarekmasryo/generative-ai-tools-and-platforms-2025',
      label: 'Kaggle Dataset',
    },
    impact: '113 tools · 22 columns.',
  },
  {
    cat: 'healthcare',
    icon: 'lucide:stethoscope',
    type: 'Dataset',
    title: 'Cancer Risk Factors Data',
    desc: 'Cancer risk factors dataset for lifestyle, environment, genetics, and derived risk labels.',
    priority: 54,
    problem:
      'Cancer risk analysis needs a documented feature table that separates lifestyle, environmental, genetic, and derived risk fields for leakage-aware use.',
    approach: [
      'Provides a clean tabular dataset with data dictionary support for feature analysis and educational risk modeling.',
      'Documents derived risk labels so users can avoid leakage when building predictive baselines.',
    ],
    signals: [
      'Data scale: 2,000 rows × 21 columns.',
      'Review focus: medical risk factors · data dictionary · feature analysis · leakage-aware use.',
    ],
    stack: ['Python', 'Pandas', 'Healthcare Dataset', 'Data Dictionary'],
    tags: ['Healthcare Dataset', 'Cancer Risk', 'Feature Engineering', 'Data Dictionary'],
    repo: 'cancer-risk-factors-data',
    imageBase: 'Cancer Risk Factors Data',
    alt: {
      href: 'https://www.kaggle.com/datasets/tarekmasryo/cancer-risk-factors-dataset',
      label: 'Kaggle Dataset',
    },
    impact: '2,000 rows × 21 columns.',
  },
  {
    cat: 'healthcare',
    icon: 'lucide:droplet',
    type: 'Dataset',
    title: 'Blood Donation Registry Dataset',
    desc: 'ML-ready synthetic blood donor registry dataset for donor eligibility, deferrals, country prevalence, RBC compatibility, and healthcare outreach analysis.',
    priority: 53,
    problem:
      'Donor outreach and compatibility analysis need structured donor eligibility, deferral, prevalence, and RBC compatibility fields in one ML-ready asset.',
    approach: [
      'Packages donor eligibility, deferrals, country prevalence, RBC compatibility, and outreach fields into a documented registry.',
      'Includes deterministic validation and checksum tooling while avoiding exposure of real donor records.',
    ],
    signals: [
      'Data scale: 30,000 donor records · 27 columns · 39 countries · 8 blood types · 64 compatibility pairs.',
      'Operational signals: eligibility · deferrals · RBC compatibility · country prevalence · outreach modeling.',
    ],
    stack: ['Python', 'Pandas', 'Data Validation', 'Dataset'],
    tags: ['Blood Donation', 'RBC Compatibility', 'Healthcare Analytics', 'Donor Registry'],
    repo: 'blood-donation-registry-dataset',
    imageBase: 'Blood Donation Registry Dataset',
    alt: {
      href: 'https://github.com/tarekmasryo/global-blood-donation-registry',
      label: 'Policy Project',
    },
    impact: '30,000 donor records · eligibility and deferrals · 8×8 RBC compatibility matrix.',
  },
  {
    cat: 'genai',
    icon: 'lucide:image',
    type: 'Computer Vision App',
    title: 'Old Photo Restorer',
    desc: 'User-facing AI image restoration app using GFPGAN and Gradio, with restoration presets, strength control, optional upscaling, before/after preview, and batch ZIP export.',
    priority: 52,
    problem:
      'Photo restoration tools need controllable enhancement and before/after review so users can judge output quality before exporting results.',
    approach: [
      'Uses GFPGAN-based face restoration with presets and strength control for user-facing enhancement.',
      'Keeps optional upscaling separate from restoration so output quality and resolution can be controlled independently.',
      'Adds before/after preview and batch ZIP export to make the workflow practical for multiple images.',
    ],
    signals: [
      'Operational signals: restoration presets · strength control · optional upscaling · before/after preview · batch ZIP export.',
      'Review focus: image restoration · face enhancement · Gradio user workflow.',
    ],
    stack: ['Python', 'Gradio', 'GFPGAN', 'Image Restoration', 'Computer Vision'],
    tags: ['Image Restoration', 'Face Restoration', 'GenAI App', 'Gradio', 'Computer Vision'],
    repo: 'Old-Photo-Restorer',
    imageBase: 'Old Photo Restorer',
    impact:
      'User-facing image-restoration app with before/after review, presets, and batch ZIP export.',
  },
  {
    cat: 'analytics',
    icon: 'lucide:plug',
    type: 'Dashboard',
    title: 'EV Charging Dashboard',
    desc: 'Streamlit EV charging analytics dashboard for global map clustering, KPIs, country/power-class filters, and fast-DC allocation optimization.',
    priority: 50,
    problem:
      'EV planning workflows need map-first exploration, KPI slices, and expansion scenarios to compare charging coverage and fast-DC opportunities.',
    approach: [
      'Organizes EV infrastructure data into map-oriented and KPI-oriented views for regional comparison and charging-power analysis.',
      'Adds country/power-class filters plus a fast-DC allocation optimizer to compare expansion scenarios.',
      'Supports planning-style review through global map clustering, KPI tracking, and exportable views.',
    ],
    signals: [
      'Operational signals: global map clustering · KPIs · country filters · power-class filters · fast-DC allocation optimizer.',
      'Review focus: geospatial dashboard · station coverage · charging power classes · infrastructure planning.',
    ],
    stack: ['Python', 'Streamlit', 'Plotly', 'PyDeck', 'Pandas'],
    tags: ['EV Charging', 'Geospatial Analytics', 'Dashboard', 'Optimization'],
    repo: 'ev-charging-dashboard',
    imageBase: 'EV Charging Dashboard',
    impact:
      'Interactive EV infrastructure dashboard for coverage analysis and fast-DC allocation scenarios.',
  },
  {
    cat: 'analytics',
    icon: 'lucide:trophy',
    type: 'Dashboard',
    title: 'Football Matches Dashboard',
    desc: 'Football matches analytics dashboard for the 2024/2025 season with KPIs, standings, team explorer, head-to-head comparison, and interactive match tables.',
    priority: 48,
    problem:
      'Football match data becomes easier to analyze when standings, team comparison, head-to-head views, and match tables are combined into one interactive dashboard.',
    approach: [
      'Builds KPI cards, standings, team explorer, and head-to-head comparison from match-level season data.',
      'Uses interactive filters and match tables to support league, team, and season-level review.',
    ],
    signals: [
      'Operational signals: KPIs · standings · team explorer · head-to-head comparison · interactive match tables · season insights.',
      'Review focus: football analytics · sports dashboard · data visualization.',
    ],
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    tags: ['Football Analytics', 'Sports Dashboard', 'Data Visualization'],
    repo: 'football-matches-dashboard',
    imageBase: 'Football Matches Dashboard',
    alt: {
      href: 'https://github.com/tarekmasryo/football-matches-2025-dataset',
      label: 'Dataset',
    },
    impact:
      'Sports analytics dashboard for match exploration, standings review, and team-level comparison.',
  },
  {
    cat: 'analytics',
    icon: 'lucide:palette',
    type: 'Visual Lab',
    title: 'Seaborn + Matplotlib Visual Lab',
    desc: 'Interactive Streamlit lab to build, compare, and export Seaborn vs Matplotlib charts with UI controls, generated code snippets, and PNG/ZIP export.',
    priority: 46,
    problem:
      'Learning and comparing Python plotting libraries is easier when users can adjust chart controls, see the output, and export generated code from one interface.',
    approach: [
      'Provides an interactive Streamlit lab for building and comparing Seaborn and Matplotlib charts.',
      'Generates code snippets and supports PNG/ZIP export so visual experiments can be reused outside the app.',
      'Structures the UI around chart controls and visual diagnostics rather than static examples only.',
    ],
    signals: [
      'Operational signals: UI controls · generated code snippets · chart comparison · PNG export · ZIP export · visual diagnostics.',
      'Review focus: data visualization · plotting lab · EDA workflow.',
    ],
    stack: ['Python', 'Streamlit', 'Matplotlib', 'Seaborn', 'Plotly'],
    tags: ['Data Visualization', 'Plotting Lab', 'EDA', 'Python'],
    repo: 'seaborn-matplotlib-visual-lab',
    imageBase: 'Seaborn + Matplotlib Visual Lab',
    impact:
      'Interactive plotting lab for learning, comparing, and exporting Python visualization patterns.',
  },
  {
    cat: 'genai',
    icon: 'lucide:tool',
    type: 'Developer Tool',
    title: 'QuickStart',
    desc: 'Developer tooling project for generating quick artifacts and reusable scaffolds from Hugging Face URLs.',
    priority: 44,
    problem:
      'Developers often lose time turning Hugging Face URLs into usable local commands, file views, and starter scaffolds.',
    approach: [
      'Inspects Hugging Face-style repository URLs and generates quick commands, download snippets, file views, and reusable scaffolds.',
      'Wraps the workflow in a Gradio interface so users can move from URL to working artifact faster.',
    ],
    signals: [
      'Operational signals: repository inspection · Hugging Face URL workflow · artifact generation · reusable scaffolds · automation.',
      'Review focus: developer tools · Hugging Face workflows · scaffolding.',
    ],
    stack: ['Python', 'Gradio', 'Hugging Face Hub', 'Automation'],
    tags: ['Developer Tools', 'Hugging Face', 'Scaffolding', 'Automation'],
    repo: 'QuickStart',
    imageBase: 'QuickStart',
    impact:
      'Developer tooling for generating quick artifacts and scaffolds from Hugging Face URLs.',
  },
];

/* src/config.js */
const CONFIG = Object.freeze({
  assetsDir: 'assets',
  githubProfile: 'https://github.com/tarekmasryo',
  imageExtensions: Object.freeze(['webp']),
  assetsVersion: '20260715_portfolio_release',
  revealThreshold: 0.12,
  projectLimit: 6,
  themeStorageKey: 'tm_theme',
});

const TYPEWRITER_LINES = Object.freeze([
  'Production ML and GenAI systems.',
  'APIs with strict contracts and versioned artifacts.',
  'RAG evaluation and trace review.',
  'Agent workflows, orchestration, and human review.',
  'LLMOps telemetry and triage workflows.',
  'Decision-support systems for real operations.',
  'Monitoring, thresholds, and reliable handoff.',
]);

/* src/core/dom.js */
class Dom {
  static id(id) {
    return document.getElementById(id);
  }

  static qs(selector, root = document) {
    return root.querySelector(selector);
  }

  static qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  static clear(element) {
    if (!element) return;
    element.textContent = '';
  }

  static create(tagName, { className = '', text = '', attributes = {} } = {}) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text !== '') element.textContent = String(text);
    for (const [name, value] of Object.entries(attributes)) {
      if (value === null || value === undefined || value === false) continue;
      element.setAttribute(name, value === true ? '' : String(value));
    }
    return element;
  }
}

/* src/core/collections.js */
class UniqueStringList {
  constructor() {
    this.values = [];
    this.seen = new Set();
  }

  get size() {
    return this.values.length;
  }

  add(value) {
    const normalized = String(value || '').trim();
    if (!normalized || this.seen.has(normalized)) return this;
    this.seen.add(normalized);
    this.values.push(normalized);
    return this;
  }

  addMany(values) {
    if (!Array.isArray(values)) return this;
    for (const value of values) this.add(value);
    return this;
  }

  toArray(limit = Number.POSITIVE_INFINITY) {
    return this.values.slice(0, limit);
  }
}

/* src/core/browser.js */
class Storage {
  static get(key) {
    try {
      return globalThis.localStorage?.getItem(key) ?? null;
    } catch {
      return null;
    }
  }

  static set(key, value) {
    try {
      globalThis.localStorage?.setItem(key, value);
    } catch {
      // Storage can be unavailable in private browsing or hardened contexts.
    }
  }
}

class Debounce {
  static wrap(callback, delayMs) {
    let timerId;
    return function debounced(...args) {
      globalThis.clearTimeout(timerId);
      timerId = globalThis.setTimeout(() => callback.apply(this, args), delayMs);
    };
  }
}

class Motion {
  static prefersReduced() {
    return Boolean(globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
  }

  static scrollBehavior() {
    return this.prefersReduced() ? 'auto' : 'smooth';
  }
}

class HistoryState {
  static supports(method) {
    return typeof globalThis.history?.[method] === 'function';
  }

  static replace(url) {
    if (!this.supports('replaceState')) return;
    globalThis.history.replaceState(null, '', url);
  }

  static push(url) {
    if (!this.supports('pushState')) return;
    globalThis.history.pushState(null, '', url);
  }
}

class Github {
  static normalizeRepoSlug(repo) {
    const slug = String(repo || '').trim();
    return /^[A-Za-z0-9._-]+$/.test(slug) ? slug : '';
  }

  static url(repo) {
    const slug = this.normalizeRepoSlug(repo);
    return slug ? `${CONFIG.githubProfile}/${slug}` : '';
  }
}

class UrlUtils {
  static baseUrl() {
    return globalThis.location?.origin || 'https://tarekmasryo.github.io';
  }

  static parse(value) {
    const input = String(value || '').trim();
    if (!input) return null;
    try {
      return new URL(input, this.baseUrl());
    } catch {
      return null;
    }
  }

  static isSafeHttpUrl(value) {
    const parsed = this.parse(value);
    return Boolean(parsed && (parsed.protocol === 'http:' || parsed.protocol === 'https:'));
  }

  static normalizeExternalUrl(value) {
    const parsed = this.parse(value);
    if (!parsed || !this.isSafeHttpUrl(parsed.href)) return '';
    return parsed.href;
  }
}

const UrlState = Object.freeze({
  base: '#projects',

  setProject(repo) {
    const normalizedRepo = String(repo || '').trim();
    if (!normalizedRepo) return;
    HistoryState.replace(`${this.base}?project=${encodeURIComponent(normalizedRepo)}`);
  },

  clearProject() {
    HistoryState.replace(this.base);
  },

  getProject() {
    const hash = String(globalThis.location?.hash || '');
    if (!hash.startsWith(this.base)) return null;
    const query = hash.split('?').slice(1).join('?');
    if (!query) return null;
    return new URLSearchParams(query).get('project');
  },
});

/* src/ui/icon-renderer.js */
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
    svg.classList.add('inline-icon');
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

      case 'lucide:banknote':
        this.appendStroke(svg, 'rect', { x: '3', y: '6', width: '18', height: '12', rx: '2' });
        this.appendStroke(svg, 'circle', { cx: '12', cy: '12', r: '2.5' });
        this.appendStroke(svg, 'path', { d: 'M6 9h.01M18 15h.01' });
        return svg;
      case 'lucide:chart-line':
        this.appendStroke(svg, 'path', { d: 'M3 3v18h18' });
        this.appendStroke(svg, 'path', { d: 'm6 16 4-5 3 3 5-7' });
        return svg;
      case 'lucide:heart':
        this.appendStroke(svg, 'path', {
          d: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z',
        });
        return svg;
      case 'lucide:heart-pulse':
        this.appendStroke(svg, 'path', {
          d: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l3-2.9',
        });
        this.appendStroke(svg, 'path', { d: 'M3 13h4l2-4 4 8 2-4h6' });
        return svg;
      case 'lucide:hospital':
        this.appendStroke(svg, 'path', { d: 'M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16' });
        this.appendStroke(svg, 'path', { d: 'M9 21v-5h6v5M9 8h6M12 5v6M6 21h12' });
        return svg;
      case 'lucide:message-square-text':
        this.appendStroke(svg, 'path', {
          d: 'M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z',
        });
        this.appendStroke(svg, 'path', { d: 'M8 8h8M8 12h6' });
        return svg;
      case 'lucide:message-square-warning':
        this.appendStroke(svg, 'path', {
          d: 'M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z',
        });
        this.appendStroke(svg, 'path', { d: 'M12 7v5M12 15h.01' });
        return svg;
      case 'lucide:microscope':
        this.appendStroke(svg, 'path', {
          d: 'M6 18h8M3 22h18M14 22a7 7 0 0 0 7-7M9 14l6-6M8 12 4 8l4-4 4 4-4 4Z',
        });
        this.appendStroke(svg, 'path', { d: 'M14 6 16 4l4 4-2 2' });
        return svg;
      case 'lucide:network':
        this.appendStroke(svg, 'rect', { x: '9', y: '2', width: '6', height: '6', rx: '1' });
        this.appendStroke(svg, 'rect', { x: '3', y: '16', width: '6', height: '6', rx: '1' });
        this.appendStroke(svg, 'rect', { x: '15', y: '16', width: '6', height: '6', rx: '1' });
        this.appendStroke(svg, 'path', { d: 'M12 8v4M6 16v-2h12v2' });
        return svg;
      case 'lucide:search-check':
        this.appendStroke(svg, 'circle', { cx: '10', cy: '10', r: '6' });
        this.appendStroke(svg, 'path', { d: 'm14.5 14.5 5 5M7.5 10l1.7 1.7L13 8' });
        return svg;
      case 'lucide:trending-up':
        this.appendStroke(svg, 'path', { d: 'M3 17 9 11l4 4 7-7' });
        this.appendStroke(svg, 'path', { d: 'M14 8h6v6' });
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
      const svg = this.inlineSvg(String(icon).trim(), px);
      if (svg) return svg;
    }
    const fallback = document.createElement('span');
    fallback.textContent = icon || '•';
    fallback.className = `icon-fallback icon-fallback--${px}`;
    return fallback;
  }
  static mount(el, icon, opts) {
    if (!el) return;
    Dom.clear(el);
    el.appendChild(this.node(icon, opts));
  }
}

/* src/ui/behaviors.js */
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
  getActivationOffset() {
    const firstSection = this.sections[0];
    const scrollMargin = firstSection
      ? Number.parseFloat(globalThis.getComputedStyle(firstSection).scrollMarginTop)
      : Number.NaN;
    if (Number.isFinite(scrollMargin) && scrollMargin > 0) return scrollMargin + 1;

    const nav = document.getElementById('navBar');
    return nav ? nav.offsetHeight + 32 : 120;
  }
  getCurrentSectionId() {
    if (this.sections.length === 0) return 'home';

    const root = document.documentElement;
    const isAtPageEnd = globalThis.innerHeight + globalThis.scrollY >= root.scrollHeight - 2;
    if (isAtPageEnd) return this.sections.at(-1)?.id || 'home';

    const activationOffset = this.getActivationOffset();
    let current = this.sections[0]?.id || 'home';
    for (const section of this.sections) {
      if (section.getBoundingClientRect().top > activationOffset) break;
      current = section.id || current;
    }
    return current;
  }
  update() {
    const current = this.getCurrentSectionId();
    for (const link of this.links) {
      const href = link.getAttribute('href') || '';
      const active = href.slice(1) === current;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
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
    this.timer = null;
    this.running = false;
    this.TYPE_MS = 45;
    this.DEL_MS = 25;
    this.HOLD_MS = 1300;
    this.onVisibility = () => {
      if (document.hidden) {
        this.pause();
        return;
      }
      this.resume();
    };
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
    this.running = true;
    document.addEventListener('visibilitychange', this.onVisibility);
    this.schedule(0);
  }
  pause() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }
  resume() {
    if (!this.running || this.timer || document.hidden) return;
    this.schedule(0);
  }
  schedule(ms) {
    if (!this.running || document.hidden) return;
    if (this.timer) window.clearTimeout(this.timer);
    this.timer = window.setTimeout(
      () => {
        this.timer = null;
        this.tick();
      },
      Number(ms) || 0,
    );
  }
  tick() {
    if (!this.running || document.hidden) return;
    const full = this.lines[this.lineIdx] || '';
    if (!this.deleting) {
      this.charIdx += 1;
      this.el.textContent = full.slice(0, this.charIdx);
      if (this.charIdx >= full.length) {
        this.deleting = true;
        this.schedule(this.HOLD_MS);
        return;
      }
      this.schedule(this.TYPE_MS);
      return;
    }
    this.charIdx -= 1;
    this.el.textContent = full.slice(0, Math.max(0, this.charIdx));
    if (this.charIdx <= 0) {
      this.deleting = false;
      this.lineIdx = (this.lineIdx + 1) % this.lines.length;
      this.schedule(350);
      return;
    }
    this.schedule(this.DEL_MS);
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
    this.deactivate();
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

/* src/ui/media.js */
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
      out.push(`${CONFIG.assetsDir}/${slug}.${ext}`);
    }

    if (slug !== raw && slug !== raw.toLowerCase()) {
      for (const ext of CONFIG.imageExtensions) {
        out.push(`${CONFIG.assetsDir}/${encodedRaw}.${ext}`);
      }
    }

    return out;
  }
  static mount(container, project, { mode } = { mode: 'card' }) {
    if (!container) return;
    container.classList.remove('is-icon');
    Dom.clear(container);

    const candidates = [
      ...new Set([...this.candidates(project.imageBase), ...this.candidates(project.repo)]),
    ];

    if (!candidates.length) {
      this.mountFallback(container, project);
      return;
    }

    const img = document.createElement('img');
    img.className = 'p-img';
    img.width = 1280;
    img.height = 720;
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
      const candidate = candidates[i++];
      img.src = `${candidate}?v=${CONFIG.assetsVersion}`;
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
  shouldDisableCanvas() {
    if (this.reducedMotion()) return true;
    if (!window.matchMedia) return false;
    return window.matchMedia('(max-width: 720px), (pointer: coarse)').matches;
  }
  init() {
    if (!this.canvas) return;
    if (this.shouldDisableCanvas()) return;
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
    const key = (cx, cy) => `${cx},${cy}`;
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
    const bucketCount = 10;
    const buckets = Array.from({ length: bucketCount }, () => []);

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
            const bucket = Math.min(bucketCount - 1, Math.floor(alpha * bucketCount));
            buckets[bucket].push(a.x, a.y, b.x, b.y);
          }
        }
      }
    }

    this.ctx.lineWidth = 1;
    for (let i = 0; i < buckets.length; i += 1) {
      const segments = buckets[i];
      if (!segments.length) continue;
      const midAlpha = (i + 0.5) / bucketCount;
      this.ctx.strokeStyle = `rgba(79,140,255,${(0.18 * midAlpha).toFixed(3)})`;
      this.ctx.beginPath();
      for (let j = 0; j < segments.length; j += 4) {
        this.ctx.moveTo(segments[j], segments[j + 1]);
        this.ctx.lineTo(segments[j + 2], segments[j + 3]);
      }
      this.ctx.stroke();
    }
  }
  drawDots() {
    this.ctx.fillStyle = 'rgba(79,140,255,.55)';
    this.ctx.beginPath();
    for (const p of this.particles) {
      this.ctx.moveTo(p.x + p.r, p.y);
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    }
    this.ctx.fill();
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

/* src/domain/project.js */
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

class Project {
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

class ProjectCollection {
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

/* src/ui/project-card-factory.js */
class ProjectCardFactory {
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

/* src/ui/project-modal.js */
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

/* src/controllers/project-catalog-controller.js */
class ProjectCatalogController {
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

/* src/controllers/page-navigation-controller.js */
class PageNavigationController {
  constructor() {
    this.scrollProgress = Dom.id('scrollProgress');
    this.topButton = Dom.id('topBtn');
    this.navBar = Dom.id('navBar');
    this.navToggle = Dom.id('navToggle');
    this.navLinksContainer = Dom.id('navLinks');
    this.brandButton = Dom.id('brandHome');
    this.navLinks = Dom.qsa('nav a[href^="#"]');
    this.sections = Dom.qsa('main section');
    this.navHighlighter = new NavHighlighter({ sections: this.sections, links: this.navLinks });
    this.bound = false;
    this.scrollFrame = null;
  }

  init() {
    if (this.bound) return;
    this.bound = true;
    this.bindScroll();
    this.bindTopButton();
    this.bindBrandHome();
    this.bindSmoothAnchors();
    this.bindMobileMenu();
  }

  bindScroll() {
    const scheduleUpdate = () => {
      if (this.scrollFrame !== null) return;
      this.scrollFrame = globalThis.requestAnimationFrame(() => {
        this.scrollFrame = null;
        this.updateScrollState();
      });
    };
    globalThis.addEventListener('scroll', scheduleUpdate, { passive: true });
    this.updateScrollState();
  }

  updateScrollState() {
    const root = document.documentElement;
    const scrollTop = root.scrollTop || document.body.scrollTop || 0;
    const maxScroll = root.scrollHeight - root.clientHeight;

    if (this.scrollProgress) {
      this.scrollProgress.value = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    }
    this.topButton?.classList.toggle('show', scrollTop > 800);
    this.navBar?.classList.toggle('scrolled', scrollTop > 10);
    this.navHighlighter.update();
  }

  bindTopButton() {
    this.topButton?.addEventListener('click', () => {
      globalThis.scrollTo({ top: 0, behavior: Motion.scrollBehavior() });
    });
  }

  bindBrandHome() {
    this.brandButton?.addEventListener('click', () => {
      if (this.scrollToHash('#home', { replace: true })) return;
      globalThis.scrollTo({ top: 0, behavior: Motion.scrollBehavior() });
    });
  }

  bindSmoothAnchors() {
    for (const anchor of Dom.qsa('a[href^="#"]:not(.skip-link)')) {
      anchor.addEventListener('click', (event) => {
        const href = String(anchor.getAttribute('href') || '').trim();
        if (!href || href === '#') return;
        const isCurrentHash = String(globalThis.location?.hash || '') === href;
        if (!this.scrollToHash(href, { replace: isCurrentHash })) return;
        event.preventDefault();
      });
    }
  }

  scrollToHash(hash, { replace = false } = {}) {
    const normalizedHash = String(hash || '').trim();
    if (!normalizedHash || normalizedHash === '#') return false;

    let target;
    try {
      target = document.querySelector(normalizedHash);
    } catch {
      return false;
    }
    if (!target) return false;

    target.scrollIntoView({ behavior: Motion.scrollBehavior(), block: 'start' });
    if (replace) HistoryState.replace(normalizedHash);
    else HistoryState.push(normalizedHash);
    return true;
  }

  bindMobileMenu() {
    if (!this.navToggle || !this.navLinksContainer) return;

    const setOpen = (isOpen) => {
      this.navLinksContainer.classList.toggle('open', isOpen);
      this.navToggle.setAttribute('aria-expanded', String(isOpen));
    };

    this.navToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      setOpen(!this.navLinksContainer.classList.contains('open'));
    });

    for (const anchor of this.navLinksContainer.querySelectorAll('a')) {
      anchor.addEventListener('click', () => setOpen(false));
    }

    document.addEventListener('click', (event) => {
      if (!this.navLinksContainer.classList.contains('open')) return;
      if (this.navLinksContainer.contains(event.target) || this.navToggle.contains(event.target))
        return;
      setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });
  }
}

/* src/controllers/tech-stack-controller.js */
class TechStackController {
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

/* src/portfolio-app.js */
class PortfolioApp {
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

/* app.js */
function startPortfolio() {
  try {
    new PortfolioApp(PROJECTS_RAW).init();
  } catch (error) {
    document.documentElement.classList.remove('preload');
    document.getElementById('projectFallback')?.removeAttribute('hidden');
    console.error('Portfolio initialization failed.', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startPortfolio, { once: true });
} else {
  startPortfolio();
}
})();
