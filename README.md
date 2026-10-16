# Jadoo - Travel Landing Page

Frontend assignment built with React (Vite), Tailwind CSS v4 and Framer Motion.

## Setup

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run lint     # eslint
```

## Folder structure

- `src/components` - one file per section (Navbar, Hero, Services, Destinations, BookSteps, Testimonials, Partners, Subscribe, Footer, VideoModal)
- `src/data/assignData.js` - all text/image data used by the sections
- `src/index.css` - Tailwind import and theme variables (colors, fonts, shadows)

## Implementation notes

- Responsive for mobile, tablet and desktop (mobile hamburger menu included)
- Smooth scroll with CSS `scroll-behavior`, scroll-reveal animations with Framer Motion (respects reduced-motion setting)
- Testimonial slider (arrows + dots), subscribe email validation, Play Demo video modal (Esc / outside click closes)
- Icons: `lucide-react` for UI icons, `react-icons` for social icons
- Class names use the `assign-` prefix

## Assets

Images are in `src/assets` (exported from Figma). Demo video goes in `public/demo.mp4`.
