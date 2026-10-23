# Cleanup opportunities

The clearest maintenance opportunities are contradictory documentation and behavior that has separate implementations. These are bounded follow-up candidates, not claims that code is unused, dependencies are outdated, or the website is vulnerable.

## Correct documented setup first

| Evidence | Small follow-up |
| --- | --- |
| `docs/development.md` requires Node 20.x, while `package.json` requires `>=22.22.3 <23` and `.nvmrc` selects `22.22.3` | Align the development requirements with the current engine constraint. |
| `README.md` shows flat Header, Hero and Billboard component paths | Update the tree to the current layout/home grouping. |
| `AGENTS.md` says there is no formal test runner, while its later cloud instructions mention Vitest | Reconcile the older testing paragraph with the actual suite. |

The current component entry points include `src/components/layout/Header.astro`, `src/components/layout/Footer.astro`, `src/components/home/Hero.astro` and `src/components/home/Billboard.astro`. Updating the README tree is a documentation correction, not a reason to move those components.

`package.json` defines both Vitest run and watch scripts. `vitest.config.ts` includes TypeScript tests under the source tree, and the four current modules are `src/lib/carousel.test.ts`, `src/lib/format-date.test.ts`, `src/i18n/ui.test.ts` and `src/i18n/utils.test.ts`. Preserve the manual checks in `AGENTS.md`; unit tests do not replace navigation, responsive layout or accessibility checks. See [testing](how-to-contribute/testing.md).

## Keep support changes paired

`src/pages/support.astro` and `src/pages/pt/support.astro` each contain FAQ markup, tab state and the external contact lifecycle. Duplication means a behavior fix in one page does not automatically reach the other. Their comments about unconfigured environment-based development forms also conflict with the embedded public configuration.

A small first change would clarify those comments and document paired verification. If later extracting shared behavior, preserve translated messages, initial hash selection, Turnstile state, button restoration and success/error handling. Establish isolated network tests before exercising submission; the current action makes a real POST. See [support](features/support.md) and [security](security.md).

## Treat preview promotion as verification work

`src/components/v2/refined/V2RefinedInteractions.astro` owns independent hero and billboard timers at 4.5 and 5.5 seconds. Unlike `src/lib/carousel.ts`, it does not implement the shared reduced-motion or hover/focus pause policy. Production consumers such as `src/components/home/Billboard.astro` configure the shared utility instead.

This is a concrete behavior difference, not proof that a shared implementation can be substituted without design decisions. A follow-up should compare keyboard controls, pause expectations and reduced-motion behavior before reuse. The preview message listener also lacks origin/source checks; establish the intended editor-host boundary before promotion rather than assuming noindex makes it private.

The same preview interaction file injects rating, community and install figures. Their presence does not verify the claims. Confirm approved sources before reusing that marquee in production. See [redesign preview](systems/redesign-preview.md).

## Preserve interaction boundaries

`src/components/layout/Header.astro` combines scroll state, hero observation, download-menu keyboard behavior and mobile focus trapping. This is a specific review hotspot, not evidence of a defect. If changing it, verify Escape, outside clicks, focus restoration, mobile resize cleanup and body scroll state before considering extraction.

Keep follow-ups incremental and use the required pre-mortem in `AGENTS.md`. Link changes to the [contribution workflow](how-to-contribute/development-workflow.md); use [tooling](how-to-contribute/tooling.md) for automation details.

## Key sources and limits

The setup table, named test modules, paired support routes, header and carousel files above are the evidence for these suggestions. No application fixes, build, test run, dependency audit or dead-code analysis was performed for this page.
