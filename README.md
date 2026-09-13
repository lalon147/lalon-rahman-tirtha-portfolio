# Portfolio — Lalon Rahman Tirtha

Personal portfolio, live at **https://lalon-rahman-tirtha.netlify.app/**

Built with React 19, Vite and Tailwind CSS v4. Deployed on Netlify.

## Editing content

Everything shown on the site — bio, skills, projects, links — lives in **`src/data.js`**.
Project screenshots go in `src/assets/projects/`, the resume PDF in `public/`.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Deployment

Netlify builds from this repo using `netlify.toml` (`npm run build` → `dist/`).
The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/) — enable
form detection in the Netlify site settings and submissions show up under **Forms**.
