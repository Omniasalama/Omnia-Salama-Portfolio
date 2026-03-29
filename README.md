# Omnia Salama — Portfolio

A modern, dark-themed React portfolio for Front-End Developer Omnia Salama.

## Tech Stack

- **React 19**
- **React Router DOM v6** — SPA routing
- **React Helmet Async** — SEO meta tags per page
- **React Hot Toast** — Beautiful notifications
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Icon library
- **Custom CSS animations** — Scroll reveals, ticker, floating elements

## Features

- 🌑 Dark editorial aesthetic with electric emerald (#0070FF) 
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Scroll-triggered animations on all sections
- 🔄 Smooth SPA routing with active state indicators
- 📊 Skills grid with animated progress bars
- 🗓️ Timeline of education & experience
- 📁 Project grid with category filtering
- 📬 Contact form with toast notifications + copy email button
- 🔝 Scroll progress bar
- 🎯 SEO-optimized per page with React Helmet
- 🎞️ Infinite scrolling tech ticker

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar/Navbar.jsx
│   ├── Footer.jsx
│   ├── ProjectCard/ProjectCard.jsx
│   ├── ScrollProgress/ScrollProgress.jsx
│   ├── About/About.jsx
│   ├── Projects/Projects.jsx
│   ├── Contact/Contact.jsx
│   └── NotFound/NotFound.jsx
├── data/
│   ├── projects.js
│   └── skills.js
├── hooks/
│   └── useScrollAnimation.js
│  
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- Update `src/data/projects.js` to add/edit projects
- Update `src/data/skills.js` to change skills and timeline
- Change colors in `tailwind.config.js` under `colors`
- Update contact info in `src/pages/Contact.jsx`

## Deployment

Ready to deploy on **Vercel**, **Netlify**, or any static host.

For Vercel/Netlify, ensure you add a redirect rule so all routes serve `index.html`:
- Vercel: auto-detected with Vite
- Netlify: add `public/_redirects` with `/* /index.html 200`
