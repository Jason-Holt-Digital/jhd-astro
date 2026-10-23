# Reference

Active contributors: Jason

These references describe the website's current configuration, content contracts and dependency declarations. The downloadable Mythic app formats are documentation assets, not a website database or backend API.

| Reference | Use it for | Primary sources |
| --- | --- | --- |
| [Configuration](configuration.md) | Build, host, locale, editor and command settings | `astro.config.mjs`, `wrangler.jsonc`, `netlify.toml`, `frontmatter.json`, `package.json` |
| [Data models](data-models.md) | Collection fields, IDs, search records, reviews and downloadable schemas | `src/content.config.ts`, `src/integrations/orama-search.mjs`, `src/data/reviews.json`, `public/downloads/` |
| [Dependencies](dependencies.md) | Declared versus locked versions, overrides and external browser services | `package.json`, `package-lock.json` |

Use [feature documentation](../features/index.md) for publishing and browser flows, [systems](../systems/index.md) for shared implementation boundaries, [deployment](../deployment.md) for hosting procedures, and [security](../security.md) for external-service trust boundaries.

The reference scope is three topic pages plus this index. Dependency counts mean direct manifest keys, not transitive packages. No maintainers page is included because the supplied source-history survey identifies one human contributor.
