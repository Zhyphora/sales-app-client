# Project Architecture: Car Sales Landing Page (Next.js + Tailwind)

## Structure

- `/src/pages` or `/src/app`: Routing and main entry points
- `/src/components`: Reusable UI components (e.g., Button, Card, Navbar)
- `/src/layouts`: Layout wrappers (e.g., MainLayout)
- `/src/sections`: Page sections (e.g., Hero, Features, Contact)
- `/src/assets`: Images, icons, and static files
- `/src/styles`: Global and custom styles (Tailwind config, etc.)

## Example Flow

- `app/page.tsx`: Main landing page, imports sections
- `sections/HeroSection.tsx`: Hero banner for car sales
- `sections/FeaturesSection.tsx`: Car features/highlights
- `sections/ContactSection.tsx`: Contact form or CTA
- `components/CarCard.tsx`: Card for individual car
- `layouts/MainLayout.tsx`: Wraps all pages for consistent layout

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- ESLint

---

> Replace placeholder images and text with your actual car sales content.
