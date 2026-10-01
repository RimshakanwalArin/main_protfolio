# Rimsha Kanwal Portfolio

A responsive personal portfolio for Rimsha Kanwal, showcasing web development, digital marketing, Canva design, and AI integration visual projects. Built with Next.js App Router, TypeScript, Tailwind CSS 4, Framer Motion, Lucide icons, and `next/font`.

## Features

- Single-page portfolio with Home, About, Services, Projects, and Contact sections.
- Responsive navigation and layouts for desktop and mobile.
- Motion effects that respect the user's reduced-motion preference.
- Project cards with individual previews and live demo links where available.
- Direct email and WhatsApp contact links; there is no contact form.
- SEO metadata, Open Graph details, sitemap, robots file, and a custom site icon.
- Local SVG artwork for the robot portrait and AI visual-concept projects.

## Requirements

- Node.js 20.9 or newer.
- npm.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

```bash
npm run lint
npm run build
npm run start
```

## Customize

### Portfolio content

Edit [`data/content.ts`](data/content.ts) to update the owner's name, role, location, email, WhatsApp number, biography, services, project details, tools, and social links.

WhatsApp links are generated from the `whatsapp` value by removing spaces and punctuation. Keep the country code in the number; for example, `+92 300 1234567` becomes `https://wa.me/923001234567`.

### Project previews

Project data lives in the `projects` array in `data/content.ts`. Add each project as a separate entry and point its `image` to an asset in `public/projects/`. Only set `demoUrl` or `sourceUrl` when a real link is available; the corresponding buttons are hidden when those values are `null`.

### Site URL and metadata

Set `NEXT_PUBLIC_SITE_URL` to the canonical deployed URL. It is used by metadata, `app/robots.ts`, and `app/sitemap.ts`.

For local development, create `.env.local` in the project root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set `NEXT_PUBLIC_SITE_URL` in the Vercel project's Environment Variables, for example:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. In Vercel, select **Add New Project** and import the GitHub repository.
3. Add `NEXT_PUBLIC_SITE_URL` under **Project Settings → Environment Variables**.
4. Deploy. Vercel detects Next.js and runs the production build.
5. Check the deployed sections, project destinations, email link, WhatsApp link, sitemap, and metadata.

## Project structure

```text
app/
  globals.css          Global styles and design tokens
  layout.tsx           Root layout, fonts, and SEO metadata
  page.tsx             Single-page portfolio
  robots.ts            Robots.txt metadata route
  sitemap.ts           Sitemap metadata route
components/
  reveal.tsx           Scroll reveal animation
  rotating-role.tsx   Animated role text
  site-header.tsx      Responsive site navigation
data/
  content.ts           Central portfolio content and project data
public/
  projects/            Project preview artwork
```
