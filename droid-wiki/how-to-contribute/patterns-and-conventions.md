# Patterns and conventions

`AGENTS.md` is the repository's coding playbook. `CONTEXT.md` controls durable product vocabulary and public voice. Use the current source and configuration when older documentation disagrees with them.

## Static by default

Keep pages prerendered and browser JavaScript small. Do not add SSR, Actions, islands, external data, or trackers without an approved plan. `src/pages/index.astro` is the reference for production page composition.

Use lowercase page filenames and PascalCase component filenames. Keep two-space indentation and semantic HTML. Current component paths are grouped under directories such as `src/components/layout/` and `src/components/home/`, even where older instructions mention flattened paths.

## Layout and metadata

Production pages use `src/layouts/BaseLayout.astro`. Pass explicit title, description, canonical path, and translated alternate when one exists. The layout owns default social images and language tags.

For translated detail routes, follow `src/pages/resources/[slug].astro` and `src/pages/blog/[slug].astro`: look up the counterpart collection entry before publishing an alternate. Do not derive a URL solely by adding `/pt/`.

`src/layouts/V2RefinedLayout.astro` is a preview-specific layout. Do not replace production styling or metadata with preview defaults.

## Styles and assets

`public/global.css` declares the cascade order `tokens`, `base`, `utilities`, `components`, `overrides`. Add narrowly scoped rules to the matching file under `public/styles/components/`. The `.container` convention handles width and gutters; section classes handle vertical spacing.

Use local images from `src/assets/` through `astro:assets`. Static downloads and unprocessed browser assets belong in `public/`. Keep alt text meaningful and load non-critical images lazily. Reserve high fetch priority for measured LCP candidates.

`src/components/layout/HeadFonts.astro` owns production font links. Do not add Google Fonts imports to the global CSS entrypoint.

## Browser behavior

Prefer stable `data-*` hooks, null guards, and component-local behavior. `src/components/layout/Header.astro` demonstrates the existing navigation implementation; `src/lib/carousel.ts` separates carousel state from consumer DOM updates.

Preserve keyboard access, visible focus, reduced-motion behavior, and expanded-state announcements. Keep `rel="noopener noreferrer"` on external links opened in new tabs. Test desktop and narrow mobile layouts.

## Content and errors

Collection fields are validated in `src/content.config.ts`. Do not introduce a loader or collection casually; `AGENTS.md` requires an explicit plan and sync validation for that scope.

Detail routes throw on invalid or missing entries during generation, as in `src/pages/blog/[slug].astro`. Browser form failures are shown locally in `src/pages/support.astro`; search-index generation logs warnings in `src/integrations/orama-search.mjs`. There is no central backend exception service.

Use current product names, plain sentences, and concrete player outcomes from `CONTEXT.md`. Historical release notes should remain historical records, not become claims about present app behavior.

## Coding principles

The coding principles in `AGENTS.md` apply to implementation and tests:

- Validate unknown input once at its owning boundary, then pass typed values inward. Do not repeat checks already guaranteed by a schema, constructor, or internal type.
- Keep single-use logic at its call site unless a helper is reused, hides a complex boundary, or has a clear independent name that improves the caller.
- Before adding complexity for an unlikely race or security edge case, explain the concrete failure, its likelihood, and the complexity cost, then get approval. Do not silently expand scope for theoretical robustness.
- Test the actual implementation rather than duplicating its logic in tests.
- Comment on non-obvious constraints and surprising behavior, not obvious assignments or control flow.

## Before implementation

Record three ways a change could be wrong, an early signal for each, and a cheap test. The mandatory examples in `AGENTS.md` cover selector fragility, CSS leakage, and accessibility. If a cheap test fails, stop and revise the plan rather than expanding the change.

See [Development workflow](development-workflow.md) for the review cycle and [Testing](testing.md) for validation.
