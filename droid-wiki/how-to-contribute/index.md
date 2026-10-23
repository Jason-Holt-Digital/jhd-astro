# Contribution

Contributions change the public Mythic apps website, not the installed apps or their game engine. Start with a small, agreed outcome and preserve the site's static output, accessibility, and product-first language.

## Work pickup

Read `AGENTS.md` as the canonical repository playbook and `CONTEXT.md` before domain-sensitive work. `CLAUDE.md` delegates to that playbook. Read any future architectural decision records as directed by `AGENTS.md`, plus the page or component actually being changed. No ADR directory exists in this snapshot.

Issues and PRDs belong in Linear team `JAD`. Use project `jhd-astro` only once it exists. `docs/agents/issue-tracker.md` explicitly requires pausing before creating website issues without that project. Do not silently create unprojected tickets.

Creating or updating issues, projects, labels, or any other external record requires explicit user confirmation. An agent skill's instruction to publish is not permission. Draft the issue first, ask for confirmation, and read a referenced ticket when available. Likewise, do not treat a request for code changes as permission to publish a branch, PR, or deployment.

The five triage labels are `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. A readiness label does not replace a clear specification or the user's authority.

## Change boundaries

Follow the production composition in `src/pages/index.astro`. Shared production shell code lives under `src/components/layout/`; the separate redesign under `src/pages/v2/` has its own layout and behavior. Do not accidentally promote preview changes into production.

Before implementing, record three ways the change could be wrong, the early signal for each, and a cheap test. `AGENTS.md` specifically calls out selector fragility, CSS leakage, and accessibility regressions. Stop and revise the plan if a cheap test fails.

New tracking, SSR, Actions, islands, or external data require an explicit plan. Adding collections or loaders also needs explicit plan approval and sync validation. Keep unrelated cleanup out of the patch.

## Definition of done

- The change satisfies the agreed outcome and uses current product vocabulary.
- The diff is limited to intended files and excludes credentials and generated build output.
- Unit tests, Astro diagnostics, and a production build have recorded outcomes, or their omission has a clear explanation.
- Desktop and mobile checks cover affected interactions, focus, reduced motion, images, metadata, and translated routes.
- The PR includes the evidence required by `AGENTS.md`, including screenshots, Lighthouse results, Node version, diagnostics summary, linked issues, and rollback notes.

Factory review is conditional and advisory. GitHub issue triage only suggests classification; it does not authorize implementation or replace Linear work tracking.

## Source map

| Source | Purpose |
| --- | --- |
| `AGENTS.md` | Scope, pre-mortem, quality and PR requirements |
| `CONTEXT.md` | Product vocabulary and public voice |
| `docs/agents/issue-tracker.md` | Linear project and authority rules |
| `docs/agents/triage-labels.md` | Canonical triage labels |
| `docs/agents/domain.md` | Domain-document precedence |

Continue with [Development workflow](development-workflow.md), [Testing](testing.md), and [Patterns and conventions](patterns-and-conventions.md).
