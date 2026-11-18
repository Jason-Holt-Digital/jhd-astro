---
name: qa-web
description: >
  QA flows for the jhd-astro static website (Astro 7, Cloudflare adapter, EN and PT).
  Covers pages, navigation, Orama search, the support page and contact form (render and
  validation only), the language switch, redirects, the 404 page, /v2 previews, and the
  phone-width mobile nav. Driven through droid-control against a local production build.
---

# QA: web (jhd-astro)

Use the `droid-control` skill for every browser interaction. This file says what to test and what counts as success; droid-control owns how to drive the browser, capture evidence, and verify it. Use its web (agent-browser) route plus Capture and Verify. Load Compose only when both `video_evidence` and `droid_control.compose` are true in `.factory/skills/qa/config.yaml`.

Plain HTTP checks (status codes, redirect `Location`, JSON assets, RSS) may use `curl` directly.

## Testing Target

There are no per-PR preview deployments. Test a production build of the checked-out branch, served locally.

- **In CI:** the workflow has already built the site and started the server. Use `QA_BASE_URL` (`http://127.0.0.1:4321`). Do not rebuild or start another server.
- **Locally (no `QA_BASE_URL`):**
  1. Use Node 22 from `.nvmrc` (`fnm use` or `nvm use`). `package.json` requires `>=22.22.3 <23`.
  2. `npm ci` (no token needed; see Known Failure Modes).
  3. `npm run build` (about 15 seconds on a Mac mini; it downloads Google Fonts, optimizes images with sharp, and writes `dist/client/` plus Orama indexes in `dist/client/assets/`).
  4. Start `npm run preview -- --host 127.0.0.1 --port 4321` in the background. This runs the Cloudflare adapter's workerd preview, which applies `dist/client/_redirects` and serves the 404 page. It needs no Cloudflare login.
  5. Poll `http://127.0.0.1:4321/` until it returns 200 (it is usually ready within a few seconds), then use it as the base URL.
  6. Stop the server when finished.
- **Never fall back to `https://jasonholtdigital.com`** or any other remote URL for PR QA. If the local build or server fails, report every web flow as BLOCKED with the failing command's error.

Do not serve `dist/` with a generic static file server: it ignores `_redirects`, so the redirect flow would fail falsely.

## Personas

- `visitor`: anonymous, desktop viewport about 1440x900.
- `mobile_visitor`: anonymous, phone viewport 390x844.

There is no login. Use `mobile_visitor` in addition to `visitor` when the diff touches layout, CSS (`public/global.css`, `public/styles/**`, component `<style>` blocks), navigation, or a component with responsive rules.

## Site facts

- Routes use trailing slashes (`/about/`). A request without the slash gets a 307 to the slashed URL; follow it.
- English is the default locale without a prefix; Portuguese mirrors live under `/pt/`. PT has no blog category pages and no TomeKeeper pages.
- `BaseLayout` renders the header (with the search trigger) and footer (with the language switch) on every page.
- The Font Awesome kit loads from `kit.fontawesome.com` at runtime. Missing icons alone are not a FAIL unless the diff touched icons.
- `/v2/*` is a redesign preview, excluded from the sitemap.

## Flow menu

Pick only the flows whose source paths match the diff, plus adjacent integration flows. Each flow lists the paths that select it.

### F1. Home page (EN and PT)

Paths: `src/pages/index.astro`, `src/pages/pt/index.astro`, `src/components/home/**`, `src/components/media/**`, `src/i18n/**`

1. Open `/` and `/pt/`.
2. Success: one H1; hero CTAs "Learn More" goes to `/apps/` and "Get Resources" goes to `/resources/` (PT equivalents under `/pt/`); the app showcase/billboard carousel advances with its controls; the reviews rotator and partners strip render; no broken images (check `naturalWidth > 0` on visible `img` elements); no horizontal scroll (`document.documentElement.scrollWidth <= innerWidth`).
3. PT page text is Portuguese, and `<html lang>` is `pt` (or `pt-BR`) on `/pt/` and `en` on `/`.

### F2. Header and footer navigation

Paths: `src/components/layout/Header.astro`, `src/components/layout/Footer.astro`, `src/components/layout/UtilBar.astro`, `src/layouts/**`, `src/i18n/**`

1. On `/`, follow each primary nav link (Home, Apps, Resources, Blog) and confirm each lands on a 200 page with the expected H1.
2. Open the download menu (`aria-controls="downloadMenu"`); it opens with `aria-expanded="true"`, lists store links, and closes on a second click and on Escape.
3. Footer: links resolve (no 404); Contact (`/support#contact-panel`, or `/pt/support#contact-panel` on PT pages) opens the support page with the contact tab selected; external links that open a new tab keep `rel="noopener noreferrer"`; the footer year is the current year.
4. Repeat on one PT page and confirm links stay under `/pt/`.

