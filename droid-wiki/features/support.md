# Support

Active contributors: Jason

Support combines FAQ answers, community and email paths, and a contact form. The form sends real messages to Formspark; it is not a local demo or a repository-owned backend.

## Navigation and FAQ

`src/pages/support.astro` contains Support & FAQ and Contact tab panels. Its browser script switches active classes and `aria-selected` values by button index. On initialization, `#contact-panel` opens Contact; other hashes keep the FAQ panel selected. `src/pages/contact.astro` redirects to `/support#contact-panel`, with an equivalent localized redirect in `src/pages/pt/contact.astro`.

The tab implementation handles clicks and initial hash selection. It does not implement arrow-key tab navigation, roving tabindex, or a hash-change listener. Do not describe it as a complete keyboard-tabs pattern.

FAQ section headers and individual questions use `aria-controls` and `aria-expanded`. Collapsing a section closes its nested answers. Section headers also have explicit Enter/Space handling. The content covers platforms, purchases, app tools, accessibility, localization, and troubleshooting.

Discord is the community path; email supports detailed or private issues. Contact cards separate app support, community discussion, and business contact. These are links and content choices, not an internal ticket-routing service.

## Contact lifecycle

The form requires name, email, and message; phone is optional. Name, email, and phone have 256-character limits; message has a 5,000-character limit. Browser input validation and a token-presence check are client-side safeguards, not proof of server-side validation.

1. The page loads Cloudflare's Turnstile script. Submit starts disabled.
2. The global success callback enables Submit and creates or updates the hidden `cf-turnstile-response` input.
3. The submit handler hides prior messages, checks for a token, saves the button's child nodes, and shows a sending state.
4. It POSTs `FormData` to the form's external Formspark action.
5. An OK response shows success, resets the form, and resets Turnstile. A non-OK response or exception shows the email fallback.
6. The finally block restores the button and disables it until Turnstile completes again.

Turnstile resets only on success in this code. Failure/retry behavior needs care when changing this lifecycle. Both language pages contain an old comment and guard about environment-based development configuration, but their actual actions use embedded public identifiers. Do not assume local development suppresses network submission.

**Never submit the live form during documentation checks.** Use source inspection or explicitly isolated network mocks for future behavioral tests. See [security](../security.md) for external trust boundaries.

## Legal content and translations

English privacy and terms routes render reusable `src/components/legal/PrivacyArticle.astro` and `src/components/legal/TermsArticle.astro`. Portuguese legal pages contain their own adapted text rather than importing those English articles. Support scripts are also duplicated in the translated page, so English edits do not automatically propagate.

Privacy text describes the separate installed apps' local-first storage and telemetry. Its references to PostHog and Sentry do not establish website runtime instrumentation. Coordinate content changes with [localization](localization.md) and keep policy claims scoped.

## Modification entry points

### Key source files

| Source | Responsibility |
| --- | --- |
| `src/pages/support.astro` | English FAQ, tabs, form and lifecycle |
| `src/pages/pt/support.astro` | Portuguese counterpart |
| `src/pages/contact.astro` | Legacy contact redirect |
| `src/pages/pt/contact.astro` | Portuguese redirect |
| `src/components/legal/PrivacyArticle.astro` | Reusable English policy body |
| `src/components/legal/TermsArticle.astro` | Reusable English terms body |
| `src/pages/pt/privacy.astro` | Adapted Portuguese policy |
| `src/pages/pt/terms.astro` | Adapted Portuguese terms |

## Scope snapshot

The English/Portuguese support, contact, privacy, and terms routes plus `src/components/legal/` contain **10 tracked files and zero test files** on `origin/main`, a **0:10** test-to-other-file ratio. Scoped history has **one unique human committer**, excluding bots and GitHub's automated committer. No form submission or behavioral test was run for this documentation.
