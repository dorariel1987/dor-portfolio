# Dor Ariel — Portfolio

A modern, bilingual (English / Hebrew) portfolio site for Dor Ariel — Full-Stack Developer & Technical Implementation Engineer.

Built with **React 18 + Vite + Tailwind CSS** and **Framer Motion**. Dark neon theme, custom cursor, animated background, and a full RTL Hebrew experience with one click.

## Highlights

- ⚡ React 18 + Vite 5 — fast dev server, lean production bundle.
- 🎨 Dark neon design system — cyan + magenta palette, custom Tailwind tokens, glassmorphism panels, and a mouse-following spotlight background.
- 🌐 Built-in i18n — EN ↔ HE toggle with full RTL support, persisted in `localStorage`.
- 🖱️ Custom cursor — adaptive ring + dot with hover and click states (auto-disabled on touch / reduced motion).
- 🧩 Modular sections — Hero, About, Experience, Stack, Works, Contact, Footer.
- ✉️ Contact form — opens a pre-filled `mailto:` so it works without any backend, with one-click email copy.
- ♿ Accessibility — semantic landmarks, focus styles, `prefers-reduced-motion` aware.

## Project structure

```
src/
  App.jsx
  main.jsx
  index.css         # Theme + Tailwind layers
  components/       # All UI sections
  constants/        # Profile, navigation, services, tech stack, projects
  i18n/             # LanguageProvider + en.json / he.json dictionaries
public/
  Dor_Ariel_Resume.pdf
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Production build

```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

The site is configured to deploy to `https://dorariel1987.github.io/dor-portfolio` (`base` is set in `vite.config.js`, `homepage` in `package.json`).

## Customizing content

Personal data lives in two places:

1. **`src/constants/index.js`** — profile, social links, services, tech stack, project metadata.
2. **`src/i18n/en.json` and `src/i18n/he.json`** — all on-page copy in both languages.

Replace `public/Dor_Ariel_Resume.pdf` with your latest resume to update the download button.

## Tech stack

- React 18, Vite 5
- Tailwind CSS 3.4
- Framer Motion 11
- lucide-react (iconography)
- typewriter-effect (rotating titles)

## License

MIT © Dor Ariel
