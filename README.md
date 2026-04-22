# Tarek Masryo — Portfolio Website

Production-focused portfolio website for showcasing AI/ML systems, GenAI work, RAG projects, datasets, dashboards, and decision-ready engineering work.

**Live site:** https://tarekmasryo.github.io/

## Overview

This repository powers the public portfolio of **Tarek Masryo**, an **AI/ML Engineer** focused on production-ready systems, evaluation-first workflows, dashboards, APIs, monitoring, and applied GenAI.

The site is intentionally built as a **fast static website** using plain HTML, CSS, and JavaScript for simple maintenance, predictable deployment, and clean GitHub Pages hosting.

## What the site presents

- professional positioning and hero section
- curated portfolio projects across ML, GenAI, RAG, dashboards, datasets, and analytics
- project filtering and search
- project detail modal with problem framing, approach, signals, stack, and repository links
- services, technical stack, working style, and contact sections
- direct links to GitHub, LinkedIn, Kaggle, Hugging Face, Streamlit, and X

## Key characteristics

- **Static-first architecture** — no framework lock-in and no unnecessary runtime complexity
- **GitHub Pages friendly** — clean deployment as a user site
- **Responsive layout** — designed for desktop and mobile viewing
- **Portfolio-driven content model** — project metadata is maintained in `app.js`
- **SEO foundations** — canonical tags, Open Graph metadata, Twitter cards, `robots.txt`, `sitemap.xml`, and JSON-LD structured data
- **Custom 404 page** — branded fallback for invalid routes
- **Web app manifest and icons included** — improved metadata and browser integration on supported platforms

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages
- Node-based quality checks for linting, formatting, and static validation

## Repository structure

```text
.
├── index.html                  # Main portfolio page
├── 404.html                    # Custom not-found page
├── styles.css                  # Site styling and responsive layout
├── app.js                      # Project catalog and interactive UI behavior
├── assets/                     # Project covers, profile assets, icons, and brand images
├── scripts/
│   └── validate-static.mjs     # Static integrity validation script
├── site.webmanifest            # Web app manifest
├── robots.txt                  # Search engine crawl guidance
├── sitemap.xml                 # Sitemap for indexing
├── .nojekyll                   # Disable Jekyll processing on GitHub Pages
└── .github/workflows/ci.yml    # CI checks for pushes and pull requests
```

## Local development

### Serve locally

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Install quality-check tooling

```bash
npm ci --no-audit --no-fund
```

## Available commands

```bash
npm run start
npm run serve
npm run lint
npm run format
npm run format:check
npm run validate:static
npm run audit:prod
npm run check
```

## Quality workflow

`npm run check` runs the main local quality gate:

```bash
npm run lint && npm run format:check && npm run validate:static && npm run audit:prod
```

The static validator checks important site integrity rules such as:

- required files exist
- local asset references resolve correctly
- internal anchor links point to valid section IDs
- project entries remain consistent
- repository and image mappings stay valid
- critical metadata stays present

## Content update workflow

### Add or edit portfolio projects

Project catalog content is maintained in:

```text
app.js
```

Each project entry can define fields such as:

- category
- type
- title
- description
- problem framing
- approach bullets
- signals / outcomes
- stack
- tags
- repository slug
- image base name

### Update visuals

Add or replace project covers and profile assets inside:

```text
assets/
```

### Update page copy or layout

- main markup: `index.html`
- styling: `styles.css`
- interactions and project rendering: `app.js`

## Deployment

This repository is configured for **GitHub Pages** deployment as a **user site**.

Expected settings:

1. **Source:** Deploy from a branch
2. **Branch:** `main`
3. **Folder:** `/(root)`

## Notes

- GitHub Pages is case-sensitive for file paths
- keep all required assets committed to avoid broken project cards and previews
- this repository intentionally stays simple and does not require a frontend framework

## License

This project is released under the **MIT License**. See `LICENSE` for details.
