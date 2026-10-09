# Omar El Amri — Portfolio

Personal portfolio for mobile developer Omar El Amri, built with React, TypeScript, Vite, and Tailwind CSS.

Includes five professional projects, expandable project images, skills, education, contact links, and the original downloadable CV. Ecoshare opens its website in a new tab.

## Run locally

Use Node.js 22.12 or newer (verified with Node.js 24).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The portfolio does not require an API key.

## Check and build

```sh
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`.

## Content and assets

- Project content: `src/components/Projects.tsx`
- Introduction and profile data: `src/data/portfolioData.ts`
- Project images: `src/assets/images/`
- Downloadable resume: `src/assets/EL_AMRI_OMAR_Resume.pdf`
- Skills, education, and contact: `src/components/`

The background video and web fonts load from external URLs.
