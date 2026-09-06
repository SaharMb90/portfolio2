# Sahar Mirzabaki — Portfolio (Next.js)

Bilingual (English / فارسی) single-page portfolio. Black background, neon-purple accent, animated signal hero. Built with Next.js 14 (App Router).

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Change the neon colour
Open `app/globals.css` and edit ONE line near the top of `:root`:
```css
--neon:#b026ff;   /* purple. try #39ff14 green / #00e5ff cyan / #ff2bd0 magenta */
```
Everything (buttons, signal, links, glow) recolours from that single variable.

## Deploy to Vercel — pick one

**A. Push to GitHub, then import (keeps auto-deploy on every push)**
1. Put these files in your repo (replace the old portfolio code).
2. Push to GitHub.
3. vercel.com → Add New → Project → import the repo. Vercel auto-detects Next.js.

**B. Vercel CLI (fastest, no Git needed)**
```bash
npm i -g vercel
vercel            # first run links/creates the project
vercel --prod     # deploy to production
```

**C. Drag & drop**
vercel.com → Add New → Project → drag this folder in. Next.js is detected automatically.

To keep your current URL (portfolio-saharmb90s-projects.vercel.app), deploy into the **same** Vercel project that already owns that domain (replace its source), rather than creating a new one.
