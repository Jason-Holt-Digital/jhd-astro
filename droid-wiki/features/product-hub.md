# Product hub

Active contributors: Jason

The production homepage, Apps page, and About page help players understand the official Mythic GME apps and reach the right store or help path. They describe installed-app capabilities; this repository does not implement those game tools.

## Page composition

`src/pages/index.astro` composes the shared layout with a utility bar, Hero, reviews, benefits, desktop screenshot section, community/support paths, partners, selected guides, and a maker note. `src/components/home/Hero.astro` owns mobile screenshot imports and store links. Homepage text largely comes through the translation helpers rather than one large page template.

`src/pages/apps.astro` is a thin English wrapper around `src/components/pages/AppsPage.astro`. The Portuguese wrapper passes a different language to the same component. AppsPage supplies two product data objects to `src/components/apps/AppSection.astro`, which combines feature lists, official-content copy, store controls, and screenshots.

`src/pages/about.astro` reads title, description, and header settings from the pages collection, but writes its main story directly in the Astro template. Editing only the Markdown body in `src/content/pages/about.md` will not replace that rendered English story.

## Player flow

The homepage moves from a short explanation to screenshots and trust cues, then links to the Apps comparison and practical guides. AppsPage distinguishes Mythic GME Mobile from Mythic GME Digital, explains purchase differences, links source books, and points to support and release notes.

Its current mobile destinations are Apple, Google Play, and Amazon; desktop destinations include itch.io and Microsoft Store. Steam has `available: false`, so `src/components/apps/StoreLinks.astro` renders a disabled coming-soon span, not an active purchase link. Adventure Crafter is described as a future companion app, not an included Mythic tool.

The comparison also records a Mac App Store bundle exception to the desktop purchase explanation. Preserve that qualification rather than flattening every desktop store into the same model.

## Browser behavior and integrations

Reviews are bundled from `src/data/reviews.json`, shuffled, limited to 20, and rotated by `src/components/home/ReviewsRotator.astro`. They are not fetched from live store APIs. Screenshot carousels and reviews use the shared carousel utility; AppSection adds swipe handling and an image lightbox. See [site shell](../systems/site-shell.md) for carousel mechanics and accessibility boundaries.

Images use Astro's asset pipeline. Store pages, source-book sellers, Discord, the feature board, and linked open-source projects remain external destinations.

## Modification entry points

### Key source files

| Source | Responsibility |
| --- | --- |
| `src/pages/index.astro` | Homepage order and page metadata |
| `src/components/home/Hero.astro` | Hero screenshots and store destinations |
| `src/components/pages/AppsPage.astro` | Shared bilingual comparison data and purchase copy |
| `src/components/apps/AppSection.astro` | Product presentation, carousel, lightbox |
| `src/components/apps/StoreLinks.astro` | Availability and store-button rendering |
| `src/data/reviews.json` | Curated quote records |
| `src/pages/about.astro` | Rendered English maker story |
| `src/content/pages/about.md` | English About metadata |

Check equivalent [localized paths](localization.md) and links from the header/footer when changing destinations. Product claims should follow `CONTEXT.md`, not assumptions about the separate app repository.

## Scope snapshot

The scope is the six English/Portuguese Home, Apps, and About routes; `src/components/home/`, `src/components/apps/`, `src/components/pages/`, `src/content/pages/`, and `src/data/reviews.json`. On `origin/main` this is **23 tracked files, zero test files, and one unique human committer**, excluding bots and GitHub's automated committer. Test-to-other-file ratio is **0:23**; shared carousel tests are outside this scope.
