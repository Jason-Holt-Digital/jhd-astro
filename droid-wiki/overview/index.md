# JHD Astro

This repository builds the Jason Holt Digital website, the official hub for the Mythic GME apps. It helps players compare the apps, find guides and release notes, and reach support. It does not contain the installed apps or their game engine.

## Start here

| Goal | Page |
| --- | --- |
| Run the site locally | [Getting started](getting-started.md) |
| Understand the build and browser boundary | [Architecture](architecture.md) |
| Change a player-facing capability | [Features](../features/index.md) |
| Change layouts, navigation, or preview designs | [Systems](../systems/index.md) |
| Pick up work and validate it | [Contribution](../how-to-contribute/index.md) |
| Publish the static output | [Deployment](../deployment.md) |
| Look up schemas and dependencies | [Reference](../reference/index.md) |

## Repository boundary

`src/pages/index.astro` assembles the production homepage. `src/pages/pt/index.astro` is its Portuguese counterpart. `src/pages/v2/index.astro` belongs to a separate redesign preview, not the production homepage.

`src/content.config.ts` defines Markdown collections for guides, blog posts, and structured page copy. `astro.config.mjs` configures the canonical site URL, sitemap, localized routes, redirects, image compilation, and search-index generation. `package.json` specifies Astro 7 and the development commands.

`CONTEXT.md` defines the product-first language. Treat app mechanics described in guides as documentation of a separate product, not features implemented by this website.

## Reading this snapshot

These pages describe the checked-out `main` source. [By the numbers](../by-the-numbers.md) records the measurement scope and date. [Lore](../lore.md) separates repository changes from historical app release notes.
