# Sahil Khunt — Portfolio

Personal portfolio site showcasing my work, experience, and skills.

**Live site:** [sahilkhunt08.github.io/portfolio](https://SahilKhunt08.github.io/portfolio)

## Features

- **Intro** — Animated hero with typewriter effect and particle background
- **About** — Bio, skills grid, and experience timeline with scroll animations
- **Projects** — Project cards with image carousels and tech stack tags
- **Contact** — Email, LinkedIn, and GitHub links
- Responsive navbar with auto-hide on scroll and mobile menu
- Lazy-loaded sections for faster initial load
- Downloadable resume (`public/resume.pdf`)

## Tech Stack

- [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) — animations
- [Headless UI](https://headlessui.com/) — accessible UI components
- [Swiper](https://swiperjs.com/) — project image carousels
- [tsParticles](https://particles.js.org/) — particle effects
- Deployed with [gh-pages](https://github.com/tschaub/gh-pages)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

### Other scripts

| Command | Description |
|---|---|
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Project Structure

```
src/
├── components/     # Reusable UI (Navbar, ProjectCard, TimelineCard, etc.)
├── sections/       # Page sections (Intro, About, Projects, Contact)
├── assets/         # Images, logos, skill icons
├── App.jsx         # Root layout and lazy-loaded sections
└── main.jsx        # Entry point
public/
└── resume.pdf      # Downloadable resume
```

## Deployment

This site is deployed to GitHub Pages at `/portfolio/`. The base path is set in `vite.config.js`:

```js
base: "/portfolio/",
```

To deploy after making changes:

```bash
npm run deploy
```

This runs `vite build` and pushes the `dist/` folder to the `gh-pages` branch.

## Contact

- **Email:** [skhun@illinois.edu](mailto:skhun@illinois.edu)
- **LinkedIn:** [linkedin.com/in/sahilkhunt](https://www.linkedin.com/in/sahilkhunt/)
- **GitHub:** [github.com/SahilKhunt08](https://github.com/SahilKhunt08)