### F3. Apps hub and product pages with store links

Paths: `src/pages/apps.astro`, `src/pages/mythic-gme.astro`, `src/pages/adventure-crafter.astro`, `src/pages/pt/{apps,mythic-gme,adventure-crafter}.astro`, `src/components/apps/**`, `src/components/pages/**`

1. Open `/apps/`, `/mythic-gme/`, `/adventure-crafter/` (and the `/pt/` versions when PT files changed).
2. Success: each page renders its H1 and app tiles; store links (App Store, Google Play, desktop downloads) have real `https://` hrefs and open in a new tab with `rel="noopener noreferrer"`. Do not follow store links beyond reading their href.
3. Videos and loop clips do not block rendering; posters show.

### F4. Resources index and help docs

Paths: `src/pages/resources/**`, `src/pages/pt/resources/**`, `src/content/resources/**`, `src/content.config.ts`

1. Open `/resources/` and open at least one changed article, or `getting-started-with-the-mythic-apps` when none changed.
2. If any schema doc changed (`categories-schema`, `custom-table-schema`, `formula-schema`, `journal-schema`), open it and check headings, tables, and code blocks render without raw Markdown.
3. Success: the article H1 matches its frontmatter title; in-page anchor links scroll to existing ids; the index links to the article.
4. Negative: `/resources/this-page-does-not-exist/` returns the 404 page.

### F5. Blog index, category, post, and RSS

Paths: `src/pages/blog/**`, `src/pages/pt/blog/**`, `src/content/blog/**`, `src/pages/rss.xml.ts`, `src/components/blog/**`

1. Open `/blog/`, one category page (`/blog/category/release-notes/`, `announcement`, `community`, or `guides`), and a changed post (or the newest post).
2. Success: posts list in date order; posts with `isSample` show a "Sample" badge; the category page lists only posts in that category; the post page renders, and its share bar links are well-formed.
3. `curl -s $BASE/rss.xml` returns 200 `application/xml` and includes a changed or new post's link.
4. PT: `/pt/blog/` and one PT post render in Portuguese.

### F6. Search overlay (Orama)

Paths: `src/components/search/**`, `src/integrations/**`, `astro.config.mjs`, and any change to `src/content/**` that adds or renames pages

1. `curl` `/assets/oramaDB_resources.json`, `oramaDB_blog.json`, `oramaDB_resources_pt.json`, `oramaDB_blog_pt.json`: each returns 200 JSON.
2. On `/`, open search with the header search button (`[data-search-trigger]`), then with Ctrl+K (or Cmd+K) and `/`. The `#search-dialog` opens with focus in `#search-input`.
3. Search for a term from a known article (for example "formula"). Resource and blog results appear in `#search-results`; ArrowDown moves the highlight; Enter or a click opens the result page.
4. Negative: search for `zzqxnotaword`. The empty state reads "No results for “zzqxnotaword”" (on `/pt/` it reads "Nenhum resultado para “zzqxnotaword”").
5. Escape closes the dialog and returns focus to the page.
6. Repeat a search on `/pt/` and confirm results point to `/pt/` pages.

### F7. Support page tabs and contact form (never submit)

Paths: `src/pages/support.astro`, `src/pages/pt/support.astro`, `src/pages/contact.astro`, `src/pages/pt/contact.astro`

1. Open `/support/`. The support tab (`#support-tab`) is selected and `#support-panel` shows; FAQ questions expand and collapse by click and by keyboard (Enter/Space).
2. Click the contact tab (`#contact-tab`): `#contact-panel` shows and `aria-selected` moves to it.
3. Open `/support/#contact-panel` directly: the contact tab opens automatically.
4. Form render: `#contact-form` posts to `https://submit-form.com/...`; name, email, and message are `required`; email has `type="email"`; the Turnstile container (`.cf-turnstile`) is present.
5. Negative: with the fields empty or with an invalid email such as `not-an-email`, the browser's validation reports the field invalid (`form.checkValidity()` is false), and `#submit-btn` stays disabled until Turnstile succeeds.
6. **Never complete Turnstile and never submit the form.** It sends real email through Formspark. Do not type real personal data.
7. Repeat steps 1-3 on `/pt/support/` when PT files changed.

### F8. Language switch EN and PT

Paths: `src/components/layout/LanguageFab.astro`, `src/i18n/**`, any `src/pages/pt/**`

