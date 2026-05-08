# Tarek Masryo — Portfolio Website

A fast, static portfolio website for **Tarek Masryo**, an **AI/ML Engineer** building practical machine learning and GenAI systems that connect data, models, software, and user-facing workflows into reliable products.

**Live site:** https://tarekmasryo.github.io/

## What this repository is

This repository contains the source code for a public portfolio site built to present production-minded AI/ML and GenAI work clearly, quickly, and reliably.

The site intentionally uses plain **HTML**, **CSS**, and **vanilla JavaScript**. There is no frontend framework, no build pipeline requirement, and no backend dependency. The goal is a clean GitHub Pages deployment with predictable maintenance and strong static-site quality checks.

## What the site showcases

- Production-minded ML systems, dashboards, APIs, datasets, and GenAI workflows
- A searchable and filterable project catalog
- Project detail modals with summaries, approaches, signals, stacks, and links
- Public profile links for GitHub, LinkedIn, Kaggle, Hugging Face, Streamlit, X, Email, and CV
- Sections for services, technical stack, working style, FAQ, and contact
- SEO and social preview metadata for clean sharing across LinkedIn, X, WhatsApp, and other platforms

## Portfolio focus areas

- **Machine learning systems** — risk scoring, classification, calibration, thresholds, and reproducible artifacts
- **GenAI, RAG, and LLMOps** — retrieval evaluation, telemetry, trace review, triage workflows, and drift signals
- **APIs and serving** — FastAPI, strict schemas, typed contracts, versioned artifacts, and model-serving workflows
- **Decision apps and dashboards** — operator-facing interfaces, KPIs, review queues, and workflow controls
- **Datasets and evaluation assets** — structured datasets, telemetry logs, benchmark-style data, and analysis-ready resources

## Engineering highlights

- **Static-first architecture** for simple hosting and low operational overhead
- **Separated project data** in `projects.js` instead of embedding all portfolio content inside the UI controller
- **Responsive UI** for desktop and mobile screens
- **Mobile rendering hardening** that reduces heavy background and glass effects on narrow/coarse-pointer devices
- **No-JavaScript fallback** for featured project links
- **Static security guardrails** including CSP metadata, SRI on the external icon script, and safe external-link defaults
- **Safe external links** using `rel="noopener noreferrer"`
- **SEO foundations** including canonical URL, Open Graph, Twitter cards, JSON-LD, `robots.txt`, and `sitemap.xml`
- **Custom validation scripts** for static integrity and security guardrails
- **Playwright smoke tests** for core browser interactions
- **GitHub Actions CI** for repeatable checks on pushes and pull requests

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages
- Node.js tooling
- Playwright

## Repository structure

```text
.
├── index.html                  # Main portfolio page
├── 404.html                    # Custom not-found page
├── styles.css                  # Site styling and responsive layout
├── projects.js                 # Structured project catalog data
├── app.js                      # Interactive UI behavior and app orchestration
├── assets/                     # Project covers, profile assets, icons, and brand images
├── scripts/
│   ├── validate-static.mjs     # Static integrity validation
│   └── security-audit.mjs      # Static security guardrail checks
├── tests/e2e/                  # Playwright browser smoke tests
├── site.webmanifest            # Web app manifest
├── robots.txt                  # Search engine crawl guidance
├── sitemap.xml                 # Sitemap for indexing
├── .nojekyll                   # Disable Jekyll processing on GitHub Pages
└── .github/workflows/ci.yml    # CI checks for pushes and pull requests
```

## Run locally

Install dependencies:

```bash
npm ci --no-audit --no-fund
```

Start the local server:

```bash
npm run start
```

Open:

```text
http://localhost:8000
```

`npm run serve` is available as an alias for local serving.

## Quality checks

Run the main static quality gate:

```bash
npm run check
```

This runs linting, formatting checks, static validation, security audit, and production dependency audit.

Run browser smoke tests:

```bash
npx playwright install chromium
npm run test:e2e
```

Run the full local gate:

```bash
npm run check:full
```

## Available commands

```bash
npm run start             # Serve the static site locally
npm run serve             # Alias for local serving
npm run lint              # Run ESLint
npm run format            # Format files with Prettier
npm run format:check      # Check formatting without writing changes
npm run validate:static   # Validate static site integrity
npm run security:audit    # Run static security guardrails
npm run audit:prod        # Audit production dependencies
npm run test:e2e          # Run Playwright smoke tests
npm run check             # Main static quality gate
npm run check:full        # Static quality gate + Playwright smoke tests
```

## Validation coverage

The validation scripts check:

- Required files and metadata
- Local asset references
- Internal anchor targets
- Project data consistency
- Project image mappings
- CSP and inline script hash integrity
- Iconify CDN SRI and `crossorigin` settings
- External profile, CV, and third-party runtime link guardrails
- Mobile visual-effect fallback guardrails
- No-JavaScript featured project fallback
- Safe external link attributes
- Common secret-like patterns
- Dangerous dynamic execution sinks

The Playwright smoke tests cover:

- Initial page load
- Project rendering
- Search and clear search behavior
- Project modal open and close flow
- Theme toggle behavior
- Mobile navigation open and close flow
- Mobile visual-effect fallback behavior
- No-JavaScript featured project fallback
- Local asset request failures

## Updating project content

Portfolio project data is maintained in:

```text
projects.js
```

Each project entry can include:

- category
- type
- title
- description
- problem or summary framing
- approach bullets
- signals or outcomes
- stack
- tags
- repository slug
- optional external URL
- optional secondary link
- image base name

Project covers and visual assets live in:

```text
assets/
```

Project covers should include WebP versions because the static validator checks project image availability.

## Deployment

This repository is configured for **GitHub Pages** as a user site.

Expected GitHub Pages settings:

1. **Source:** Deploy from a branch
2. **Branch:** `main`
3. **Folder:** `/(root)`

Before pushing a release:

```bash
npm ci --no-audit --no-fund
npm run check
npx playwright install chromium
npm run test:e2e
```

After deployment, verify the live site visually and refresh social previews if needed through the relevant platform preview tools.

## Release checklist

Before publishing, confirm:

- The project opens locally at `http://localhost:8000`
- `npm run check` passes
- `npm run test:e2e` passes
- No local output folders are committed
- Project images and profile icons load correctly
- Search, filters, modals, theme toggle, and mobile navigation work
- The CV link opens without access requests

Do not commit local dependency or test output folders:

```text
node_modules/
playwright-report/
test-results/
```

## Notes

- GitHub Pages file paths are case-sensitive.
- Keep required assets committed to avoid broken project cards and previews.
- The site intentionally avoids a frontend framework to keep deployment and maintenance simple.
- The public CV link is managed externally and should remain viewable without access requests.

## License

The source code in this repository is released under the **MIT License**. See [`LICENSE`](LICENSE) for details.

Portfolio content, branding, personal information, images, and project descriptions remain the property of Tarek Masryo unless otherwise stated.
