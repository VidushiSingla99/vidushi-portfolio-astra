What it is: Personal portfolio site.
Stack: Astro 6 · React 19 (islands) · Framer Motion · Tailwind 4 · TypeScript
Live: https://vidushi-portfolio-astra.vercel.app


Folder map
src/
  pages/          → .astro files = routes (index.astro = homepage)
  components/     → Astro + React components
public/           → Images, fonts, static files served at root
astro.config.mjs  → Astro config (React integration, Tailwind vite plugin)
How Astro works (key mental model)
.astro files = HTML templates with optional frontmatter (---) for server logic
React components = used inside .astro via <Component client:load /> directive
  client:load    → hydrates immediately (interactive on page load)
  client:visible → hydrates when scrolled into view (better for perf)
  client:idle    → hydrates when browser is idle
No directive     → renders as static HTML only, no interactivity
Key things to know

Framer Motion is used for animations — it only works inside React components with a client: directive. Don't try to use it in .astro files directly.
Tailwind 4 here uses the Vite plugin (@tailwindcss/vite), not PostCSS like the other two projects. Config is in astro.config.mjs, not tailwind.config.js.
No tailwind.config.js file — Tailwind 4 is configured via CSS @theme directives in your stylesheet instead.
Adding a new page = add a new .astro file in src/pages/. The filename becomes the URL route automatically.
Static assets (images, resume PDF etc.) go in public/ and are referenced as /filename.ext (no public/ prefix in the path).
Node ≥ 22.12.0 is required (specified in package.json engines field).
