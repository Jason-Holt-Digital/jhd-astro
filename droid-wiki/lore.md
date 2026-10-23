# Lore

The website's recorded history begins on **2025-08-23**, not with the older app releases preserved in its blog. This account follows commits reachable from `origin/main` at `00f487b`, collected on **2026-10-23**.

[By the numbers](by-the-numbers.md) supplies the current measurements. [Architecture](overview/architecture.md) explains the systems that survived these changes.

## Eras

### 2025-08-23 to 2025-08-27 · Landing page foundations

The initial Astro project already centered on the Mythic apps rather than implementing the apps themselves. The familiar homepage sections, image carousel, reviews, and public CSS structure took shape within days.

- **2025-08-23**, `0cd8720` initialized the Astro site and landing-page components. `d8dad6e` added the reviews rotator on the same date.
- **2025-08-23**, `87d2143` introduced the layered CSS organization. Its surviving entry point is `public/global.css`, with styles under `public/styles/`.
- **2025-08-27**, `3043e61` expanded support into FAQs and contact paths; `0c29eaa` added privacy and terms pages.
- **2025-08-27**, `c5a499e` updated the site domain to `jasonholtdigital.com`.

Current descendants include `src/pages/index.astro`, `src/components/home/ReviewsRotator.astro`, and `src/pages/support.astro`.

### 2025-09 · Publishing and hosting consolidation

September turned the landing site into a resource and release-note publisher. Hosting configuration also changed quickly; committed backend scaffolding should not be mistaken for a backend the current site still runs.

- **2025-09-15**, `3347c3f` added resource collection entries and the `src/pages/resources/` index/detail route structure. `063b363` implemented blog index/detail pages that day.
- **2025-09-17**, `99c1dcb` and `64e7e1b` consolidated guides and resources into one resources collection.
- **2025-09-19**, `897adae` introduced AWS Amplify auth/data scaffolding, and `469c987` added an Azure Static Web Apps workflow.
- **2025-09-20**, `d8dc027` removed Amplify resources, while `a73edf6` replaced the Azure workflow with Cloudflare configuration.
- **2025-09-20**, `5682235` added social metadata, blog category filtering, RSS, and a date-formatting utility. **2025-09-22**, `851cf5a` and `5c649df` expanded downloadable resource material and its presentation.

The current publishing contracts live in `src/content.config.ts`, `src/content/resources/`, and `src/content/blog/`. The hosting descendants are `astro.config.mjs` and `wrangler.jsonc`.

### 2026-01 to 2026-02 · Portuguese and deployment adaptation

The site gained a second language and continued adapting its deployment configuration.

- **2026-01-04**, `812b658` introduced internationalization with Portuguese content and pages. `9875dac`, `12cd171`, and `59fa540` followed with localization and terminology changes on the same date.
- **2026-01-10**, `42f6cb5` added language-specific billboard imagery.
- **2026-01-22**, `9374574` added the Cloudflare adapter to the Astro configuration and updated its dependency.
- **2026-02-15**, `074408a` rewrote About-page prose, `93b77a4` aligned Portuguese copy, and `ab5af19` corrected voice and accuracy across several public pages.

The lasting implementation includes `src/i18n/ui.ts`, `src/i18n/utils.ts`, and the `src/pages/pt/` route family. The dates of earlier Portuguese app releases in `src/content/blog/` do not establish earlier website localization.

### 2026-03-27 · Shared architecture and site-wide search

The largest architectural consolidation happened in one recorded day. Repeated page shells became a shared layout, browser behavior moved beside its owning components, and content loading and search acquired explicit integration boundaries.

- **2026-03-27**, `d75cc47` extracted `src/lib/carousel.ts` for three consumers.
- **2026-03-27**, `02858aa` introduced `src/layouts/BaseLayout.astro` and domain component folders; `9ea7297` migrated English and Portuguese pages to that shell.
- **2026-03-27**, `2a71736` colocated scripts and established `src/lib/`; `5453207` migrated collection loading to the glob-loader API.
- **2026-03-27**, `57e0799` introduced test infrastructure, and `e314ed5` upgraded Astro to 6 with the Cloudflare adapter.
- **2026-03-27**, `496f909` moved RSS generation to the Astro RSS package, while `96dfd9d` replaced the hand-maintained sitemap.
- **2026-03-27**, `e8a0997` introduced site-wide Orama search. `f28784e` switched the overlay to native dialog and dynamic imports, and `e76e6e2` replaced the postbuild script with `src/integrations/orama-search.mjs`.

The recorded goal in `docs/superpowers/plans/2026-03-26-architecture-overhaul.md` was architectural clarity without losing functionality. The search design in `docs/superpowers/specs/2026-03-27-search-design.md` records the initial intent, not every current detail. For example, its initial English-only indexing description predates the current four-index configuration in `astro.config.mjs`.

### 2026-04-24 to 2026-05-30 · Preview design and product-first copy

A parallel redesign appeared under `/v2/`, while production copy and presentation continued evolving separately.

