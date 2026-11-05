# Campbell's British Tearoom site

- Stack: Next.js 16 App Router, TypeScript, static export-ready pages, Tailwind v4, GSAP ScrollTrigger, Fontsource (Gloock, Hanken Grotesk).
- Content lives in `lib/site.ts`: name, address, phone, hours, menu and prices, seasonal specials, reviews, FAQs, links. Edit that file, not the components.
- Photos: `lib/images.ts` (Unsplash URLs with alt text). Add `images.unsplash.com` already allowed in `next.config.ts`.
- Anything marked `[[NEED: ...]]` is missing information. Fill it in `lib/site.ts` and it disappears from the page.
- Tokens live in `app/globals.css` (`@theme`: OKLCH colours, fonts, easing). Components use those tokens only.
- Motion lives in `components/Motion.tsx` (GSAP, reduced-motion aware). The afternoon tea stand is the signature moment.
- Booking form: `components/BookForm.tsx`. It is not connected to a backend yet. Wire the submit handler before going live.
- Concept mode: `concept.on` and the ribbon, footer credit, `robots.ts` and noindex meta are all in place. Remove them when the site goes live.
- Commands: `npm install`, `npm run dev`, `npm run build`, `npm run typecheck`.
- Read DESIGN.md before any visual change.
