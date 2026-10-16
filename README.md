# Aangan House

The Aangan House website is built with the Next.js App Router and exported as a static site.

## Routes

- `/` — Home
- `/about` — About us
- `/spaces` — Banquet and lawn
- `/rooms` — Rooms and booking inquiry
- `/events` — Events
- `/gallery` — Gallery
- `/catering` — Catering
- `/contact` — Contact and inquiry

Shared navigation and footer components live in `src/components`. Global design tokens and base styles are defined in `src/app/globals.css`; component-specific styling uses Tailwind utility classes directly in the JSX. The compressed site images are stored in `public/images`. Interactive navigation and inquiry forms are client components.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
```

The Next.js configuration writes the static site to `out/`.