- **2026-04-24**, `cdb6862` introduced redesign preview routes, and `74b1c3a` extended them to blog and support.
- **2026-04-28**, `8453028` added the refined preview; `3d48e9e` made its homepage the apps landing page, and `0876867` adjusted the release-note archive.
- **2026-05-27**, `6f4ccdc`, `ea8d07f`, `3d34436`, and `f7e8491` revised About, home, apps, resources, and support copy. `601ca4f` made social metadata explicit.
- **2026-05-30**, `85a0202` refreshed the production hero and section rhythm. `176385a` revised historical release-note copy, while `8630225` updated copy inventories and voice rules.

`docs/plans/2026-04-27-v2-redesign-system-plan.md` explicitly kept redesign work under `/v2/*` pending a cutover decision. The current split remains visible in `src/layouts/BaseLayout.astro` and `src/layouts/V2RefinedLayout.astro`; see [Redesign preview](systems/redesign-preview.md). A plan's filename date is not proof of when its implementation landed.

### 2026-06 to 2026-07 · Download contracts and local tooling

The recorded changes in this period are narrower than the March overhaul.

- **2026-06-01**, `03ae701` made downloadable formulas importable, and `60d6d5c` clarified formula modifier placeholders.
- **2026-06-29**, `d530a00` localized code-specific agent skills. `0318980` added Patrol skills and `0c86161` removed them the same day, explicitly describing this as a non-Flutter repository.
- **2026-07-10**, `e42c4be` added code-simplification skills.
- **2026-07-13**, `4ef190b` added local Conductor configuration, and `d428fd5` added Cursor Cloud setup instructions.

The persistent seams are downloadable contracts in `public/downloads/`, project instructions in `AGENTS.md`, and local skills under `.agents/skills/`. No August or September 2026 commits are reachable from this snapshot.

### 2026-10-10 to 2026-10-23 · Publication completion and maintenance gates

The latest period emphasized guide availability, preserving approved copy, dependency maintenance, and repository automation.

- **2026-10-10**, `a3a3206` completed English/Portuguese resource pages and introduced optional full-article availability.
- **2026-10-12**, `5841335` aligned the downloadable saved-formula schema with its public import contract; `95ca0ab` and `47e077d` restored approved summaries and published completed Portuguese articles.
- **2026-10-13**, `30a4dd0` and `f6c2352` preserved approved Custom Tables and resource-search summaries.
- **2026-10-16**, `7044a0d` upgraded to Astro 7.4, moved preview images into processed assets, and extracted shared legal articles.
- **2026-10-17**, `36f3bdf`, `97917ed`, and `9c24a70` revised app privacy descriptions and distinctions between optional usable tools and enabled tools.
- **2026-10-22**, `beabab3` documented Mythic GME 1.7 dice changes, and `fbcda25` labeled affected features as requiring app 1.7.0 or later.
- **2026-10-23**, `00f487b` added the four gated Factory review, mention, triage, and wiki-refresh workflows under `.github/workflows/`.

The privacy changes document the installed apps. They are not evidence that website analytics instrumentation was added.

## Longest-standing systems

These counts follow the current representative file backward through detected renames using `git log origin/main --follow --no-merges`. “Later revisions” means non-merge file-touch commits after its introduction, not revisions across every file in a subsystem. A rename can count as a revision.

| Surviving system and representative path | First recorded introduction | Later revisions |
| --- | --- | ---: |
| Homepage, `src/pages/index.astro` | 2025-08-23, `0cd8720` | 19 |
| Header, `src/components/layout/Header.astro` | 2025-08-23, `0cd8720` | 32 |
| Global style entry point, `public/global.css` | 2025-08-23, `0cd8720` | 20 |
| Billboard, `src/components/home/Billboard.astro` | 2025-08-23, `0cd8720` | 17 |
| Reviews rotator, `src/components/home/ReviewsRotator.astro` | 2025-08-23, `d8dad6e` | 12 |
| Support route, `src/pages/support.astro` | 2025-08-27, `2d6dcd4` | 24 |
| Locale dictionary, `src/i18n/ui.ts` | 2026-01-04, `812b658` | 9 |
| Shared carousel, `src/lib/carousel.ts` | 2026-03-27, `d75cc47` | 2 |
| Production shell, `src/layouts/BaseLayout.astro` | 2026-03-27, `02858aa` | 6 |
| Build search integration, `src/integrations/orama-search.mjs` | 2026-03-27, `e76e6e2` | 1 |

The support route began as a placeholder on **2025-08-27**, before its fuller support content later that day. Billboard's file lineage likewise predates the richer carousel behavior. File survival does not imply unchanged implementation.

## Replaced and removed features

