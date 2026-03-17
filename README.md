# Akshit — Developer Portfolio (React + Vite + Tailwind)

A premium dark-theme developer portfolio with glassmorphism cards, glow hover effects, scroll-reveal animations, and an animated background.

## Tech

- React + Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Update content (resume → website)

All website content is centralized in:

- `src/data/resume.ts`

### Resume download

1. Put your resume PDF at `public/resume.pdf`
2. The **Resume** buttons already link to `/resume.pdf`

## Push to GitHub (first time)

```bash
git init
git add .
git commit -m "init: portfolio"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

## Deploy

### Option A — Vercel (recommended)

1. Create a new project in Vercel and import your GitHub repo.
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy.

### Option B — GitHub Pages

GitHub Pages needs a repo subpath base like `/REPO_NAME/`.

1. Edit `vite.config.ts` and set:

```ts
export default defineConfig({
  base: '/YOUR_REPO_NAME/',
  plugins: [react()],
})
```

2. Build and deploy the `dist` folder using any of these approaches:

#### B1) Using GitHub Actions (cleanest)

- Add a workflow that builds and publishes `dist` to Pages.
- In GitHub repo settings, enable Pages from GitHub Actions.

#### B2) Manual deploy (simple)

```bash
npm run build
```

Then upload the `dist` folder to the `gh-pages` branch (or use a deploy tool like `gh-pages`).

## Project structure

```txt
akshit portfolio/
  public/
    favicon.svg
    icons.svg
    resume.pdf            (add this)
  src/
    components/
      Background.tsx
      Navbar.tsx
      Reveal.tsx
      Section.tsx
    data/
      resume.ts
    lib/
      cn.ts
      motion.ts
    sections/
      AboutSection.tsx
      AchievementsSection.tsx
      CodingProfilesSection.tsx
      ConnectSection.tsx
      ContactSection.tsx
      Footer.tsx
      HeroSection.tsx
      ProjectsSection.tsx
      SkillsSection.tsx
      TimelineSection.tsx
    App.tsx
    main.tsx
    styles.css
  tailwind.config.js
  postcss.config.js
  vite.config.ts
```

