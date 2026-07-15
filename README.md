# Tarek Masryo — Portfolio Website

A fast, static portfolio for **Tarek Masryo**, an **AI/ML Engineer** building production-minded machine learning and GenAI systems that connect data, models, software, evaluation, monitoring, and user-facing workflows.

**Live site:** https://tarekmasryo.github.io/

## Purpose

The site is designed for both technical recruitment and high-value freelance work. It presents production ML, RAG, Agents, LLMOps, APIs, decision-support applications, datasets, and applied ML projects without turning the portfolio into a copy of a CV.

The implementation uses **HTML**, **CSS**, and modular **vanilla JavaScript** source code. A generated classic bundle is committed for deployment, so GitHub Pages can serve the repository directly and the project catalog does not depend on browser ESM loading during a local preview.

## What the site showcases

- Production-minded ML systems, APIs, dashboards, datasets, and GenAI workflows
- A searchable and filterable project catalog
- Project detail dialogs with problem framing, engineering approach, evaluation signals, stack, and links
- Direct CV access and public profile links
- Kaggle recognition for **Datasets Grandmaster** and **Notebooks Master**
- Services, technical stack, working style, FAQ, and contact sections
- SEO and social preview metadata for professional sharing

## Engineering architecture

The JavaScript is organized around small, focused modules rather than one large UI script:

- **Composition Root / Facade:** `PortfolioApp` assembles and starts the application
- **Controller pattern:** independent controllers manage project discovery, navigation, and the expandable tech stack
- **Factory pattern:** `ProjectCardFactory` owns project-card DOM construction
- **Domain model:** immutable `Project` objects and a read-only `ProjectCollection` encapsulate normalization, search, sorting, filtering, and visibility rules
- **Encapsulated UI components:** theme management, modal behavior, focus trapping, reveal effects, typewriter animation, image fallback handling, and particle rendering are isolated from application orchestration
- **Observer-based behavior:** `IntersectionObserver` drives reveal effects without continuous scroll polling
- **Dependency direction:** controllers depend on domain and UI abstractions; the bootstrap file remains a minimal entry point

This structure reduces coupling, removes repeated rendering logic, keeps responsibilities explicit, and makes future changes safer.

## Quality and reliability

- Semantic HTML with one main landmark, a keyboard-visible skip link, and focus states
- Responsive behavior for desktop and mobile
- Reduced visual effects on narrow or coarse-pointer devices
- Progressive project fallback for featured links when JavaScript is unavailable or initialization fails
- CSP metadata, SRI for the external icon runtime, and safe external-link defaults
- Canonical URL, Open Graph, Twitter cards, JSON-LD, `robots.txt`, and `sitemap.xml`
- Static integrity validation, module-graph validation, and security guardrails
- Node unit tests for project-domain behavior
- Playwright smoke tests for browser interactions
- GitHub Actions CI for repeatable checks on pushes and pull requests

## Repository structure

```text
.
├── index.html
├── 404.html
├── styles.css
├── projects.js                 # Portfolio project data
├── app.js                      # Minimal source bootstrap
├── app.bundle.js               # Generated deployment bundle; do not edit
├── src/
│   ├── config.js
│   ├── portfolio-app.js        # Composition root / application facade
│   ├── controllers/
│   │   ├── page-navigation-controller.js
│   │   ├── project-catalog-controller.js
│   │   └── tech-stack-controller.js
│   ├── core/
│   │   ├── browser.js          # History, URL, motion, storage, debounce
│   │   ├── collections.js      # Reusable collection utilities
│   │   └── dom.js              # Safe DOM queries and element factory
│   ├── domain/
│   │   └── project.js          # Project model and collection
│   └── ui/
│       ├── behaviors.js
│       ├── icon-renderer.js
│       ├── media.js
│       ├── project-card-factory.js
│       └── project-modal.js
├── assets/
├── scripts/
│   ├── build.mjs              # Builds the deployment bundle and fallback links
│   ├── lib/
│   │   ├── file-system.mjs     # Deterministic recursive file discovery
│   │   └── path-utils.mjs      # Cross-platform path normalization
│   ├── run-unit-tests.mjs
│   ├── validate-static.mjs
│   └── security-audit.mjs
├── tests/
│   ├── unit/
│   └── e2e/
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── .github/workflows/ci.yml
```

## Run locally

```bash
npm ci --no-audit --no-fund
npm run start
```

Open `http://localhost:8000`.

## Quality commands

```bash
npm run build             # Generate app.bundle.js and refresh fallback project links
npm run lint              # ESLint across application, modules, scripts, and tests
npm run format            # Format supported files with Prettier
npm run format:check      # Verify formatting without writing
npm run validate:static   # Validate files, assets, metadata, projects, and module graph
npm run security:audit    # Scan source files for unsafe sinks, secrets, and WIP markers
npm run test:unit         # Run project-domain unit tests
npm run audit:prod        # Audit production dependencies
npm run test:e2e          # Run Playwright browser smoke tests
npm run check             # Main non-browser quality gate
npm run check:full        # Main quality gate plus Playwright
```

Install the Playwright browser before running E2E tests for the first time:

```bash
npx playwright install chromium
```

## Validation coverage

The automated checks cover:

- Required files and local references
- Internal anchor targets and semantic main structure
- JavaScript module graph integrity and generated-bundle syntax
- Cross-platform path normalization for Windows, macOS, and Linux validation
- All 30 project records, unique titles/repositories, featured ordering, and image mappings
- CSP directives and inline-script hashes
- SRI and `crossorigin` settings for external scripts
- Safe external-link attributes
- Mobile rendering guardrails and no-JavaScript fallback
- Dangerous dynamic execution and HTML injection sinks
- Common secret-like patterns and unfinished-work markers
- Project normalization, immutability, search, sorting, filtering, and limits

The Playwright suite covers generated-bundle rendering, all 30 projects, search, filtering, modal behavior, theme switching, mobile navigation, reduced mobile effects, CV and profile links, progressive fallback behavior, and local asset failures.

## Updating project content

Project content is maintained only in `projects.js`. Each entry can include category, type, title, description, problem, approach, signals, stack, tags, repository slug, optional secondary link, priority, impact, and image base name. Run `npm run build` after editing project data; the generated fallback links and deployment bundle are derived from that single source of truth.

Project covers belong in `assets/` and should include WebP versions because the static validator checks the first browser image candidate.

## Deployment

The repository is intended for GitHub Pages as a user site:

1. **Source:** Deploy from a branch
2. **Branch:** `main`
3. **Folder:** `/(root)`

Before a release:

```bash
npm ci --no-audit --no-fund
npm run check
npx playwright install chromium
npm run test:e2e
```

Do not commit local dependency or test-output folders:

```text
node_modules/
playwright-report/
test-results/
```

## License

The source code is released under the **MIT License**. Portfolio content, branding, personal information, images, and project descriptions remain the property of Tarek Masryo unless otherwise stated.