| Former feature | Introduced | Removed or replaced | Evidence and successor |
| --- | --- | --- | --- |
| Separate guides collection | 2025-09-17, `99c1dcb` for [src/content/guides/setup/index.md](https://github.com/Jason-Holt-Digital/jhd-astro/blob/99c1dcb/src/content/guides/setup/index.md) | 2025-09-17, `64e7e1b` | Removed the separate collection and its authoring guide; resources now live under `src/content/resources/` |
| AWS Amplify auth/data scaffolding | 2025-09-19, `897adae` | 2025-09-20, `d8dc027` | Deleted [amplify/auth/resource.ts](https://github.com/Jason-Holt-Digital/jhd-astro/blob/897adae/amplify/auth/resource.ts), [amplify/data/resource.ts](https://github.com/Jason-Holt-Digital/jhd-astro/blob/897adae/amplify/data/resource.ts), and [amplify/backend.ts](https://github.com/Jason-Holt-Digital/jhd-astro/blob/897adae/amplify/backend.ts); no replacement application backend is established by those commits |
| Azure Static Web Apps workflow | 2025-09-19, `469c987` | 2025-09-20, `a73edf6` | Migration commit deleted the Azure workflow and added Cloudflare configuration; surviving host config is `wrangler.jsonc` |
| Hand-maintained sitemap | 2025-08-27, `45ae7e3` | 2026-03-27, `96dfd9d` | Removed [public/sitemap.xml](https://github.com/Jason-Holt-Digital/jhd-astro/blob/45ae7e3/public/sitemap.xml) in favor of the sitemap integration in `astro.config.mjs` |
| Orama postbuild script | 2026-03-27, `e8a0997` | 2026-03-27, `e76e6e2` | Deleted [scripts/postbuild.mjs](https://github.com/Jason-Holt-Digital/jhd-astro/blob/e8a0997/scripts/postbuild.mjs); replaced it with `src/integrations/orama-search.mjs` and `src/integrations/orama-search-client.ts` |
| Project-local Patrol skills | 2026-06-29, `0318980` | 2026-06-29, `0c86161` | Removal message explicitly says “non-Flutter repo”; no equivalent Flutter test harness is implied |

Commit evidence establishes checked-in additions and removals, not that Amplify or Azure ever served production traffic. It does not establish the reasons for every hosting change.

## Major rewrites

- **2025-08-23**, the CSS-layer rewrite in `87d2143`, followed by the extraction work in `1101e40`, `1d9f0d9`, and `3b92cb5`, moved style ownership out of a growing `public/global.css` into layered files under `public/styles/`.
- **2026-03-27**, `02858aa` changed 41 files while organizing components and adding the shared shell. `9ea7297` then changed 23 page files, with 4,586 added and 5,508 deleted lines, while replacing repeated document shells with `src/layouts/BaseLayout.astro`. Diff totals include formatting and moved markup, not just new functionality.
- **2026-03-27**, `e76e6e2` changed seven files while replacing postbuild indexing with an Astro integration and a separate browser client.
- **2026-10-16**, `7044a0d` changed 62 files in the Astro 7.4 upgrade. Its 9,701 added and 4,955 deleted lines include lockfile and verification artifacts, so it should not be described as a comparably sized application rewrite.

## Growth trajectory

Each row selects the reachable commit with the newest committer timestamp at or before the stated UTC day end. Counts come from that commit's tree, not today's filesystem.

| Snapshot date | Commit | All tracked files | Source code files | Collection Markdown |
| --- | --- | ---: | ---: | ---: |
| 2025-08-23 | `698d083` | 48 | 11 | 0 |
| 2025-09-30 | `53ddbb2` | 258 | 40 | 44 |
| 2026-01-31 | `35a0ca1` | 338 | 57 | 92 |
| 2026-03-31 | `4b35faa` | 355 | 62 | 100 |
| 2026-04-30 | `0876867` | 462 | 87 | 100 |
| 2026-10-23 | `00f487b` | 558 | 89 | 100 |

Here “source code files” means `.astro`, `.ts`, `.js`, and `.mjs` under `src/`, including tests and the content schema but excluding CSS. It is intentionally different from the disjoint implementation census in [By the numbers](by-the-numbers.md). Collection Markdown includes templates, and tracked totals include images, screenshots, agent skills, and configuration.

The main expansions align with the **September 2025** publishing system, **January 2026** localization, and **April 2026** redesign preview. Source module count increased little after April, while assets, documentation, and tooling continued growing. These numbers describe repository shape, not shipped app functionality or team productivity.

## Historical boundaries

- Dates above are Git committer-local dates unless the snapshot-selection method explicitly says UTC. A plan file named for **2026-03-26** can have an implementation commit dated **2026-03-27**.
- `src/content/blog/beta-build-07-release-notes-2024-10-05.md` records an app release on **2024-10-05**, but its first website Git introduction is **2025-09-17**, `99c1dcb`. Frontmatter and filename dates are not website creation dates.
- History is complete locally, but this narrative deliberately follows the main snapshot rather than `git log --all`. The Flutter embed/redirect commits `084ac5f` (**2026-03-27**) and `c7be868` (**2026-03-30**) and the Sanctuary preview commits of **2026-07-13** are not ancestors of this snapshot. They are not presented as shipped mainline milestones.
- Reasons are attributed only where a commit message or recorded plan supplies them. There is no deployment audit or production-traffic record behind this history.
