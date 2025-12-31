(function () {
  const CONFIG = Object.freeze({
    assetsDir: "assets",
    imageExtensions: ["png", "jpg", "jpeg", "webp"],
    revealThreshold: 0.12,
    projectLimit: 12
  });

  const PROJECTS = [
    { cat: "healthcare", icon: "🏥", type: "Healthcare ML", title: "Hospital Deterioration — Next 12h Early Warning", desc: "Baseline pipeline for early-warning risk scoring and operational evaluation (next 12h).", repo: "hospital-deterioration-next-12h-early-warning-baseline", imageBase: "Hospital Deterioration — Next 12h Early Warning" },
    { cat: "healthcare", icon: "🧪", type: "Dataset", title: "Hospital Deterioration Dataset", desc: "Clean ML-ready tables for deterioration prediction with reproducible splits and documentation.", repo: "hospital-deterioration-dataset", imageBase: "Hospital Deterioration Dataset" },
    { cat: "healthcare", icon: "🧠", type: "Dashboard", title: "Health Intelligence Platform", desc: "Dashboard exploring digital lifestyle patterns, wellbeing signals, and decision insights.", repo: "health-intelligence-platform", imageBase: "Health Intelligence Platform" },
    { cat: "healthcare", icon: "🎗️", type: "Healthcare ML", title: "Cancer Risk Prediction", desc: "End-to-end risk prediction workflow with robust evaluation and model reporting.", repo: "cancer-risk-prediction", imageBase: "Cancer Risk Prediction" },
    { cat: "healthcare", icon: "🧬", type: "Dataset", title: "Cancer Risk Factors Data", desc: "Clean dataset for cancer risk analysis with documentation and practical baselines.", repo: "cancer-risk-factors-data", imageBase: "Cancer Risk Factors Data" },
    { cat: "healthcare", icon: "🩸", type: "Dataset", title: "Blood Donation Registry Dataset", desc: "Synthetic ops dataset for donor eligibility, outreach policy modeling, and compatibility lookup.", repo: "blood-donation-registry-dataset", imageBase: "Blood Donation Registry Dataset" },

    { cat: "finance", icon: "🛡️", type: "Dashboard", title: "Fraud Detection Dashboard", desc: "Streamlit dashboard with trained artifacts, decision metrics, segments, and operational UX.", repo: "fraud-detection-dashboard", imageBase: "Fraud Detection Dashboard" },
    { cat: "finance", icon: "💳", type: "ML Pipeline", title: "Credit Card Fraud Detection", desc: "Fraud classification workflow with reproducibility, evaluation, and threshold-aware analysis.", repo: "creditcard-fraud-detection", imageBase: "Credit Card Fraud Detection" },
    { cat: "finance", icon: "💰", type: "Kaggle PS", title: "Loan Payback Prediction", desc: "Playground Series solution: feature engineering, training, and model selection.", repo: "loan-payback-ps5e11", imageBase: "Loan Payback Prediction" },
    { cat: "finance", icon: "🚗", type: "Risk Model", title: "Road Accident Risk", desc: "Risk assessment modeling with production-style evaluation and reporting.", repo: "road-accident-risk", imageBase: "Road Accident Risk" },

    { cat: "social", icon: "📱", type: "Dashboard", title: "Short Video Intelligence Dashboard", desc: "Virality and engagement analytics for short-form content with decision-ready views.", repo: "Short-video-intelligence-dashboard", imageBase: "Short Video Intelligence Dashboard" },
    { cat: "social", icon: "🔥", type: "Dataset", title: "YouTubeTikTok Trends Dataset", desc: "Trends dataset to analyze content performance and short-form dynamics (2025 snapshot).", repo: "youtube-tiktok-trends-dataset-2025", imageBase: "YouTubeTikTok Trends Dataset" },
    { cat: "social", icon: "🎭", type: "NLP", title: "Text Sentiment Analysis", desc: "Sentiment classification with classical baselines and deep learning extensions.", repo: "text-sentiment-analysis", imageBase: "Text Sentiment Analysis" },
    { cat: "social", icon: "✉️", type: "NLP", title: "SMS Spam Detection", desc: "Spam detection pipeline with feature engineering, validation, and model evaluation.", repo: "sms-spam-detection", imageBase: "SMS Spam Detection" },

    { cat: "genai", icon: "🧾", type: "Dataset", title: "RAG QA Logs & Corpus Data", desc: "Multi-table RAG evaluation logs + corpus for retrieval quality and hallucination analysis.", repo: "rag-qa-logs-corpus-data", imageBase: "RAG QA Logs & Corpus Data" },
    { cat: "genai", icon: "🧰", type: "Tooling", title: "QuickStart", desc: "Generate quick artifacts and scaffolds from Hugging Face URLs (fast reusable workflow).", repo: "QuickStart", imageBase: "QuickStart" },
    { cat: "genai", icon: "🖼️", type: "App", title: "Old Photo Restorer", desc: "Gradio app for photo restoration with batch export and clean UX.", repo: "Old-Photo-Restorer", imageBase: "Old Photo Restorer" },
    { cat: "genai", icon: "🧩", type: "Dataset", title: "GenAI Tools & Platforms Data", desc: "Dataset mapping GenAI tools/platforms for comparisons and analysis.", repo: "genai-tools-platforms-data", imageBase: "GenAI Tools & Platforms Data" },
{ cat: "genai", icon: "🧠", type: "Baseline", title: "GenAI Tools Baseline", desc: "Baseline comparisons and practical notes for GenAI tools, platforms, and model usage patterns.", repo: "genai-tools-baseline", imageBase: "GenAI Tools Baseline" },

    { cat: "analytics", icon: "🔌", type: "Dashboard", title: "EV Charging Dashboard", desc: "Interactive analytics for global EV charging infrastructure and power classifications.", repo: "ev-charging-dashboard", imageBase: "EV Charging Dashboard" },
    { cat: "analytics", icon: "🌍", type: "Dataset", title: "EV Infra Dataset", desc: "EV infrastructure dataset: stations, connectors, and derived power categories.", repo: "global-ev-infra-dataset", imageBase: "EV Infra Dataset" },
    { cat: "analytics", icon: "⚽", type: "Dashboard", title: "Football Matches Dashboard", desc: "Football analytics dashboard for match performance and season-level insights.", repo: "football-matches-dashboard", imageBase: "Football Matches Dashboard" },
    { cat: "analytics", icon: "📦", type: "Dataset", title: "Football Matches Dataset 2025", desc: "Dataset for football match results/statistics (2025) designed for analysis and dashboards.", repo: "football-matches-2025-dataset", imageBase: "Football Matches Dataset 2025" },
    { cat: "analytics", icon: "📊", type: "Tutorial", title: "Matplotlib Tutorials", desc: "Production-style plotting patterns and EDA templates for clean data storytelling.", repo: "matplotlib-tutorials", imageBase: "Matplotlib Tutorials" },
    { cat: "analytics", icon: "🧪", type: "Tutorial", title: "Seaborn Tutorials", desc: "Seaborn recipes and best practices for readable, decision-ready visuals.", repo: "seaborn-tutorials", imageBase: "Seaborn Tutorials" },
    { cat: "analytics", icon: "🎨", type: "Visual Lab", title: "Seaborn + Matplotlib Visual Lab", desc: "Interactive visual lab to learn plotting patterns, styling, and visual diagnostics.", repo: "seaborn-matplotlib-visual-lab", imageBase: "Seaborn + Matplotlib Visual Lab" }
  ];

  function $(id) {
    return document.getElementById(id);
  }

  function githubUrl(repo) {
    return "https://github.com/tarekmasryo/" + repo;
  }

  function buildImageCandidates(imageBase) {
    if (!imageBase) return [];
    const base = CONFIG.assetsDir + "/" + imageBase;
    return CONFIG.imageExtensions.map(ext => encodeURI(base + "." + ext));
  }

  function createProjectCard(p) {
    const card = document.createElement("article");
    card.className = "card p-card fade";
    card.setAttribute("aria-label", p.title);

    const top = document.createElement("div");
    top.className = "p-top";
    attachProjectMedia(top, p);

    const body = document.createElement("div");
    body.className = "p-body";

    const type = document.createElement("span");
    type.className = "ptype";
    type.textContent = p.type;

    const h = document.createElement("h3");
    h.textContent = p.title;

    const d = document.createElement("p");
    d.textContent = p.desc;

    const a = document.createElement("a");
    a.className = "plink";
    a.href = githubUrl(p.repo);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = "Open repo →";

    body.append(type, h, d, a);
    card.append(top, body);

    card.addEventListener("click", (e) => {
      if (e.target && e.target.tagName === "A") return;
      window.open(a.href, "_blank", "noopener,noreferrer");
    });

    return card;
  }

  function attachProjectMedia(container, p) {
    const candidates = buildImageCandidates(p.imageBase);

    if (!candidates.length) {
      container.classList.add("is-icon");
      container.textContent = p.icon || "•";
      return;
    }

    const img = document.createElement("img");
    img.className = "p-img";
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = p.title;

    let i = 0;
    const tryNext = () => {
      if (i >= candidates.length) {
        container.classList.add("is-icon");
        container.textContent = p.icon || "•";
        return;
      }
      img.src = candidates[i++];
    };

    img.addEventListener("error", tryNext, { once: false });
    img.addEventListener("load", () => {
      img.removeEventListener("error", tryNext);
    }, { once: true });

    container.appendChild(img);
    tryNext();
  }

  function createRevealObserver() {
    if (!("IntersectionObserver" in window)) return null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          observer.unobserve(e.target);
        });
      },
      { threshold: CONFIG.revealThreshold }
    );

    return observer;
  }

  function observeAllFade(observer) {
    if (!observer) return;
    document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
  }

  function setActiveNav(sections, navLinks) {
    const y = window.scrollY;
    let current = "home";

    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      const id = s.id || "home";
      const top = s.getBoundingClientRect().top + window.scrollY;
      if (y >= top - 220) current = id;
    }

    navLinks.forEach((a) => {
      const href = a.getAttribute("href") || "";
      a.classList.toggle("active", href.slice(1) === current);
    });
  }

  function PortfolioApp() {
    this.grid = $("projectsGrid");
    this.projectsMeta = $("projectsMeta");
    this.projectsToggle = $("projectsToggle");

    this.currentCat = "all";
    this.showAll = false;

    this.scrollProgress = $("scrollProgress");
    this.topBtn = $("topBtn");
    this.navBar = $("navBar");
    this.navLinks = Array.prototype.slice.call(document.querySelectorAll("nav a"));
    this.sections = Array.prototype.slice.call(document.querySelectorAll("main.hero, section"));
    this.revealObserver = createRevealObserver();
  }

  PortfolioApp.prototype.renderProjects = function (cat) {
    const items = cat === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat);
    const total = items.length;
    const limit = CONFIG.projectLimit || 12;
    const visible = this.showAll ? items : items.slice(0, limit);

    this.grid.innerHTML = "";
    visible.forEach((p) => this.grid.appendChild(createProjectCard(p)));

    if (this.projectsMeta) {
      if (total <= limit) {
        this.projectsMeta.textContent = total + " project" + (total === 1 ? "" : "s");
      } else {
        this.projectsMeta.textContent = "Showing " + visible.length + " of " + total + " projects";
      }
    }

    if (this.projectsToggle) {
      if (total <= limit) {
        this.projectsToggle.style.display = "none";
      } else {
        this.projectsToggle.style.display = "inline-flex";
        this.projectsToggle.textContent = this.showAll ? "Show Less" : "View All Projects";
        this.projectsToggle.setAttribute("aria-expanded", this.showAll ? "true" : "false");
      }
    }

    observeAllFade(this.revealObserver);
  };

  PortfolioApp.prototype.bindFilters = function () {
    const btns = Array.prototype.slice.call(document.querySelectorAll(".fbtn"));
    btns.forEach((b) => {
      b.addEventListener("click", () => {
        btns.forEach((x) => x.classList.remove("active"));
        b.classList.add("active");

        this.currentCat = b.dataset.cat || "all";
        this.showAll = false;
        this.renderProjects(this.currentCat);
      });
    });
  };

  PortfolioApp.prototype.bindProjectsToggle = function () {
    if (!this.projectsToggle) return;
    this.projectsToggle.addEventListener("click", () => {
      this.showAll = !this.showAll;
      this.renderProjects(this.currentCat);
    });
  };

  PortfolioApp.prototype.bindScroll = function () {
    const onScroll = () => {
      const doc = document.documentElement;
      const st = doc.scrollTop || document.body.scrollTop || 0;
      const max = doc.scrollHeight - doc.clientHeight;

      if (this.scrollProgress) {
        this.scrollProgress.style.width = (max ? (st / max) * 100 : 0) + "%";
      }

      if (this.topBtn) this.topBtn.classList.toggle("show", st > 800);
      if (this.navBar) this.navBar.classList.toggle("scrolled", st > 10);

      setActiveNav(this.sections, this.navLinks);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  PortfolioApp.prototype.bindTopButton = function () {
    if (!this.topBtn) return;
    this.topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  PortfolioApp.prototype.bindSmoothAnchors = function () {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        const target = href ? document.querySelector(href) : null;
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  };

  PortfolioApp.prototype.init = function () {
    this.currentCat = "all";
    this.showAll = false;

    this.renderProjects(this.currentCat);
    observeAllFade(this.revealObserver);

    this.bindFilters();
    this.bindProjectsToggle();
    this.bindScroll();
    this.bindTopButton();
    this.bindSmoothAnchors();
  };

  document.addEventListener("DOMContentLoaded", function () {
    const app = new PortfolioApp();
    app.init();
  });
})();
