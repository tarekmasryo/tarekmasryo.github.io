# Tarek Masryo — Portfolio

Static portfolio website (HTML/CSS/JS) showcasing production-minded **ML** & **GenAI** projects and dashboards.

**Live:** https://tarekmasryo.github.io/

---

## Local run

### Option A (recommended): Python
```bash
python -m http.server 8000
```

Then open:
- http://localhost:8000

### Option B: Node tooling (optional)
Install dev tooling:
```bash
npm install
```

Lint:
```bash
npm run lint
```

Format:
```bash
npm run format
```

Serve locally:
```bash
npm run start
```

---

## Deploy (GitHub Pages)

This repository is configured as a **User GitHub Pages site**:

1. GitHub → **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main`
4. **Folder:** `/(root)`

The site is served at:
- https://tarekmasryo.github.io/

---

## Project files

- `index.html` — main page
- `styles.css` — styling
- `app.js` — client-side logic (use `type="module"` in HTML if using `import/export`)
- `assets/` — images + icons (**must be committed**)
- `site.webmanifest` — PWA metadata + app icons
- `robots.txt` — crawler rules
- `sitemap.xml` — sitemap for indexing

---

## Notes

- Do **not** add `assets/` to `.gitignore` (otherwise icons/images won’t load on Pages).
- If you use `import/export` in `app.js`, ensure the script tag is:
  ```html
  <script type="module" src="app.js"></script>
  ```

---

## License
MIT — see `LICENSE`.
