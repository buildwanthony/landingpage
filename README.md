# Build With Anthony

Personal website, portfolio, and resource library for Anthony Widjaja — 18-year-old founder from Bandung building the trust layer for AI.

**Live:** [buildwithanthony.com](https://buildwithanthony.com)

## Stack

- **Frontend:** Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Railway + PostgreSQL + Prisma ORM
- **Email:** Resend
- **Analytics:** Plausible

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/buildwanthony/buildwithanthony.git
cd buildwithanthony
npm install
```

### 2. Environment variables

```bash
cp .env.example .env.local
# Fill in your values
```

### 3. Database setup

```bash
npx prisma generate
npx prisma db push
```

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
app/
├── (home)/page.tsx          # Homepage
├── (about)/about/           # About page
├── (projects)/projects/     # Projects + AIDAL case study
├── (writing)/writing/       # Blog / journal
├── (videos)/videos/         # YouTube embeds
├── (resources)/resources/   # Resource library + email gate
├── (newsletter)/newsletter/ # Newsletter page + archive
├── (uses)/uses/             # Uses page
├── (resume)/resume/         # Online resume
├── (contact)/contact/       # Contact page
├── thank-you/[slug]/        # Post-download thank you
├── admin/                   # Protected admin dashboard
└── api/                     # API routes

components/
├── layout/                  # Navbar, Footer
├── sections/                # Page sections (Hero, Timeline, etc.)
├── shared/                  # ThemeProvider, CommandMenu, etc.
└── ui/                      # shadcn/ui primitives

prisma/
└── schema.prisma            # Database schema
```

## Deploy to Railway

1. Create a new Railway project
2. Add a PostgreSQL database service
3. Deploy the Next.js app from GitHub
4. Set environment variables from `.env.example`
5. Run `npx prisma db push` via Railway shell

## Deploying to Vercel (alternative)

```bash
npx vercel
```

Add environment variables in the Vercel dashboard.

---

Built in public by [Anthony Widjaja](https://buildwithanthony.com).
