# TileCraft - Professional Tile Installation Website

A modern marketing website for a premium tile installation service, built with Next.js 16, Tailwind CSS 4, and Framer Motion.

**Live site:** [tilecraft.co.uk](https://tilecraft.co.uk)

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | Framework (App Router, Turbopack) |
| React | 19.2.3 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| Framer Motion | 12.34.0 | Animations |
| Web3Forms | - | Contact form submission |

## Project Structure

```
tile-installer-site/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Header + Footer)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles & CSS variables
│   ├── robots.ts                 # robots.txt generation
│   ├── sitemap.ts                # sitemap.xml generation
│   ├── icon.tsx                  # Favicon (32x32)
│   ├── apple-icon.tsx            # Apple touch icon (180x180)
│   ├── about/
│   │   ├── page.tsx              # About page (server)
│   │   └── AboutContent.tsx      # About content (client)
│   ├── contact/
│   │   ├── page.tsx              # Contact page (server)
│   │   └── ContactContent.tsx    # Contact form (client, Web3Forms)
│   ├── services/
│   │   ├── page.tsx              # Services page (server)
│   │   └── ServicesContent.tsx   # Services detail (client)
│   ├── portfolio/
│   │   ├── page.tsx              # Portfolio listing (server)
│   │   ├── PortfolioContent.tsx  # Portfolio grid with filters (client)
│   │   └── [slug]/
│   │       ├── page.tsx          # Project detail (server, static params)
│   │       └── ProjectDetail.tsx # Project detail view (client, lightbox)
│   └── reviews/
│       ├── page.tsx              # Reviews page (server)
│       └── ReviewsContent.tsx    # Testimonials grid (client)
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx            # Link/button (primary/outline variants)
│   │   ├── SectionHeading.tsx    # Section title + description
│   │   ├── ScrollReveal.tsx      # Scroll-triggered animations
│   │   └── AnimatedCounter.tsx   # Animated number counter
│   ├── layout/
│   │   ├── Header.tsx            # Sticky header with nav
│   │   ├── Footer.tsx            # 4-column footer
│   │   └── MobileMenu.tsx        # Mobile nav overlay
│   └── home/                     # Home page sections
│       ├── Hero.tsx              # Hero banner with CTAs
│       ├── ServicesPreview.tsx    # 4-column services grid
│       ├── FeaturedProjects.tsx   # Featured portfolio items
│       ├── StatsCounter.tsx      # Animated stats (15+ years, 500+ projects)
│       ├── TestimonialHighlight.tsx # Testimonials preview
│       └── CTABanner.tsx         # Bottom call-to-action
├── envs/                         # Environment configs
│   ├── .env.local
│   └── .env.production
├── Dockerfile                    # Docker container build
├── docker-compose.yml            # Docker orchestration
└── .github/workflows/ci.yml     # GitHub Actions CI
```

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, services preview, featured projects, stats, testimonials, CTA |
| `/about` | Company story, values (Precision, Reliability, Craftsmanship), experience badge |
| `/services` | 4 service categories: Residential, Commercial, Renovation, Custom |
| `/portfolio` | Filterable grid of 9 projects by category |
| `/portfolio/[slug]` | Project detail with gallery, lightbox, and specs sidebar |
| `/reviews` | Client testimonials with average rating display |
| `/contact` | Contact form (Web3Forms), contact info, working hours |

## Getting Started

### Prerequisites

- Node.js >= 20.9.0 (use `nvm use 22` if available)

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Docker

```bash
docker compose up
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Yes | API key for contact form submissions |

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#0f0f0f` | Dark backgrounds |
| `--color-primary-light` | `#1a1a2e` | Dark navy accents |
| `--color-accent` | `#b87333` | Copper/bronze - primary brand color |
| `--color-accent-light` | `#c9a96e` | Light copper highlights |
| `--color-surface` | `#f5f5f0` | Light beige backgrounds |
| `--color-surface-dark` | `#1a1a1a` | Dark surface backgrounds |

### Fonts

- **Headings:** Space Grotesk (400-700)
- **Body:** Inter (300-600)

### Animation Patterns

- **ScrollReveal** wrapper for entrance animations (fade + directional offset)
- **AnimatedCounter** for number count-up on scroll
- **Hover effects:** card lift (`y: -8`), image zoom (`scale: 1.05`)
- **Layout animations** for portfolio filtering transitions

## Component Architecture

Page components (`page.tsx`) are **server components** handling metadata and static params. Content components (`*Content.tsx`) are **client components** marked with `"use client"` for interactivity and animations.

### Reusable Components

- **`Button`** - Primary/outline variants with size options
- **`SectionHeading`** - Consistent label + title + description with alignment and color options
- **`ScrollReveal`** - Configurable direction, delay, and duration for scroll animations
- **`AnimatedCounter`** - Target number, suffix/prefix, and duration props

## SEO

- Dynamic metadata per page with Open Graph and Twitter cards
- Auto-generated `robots.txt` and `sitemap.xml`
- Static params for all portfolio routes
- Base URL: `https://tilecraft.co.uk`

## Security Headers

Configured in `next.config.ts`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Strict-Transport-Security` with preload
- `Permissions-Policy` disabling camera, mic, geolocation

## Data

All content is currently hardcoded in components. A migration to **Sanity CMS** is planned for portfolio project data.

## Deployment

- **Vercel** - Primary deployment target (`.vercel/` config present)
- **Docker** - Self-hosted option (`output: "standalone"` in Next.js config)
- **CI/CD** - GitHub Actions pipeline (`.github/workflows/ci.yml`)

## Scripts

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```
