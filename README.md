# AishwaryaN2203.github.io

Personal portfolio — **[live site](https://aishwaryan2203.github.io)**

Single-page site: experience, projects, AI work, and writing. Vanilla HTML/CSS/JS with a dark/light theme toggle, scroll-reveal animations, and no build step.

## Run locally

```bash
python3 -m http.server
# open http://localhost:8000
```

## Structure

- `index.html` — everything lives here (sections for experience, projects, AI projects, certifications, writing, contact)
- `style.css` — theming via CSS variables (`data-theme` on `<html>`)
- `script.js` — theme persistence, mobile menu, scroll reveal
