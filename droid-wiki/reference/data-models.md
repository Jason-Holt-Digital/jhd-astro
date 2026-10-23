# Data models

Active contributors: Jason

Website collections validate Markdown frontmatter at build time. Downloadable JSON schemas document installed-app import/export formats, not a website backend.

## Website collections

`src/content.config.ts` exports three collections. Resource/blog loaders match `**/[!_]*.md` under their respective `src/content/resources` and `src/content/blog` roots, excluding underscore-prefixed basenames. Pages match `**/*.md` under `src/content/pages`.

All collections have `lang: 'en' | 'pt'`, default `en`. Resource/blog `tags` and `keywords` are string arrays defaulting to `[]`. Their `downloads` default to `[]`; each item requires nonempty string `label`/`href`, with optional string `format`/`size`. Download hrefs are not URL-validated.

| Collection | Required fields | Optional fields and defaults |
| --- | --- | --- |
| resources | String `title`, `summary`; `category` in `start-here`, `adventure-journals`, `dice-roller`, `custom-tables`, `advanced`; integer `order >= 0` | String `appSummary`, `duration`; URL `externalUrl`; boolean `fullArticleAvailable`; date-coerced `updated`; processed `hero`, string `heroAlt`; `icon` defaults `fa-slab fa-regular fa-book-open`; string-array `related` and object-array `steps` default `[]` |
| blog | String `title`, `summary`, `readTime`; date-coerced `date`; `category` in `Release Notes`, `Behind the Scenes`, `Guides`, `Community`, `Announcement` | `isSample` defaults true; processed `hero`/`socialImage`, string `heroAlt`/`socialImageAlt` |
| pages | String `title`, `subtitle`, `description`; `pageHeader` | Optional arrays `backgroundHighlights`, `socialLinks`, `mythicHighlights`; no array defaults |

Each resource step requires string `title` of at least three characters, with optional string `body`, processed `image`, and string `imageAlt`. **Missing step alt is not rejected when an image exists.** The refinement rejects supplied blank/whitespace alt only. Resource/blog hero refinements require trimmed nonempty alt when an image exists; blog social images have the equivalent check.

Page header requires strings `accent`/`icon`, layout `left|right|center`, visual element `shapes|grid|particles`, and color scheme `primary|secondary|accent`. Highlight items require `icon`/`title`/`description`; social links require `href`/`label`/`icon`/`className` with optional boolean `external`; Mythic highlights require `label`/`description`. These strings are not URL/nonempty refinements.

## IDs and generated records

`src/lib/collections.ts` filters locale and sorts blog newest-first, resources by ascending order. Detail routes use loader-generated `entry.id` as slug. Portuguese counterparts conventionally append `-pt`; routes verify the counterpart entry and language before emitting alternates. Stored locale `pt` renders Brazilian Portuguese through the layout. See [localization](../features/localization.md).

`src/integrations/orama-search.mjs` inserts `{ path, title, h1, content }`, all strings extracted from emitted HTML. Orama serialization is a database snapshot, not a plain record array. Four locale/type assets are configured; no locale field or authored document ID is inserted. See [search](../features/search.md).

`src/data/reviews.json` contains 52 objects with string `text`, `src`, `href`, `icon`; there is no ID or locale field. `src/components/home/ReviewsRotator.astro` asserts the `Quote` type rather than runtime-validating JSON, shuffles a copy, and selects at most 20.

## Downloaded app contracts

All five files below are JSON Schema draft 2020-12 under `public/downloads/`, generally allowing extra properties.

| Source | Core contract |
| --- | --- |
| `public/downloads/saved_formulas.schema.json` | Array or object containing `formulas`; items require nonblank `formula`, optionally `name`, `description`, date-time `dateAdded`, `id` |
| `public/downloads/categories.schema.json` | Requires `defaultCategories`/`categories`; items require `id`, `displayName`, `iconKey`, integer `sortOrder`, boolean `isBuiltIn`; optional nullable description and translation map |
| `public/downloads/meaning_table.schema.json` | Requires `id`, `categoryId`, `displayName`, nonempty `entries`; entries require two-integer `range` and string `result` |
| `public/downloads/event_focus_table.schema.json` | Requires `id`, display-name/description strings and translation maps, nonempty `entries`; entries require `range`/`result` |
| `public/downloads/journal.schema.json` | Requires `JournalName`, `ChaosFactor`, `Scenes`, `Characters`, `Threads`, `Features`, and three `Activated*Sections`; chaos 1–9, sections 1–5 |

Table `schemaVersion: 3` and `tableType` constants apply when present, not as defaults or required fields. Event-focus `categoryId`, if present, must be `event-focus`. These schemas do not enforce range ordering, overlap or coverage.

Journals optionally include `LogEntries`, restricted-key `ListNotes`, and `SchemaVersion: 1`. Each log entry requires `rollType`, `odds`, `chaosFactor`, `question`, `outcome`, `rollResult`, `isSceneCheck`, and date-time `timestamp`. Optional scene adjustments recursively require `result`, two-integer `range`, and `description`. Schema `$id` URLs identify app-format contracts, not website endpoints. Consult complete schemas for nested fields and [resources](../features/resources-and-blog.md) for distribution.
