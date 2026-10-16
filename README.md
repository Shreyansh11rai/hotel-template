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

Shared navigation and footer components live in `src/components`. Global design tokens and base styles are defined in `src/app/globals.css`; component-specific styling uses Tailwind utility classes directly in the JSX. Hotel imagery is stored in `public/images`. Interactive navigation, inquiry forms, the room booking widget, and gallery filters are client components. Room inventory, event venues, banquet experiences, and gallery items are kept in separate files under `src/data`.

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the hotel's WhatsApp number in international format, without a `+`, spaces, or punctuation (for example, `919876543210`). The fallback number is a placeholder and must be replaced before launch. The social profile links in `src/components/SocialLinks.jsx` and sample room/venue capacity and sizes in `src/data` should also be confirmed before publishing.

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
