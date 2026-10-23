# Resources and blog

Active contributors: Jason

Resources provide task-focused app guides and downloadable reference files. The Blog publishes release notes and other dated posts; both are Markdown collections rendered into static routes.

## Content flow

`src/content.config.ts` defines resources, blog, and pages collections with glob loaders. Resource and blog filenames beginning with an underscore are excluded, so templates do not become entries. Resource metadata includes category, display order, related entry IDs, optional steps, and downloads. Blog metadata includes date, category, read time, product tags, images, and `isSample`, which defaults to true.

`src/lib/collections.ts` filters by language, sorts guides by order, and sorts posts newest first. `src/pages/resources/index.astro` groups guides into onboarding, Journals, dice, Custom Tables, and advanced references. It sorts equal-order entries by title and omits empty main guide groups. `src/pages/blog/index.astro` makes the newest post the featured entry and lists the remainder below it, with category filtering and category links.

The detail routes enumerate entries with `getStaticPaths()`, resolve each ID, and render Markdown through Astro's `render()`. Missing or invalid slugs fail during generation rather than calling a content backend in the browser. Translation-counterpart checks and Portuguese routes are covered under [localization](localization.md).

## Guide and post details

`src/pages/resources/[slug].astro` combines metadata, Markdown, optional hero imagery, downloads, structured steps, and related guides. Explicit related IDs resolve within the same-language collection and exclude the current guide. Fallback candidates prioritize category order, then tag overlap, filling toward three suggestions. Explicit related lists are not capped at three.

Both English detail templates group downloads by label keywords into schemas, examples, templates, and other files. These are independent label filters, so an overlapping label can appear in more than one named group. Labels are presentation inputs, not validated download types.

`src/pages/blog/[slug].astro` derives the displayed product from `product:mobile` and `product:digital` tags. It prefers a social image over the hero for social metadata and visibly marks sample posts. Sample status is not a publication filter.

English category routes use lowercase, hyphenated category names. `src/pages/rss.xml.ts` generates an English feed from date-sorted posts, without excluding sample entries. It is static output, not a live feed service.

## Downloads and sharing

`public/downloads/` holds app-facing schemas, examples, import templates, and saved-formula bundles. These contracts are distinct from the website's Zod frontmatter schema. The website serves the files; it does not validate a player's Journal or execute dice expressions. `public/discord-guides/` contains shorter Markdown guides with links back to the website.

`src/components/blog/ShareBar.astro` supports native sharing when available, clipboard copying with status feedback, email, social links, and the English RSS feed. [Search](search.md) explains the separate build-generated discovery indexes.

## Modification entry points

### Key source files

| Source | Responsibility |
| --- | --- |
| `src/content.config.ts` | Website collection validation |
| `src/content/resources/` | Guide prose and frontmatter |
| `src/content/blog/` | Posts and release records |
| `src/pages/resources/[slug].astro` | Guide layout and related selection |
| `src/pages/blog/[slug].astro` | Article layout and product/social metadata |
| `src/pages/blog/category/[category].astro` | English category pages |
| `src/components/blog/ShareBar.astro` | Browser sharing |
| `public/downloads/` | Static app-format artifacts |

Use [data models](../reference/data-models.md) before changing fields or app-format examples. Set `isSample: false` deliberately for real posts.

## Scope snapshot

On `origin/main`, the collection config, collection/date helpers and date test, both content directories, English/Portuguese resource/blog routes, RSS route, blog components, downloads, and Discord guides contain **165 files: one test and 164 others**, a **1:164** ratio. This includes templates and static artifacts, not just articles. There is **one unique human committer** in scoped history after excluding bots and GitHub's automated committer.
