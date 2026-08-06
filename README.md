# Antoine Jonville Portfolio

Personal portfolio built with Next.js App Router and TypeScript, focused on React / React Native front-end engineering.

## Goals
- Present profile, stack, and experience clearly.
- Keep the codebase clean, typed, and maintainable.
- Deliver a sober, performant, and responsive UI.

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- Framer Motion (targeted motion)

## Requirements
- Node.js `>= 22.12.0`
- pnpm `>= 8`

## Installation
```bash
pnpm install
```

## Local Development
```bash
pnpm dev
```

## Available Scripts
```bash
pnpm lint       # run ESLint
pnpm typecheck  # run TypeScript checks
pnpm test       # run component tests
pnpm build      # production build
pnpm start      # run production server
pnpm check      # lint + typecheck + tests + build
```

## Project Structure
```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    providers.tsx
    sitemap.ts
    projects/
      fooder/
        page.tsx
        opengraph-image.tsx
  components/
    layout/
      site-header.tsx
      site-footer.tsx
    sections/
      hero.tsx
      projects.tsx
      experience.tsx
      skills.tsx
      contact.tsx
    ui/
      custom-cursor.tsx
      mobile-nav.tsx
      reveal.tsx
      stack-tags.tsx
      copy-email-button.tsx
    projects/
      project-card.tsx
  content/
    site.ts
    projects.ts
    experience.ts
    skills.ts
  test/
    setup.ts
```

## Architecture Conventions
- Page sections are Server Components by default.
- Client Components are used only for interactions (mobile menu, custom cursor, motion, copy-to-clipboard).
- Content data is centralized in `src/content/*`.
- Global styles and visual tokens are defined in `src/app/globals.css`.
- Project cards and case studies share typed data from `src/content/projects.ts`.
- Component tests run with Vitest and Testing Library.

## Deployment
Production run:
```bash
pnpm build
pnpm start
```

Private project (`private: true`).
