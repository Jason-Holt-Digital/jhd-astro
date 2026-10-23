# Deployment

The website builds prerendered static files for Cloudflare, with images optimized during compilation. The repository also includes a Netlify alternative, but these files do not prove which hosting dashboard settings or deployment revision are currently live.

## Build and hosting boundary

`astro.config.mjs` sets the canonical site to https://jasonholtdigital.com, enables HTML compression, and configures the Cloudflare adapter. Both the Sharp image service and adapter use compile mode. Image processing belongs in the build, not a Sharp runtime on Cloudflare.

`wrangler.jsonc` names the project `jhd-astro-web`, uses compatibility date `2026-03-17`, points its assets directory at `dist/`, and selects `404-page` handling. It also declares a `SESSION` KV binding. `docs/deploy-cloudflare.md` explicitly says the website does not use sessions; the binding is not evidence of a login or session-backed application.

`public/.assetsignore` excludes `_worker.js` and `_routes.json` from the uploaded asset set. Keep the distinction between static assets and executable worker output when reviewing adapter changes. The repository's deployment guide allows Cloudflare Pages or Workers with an assets binding; it does not establish the active account-side pipeline.

Use the current [development workflow](how-to-contribute/development-workflow.md) and [testing guidance](how-to-contribute/testing.md) before preparing a release. `package.json` requires Node `>=22.22.3 <23`; `.nvmrc` selects `22.22.3`. Search indexes are written after HTML generation by `src/integrations/orama-search.mjs`, so deploy the complete build rather than selected HTML files. See [search](features/search.md).

## Routing and release checks

`astro.config.mjs` declares three redirects:

- `/privacy-policy` goes to `/privacy`.
- `/contact` goes to `/support#contact-panel`.
- `/pt/contact` goes to `/pt/support#contact-panel`.

The two contact route files also call `Astro.redirect`. Check the emitted output and host response rather than assuming these static redirects are HTTP 301/302 responses. Verify that the destination hash opens Contact without submitting its form.

The sitemap filter excludes `/v2/` paths and the English/Portuguese contact and 404 paths. `src/layouts/V2RefinedLayout.astro` additionally defaults preview pages to `noindex, nofollow`; neither measure restricts access. `public/robots.txt` allows crawling and advertises https://jasonholtdigital.com/sitemap.xml. Confirm that this advertised URL resolves to the emitted sitemap or a configured host alias; no build or live-host probe was performed here.

Before release, inspect English and Portuguese routes, an unknown URL's status and 404 body, `/rss.xml`, compiled image URLs, and all four search indexes. Both localized 404 pages exist, but Cloudflare's configured fallback does not establish locale-aware selection for every missing URL.

## Alternative hosting and rollback

`netlify.toml` runs `npm run build`, publishes `dist/`, selects Node `22.22.3`, and gives `/_astro/*` a one-year immutable cache policy. This is an alternative static-host configuration, not proof that Cloudflare applies the same headers.

For rollback, retain the last known-good deployment identifier and its matching complete artifact before publishing. An authorized maintainer can restore that host revision or rebuild the known-good commit with its lockfile and supported Node version. Recheck redirects, sitemap, images and search together. Host configuration changes and external Formspark/Turnstile settings require separate review; reverting website files does not restore them.

## Key sources

| Source | Responsibility |
| --- | --- |
| `astro.config.mjs` | Adapter, image compilation, redirects and sitemap |
| `wrangler.jsonc`, `public/.assetsignore` | Cloudflare asset handling |
| `netlify.toml` | Alternative host settings |
| `docs/deploy-cloudflare.md` | Static deployment and unused-session notes |
| `public/robots.txt`, `src/pages/rss.xml.ts` | Discovery and feed |

See [configuration](reference/configuration.md) and [tooling](how-to-contribute/tooling.md). No deployment was executed.
