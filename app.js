(function () {
  "use strict";

  const CONFIG = Object.freeze({
    assetsDir: "assets",
    imageExtensions: ["png", "jpg", "jpeg", "webp"],
    revealThreshold: 0.12,
    projectLimit: 12,
    themeStorageKey: "tm_theme"
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

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function debounce(fn, ms) {
    let t;
    return function () {
      const args = arguments;
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  function githubUrl(repo) {
    return "https://github.com/tarekmasryo/" + repo;
  }

  function normalizeBaseName(s) {
    if (!s) return "";
    // keep it conservative: cover common "copy/paste" filename variants
    return String(s)
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[—–]/g, "-");
  }

  function slugifyBaseName(s) {
    if (!s) return "";
    return normalizeBaseName(s)
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }

  function buildImageCandidates(imageBase) {
    const raw = String(imageBase || "").trim();
    if (!raw) return [];

    const slug = slugifyBaseName(raw);
    const bases = Array.from(new Set([raw, slug].filter(Boolean)));

    const out = [];
    for (const b of bases) {
      const encoded = encodeURIComponent(b);
      for (const ext of CONFIG.imageExtensions) {
        out.push(`${CONFIG.assetsDir}/${encoded}.${ext}`);
      }
    }
    return out;
  }

  function attachProjectMedia(container, p, opts) {
    const mode = (opts && opts.mode) || "card";
    const candidates = [
      ...buildImageCandidates(p.imageBase),
      ...buildImageCandidates(p.repo),
      ...buildImageCandidates((p.repo || '').toLowerCase())
    ];

    container.classList.remove("is-icon");
    container.textContent = "";

    if (!candidates.length) {
      container.classList.add("is-icon");
      container.textContent = p.icon || "•";
      return;
    }

    const img = document.createElement("img");
    img.className = mode === "modal" ? "p-img" : "p-img";
    img.loading = mode === "modal" ? "eager" : "lazy";
    img.decoding = "async";
    img.alt = p.title || "Project";
    img.referrerPolicy = "no-referrer";

    let i = 0;
    const tryNext = () => {
      if (i >= candidates.length) {
        container.classList.add("is-icon");
        container.textContent = p.icon || "•";
        return;
      }
      img.src = candidates[i++];
    };

    img.addEventListener("error", tryNext);
    img.addEventListener(
      "load",
      () => img.removeEventListener("error", tryNext),
      { once: true }
    );

    container.appendChild(img);
    tryNext();
  }

  function createRevealObserver() {
    if (!("IntersectionObserver" in window)) return null;
    return new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          obs.unobserve(e.target);
        });
      },
      { threshold: CONFIG.revealThreshold }
    );
  }

  function observeAllFade(observer) {
    if (!observer) return;
    qsa(".fade").forEach((el) => observer.observe(el));
  }

  function primeRevealInViewport() {
    const h = window.innerHeight || 800;
    qsa(".fade").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < h * 0.92) el.classList.add("in");
    });
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
      const active = href.slice(1) === current;
      a.classList.toggle("active", active);
      if (active) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function safeGet(k) {
    try { return localStorage.getItem(k); } catch (_) { return null; }
  }

  function safeSet(k, v) {
    try { localStorage.setItem(k, v); } catch (_) { /* ignore */ }
  }

  function getInitialTheme() {
    const stored = safeGet(CONFIG.themeStorageKey);
    if (stored === "light" || stored === "dark") return stored;

    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;

    return prefersLight ? "light" : "dark";
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
  }

  function initBgCanvasParticles() {
    const canvas = $("bgCanvas");
    if (!canvas) return;

    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let w = 0, h = 0, dpr = 1;
    let raf = null;
    let running = true;

    const CFG = {
      count: 55,
      maxSpeed: 0.22,
      linkDist: 140,
      radiusMin: 0.8,
      radiusMax: 1.9
    };

    const particles = [];

    function rand(a, b) { return a + Math.random() * (b - a); }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      particles.length = 0;
      for (let i = 0; i < CFG.count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: rand(-CFG.maxSpeed, CFG.maxSpeed),
          vy: rand(CFG.maxSpeed * -1, CFG.maxSpeed),
          r: rand(CFG.radiusMin, CFG.radiusMax)
        });
      }
    }

    function buildGrid(cellSize) {
      const grid = new Map();
      const key = (cx, cy) => (cx << 16) ^ cy;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const cx = Math.floor(p.x / cellSize);
        const cy = Math.floor(p.y / cellSize);
        const k = key(cx, cy);
        if (!grid.has(k)) grid.set(k, []);
        grid.get(k).push(i);
      }
      return { grid, key };
    }

    function step() {
      if (!running) return;

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > w) { p.x = w; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > h) { p.y = h; p.vy *= -1; }
      }

      const cell = CFG.linkDist;
      const { grid, key } = buildGrid(cell);

      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const acx = Math.floor(a.x / cell);
        const acy = Math.floor(a.y / cell);

        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const list = grid.get(key(acx + dx, acy + dy));
            if (!list) continue;

            for (const j of list) {
              if (j <= i) continue;
              const b = particles[j];

              const vx = a.x - b.x;
              const vy = a.y - b.y;
              const dist = Math.hypot(vx, vy);
              if (dist > CFG.linkDist) continue;

              const alpha = 1 - dist / CFG.linkDist;
              ctx.strokeStyle = "rgba(79,140,255," + (0.18 * alpha) + ")";
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      ctx.fillStyle = "rgba(79,140,255,.55)";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    function onVis() {
      running = !document.hidden;
      if (running && !raf) step();
      if (!running && raf) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    }

    resize();
    seed();
    step();

    window.addEventListener("resize", () => { resize(); seed(); }, { passive: true });
    document.addEventListener("visibilitychange", onVis);
  }

  class PortfolioApp {
    constructor() {
      this.grid = $("projectsGrid");
      this.projectsMeta = $("projectsMeta");
      this.projectsToggle = $("projectsToggle");

      this.searchInput = $("projectSearch");
      this.clearSearch = $("clearSearch");
      this.searchQuery = "";

      this.currentCat = "all";
      this.showAll = false;

      this.scrollProgress = $("scrollProgress");
      this.topBtn = $("topBtn");
      this.navBar = $("navBar");
      this.navLinks = qsa("nav a");
      this.sections = qsa("main.hero, section");

      this.brandBtn = $("brandHome");
      this.themeToggle = $("themeToggle");

      // Modal
      this.modal = $("projectModal");
      this.mClose = $("mClose");
      this.mType = $("mType");
      this.mTitle = $("mTitle");
      this.mDesc = $("mDesc");
      this.mMedia = $("mMedia");
      this.mSummary = $("mProblem");
      this.mApproach = $("mApproach");
      this.mSignals = $("mSignals");
      this.mStack = $("mStack");
      this.mRepo = $("mRepo");
      this.mAlt = $("mAlt");

      this.revealObserver = createRevealObserver();

      this.lastFocus = null;
      this.activeProject = null;
    }

    renderProjects(cat) {
      const q = (this.searchQuery || "").trim().toLowerCase();
      let items = cat === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat);

      if (q) {
        items = items.filter((p) => {
          const hay = [p.title, p.desc, p.type, p.cat].filter(Boolean).join(" ").toLowerCase();
          return hay.includes(q);
        });
      }

      const total = items.length;
      const limit = CONFIG.projectLimit || 12;
      const visible = q ? items : (this.showAll ? items : items.slice(0, limit));

      if (this.grid) {
        this.grid.innerHTML = "";
        visible.forEach((p) => this.grid.appendChild(this.createProjectCard(p)));
      }

      if (this.projectsMeta) {
        if (total === 0) {
          this.projectsMeta.textContent = q ? "No projects match your search." : "No projects to show.";
        } else if (q) {
          this.projectsMeta.textContent = "Found " + total + " project" + (total === 1 ? "" : "s");
        } else if (total <= limit) {
          this.projectsMeta.textContent = total + " project" + (total === 1 ? "" : "s");
        } else {
          this.projectsMeta.textContent = "Showing " + visible.length + " of " + total + " projects";
        }
      }

      if (this.projectsToggle) {
        if (q || total <= limit) {
          this.projectsToggle.style.display = "none";
        } else {
          this.projectsToggle.style.display = "inline-flex";
          this.projectsToggle.textContent = this.showAll ? "Show Less" : "View All Projects";
          this.projectsToggle.setAttribute("aria-expanded", this.showAll ? "true" : "false");
        }
      }

      observeAllFade(this.revealObserver);
    }

    createProjectCard(p) {
      const card = document.createElement("article");
      card.className = "card p-card fade";
      card.setAttribute("aria-label", p.title);

      // Accessibility: treat card as an interactive link to details
      card.setAttribute("role", "button");
      card.tabIndex = 0;

      const top = document.createElement("div");
      top.className = "p-top";
      attachProjectMedia(top, p, { mode: "card" });

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
      a.className = "btn repo";
      a.href = githubUrl(p.repo);
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "Open repo";

      body.append(type, h, d, a);
      card.append(top, body);

      const openDetails = () => this.openModal(p);

      card.addEventListener("click", (e) => {
        if (e.target && e.target.closest && e.target.closest("a")) return;
        openDetails();
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDetails();
        }
      });

      return card;
    }

    bindFilters() {
      const btns = qsa(".fbtn");
      btns.forEach((b) => {
        b.addEventListener("click", () => {
          btns.forEach((x) => x.classList.remove("active"));
          b.classList.add("active");

          this.currentCat = b.dataset.cat || "all";
          this.showAll = false;
          this.renderProjects(this.currentCat);
        });
      });
    }

    bindSearch() {
      if (!this.searchInput) return;

      const syncClear = () => {
        if (!this.clearSearch) return;
        this.clearSearch.style.display = this.searchInput.value ? "flex" : "none";
      };

      const apply = () => {
        this.searchQuery = this.searchInput.value || "";
        this.showAll = false;
        this.renderProjects(this.currentCat);
        syncClear();
      };

      const onInput = debounce(apply, 80);
      this.searchInput.addEventListener("input", onInput);

      if (this.clearSearch) {
        this.clearSearch.addEventListener("click", () => {
          this.searchInput.value = "";
          apply();
          this.searchInput.focus();
        });
      }

      syncClear();
    }

    bindProjectsToggle() {
      if (!this.projectsToggle) return;
      this.projectsToggle.addEventListener("click", () => {
        this.showAll = !this.showAll;
        this.renderProjects(this.currentCat);
      });
    }

    bindScroll() {
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
    }

    bindTopButton() {
      if (!this.topBtn) return;
      this.topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    bindBrandHome() {
      if (!this.brandBtn) return;
      this.brandBtn.addEventListener("click", () => {
        const home = $("home");
        if (home) home.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    bindSmoothAnchors() {
      qsa('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          const href = a.getAttribute("href");
          const target = href ? document.querySelector(href) : null;
          if (!target) return;
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        });
      });
    }

    bindThemeToggle() {
      if (!this.themeToggle) return;

      const setLabel = () => {
        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        this.themeToggle.textContent = isLight ? "☀️" : "🌙";
        this.themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
        this.themeToggle.setAttribute("title", isLight ? "Light theme" : "Dark theme");
      };

      setLabel();

      this.themeToggle.addEventListener("click", () => {
        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        const next = isLight ? "dark" : "light";
        applyTheme(next);
        safeSet(CONFIG.themeStorageKey, next);
        setLabel();
      });
    }

    /* ----------------------------
       Modal
    ---------------------------- */
    openModal(p) {
      if (!this.modal) return;

      this.activeProject = p;
      this.lastFocus = document.activeElement;

      this.modal.classList.add("show");
      this.modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");

      if (this.mType) this.mType.textContent = p.type || "Project";
      if (this.mTitle) this.mTitle.textContent = p.title || "—";
      if (this.mDesc) this.mDesc.textContent = p.desc || "—";

      if (this.mMedia) {
        this.mMedia.innerHTML = "";
        attachProjectMedia(this.mMedia, p, { mode: "modal" });
      }

      if (this.mSummary) {
        // Use desc as the safest "summary" without inventing content.
        this.mSummary.textContent = p.problem || p.desc || "—";
      }

      this.setList(this.mApproach, Array.isArray(p.approach) ? p.approach : null);
      this.setList(this.mSignals, Array.isArray(p.signals) ? p.signals : null);
      this.setTags(this.mStack, Array.isArray(p.stack) ? p.stack : null);

      if (this.mRepo) {
        this.mRepo.href = githubUrl(p.repo);
        this.mRepo.style.display = "inline-flex";
      }

      if (this.mAlt) {
        if (p.alt && p.alt.href) {
          this.mAlt.href = p.alt.href;
          this.mAlt.textContent = p.alt.label || "Secondary link";
          this.mAlt.style.display = "inline-flex";
        } else {
          this.mAlt.style.display = "none";
        }
      }

      // focus
      if (this.mClose) this.mClose.focus();
    }

    closeModal() {
      if (!this.modal) return;

      this.modal.classList.remove("show");
      this.modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");

      const toFocus = this.lastFocus;
      this.lastFocus = null;
      this.activeProject = null;

      if (toFocus && toFocus.focus) toFocus.focus();
    }

    setList(ul, items) {
      if (!ul) return;
      const block = ul.closest(".modal-block");

      if (!items || !items.length) {
        ul.innerHTML = "";
        if (block) block.style.display = "none";
        return;
      }

      if (block) block.style.display = "";
      ul.innerHTML = "";
      items.forEach((x) => {
        const li = document.createElement("li");
        li.textContent = x;
        ul.appendChild(li);
      });
    }

    setTags(container, items) {
      if (!container) return;
      const block = container.closest(".modal-block");

      if (!items || !items.length) {
        container.innerHTML = "";
        if (block) block.style.display = "none";
        return;
      }

      if (block) block.style.display = "";
      container.innerHTML = "";
      items.forEach((x) => {
        const s = document.createElement("span");
        s.className = "tag";
        s.textContent = x;
        container.appendChild(s);
      });
    }

    bindModal() {
      if (!this.modal) return;

      // Close buttons (any element with data-close="1")
      qsa('[data-close="1"]', this.modal).forEach((el) => {
        el.addEventListener("click", () => this.closeModal());
      });

      if (this.mClose) this.mClose.addEventListener("click", () => this.closeModal());

      // Backdrop click
      const backdrop = qs(".modal-backdrop", this.modal);
      if (backdrop) backdrop.addEventListener("click", () => this.closeModal());

      // Escape key
      document.addEventListener("keydown", (e) => {
        if (!this.modal.classList.contains("show")) return;
        if (e.key === "Escape") this.closeModal();
      });
    }

    init() {
      // Theme
      const initialTheme = getInitialTheme();
      applyTheme(initialTheme);

      // Year
      const y = $("year");
      if (y) y.textContent = String(new Date().getFullYear());

      this.currentCat = "all";
      this.showAll = false;

      this.renderProjects(this.currentCat);
      observeAllFade(this.revealObserver);

      this.bindFilters();
      this.bindProjectsToggle();
      this.bindSearch();
      this.bindScroll();
      this.bindTopButton();
      this.bindBrandHome();
      this.bindSmoothAnchors();
      this.bindModal();
      this.bindThemeToggle();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const app = new PortfolioApp();
    app.init();

    primeRevealInViewport();
    document.documentElement.classList.remove("preload");

    initBgCanvasParticles();
  });
})();
