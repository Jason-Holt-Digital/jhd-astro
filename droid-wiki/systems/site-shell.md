# Site shell

Active contributors: Jason

The production shell wraps English and Portuguese pages with shared metadata, navigation, footer, fonts and a search dialog. Page components retain responsibility for their content and explicit canonical and translated paths.

## Layout contract

`src/layouts/BaseLayout.astro` requires a title, description and canonical path. It supports social metadata overrides, `alternatePath`, `noAlternate`, `noindex`, a main class and homepage hero-docking behavior.

| Abstraction | Contract or source |
| --- | --- |
| Document metadata | Canonical, Open Graph and Twitter tags in `src/layouts/BaseLayout.astro` |
| Page content | Default slot inside `main#main`; named head and before-header slots |
| Shared navigation | Header and Footer composed by `src/layouts/BaseLayout.astro` |
| Language links | Explicit alternate passed to `src/components/layout/Footer.astro` |
| Search | Locale passed to `src/components/search/SearchOverlay.astro` |
| Page headings | Reusable visual header in `src/components/layout/PageHeader.astro` |

Social images default to `/social/og-default.jpg` and become absolute URLs against the configured site. Image alt text and skip-link text have localized defaults. Cross-language metadata requires an explicit counterpart; see [localization](../features/localization.md). The skip-link script focuses its target and temporarily adds a tabindex when needed.

## Navigation and footer

`src/components/layout/Header.astro` builds localized links with Astro's locale URL helper. Its store dropdown tracks keyboard versus pointer input, focuses the first item for keyboard activation, supports arrow navigation, and closes on Escape or outside clicks.

Mobile navigation uses `data-mobile-*` hooks, an overlay, ARIA updates, focus trapping and focus restoration. Its actual body-state class is `mobile-nav-open`. It closes on Escape, overlay click and resizing beyond 900 pixels. Homepage docking watches the hero with `IntersectionObserver`; ordinary scroll state is updated through animation frames. Inspect these implementations rather than copying older generic off-canvas guidance.

`src/components/layout/Footer.astro` provides navigation, social and legal links plus the language control. Its copyright year is computed during rendering, so static output reflects the build year, not a live browser clock. Contact links point to the support contact panel.

## Styling and assets

`public/global.css` orders the tokens, base, utilities, components and overrides layers, then imports focused stylesheets. Navigation styling starts in `public/styles/components/header.css`; general spacing and tokens belong in their existing layers.

`src/components/layout/HeadFonts.astro` loads Epilogue and Plus Jakarta Sans through Google Fonts head links. The base layout loads the Font Awesome CDN kit. This is separate from the preview's font/icon stack.

Processed component images live under `src/assets/`, including billboard, desktop, mobile and people images. Header and Footer import `src/assets/logo/logo.svg` with the `?url` suffix. Public social cards, icons and downloadable files remain root-addressed assets. Follow the importing component when replacing imagery rather than assuming every asset belongs in `public/`.

## Shared carousel controller

`src/lib/carousel.ts` accepts item count, activation callback, optional timer, pause targets, keyboard target and starting index. Its handle provides next/previous, goTo, pause/resume, current index and destroy. It wraps indexes, pauses on hover/focus, suppresses timers for reduced motion and removes its listeners on destruction.

DOM updates remain in `src/components/home/Billboard.astro`, `src/components/home/ReviewsRotator.astro`, and `src/components/apps/AppSection.astro`. Keep their image, announcement and lightbox behavior separate from controller state. The [preview](redesign-preview.md) has independent carousel scripts.

## Key source files

| File | Purpose |
| --- | --- |
| `src/layouts/BaseLayout.astro` | Production document and metadata contract |
| `src/components/layout/Header.astro` | Menus, mobile navigation, and hero docking |
| `src/components/layout/Footer.astro` | Footer links, language control, and build-time year |
| `src/components/layout/HeadFonts.astro` | Production font links |
| `src/lib/carousel.ts` | Reusable carousel state and lifecycle |
| `public/global.css` | Layered production stylesheet entrypoint |

## Scope and verification

Core-shell scope includes `src/layouts/BaseLayout.astro`, the six files in `src/components/layout/`, both carousel source/test files, and `public/global.css`: **10 files, including 1 test file**, with **1 unique human author** in their `origin/main` history. Imported CSS, images, consumers and search implementation are excluded.

`src/lib/carousel.test.ts` supplies unit coverage for the controller. Navigation, metadata, focus and responsive composition still require browser checks. No tests or build were executed for this documentation.
