# Shams Portfolio

Personal portfolio website showcasing school, internship, and personal projects.

**Live site:** [https://shamsabdulwhab.github.io/shams/](https://shamsabdulwhab.github.io/shams/)

## Tech Stack

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (rolldown-vite)
- [React Router](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/) (global styles)
- [OGL](https://github.com/oframe/ogl) (WebGL gallery on the About page)

## Featured Projects

| Project | Category |
|---------|----------|
| Tutorial Website | School |
| Restart Business with AI Agents | School |
| ParentsApp: Elderly Health Tracker | School |
| React Component Reorganization (OKEEJ / iO) | Internship |
| Group Reflection Platform | School |

Each project has its own detail page with overview, process, and outcomes.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173/shams/`).

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Deployment

The site is deployed to GitHub Pages with a `/shams/` base path (configured in `vite.config.ts`).

```bash
npm run deploy
```

This runs the production build and publishes the `dist` folder via [gh-pages](https://github.com/tschaub/gh-pages).

## Project Structure

```
shams/
├── components/     # Shared UI (header, footer, project cards, etc.)
├── pages/          # Route pages (Home, About, project detail pages)
├── src/            # App entry, global styles, assets
├── public/         # Static files
└── vite.config.ts  # Vite config (base: /shams/)
```

## License

Private project.
