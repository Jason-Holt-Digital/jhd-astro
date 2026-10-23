# Dependencies

Active contributors: Jason

`package.json` declares seven runtime and eight development dependencies. The table compares declarations with `package-lock.json` lockfile-version-3 top-level resolutions; there is no `node_modules` installation in the surveyed workspace, so these are not observed installed versions.

## Direct packages

| Runtime package | Declared | Locked | Role |
| --- | --- | --- | --- |
| `@astrojs/cloudflare` | `^14.4.0` | 14.4.0 | Cloudflare adapter and compile-time image configuration |
| `@astrojs/rss` | `^4.0.19` | 4.0.19 | Static English RSS generation in `src/pages/rss.xml.ts` |
| `@astrojs/sitemap` | `^3.7.4` | 3.7.4 | Sitemap integration and route filtering |
| `@orama/orama` | `^3.1.18` | 3.1.18 | Build-time indexing and browser search |
| `@orama/plugin-match-highlight` | `^3.1.18` | 3.1.18 | Declared highlighting plugin; current overlay constructs highlights itself |
| `astro` | `^7.4.0` | 7.4.0 | Static routes, components, collections and assets |
| `html-to-text` | `^9.0.5` | 9.0.5 | Extracts text from emitted HTML for search |

| Development package | Declared | Locked | Role |
| --- | --- | --- | --- |
| `@astrojs/check` | `^0.9.10` | 0.9.10 | Astro diagnostics |
| `@santi020k/astro-doctor` | `1.5.0` | 1.5.0 | Doctor command, with telemetry disabled by script |
| `esbuild` | `^0.28.2` | 0.28.2 | Build/tooling dependency |
| `prettier` | `3.6.2` | 3.6.2 | Formatting tool |
| `tsx` | `^4.20.5` | 4.21.0 | TypeScript execution tooling |
| `typescript` | `^5.9.2` | 5.9.3 | Type checking |
| `vitest` | `^4.1.2` | 4.1.2 | Unit tests |
| `wrangler` | `^4.151.0` | 4.151.0 | Cloudflare tooling |

Manifest classification does not imply a server runtime. This site is prerendered; Astro and integrations run during development/build, while bundled Orama code runs in the browser.

Counts are `Object.keys(dependencies).length` and `Object.keys(devDependencies).length`, not transitive totals. Locked versions are the corresponding `packages['node_modules/<name>'].version` values. No registry freshness, vulnerability audit, or installed-tree verification was performed.

## Overrides and update boundaries

`package.json` overrides `prettier` to `3.6.2`, `undici` to `^7.18.2`, and `yaml` to `^2.8.3`. Their top-level lock entries resolve to `3.6.2`, `7.26.0`, and `2.9.0` respectively. Undici and YAML are not extra direct dependencies.

Keep `package-lock.json` alongside dependency changes. Review Astro adapter compatibility, generated search snapshots and browser behavior rather than inferring compatibility from ranges alone. [Configuration](configuration.md) lists Node requirements and scripts; [testing](../how-to-contribute/testing.md) describes verification.

## Browser services outside npm

| Service | Source and boundary |
| --- | --- |
| Font Awesome CDN kit | Script loaded by `src/layouts/BaseLayout.astro`; external icon delivery, not a declared icon package |
| Google Fonts | Production fonts in `src/components/layout/HeadFonts.astro`; preview fonts in `src/layouts/V2RefinedLayout.astro`; stylesheet/font requests to Google hosts |
| Formspark | Browser contact-form POST in `src/pages/support.astro` and `src/pages/pt/support.astro` |
| Cloudflare Turnstile | External challenge script/widget on those support pages |

Store, Discord and community links are outbound destinations rather than npm dependencies or website backend modules. Legal descriptions of Sentry/PostHog concern the separate installed apps, not evidence of website instrumentation. See [security](../security.md) before changing external calls.
