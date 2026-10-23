# Features

Active contributors: Jason

The website helps players choose the official Mythic GME apps, find guides, follow releases, and ask for help. It does not run the installed apps' dice engine, Journals, purchases, or sync.

## Player journeys

| Player goal | Wiki page | Website entry points |
| --- | --- | --- |
| Understand the apps and choose a platform | [Product hub](product-hub.md) | Home, Apps, About |
| Learn a task or download a reference file | [Resources and blog](resources-and-blog.md) | Resources, guide details, Blog, release notes |
| Find a guide or post | [Search](search.md) | Shared search overlay and index-page search |
| Read Brazilian Portuguese content | [Localization](localization.md) | Language control and `/pt/` routes |
| Resolve a problem or contact Jason | [Support](support.md) | FAQ, contact tab, Discord, email |

The homepage assembles these paths in `src/pages/index.astro`. App comparisons are rendered by `src/components/pages/AppsPage.astro`; task-focused material comes from collections declared in `src/content.config.ts`. Support is a separate interactive page in `src/pages/support.astro`.

## Website boundaries

Most content becomes static HTML at build time. Resource and blog detail routes enumerate collection entries through `getStaticPaths()` in `src/pages/resources/[slug].astro` and `src/pages/blog/[slug].astro`. Browser scripts add search, carousels, sharing, filters, FAQ accordions, and contact submission.

Store buttons leave the website. Download links serve files for players to use in the installed apps; the website does not import those files into a running Journal. The contact form is different from a static download: it sends a real external POST to Formspark after Turnstile completion. Never submit it while checking documentation.

The [site shell](../systems/site-shell.md) explains shared navigation, metadata, styles, and assets. The [redesign preview](../systems/redesign-preview.md) documents the separate `/v2/` implementation rather than treating it as the production feature set.

## Change entry points

Use `CONTEXT.md` for product terminology and voice. Change route composition in the relevant page, content metadata in its collection entry, and shared behavior in its owning component. Preserve translated counterparts and explicit alternate links; the [data models](../reference/data-models.md) describe content contracts.

## Scope snapshot

On `origin/main`, `src/pages/` contains **36 route files and no test files**. History for that directory has **one unique human committer**, after excluding bot identities and GitHub's automated committer. This route-only inventory includes translated and preview routes; it is not a count of production capabilities or total test coverage. Detailed subsystem scopes appear on the linked pages.
