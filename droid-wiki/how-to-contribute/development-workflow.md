# Development workflow

Use a short branch-to-review cycle with an explicit scope and recorded validation. The repository is a static Astro site; local development does not need a separate backend.

## Preparation

Read `AGENTS.md`, `CONTEXT.md`, and the relevant source before editing. Establish the requested outcome and the Linear issue when one is supplied. External tracker changes require explicit confirmation under `docs/agents/issue-tracker.md`.

Check the working tree before starting a branch so existing work stays intact. Do not discard unrelated changes. Keep the branch focused on one reviewable outcome rather than combining copy, styling, dependency upgrades, and architectural changes.

Use Node 22. `.nvmrc` pins `22.22.3`, while `package.json` accepts `>=22.22.3 <23`. `docs/development.md` still says Node 20 and is not the current version authority. Install with `npm install` for a normal development checkout and retain `package-lock.json`.

## Local loop

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro development server |
| `npm run test:watch` | Rerun unit tests while editing |
| `npm test` | Run the complete Vitest suite once |
| `npm run check` | Run Astro type and configuration diagnostics |
| `npm run doctor` | Scan Astro rules with telemetry disabled |
| `npm run build` | Generate production output and search indexes |
| `npm run preview` | Serve the existing production build locally |

Record the required wrongness check before implementation. Prefer small edits and stable browser hooks. Compare affected English and Portuguese routes; shared code can affect both even when the original report names one.

Development mode is not production search validation. The site-wide overlay loads indexes produced at build completion, so use a fresh build and preview for that flow. The Resources page's metadata filter and Blog category buttons do not depend on those indexes.

## Validation and review

`AGENTS.md` requires `npx astro check && npm run build` before a PR, with no newly introduced errors or warnings. Add the unit suite and affected manual checks from [Testing](testing.md). Report actual outcomes and blockers rather than describing commands as passed when they were not run.

Before an authorized commit, review the diff and staged files. Follow Conventional Commits such as `fix:`, `docs:`, or `refactor:`. Do not push, open a PR, or deploy merely because local work is complete.

When a PR is requested, the repository title format is `[astro] <concise summary>`. Its body must include what changed and why, files touched, linked issues, desktop and mobile screenshots, Lighthouse scores, `node -v`, an `npx astro check` output summary, and rollback notes. If evidence is unavailable or not applicable, explain that directly.

Factory review depends on repository variables, actor permissions, and same-repository PR checks. It is advisory, not proof of correctness or a replacement for manual QA. [Tooling](tooling.md) describes the exact automation boundaries.

## Source map

| Source | Authority |
| --- | --- |
| `AGENTS.md` | Validation, commit and PR requirements |
| `package.json` | Runnable scripts and Node engine range |
| `.nvmrc` | Pinned Node version |
| `docs/development.md` | Older development checklist with stale Node guidance |
| `.github/workflows/factory-review.yml` | Conditional advisory review |
