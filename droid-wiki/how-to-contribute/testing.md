# Testing

The current suite has four test files using Vitest 4. It checks small TypeScript utilities, not rendered Astro pages or full browser journeys.

## Automated coverage

`vitest.config.ts` includes `src/**/*.test.ts`. It does not configure a browser environment, DOM emulator, coverage threshold, or end-to-end runner.

| Test source | Current assertions |
| --- | --- |
| `src/lib/carousel.test.ts` | Initial index, navigation and wrapping, explicit pause/resume, timer setup, destroy cleanup, and reduced-motion timer suppression |
| `src/lib/format-date.test.ts` | Default English formatting, a Portuguese result sanity check, and another month |
| `src/i18n/utils.test.ts` | Locale detection, unknown-prefix default, translation lookup, and locale-prefix removal |
| `src/i18n/ui.test.ts` | English/Portuguese availability, English default, dictionary key parity, and nonempty values |

The carousel tests replace `window` before each test using `vi.stubGlobal`. Its `matchMedia`, `setInterval`, and `clearInterval` are spies. The fake interval returns an identifier; time is not advanced and the callback is not exercised by a simulated clock. These are hand-built browser/timer stubs, not `vi.useFakeTimers()` or a real browser.

The tests do not supply carousel pause-target or keyboard DOM elements. They therefore do not verify hover/focus listeners, arrow-key events, rendered slide transitions, or removal of those listeners. Production consumers still need browser checks. The separate preview carousel scripts are not covered just because `src/lib/carousel.ts` has tests.

The translation test named for missing-key fallback does not remove a key; it checks an existing translation. Dictionary parity provides useful consistency coverage but does not prove translation quality. `src/lib/format-date.ts` uses `Intl.DateTimeFormat` without an explicit time zone, so investigate the environment's time zone if a midnight-UTC date assertion shifts a day.

## Commands

Run these from the repository root in an installed development checkout:

```sh
npm test
npm run test:watch
npx astro check && npm run build
npm run doctor
```

The first two are alternatives for one-shot and watch use. Astro checking and building are separate from unit testing. Doctor scans performance, accessibility, security, and best-practice rules; it does not replace browser QA.

## Manual gaps

Check desktop and narrow mobile layouts, download-menu open/close, Escape, outside clicks, mobile focus containment and restoration, and visible keyboard focus. Verify carousel controls, pause behavior, reduced motion, image loading, layout stability, and the footer year produced by the build.

For content changes, open detail pages, downloads, alternate-language links, canonical/social metadata, and sample badges where relevant. Test Resources metadata filtering and Blog category filtering independently from the site-wide Orama dialog. Validate the latter against a fresh production build.

Support forms can make real external submissions. Inspect tabs, validation, and challenge/button state without sending real messages or personal data. Any submission test needs explicit authorization and controlled data.

`AGENTS.md` asks for local homepage Lighthouse scores of at least 90 for Performance, Best Practices, and SEO, plus accessibility spot-checks. Its older “no formal test runner” paragraph is stale relative to `package.json` and these four files.

No tests, builds, Doctor scans, or browser checks were run for this documentation. Use [Debugging](debugging.md) to investigate failures and [Development workflow](development-workflow.md) to record review evidence.
