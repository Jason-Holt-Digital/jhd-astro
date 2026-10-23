# Getting started

Use Node 22 and npm to run this static Astro site. No application secrets are needed for the development server, unit tests, or build. The contact form is wired to an external service, so do not submit real messages during routine checks.

## Prerequisites

`package.json` requires Node `>=22.22.3 <23`; `.nvmrc` pins the repository's preferred version. Follow these files rather than the older Node 20 instruction in `docs/development.md`.

```bash
git clone https://github.com/Jason-Holt-Digital/jhd-astro
cd jhd-astro
nvm install
nvm use
npm ci
npm run dev
```

The development server normally serves `http://localhost:4321/`. Open `/pt/` for Portuguese or `/v2/` for the redesign preview.

Keep `package-lock.json` committed when intentionally changing dependencies. Private-registry configuration can contain credentials; do not copy it into documentation or logs.

## Commands

All scripts below are defined in `package.json`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Run Astro diagnostics |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run build` | Generate production output in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run doctor` | Run Astro Doctor with telemetry disabled |

For a normal implementation change:

```bash
npm test
npm run check && npm run build
```

`vitest.config.ts` discovers `src/**/*.test.ts`. [Testing](../how-to-contribute/testing.md) describes the coverage and manual checks.

## Search and form caveats

Search indexes are created by `src/integrations/orama-search.mjs` during the production build. To check search with fresh content, build and use preview. A working development page alone does not prove the JSON indexes exist.

`src/pages/support.astro` and `src/pages/pt/support.astro` embed public Formspark and Turnstile identifiers. Do not assume old comments about environment variables disable submissions. Use inspection or mocked requests for contact-form validation.

## First edits

Start from `src/pages/index.astro` for page composition, `src/layouts/BaseLayout.astro` for production metadata, and `src/content.config.ts` for content fields. Use [Patterns and conventions](../how-to-contribute/patterns-and-conventions.md) before changing behavior.
