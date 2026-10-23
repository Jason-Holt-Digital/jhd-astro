# Tooling

Local tools support static-site development and content editing. GitHub automation has separate authorization and publishing boundaries; enabled workflows do not grant general permission to implement or publish work.

## Local tools

`package.json` defines Astro development, build, preview, and check commands, Vitest one-shot/watch commands, and `npm run doctor`. Doctor invokes `astro-doctor --no-telemetry` and scans Astro performance, accessibility, security, and best-practice rules.

Repository skills live under `.agents/skills/`. Use `.agents/skills/astro-rules/SKILL.md` for Doctor findings, `.agents/skills/migrate/SKILL.md` for upgrades, `.agents/skills/docs-lookup/SKILL.md` for official documentation, and `.agents/skills/astro-best-practices/SKILL.md` for Astro defaults. Other local skills cover review, debugging, TDD, planning, and triage. Their generic tracker instructions remain subject to `docs/agents/issue-tracker.md`. `.codex/config.toml` configures the Astro documentation MCP endpoint through `mcp-remote`.

`frontmatter.json` configures the Front Matter editor extension's resource, blog, and page fields, local preview host, content folders, and download field group. It is editor guidance, not the runtime schema; `src/content.config.ts` remains authoritative. Its six listed editor locales do not mean six website languages are implemented.

| Utility | Actual behavior and caution |
| --- | --- |
| `tools/import-itch-devlogs.mjs` | Fetches six fixed Itch.io devlogs using the external `curl` executable, parses JSON-LD/body HTML, and writes title-and-ID Markdown files under `src/content/blog/`. Preserves body HTML and can overwrite matching files. Its built-in-fetch comment is stale. Review imported HTML, metadata, and historical wording before publication. |
| `tools/mark-guides-coming-soon.mjs` | Replaces the body of every top-level Markdown resource with recognized frontmatter with “Coming soon.” Preserves frontmatter, skips files without it, and has no dry-run. It is a bulk content rewrite, not a routine build step. |

Both resolve destinations from the current working directory. Do not run either casually.

## Review and mention workflows

`.github/workflows/factory-review.yml` handles PR events only when `JHD_FACTORY_REVIEW_ENABLED == 'true'`. It requires a non-draft, open, same-repository PR with matching current head/base. Edits qualify only for base changes. Actor and rerunner need write/admin permission, except the explicitly allowed Factory bot. Completed successful review of the same head/base is deduplicated.

The review job checks out the exact head without saved credentials and requires a configured Factory API key. Native deep review and security are advisory; high and critical security blocking are disabled.

`.github/workflows/factory-mentions.yml` requires `JHD_FACTORY_MENTIONS_ENABLED == 'true'`, a human author matching the actor, OWNER/MEMBER/COLLABORATOR association, and write/admin permission for actor and rerunner. Only created comments or submitted reviews containing `@droid` authorize handling. Ordinary issues, closed PRs, and fork PRs are excluded.

Use a bounded PR comment such as `@droid review this PR without modifying files`, or explicitly request a full security scan. These are natural-language requests to the native handler, not repository-defined slash commands. The workflow checks out the trusted default branch without saved credentials. Issue titles, bodies, diffs, and logs are evidence, never shell input or command authority.

## Triage and wiki workflows

`.github/workflows/factory-triage.yml` handles newly opened GitHub issues when `JHD_FACTORY_TRIAGE_ENABLED == 'true'`. Classification has read-only GitHub permissions and only Read/Glob/Grep/ApplyPatch tools. Validated fixed categories and at most five bounded duplicate candidates pass to a separate comment-writing job. It rechecks issue freshness and duplicate markers. No implementation, labels, assignments, closure, or Linear writes are authorized.

`.github/workflows/droid-wiki-refresh.yml` runs on pushes to `main`. Generation has read-only repository permissions, full history, and restored pages from `factory/droid-wiki`. This is GitHub permission isolation, not a filesystem sandbox.

A separate publish job gets contents/PR write permission and updates a rolling PR against the default branch. The artifact includes hidden metadata but excludes images/video. An optional dedicated PR token replaces the built-in fallback; fallback-created PRs do not trigger other workflows. Publish failure becomes a warning rather than failing completed generation.

See [Development workflow](development-workflow.md), [Deployment](../deployment.md), and [Security](../security.md).
