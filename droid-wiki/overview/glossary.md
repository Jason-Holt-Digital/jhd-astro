# Glossary

These terms connect the website's product copy to its implementation. `CONTEXT.md` is the canonical vocabulary source. The website documents Mythic mechanics but does not execute them.

## Product language

| Term | Meaning here |
| --- | --- |
| Official Mythic GME Apps Hub | The public website for the licensed apps, guides, support, and maker story |
| Player | A person using Mythic during play; preferred over generic marketing labels |
| Mythic GME Mobile | The mobile app for phones and tablets |
| Mythic GME Digital | The desktop app for Windows, macOS, and Linux |
| Expanded Features | The approved name for the app's additional unlocked features; avoid outdated Premium wording |
| Flow of Play | Keeping app operations close to the story rather than making the tool the focus |
| Maker Trust Story | The About page's explanation of who builds the apps and how community feedback shapes the work |
| Journal | The app's saved adventure record, broader than a single Adventure Log |
| Adventure Log | The chronological play record within a Journal |
| Custom Tables | Player-created or imported rollable app tables |
| Fate Question | A Mythic question answered through its oracle mechanics |

The app-facing meanings come from `CONTEXT.md`; guide content under `src/content/resources/` explains their use.

## Implementation language

| Term | Meaning and source |
| --- | --- |
| Collection | A validated Markdown dataset declared in `src/content.config.ts` |
| Entry ID | The identifier used to build a collection detail route, as in `src/pages/blog/[slug].astro` |
| `-pt` counterpart | A Portuguese content entry whose ID carries the suffix; detail pages verify the entry exists |
| `alternatePath` | An explicit translated URL passed to `src/layouts/BaseLayout.astro` |
| Orama index | A serialized search database written by `src/integrations/orama-search.mjs` |
| Site shell | Production layout, navigation, footer, metadata, and shared styles |
| Hero dock | The homepage header mode selected by `heroDockHeader` in `src/layouts/BaseLayout.astro` |
| Billboard | Screenshot carousel inside `src/components/home/AppWorkspaceShowcase.astro` |
| `/v2/` | The separately styled redesign preview, not a second shipped app |
| Static output | HTML and assets produced in `dist/` for deployment |

See [Architecture](architecture.md) for the build flow and [Data models](../reference/data-models.md) for exact schema fields.
