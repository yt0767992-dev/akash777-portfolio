# AKASH 777 — Cyber Portfolio (Production)

A futuristic developer portfolio built with **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion**.

It is a **fully static site** — it compiles to plain HTML/CSS/JS and runs 24/7 on free cloud hosting with no server of your own required.

- **Frontend hosting:** Cloudflare Pages (free tier, unlimited bandwidth, auto HTTPS)
- **Backend/API:** none required today (wiring ready for a Cloudflare Worker, see [Backend / API](#backend--api))
- **Repository:** Git + GitHub, auto-deploy on every push

---

## 🌐 Live deployment

| | |
|---|---|
| **Production website** | https://akash777-portfolio.pages.dev |
| **GitHub repository** | https://github.com/yt0767992-dev/akash777-portfolio |
| **Backend / API URL** | *(none — static site, no backend required)* |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Production branch** | `main` |
| **Environment variables** | none required (optional: `VITE_API_BASE_URL`, `VITE_SITE_URL`) |

Every push to `main` automatically builds and deploys to Cloudflare Pages — no computer needs to stay on.

---

## Table of contents

1. [Requirements](#requirements)
2. [Local development](#local-development)
3. [Environment variables](#environment-variables)
4. [Production build & test](#production-build--test)
5. [Deployment — Cloudflare Pages](#deployment--cloudflare-pages)
6. [Backend / API](#backend--api)
7. [Custom domain & 24/7 uptime](#custom-domain--247-uptime)
8. [Security rules](#security-rules)
9. [Project structure](#project-structure)
10. [Troubleshooting](#troubleshooting)

---

## Requirements

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | 18+ (20 LTS recommended) | build toolchain |
| npm | 9+ | dependency install |
| Git | any recent | version control |
| GitHub CLI (`gh`) *optional* | 2.x | pushing from the terminal |
| Cloudflare account *free* | — | hosting |

---

## Local development

```powershell
npm install     # install dependencies (first time only)
npm run dev     # start dev server → http://localhost:3000
```

Edit your content in **`src/data/portfolioData.ts`** (name, socials, projects, Discord servers, languages, avatar).

---

## Environment variables

Template: **[.env.example](./.env.example)** — copy it to `.env` for local work.

| Key | Required? | Value | Where it is used |
|-----|-----------|-------|------------------|
| `VITE_API_BASE_URL` | No (empty today) | `https://api.YOUR-SUBDOMAIN.workers.dev` | Frontend → backend API base URL |
| `VITE_SITE_URL` | Recommended | `https://YOUR-PROJECT.pages.dev` | SEO / canonical links |

**Rules**

- Only `VITE_*` variables exist — Vite inlines them into the **public** JS bundle. **Never put a secret in a `VITE_` variable.**
- `.env` is git-ignored and must never be uploaded to GitHub.
- On Cloudflare Pages: **Settings → Environment variables → Production → Add variable**, then redeploy.

---

## Production build & test

```powershell
npm run build          # tsc type-check + vite build → dist/
npm run preview        # serves the REAL production bundle locally
```

`npm run build` must finish with no TypeScript errors. Verify `dist/index.html` and `dist/assets/*` exist before deploying. The build is re-run automatically by Cloudflare Pages on every push.

**Build command:** `npm run build`  
**Output directory:** `dist`

---

## Deployment — Cloudflare Pages

### Method A — GitHub integration (recommended: auto-deploy 24/7)

1. Push this repository to GitHub (see below).
2. Open **[https://dash.cloudflare.com](https://dash.cloudflare.com)** → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Authorize Cloudflare to read your GitHub repositories.
4. Select this repository and use these settings:

   | Setting | Value |
   |---------|-------|
   | Framework preset | `Vite` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leave empty)* |
   | Environment variables | add from the table above |

5. **Deploy**. Your site goes live at `https://YOUR-PROJECT.pages.dev`.
6. Every push to `main` now redeploys automatically — no computer needed.

### Method B — Wrangler CLI (manual deploy, no dashboard)

```powershell
npm install -g wrangler
npx wrangler login                     # ← browser authorization required
npm run build
npx wrangler pages deploy              # uses pages_build_output_dir from wrangler.toml
```

### Method C — Drag & drop (quickest, no auto-deploy)

1. `npm run build`
2. Open **[https://dash.cloudflare.com](https://dash.cloudflare.com)** → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
3. Drag the **`dist`** folder in.

### Pushing to GitHub

```powershell
git init
git add .
git commit -m "Production portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
…or with GitHub CLI: `gh auth login` → `gh repo create akash777-portfolio --public --source=. --push`

---

## Backend / API

This project currently has **no backend** — it is a static portfolio, so there is nothing to keep running and no server cost.

If you add one later:

1. Create a **Cloudflare Worker** (`npx wrangler deploy`), which also runs 24/7 for free.
2. Set `VITE_API_BASE_URL=https://api.YOUR-SUBDOMAIN.workers.dev` in Cloudflare Pages → Environment variables → Production.
3. Redeploy the frontend.

Frontend code reads it through `src/config.ts`:

```ts
import { API_BASE_URL, apiPath } from './config';

const res = await fetch(apiPath('/contact'));
```

The only third-party call the site makes is a **public QR-image service** (`api.qrserver.com`) that needs no API key.

---

## Custom domain & 24/7 uptime

- Cloudflare Pages serves from its global edge network — the site stays online permanently; **your computer can be off**.
- Custom domain: Pages project → **Custom domains** → **Set up a custom domain** → follow the DNS prompt (free SSL is issued automatically).
- Update `og:url` / `twitter:url` in `index.html` (and `VITE_SITE_URL`) to your final domain.

---

## Security rules

- ✅ `.env` and `.env.*` are git-ignored; only the placeholder `.env.example` is committed.
- ✅ No API keys, tokens or passwords exist anywhere in this repository.
- ⚠️ Anything in a `VITE_*` variable is public. Real secrets belong in **Cloudflare Worker secrets** (`npx wrangler secret put NAME`), never in the frontend.
- ⚠️ Never run `git add -f .env` or disable `.gitignore` for env files.

---

## Project structure

```
├── index.html              # HTML shell + SEO meta
├── package.json            # scripts: dev / build / preview
├── vite.config.ts          # Vite + React config (dev port 3000)
├── wrangler.toml           # Cloudflare Pages output dir (dist)
├── netlify.toml            # optional Netlify fallback config
├── .env.example            # environment variable template (safe)
├── .gitignore              # keeps secrets & build output out of Git
├── public/
│   ├── _redirects          # SPA fallback (/* → /index.html)
│   └── ...                 # favicon, images, audio
└── src/
    ├── config.ts           # API base URL / site URL from env vars
    ├── vite-env.d.ts       # typed env variables
    ├── data/portfolioData.ts  # ← edit all your content here
    └── components/         # React UI components
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Blank page after deploy | `public/_redirects` must contain `/*  /index.html  200` (already present). |
| Build fails on `tsc` | Run `npm run build` locally and fix reported type errors. |
| Old version still live | Cloudflare Pages → Deployments → verify the latest succeeded → Retry deployment. |
| Env var not picked up | Vars are baked at **build** time — set it, then **redeploy**. |
| 404 on refresh | Output directory must be exactly `dist`. |
