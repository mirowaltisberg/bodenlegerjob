# Bodenlegerjob.ch

Swiss job board for floor-laying trades — live at [bodenlegerjob.ch](https://www.bodenlegerjob.ch)

## Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (Postgres + Storage)
- **Hosting**: Vercel
- **Scraper**: Python (jobspy) — LinkedIn, Indeed, Google Jobs

## Features

- **Live job listings** — scraped Swiss floor-laying jobs, updated regularly
- **Search & filter** — by keyword, location (with radius), job type, workload, remote
- **SEO landing pages** — pre-rendered pages for top role/canton combos (144 pages)
- **CV upload & apply** — applicants submit name, email, phone + CV (PDF/DOCX), stored in Supabase Storage
- **Swiss postal code autocomplete** — location search with PLZ support
- **Vercel Analytics** — page view tracking

## Roles covered

Bodenleger EFZ, Parkettleger EFZ, Plattenleger EFZ, Bodenbelagsmonteur, Estrichleger, Terrazzoleger, Industriebodenleger, Oberflächenspezialist, Bodenbelagsplaner, Projektleiter Bodenbeläge, Bauleiter Bodenbeläge, Servicetechniker Bodenbeläge

## Development

```bash
npm install
cp .env.local.example .env.local  # add your Supabase keys
npm run dev
```

## Deployment

```bash
vercel --prod
```
