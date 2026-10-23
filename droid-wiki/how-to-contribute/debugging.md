# Debugging

First identify whether a problem comes from generated HTML, a browser script, or an external service. Record the route, locale, viewport, reproduction steps, console error, and failing request without copying personal data or credentials.

## Search failures

The site has three different search/filter flows. `src/pages/resources/index.astro` matches browser DOM metadata for guide title, summary, and category. `src/pages/blog/index.astro` filters cards by category and updates the query parameter. Neither uses Orama.

The site-wide dialog in `src/components/search/SearchOverlay.astro` lazily loads locale-specific Orama databases through `src/integrations/orama-search-client.ts`. Inspect requests for `/assets/oramaDB_*.json` and the console's index-loading error. A missing index in development is expected without production generation.

Reproduce overlay issues with a fresh `npm run build` and `npm run preview`. `src/integrations/orama-search.mjs` reads emitted HTML at `astro:build:done`; inspect its warnings and the path matchers/content selectors in `astro.config.mjs` if a route or body text is absent. Reload after rebuilding because loaded databases are cached in browser memory. See [Search](../features/search.md).

## Navigation and carousel failures

For production menus, inspect `src/components/layout/Header.astro` and its `data-mobile-*` hooks. The body state is `mobile-nav-open`, not the older `has-nav-open` example in `AGENTS.md`. Check `aria-expanded`, panel/overlay state, focus restoration, and the resize path above 900 pixels.

`src/lib/carousel.ts` owns production carousel state and timers, while consumers update the DOM. Check item count, activation callback, reduced-motion preference, explicit pause, and hover/focus pause separately. Do not assume `/v2/` uses this controller; the preview has separate scripts. See [Site shell](../systems/site-shell.md).

## Content, language, and image failures

Start schema errors at `src/content.config.ts`, then inspect the entry and locale filtering in `src/lib/collections.ts`. For wrong language links, check `src/i18n/utils.ts`, explicit `alternatePath` in `src/layouts/BaseLayout.astro`, and counterpart lookup in the detail route. A guessed Portuguese URL is not evidence that an entry exists.

Verify whether an image is imported through `astro:assets` or served unchanged from `public/`. Check the source and emitted request before blaming caching. If replacing a same-named image leaves stale transforms, `AGENTS.md` identifies `.astro/`, `dist/`, `node_modules/.astro/`, and `node_modules/.vite/` as generated cache/output candidates. Clear only confirmed generated paths after preserving needed output; do not start with broad deletion. Renaming the changed asset is another cache-invalidation option.

The footer year in `src/components/layout/Footer.astro` is computed during static generation. An old deployed year needs a new build, not a browser clock fix.

## Support and hosting failures

`src/pages/support.astro` and `src/pages/pt/support.astro` own tabs, Turnstile callbacks, token fields, and the browser POST to Formspark. Inspect callback availability, challenge loading, form/button state, and network errors without submitting real messages. The environment-variable setup comment is stale; current public identifiers are embedded constants, not a required local secret setup.

For hosting, `docs/deploy-cloudflare.md` explains that the `SESSION` binding message does not mean the site uses sessions. Images are optimized at build time. Inspect generated routes and host asset configuration before proposing a backend.

## Source map

| Source | Diagnostic boundary |
| --- | --- |
| `src/integrations/orama-search.mjs` | Generated indexes and warnings |
| `src/components/layout/Header.astro` | Production menu state |
| `src/lib/carousel.ts` | Shared timer/navigation logic |
| `src/pages/support.astro` | Form lifecycle and local error UI |
| `docs/deploy-cloudflare.md` | Static host and image notes |

Record untested hypotheses explicitly. [Testing](testing.md) separates unit coverage from manual gaps, and [Security](../security.md) describes external-service boundaries.
