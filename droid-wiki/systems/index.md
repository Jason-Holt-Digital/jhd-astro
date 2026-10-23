# Systems

Active contributors: Jason

The website has two rendering shells and a small set of shared utilities. These are internal building blocks of one Astro site, not independently deployed services or implementations of the Mythic game engine.

## System map

| System | Purpose | Start here |
| --- | --- | --- |
| [Production site shell](site-shell.md) | Shared page metadata, navigation, footer and production visual foundation | `src/layouts/BaseLayout.astro` |
| [Redesign preview](redesign-preview.md) | English `/v2/` experiment with separate assets and browser interactions | `src/layouts/V2RefinedLayout.astro` |
| [Search](../features/search.md) | Build-generated indexes and browser-side dialog queries | `src/integrations/orama-search.mjs` |
| [Localization](../features/localization.md) | Route locale, UI strings and verified translated counterparts | `src/i18n/utils.ts` |
| [Resources and blog](../features/resources-and-blog.md) | Collection entries rendered into static listings and detail routes | `src/content.config.ts` |

Production composition is visible in `src/pages/index.astro`: page content is passed to the base layout, while home-specific components own their sections. The layout mounts Header, Footer and SearchOverlay. By contrast, `src/pages/v2/index.astro` explicitly supplies its preview header and footer through layout slots. Changing the production header therefore does not automatically update the preview.

Both shells participate in the same Astro build configured by `astro.config.mjs`. The preview defaults to noindex and is filtered out of the sitemap, but its route files still generate public pages. Shared collections also mean a content edit can affect both shells, even when their CSS and components are separate.

## Utility boundaries

| Utility | Contract | Main integration points |
| --- | --- | --- |
| `src/lib/collections.ts` | Select entries by language and sort without mutating the original array | Production and preview listing pages |
| `src/lib/format-date.ts` | Format a Date through `Intl.DateTimeFormat`, defaulting to `en-US` | Blog and resource templates |
| `src/lib/carousel.ts` | Own carousel index, timers and event cleanup; delegate DOM updates to a callback | Production reviews, billboard and app screenshots |
| `src/lib/v2Links.ts` | Preview navigation, stores and asset URLs | Preview components and routes |
| `src/lib/v2ContentMeta.ts` | Preview category labels, summaries, icons and anchors | Preview blog and resources |

Keep these boundaries visible when choosing an edit location. A new guide belongs in the content collection, not in carousel logic. A new store destination may require both `src/components/layout/Header.astro` and the preview link table. A metadata fix belongs in the applicable layout, with route-specific values passed by its callers.

## Modification entry points

For production layout or keyboard behavior, start with `src/layouts/BaseLayout.astro` and `src/components/layout/Header.astro`, then inspect the relevant stylesheet imported by `public/global.css`. For preview behavior, start with `src/components/v2/refined/V2RefinedInteractions.astro`; it does not use the shared production carousel controller.

For a reusable utility, place only behavior shared by its callers in `src/lib/`. Callers still own component markup and announcements. The carousel's `onActivate` callback is an existing example of that separation.

Review both shells when changing shared content schemas or helpers. Review English and Portuguese production pages when changing metadata, navigation or content IDs. The [architecture page](../overview/architecture.md) describes the broader build/browser boundary; this section documents the implementation seams.

## Measurement scope

`src/layouts/`, `src/components/`, and `src/lib/` contain **45 files, including 2 test files**. The tests in this scope cover carousel and date utilities; localization tests live outside it. These paths have **1 unique human author** in `origin/main` history, Jason Holt, so the byline has only one name rather than invented additional contributors.

The count excludes route files, content, integrations, CSS and assets. It overlaps the narrower shell and preview counts and must not be added to them. No tests or builds were run for this documentation.
