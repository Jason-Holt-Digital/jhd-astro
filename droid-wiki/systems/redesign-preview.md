# Redesign preview

Active contributors: Jason

The English `/v2/` routes are a parallel design preview inside the same static website. They reuse content but have their own layout, components, styles and interactions; they do not replace the [production shell](site-shell.md).

## Route and layout boundaries

| Route family | Implementation |
| --- | --- |
| `/v2/` | `src/pages/v2/index.astro` |
| `/v2/about/` | `src/pages/v2/about/index.astro` |
| `/v2/resources/` and detail slugs | `src/pages/v2/resources/index.astro`, `src/pages/v2/resources/[slug].astro` |
| `/v2/blog/`, detail and category slugs | `src/pages/v2/blog/index.astro`, `src/pages/v2/blog/[slug].astro`, `src/pages/v2/blog/category/[category].astro` |
| `/v2/support/` | `src/pages/v2/support/index.astro` |
| `/v2/privacy/`, `/v2/terms/` | `src/pages/v2/privacy/index.astro`, `src/pages/v2/terms/index.astro` |

There is no separate preview Apps route: `src/lib/v2Links.ts` points app navigation to homepage anchors. It also centralizes store destinations, Discord, support/contact URLs, release notes and the `/v2/assets/` helper.

`src/layouts/V2RefinedLayout.astro` fixes document language to English, defaults `noindex` to true, and writes `noindex, nofollow`. Its canonical path defaults to the current preview path. `astro.config.mjs` excludes `/v2/` URLs from the sitemap. Neither mechanism blocks public access.

The layout exposes before-main, default and after-main slots. Pages explicitly insert preview Header, Footer, UtilBar and TweaksPanel. It loads four preview CSS entrypoints, Google Fonts and Font Awesome 6.5.2 CSS instead of the production kit and font component. The theme prop supports refined, editorial and munoz, defaulting to munoz.

## Shared content, separate presentation

`src/pages/v2/blog/index.astro` uses `getBlogPostsByLang("en")`; resource listings use the resource helper. Both detail templates generate English entries and render the same collection Markdown used by production. `src/lib/v2ContentMeta.ts` supplies category descriptions, icons and resource anchors. Content edits therefore reach both shells, while template edits do not.

About reads the English pages entry in `src/pages/v2/about/index.astro`. Preview legal routes import shared legal articles. Blog links still advertise the production English RSS feed. There is no Portuguese preview counterpart.

## Key source files

| Modification area | Source entry point |
| --- | --- |
| Shared preview chrome | `src/components/v2/refined/V2RefinedHeader.astro`, `src/components/v2/refined/V2RefinedFooter.astro` |
| Browser controls | `src/components/v2/refined/V2RefinedInteractions.astro` |
| Theme controls | `src/components/v2/refined/V2RefinedTweaksPanel.astro` |
| Served styles | `public/v2/assets/tokens.css`, `public/v2/assets/themes.css`, `public/v2/assets/page.css`, `public/v2/assets/shell.css` |
| Processed illustration | `src/assets/v2/` |

The layout's served stylesheet paths are authoritative. The additional `public/styles/v2/` directory should not be mistaken for the layout's active entrypoint.

## Interaction differences and caution

`src/components/v2/refined/V2RefinedInteractions.astro` implements its own dropdown, inert mobile drawer, focus trapping, scroll state and timed hero/billboard carousels. Those timers are separate from `src/lib/carousel.ts` and do not inherit its reduced-motion or hover/focus pause policy.

Tweaks change body CSS variables, spacing density and corner attributes. Cmd/Ctrl+. toggles the panel. Its host handshake uses window messages and wildcard postMessage targets; incoming edit-mode messages do not check origin. Treat this as preview tooling, not a production configuration channel.

The same interaction file injects marquee rating, community and install figures. Their presence is not evidence that those figures are current or approved for production. Review them before promoting preview components.

Preview resource search filters rendered metadata with substring matching in `src/pages/v2/resources/index.astro`. It does not fetch the production Orama indexes, which exclude preview paths. See [search](../features/search.md).

Measured code scope covers `src/pages/v2/`, `src/components/v2/refined/`, the preview layout and both v2 utility files: **24 files, 0 test files**, and **1 unique human author** in `origin/main` history. Assets, CSS and reused helpers/content are excluded. No build or tests were run for this documentation.
