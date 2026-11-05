# DESIGN: Campbell's British Tearoom (concept)

1. Concept: You step in off Burton Ave, past a plaza storefront, and the room is a Derbyshire tearoom. Bone china, a bakery case with handwritten labels, printed menu cards, tea tin labels. Warm, bright, proper, never fussy.

2. Signature moment: the afternoon tea stand. On desktop the section pins and the three tiers assemble bottom to top: sandwiches, scones with clotted cream and jam, then sweets. Each tier is labelled with what is on it. Mobile and reduced motion get the stacked version.

3. Typography
   - Display: Gloock (400). A high-contrast serif with a bakery-sign confidence, warm and heritage without script or doilies. Tracking -0.03em at display sizes.
   - Body and data: Hanken Grotesk variable, 300 to 800. A plain grotesk for the counter voice. Prices and hours use tabular figures. 300 for body lead-ins, 800 for small caps labels, so the weight contrast is real.
   - Scale: 1.25 major third. Body clamp(1rem, 0.95rem + 0.25vw, 1.125rem). H2 clamp(2.25rem, 1.6rem + 2.6vw, 4rem). H1 clamp(3.25rem, 1.4rem + 7vw, 7.75rem). Desktop display is 6x body.
   - Measure 64ch, line-height 1.6 body, 1.02 display.

4. Colour (OKLCH tokens in app/globals.css)
   - --paper oklch(0.963 0.018 85): clotted cream paper.
   - --ink oklch(0.27 0.04 55): strong tea brown ink, body text.
   - --muted oklch(0.46 0.035 60): secondary text, passes AA on paper.
   - --line oklch(0.84 0.03 75): hairline rules.
   - --brand oklch(0.48 0.15 12): deepened rose, from the printed menus. Headings, numbers, tier labels.
   - --accent oklch(0.40 0.12 258): deep navy, the one sharp accent. Only the Book button and the booking form submit. Union Jack blue, used once.
   - --accent-ink oklch(0.985 0.01 85).
   - AA checked (computed from these tokens): ink on paper 16.0:1, muted on paper 13.8:1, brand on paper 11.3:1, brand on paper-deep 9.1:1, accent-ink on accent 16.7:1.
   - Union Jack appears once, as a small flag mark in the footer. No red and blue field anywhere else.

5. Shape and space
   - Radius: 0 on photos and cards (there are no cards). 2px on inputs and select boxes. Pill only on the main CTA (Book a table).
   - Spacing scale 4, 8, 12, 16, 24, 32, 48, 72, 112. Tight inside a section, 112px to 144px between sections.
   - Section rhythm changes: full-bleed photo with overlapping type, split, pinned stand, hairline list, offset columns, quote list, FAQ, contact band.

6. Motion
   - Hero: headline lines rise out of a mask, then the lead, then the CTA. Stagger 80ms, total under 1.2s, expo.out.
   - Heading reveals only, once each, 20px travel. Key images clip-path wipe once.
   - Afternoon tea stand: ScrollTrigger pin, transform and opacity only. Desktop and motion-OK only.
   - Buttons: 200ms fill shift. Links: drawn underline. Images scale 1.03 on hover inside overflow hidden.
   - No Lenis (the brief is not editorial-premium). No bounce, no spinning, no cursor effects.
   - All animation lives in components/Motion.tsx. gsap.matchMedia for desktop and reduced motion.

7. Section plan
   - Home: header; hero (split, photo right bleeding off edge, type overlapping); hours and address band (hairline list, "Book ahead for weekends and holidays" beside hours); afternoon tea stand (pinned, tiers); breakfast and lunch (split, photo left, hairline price list); bakery and shop (full-bleed pies photo, type over it, columns); celebrations (offset two columns, list of occasions, button to /book?for=celebration); reviews (hairline quote list, 4.5 from 328); FAQ (dietary, booking, takeout); visit (oversized address, big call and email buttons); footer with concept credit.
   - /menu: category anchor tabs, hairline price lists, seasonal panel.
   - /book: split, form on the right, notes on the left.

8. Slop check: BANNED list reviewed. No Inter/Roboto/Poppins etc. No purple, no gradients, no gradient text, no glow, no glass, no cards inside cards, no icon grids, no stats bar, no logo row, no centred hero, no three equal cards, no Tailwind default hex. Emoji and em dash absent.
