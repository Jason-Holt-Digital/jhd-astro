# Localization

Active contributors: Jason

The production website has unprefixed English routes and Brazilian Portuguese routes under `/pt/`. Translation combines shared UI dictionaries, separate route templates, and language-tagged collection entries; it is not automatic page translation.

## Locale and content selection

`astro.config.mjs` declares `en` as the unprefixed default and `pt` as the second route locale. `src/i18n/ui.ts` provides display names and matching UI dictionaries. `getLangFromUrl` in `src/i18n/utils.ts` examines the first path segment and falls back to English. `useTranslations` returns a key lookup that falls back to English for missing or falsy localized values. `getRouteFromUrl` removes a recognized prefix; it does not look up translated content.

### Key source files

| Abstraction | Responsibility and source |
| --- | --- |
| Route locale | URL-prefix detection in `src/i18n/utils.ts` |
| Shared UI | Navigation, accessibility and search copy in `src/i18n/ui.ts` |
| Content locale | `lang` schema field, defaulting to `en`, in `src/content.config.ts` |
| Collection selection | Date-sorted blog and order-sorted resources in `src/lib/collections.ts` |
| Browser metadata | `en` or `pt-BR` output in `src/layouts/BaseLayout.astro` |
| Language navigation | Explicit counterpart or locale home in `src/components/layout/LanguageFab.astro` |

Portuguese detail IDs currently end in `-pt`. The English resource detail template, `src/pages/resources/[slug].astro`, looks up its current ID plus that suffix and checks the result's language before creating an alternate URL. `src/pages/pt/resources/[slug].astro` removes the suffix, looks up the English entry, and verifies its language. `src/pages/blog/[slug].astro` and `src/pages/pt/blog/[slug].astro` follow the same pattern. The suffix is a mapping convention, not proof that a translation exists.

## Explicit alternate links

`src/layouts/BaseLayout.astro` always emits a self-language alternate. It emits the other language's hreflang and Open Graph locale alternate only when an explicit `alternatePath` exists and `noAlternate` is false. It never guesses a counterpart by adding or removing `/pt/`.

The same resolved paths flow through `src/components/layout/Footer.astro` into `src/components/layout/LanguageFab.astro`. The current-language choice points to the canonical/current path. If a counterpart is unavailable, choosing the other language goes to its home page instead of a fabricated detail URL.

Portuguese output uses `html lang="pt-BR"`, `hreflang="pt-BR"` and `og:locale="pt_BR"` in the production layout. Portuguese templates pass `pt-BR` into `src/lib/format-date.ts`; the formatter otherwise defaults to `en-US`. Localized search selects `resources_pt` and `blog_pt` in `src/components/search/SearchOverlay.astro`.

## Editing and known limits

For a new translated guide, create the actual Portuguese collection entry, set `lang: pt`, preserve the ID mapping, and review both detail routes' alternate output. For shared interface changes, update both dictionary sections. For page copy, edit the corresponding template under `src/pages/pt/`; dictionary coverage does not imply that all page text lives there.

Portuguese Blog categories use query filters on `/pt/blog/`, as implemented by `src/pages/pt/blog/index.astro`. There are no Portuguese category route templates. English `src/pages/blog/category/[category].astro` suppresses cross-language alternates. `src/pages/rss.xml.ts` remains an English feed, even when linked from Portuguese pages. The [redesign preview](../systems/redesign-preview.md) is English-only.

## Scope and checks

The measured scope is `src/i18n/`, `src/pages/pt/`, `src/layouts/BaseLayout.astro`, `src/components/layout/LanguageFab.astro`, and `src/lib/collections.ts`: **19 files, including 2 test files**, with **1 unique human author** across their `origin/main` history. Content entries and other shared components are excluded.

`src/i18n/ui.test.ts` checks dictionary parity and nonempty values. `src/i18n/utils.test.ts` covers route detection and stripping; its fallback-named test does not actually remove a translation. Counterpart availability and rendered metadata still need page-level verification. See [content models](../reference/data-models.md). No tests were run for this documentation.
