# Security

The website is a static public content application, but its browser scripts cross external-service boundaries. This page records source-visible boundaries and review cautions, not a penetration test or an assurance about deployed security settings.

## Browser and provider boundaries

`src/layouts/BaseLayout.astro` loads the Font Awesome kit as an external script. `src/components/layout/HeadFonts.astro` loads Google Fonts styles and preconnects to Google font hosts. The preview layout uses Google Fonts and Font Awesome CSS from cdnjs instead. These dependencies can make browser requests independently of navigation to a store or community link. External JavaScript also executes within the page's browser context.

`src/pages/support.astro` and `src/pages/pt/support.astro` load Cloudflare Turnstile and send contact data directly to Formspark. The form collects name, email, optional phone and message. A successful Turnstile callback sets a hidden token and enables Submit; the handler checks token presence and POSTs `FormData` to the external action.

The embedded Formspark identifier and Turnstile site key are public configuration, not server credentials. Old development comments mention environment variables, but they do not make the current form a local mock. **Do not submit the form during documentation checks.** Future behavioral verification should isolate network requests explicitly.

Browser validation, length limits and a token-presence check do not prove provider-side validation or Turnstile enforcement. Provider dashboard settings were not inspected. See [support](features/support.md) for success, failure and reset behavior.

## Website versus installed apps

`src/components/legal/PrivacyArticle.astro` describes the separate installed Mythic apps. It discusses app activity through PostHog, error reporting through Sentry and PostHog, feature rollouts, and optional usage sharing/replay. Those statements are legal content, not website instrumentation.

The source survey found no website Sentry/PostHog runtime instrumentation. Do not infer that the website sends app events, or that it makes no external calls, from that finding. Keep policy edits aligned with `CONTEXT.md` and verify installed-app behavior in its own repository before changing app-specific claims.

## Preview messaging boundary

`src/components/v2/refined/V2RefinedInteractions.astro` registers a message listener when the tweaks panel exists. It accepts edit-mode activation/deactivation messages without checking `event.origin` or `event.source`. Outgoing availability and tweak messages use wildcard targets.

The observed incoming handlers show or hide the panel; the source does not establish arbitrary script execution or credential access. Still, an edit-mode message is not authenticated merely because its type matches. Review the intended host/source contract before promoting this tooling to production. Preview `noindex` and sitemap exclusion are discovery controls, not authorization. See [redesign preview](systems/redesign-preview.md).

## Automation boundary

The four workflows are documented in [tooling](how-to-contribute/tooling.md); consult that page for all triggers and job permissions rather than treating automation as a deployment or security guarantee.

For automatic review, `.github/workflows/factory-review.yml` starts with empty workflow permissions. Authorization requires `JHD_FACTORY_REVIEW_ENABLED == 'true'`, a non-draft same-repository PR, a human sender or `factory-droid[bot]`, and base-changing edits when the event is `edited`. It rechecks open state, head/base and actor/rerunner `admin` or `write` permission, except the allowed Factory bot, and skips already-completed matching reviews. Authorization has `actions: read` and `pull-requests: read`.

The review job requires the API key, checks out the reviewed head without persisted credentials, and grants `contents: read`, `pull-requests: write`, `issues: write`, `id-token: write` and `actions: read`. Native deep review/security is advisory; critical/high blocking flags are false. A successful workflow is not proof of an exhaustive audit.

## Key sources

| Source | Responsibility |
| --- | --- |
| `src/layouts/BaseLayout.astro`, `src/layouts/V2RefinedLayout.astro` | External browser resources |
| `src/pages/support.astro`, `src/pages/pt/support.astro` | Real external POST |
| `src/components/legal/PrivacyArticle.astro` | Installed-app policy |
| `src/components/v2/refined/V2RefinedInteractions.astro` | Preview messaging |
| `.github/workflows/factory-review.yml` | Advisory review gates |

No credentials were read, forms submitted or security probes executed.
