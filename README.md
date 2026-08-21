# NAMAT Global Trade

A responsive corporate website for an international IT distributor and consulting company. The project turns a content-rich visual concept into a production Next.js experience with live service data, partner showcases, animated sections, and a working contact flow.

## Product capabilities

- Responsive desktop and mobile navigation
- Company, partner, service, and contact sections
- Live statistics, services, and partner data from the NAMAT API
- Contact form submission to the production backend
- Animated content reveals and a service carousel
- Optimized local imagery and brand assets

## Engineering highlights

- Next.js App Router and React server/client component boundaries
- Typed UI components with TypeScript
- Responsive SCSS and Tailwind utilities
- Embla-based service carousel
- Next.js image and font optimization
- Focused ownership of external API integrations

## Stack

Next.js 14, React 18, TypeScript, SCSS, Tailwind CSS, Embla Carousel, AOS

## Local setup

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Public content is loaded from the production API configured in `app/ui/main/const.ts`; no local secrets are required for the landing page.

## Commands

| Command                  | Purpose                      |
| ------------------------ | ---------------------------- |
| `npm run dev`            | Start the development server |
| `npm run prettier:check` | Verify formatting            |
| `npm run build`          | Create a production build    |
| `npm run start`          | Run the production server    |

## Architecture

The App Router entry point composes focused sections from `app/ui/main`. Shared controls, fonts, data helpers, and global responsive styles are kept separate from page composition. External service calls are isolated inside the sections that own their loading and display behavior.
