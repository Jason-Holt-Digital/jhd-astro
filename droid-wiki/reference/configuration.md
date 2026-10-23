# Configuration

Active contributors: Jason

Configuration describes a static Astro site with English and Portuguese routes. Hosting procedures belong in [deployment](../deployment.md); browser-service boundaries belong in [security](../security.md).

## Build and host settings

| Source | Current settings |
| --- | --- |
| `astro.config.mjs` | `site: 'https://jasonholtdigital.com'`, `compressHTML: true`; no explicit `output`, so Astro's static default applies |
| `astro.config.mjs` | Integrations are sitemap and local Orama search; Cloudflare adapter uses `imageService: 'compile'`; Sharp image service entrypoint is `astro/assets/services/sharp`, with `mode: 'compile'` |
| `astro.config.mjs` | `i18n.defaultLocale: 'en'`, `locales: ['en', 'pt']`, `routing.prefixDefaultLocale: false` |
| `astro.config.mjs` | Redirects `/privacy-policy` → `/privacy`, `/contact` → `/support#contact-panel`, `/pt/contact` → `/pt/support#contact-panel` |
| `astro.config.mjs` | Sitemap excludes `/v2/` descendants and `/404/`, `/contact/`, `/pt/404/`, `/pt/contact/` |
| `wrangler.jsonc` | Schema `node_modules/wrangler/config-schema.json`; name `jhd-astro-web`; compatibility date `2026-03-17`; assets directory `./dist`; `not_found_handling: '404-page'`; one `SESSION` KV binding with a configured namespace ID |
| `netlify.toml` | Build `npm run build`, publish `dist`, `NODE_VERSION: '22.22.3'`; `/_astro/*` gets `Cache-Control: public, max-age=31536000, immutable` |
| `.nvmrc`, `package.json` | Node pin `22.22.3`; supported engine `>=22.22.3 <23`; package is private and ESM (`type: 'module'`) |
| `tsconfig.json`, `src/env.d.ts` | Extends `astro/tsconfigs/strict`; ambient reference `astro/client`; no custom environment interface |
| `vitest.config.ts` | Test include `src/**/*.test.ts`; no explicit browser environment or coverage configuration |

The KV declaration is not evidence of website session usage.

Search configurations all extract `main`. Exact matchers in `astro.config.mjs` are:

| Database | Matcher |
| --- | --- |
| resources | `/^\/resources\/.+/` |
| blog | `/^\/blog\/(?!category|index).+/` |
| resources_pt | `/^\/pt\/resources\/.+/` |
| blog_pt | `/^\/pt\/blog\/(?!index).+/` |

No search `language` option is set. See [search](../features/search.md) for generated assets and development limitations.

## Commands

`package.json` defines seven scripts:

| npm script | Command |
| --- | --- |
| dev | `astro dev` |
| build | `astro build` |
| preview | `astro preview` |
| check | `astro check` |
| doctor | `astro-doctor --no-telemetry` |
| test | `vitest run` |
| test:watch | `vitest` |

## Editor and public form settings

`frontmatter.json` sets framework `astro`, preview host `http://localhost:4321`, and resource/blog/page preview paths `/resources/{{slug}}`, `/blog/{{slug}}`, `/{{slug}}`. All three content types use `pageBundle: false` and `clearEmpty: true`. Folder mappings target `src/content/resources`, `src/content/blog`, and `src/content/pages`; additional multilingual mappings use default locale `en` and date prefix `{{date|yyyy-MM-dd}}`. Asset folder is `src/assets` with relative paths. Git integration and opening the panel on supported files are enabled.

Editor locale choices are `en`, `de`, `pt`, `it`, `fr`, `es`, but only `en`/`pt` are website locales. Editor `fullArticleAvailable` defaults false while the resource schema only makes it optional. Editor `mythicHighlights` uses `text`, but the actual schema requires `label` and `description`. Editor fields are not authoritative validation; see [data models](data-models.md).

`src/pages/support.astro` and `src/pages/pt/support.astro` embed public constants `FORMSPARK_FORM_ID` and `TURNSTILE_SITE_KEY`. Their values are intentionally omitted here. Messages mentioning `PUBLIC_FORMSPARK_FORM_ID` and `PUBLIC_TURNSTILE_SITE_KEY` do not implement environment-variable lookup. Do not submit real forms during checks.