1. On `/about/`, open the language menu (`aria-controls="lang-menu"`) and choose Portuguese. The browser lands on `/pt/about/`.
2. Switch back to English and land on `/about/`.
3. On an EN-only page (`/tomekeeper/` or a blog category page), choosing Portuguese goes to the PT home page `/pt/`, not a 404.

### F9. Legal pages

Paths: `src/pages/privacy.astro`, `src/pages/terms.astro`, `src/pages/pt/{privacy,terms}.astro`, `src/components/legal/**`

1. Open `/privacy/` and `/terms/` (and PT versions when changed). H1 and section headings render; the table of contents links resolve to existing ids.
2. `/privacy/#before-1-7` scrolls to the element with `id="before-1-7"`.

### F10. TomeKeeper pages

Paths: `src/pages/tomekeeper/**`, `src/components/legal/TomeKeeperPrivacyArticle.astro`

1. Open `/tomekeeper/`, `/tomekeeper/privacy/`, `/tomekeeper/support/`. Each returns 200 with its H1, and links between them work.

### F11. 404 page

Paths: `src/pages/404.astro`, `src/pages/pt/404.astro`, `wrangler.jsonc`

1. Open `/does-not-exist`. Status 404 and the page title starts with "404 — Page Not Found".
2. Links on the 404 page lead to working pages.

### F12. Redirects

Paths: `astro.config.mjs`, `src/pages/contact.astro`, `src/pages/pt/contact.astro`, `wrangler.jsonc`

Use `curl -s -o /dev/null -w '%{http_code} %{redirect_url}'`:

- `/privacy-policy` gives 301 to `/privacy`
- `/contact` and `/contact/` give 301 to `/support#contact-panel`
- `/pt/contact` gives 301 to `/pt/support#contact-panel`

Then open `/contact` in the browser and confirm the contact tab is open after the redirect.

### F13. /v2 redesign preview

Paths: `src/pages/v2/**`, `src/components/v2/**`, `public/styles/v2/**`, `public/styles/v2.css`

1. Open the changed `/v2/` pages (`/v2/`, `/v2/about/`, `/v2/blog/`, `/v2/resources/`, `/v2/support/`, `/v2/privacy/`, `/v2/terms/`).
2. Success: pages render with the v2 header and footer and no broken images; interactive pieces in the diff (tweaks panel, billboard, marquee) respond.
3. `/v2/` URLs do not appear in `/sitemap-0.xml`.

### F14. Mobile nav at phone width (`mobile_visitor`)

Paths: `src/components/layout/Header.astro`, `public/global.css`, `public/styles/**`, `src/layouts/**`

1. At 390x844 on `/`, the desktop nav is hidden and the toggle (`[data-mobile-toggle]`, `aria-controls="mobileNav"`) is visible.
2. Open it: the off-canvas panel (`[data-mobile-nav]`) slides in, the overlay (`[data-mobile-overlay]`) appears, `aria-expanded` is `true`, and the page behind does not scroll.
3. Close it with the close button (`[data-mobile-close]`), by clicking the overlay, and with Escape if supported. The panel leaves the screen fully and does not intercept taps.
4. Follow one link from the panel.
5. On every page touched by the diff, check for horizontal overflow at this width.

## Known Failure Modes

1. **Turnstile errors on 127.0.0.1.** The production site key may not allow localhost, so the widget can show an error and `#submit-btn` stays disabled. That is expected; verify render and validation only, and do not report it as FAIL.
2. **A generic static server breaks redirects.** Only `npm run preview` (workerd) applies `dist/client/_redirects`. If redirects fail, confirm which server is running before reporting FAIL.
3. **Trailing-slash 307s.** URLs without a trailing slash return 307. Follow redirects in curl (`-L`) except in F12.
4. **Third-party scripts in CI.** Font Awesome kit, Google-hosted assets, and Turnstile load from the internet. If one is slow or blocked, note it and judge only what the diff changed.
5. **Build needs network.** `npm run build` downloads Google Fonts. A build failure from a fonts fetch error is BLOCKED (environment), not FAIL.
6. **`.npmrc` scoped registries.** `.npmrc` points the `@fortawesome` and `@awesome.me` scopes at npm.fontawesome.com, but the project installs no packages from those scopes and every lockfile entry resolves from registry.npmjs.org, so `npm ci` needs no Font Awesome token. An install error mentioning npm.fontawesome.com means a dependency from those scopes was added; report BLOCKED and name the package.
7. **Port in use.** If 4321 is taken locally, start the preview on another port and use that base URL.
