import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import oramaSearch from "./src/integrations/orama-search.mjs";

export default defineConfig({
  site: 'https://jasonholtdigital.com',
  compressHTML: true,

  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const redirectOrErrorPaths = new Set([
          '/404/',
          '/contact/',
          '/pt/404/',
          '/pt/contact/',
        ]);
        return (
          !pathname.startsWith('/v2/') &&
          !pathname.startsWith('/preview/') &&
          !pathname.startsWith('/pt/preview/') &&
          !redirectOrErrorPaths.has(pathname)
        );
      },
    }),
    oramaSearch({
      resources: {
        pathMatcher: /^\/resources\/.+/,
        contentSelectors: ["main"],
      },
      blog: {
        pathMatcher: /^\/blog\/(?!category|index).+/,
        contentSelectors: ["main"],
      },
      resources_pt: {
        pathMatcher: /^\/pt\/resources\/.+/,
        contentSelectors: ["main"],
      },
      blog_pt: {
        pathMatcher: /^\/pt\/blog\/(?!index).+/,
        contentSelectors: ["main"],
      },
    }),
  ],

  // Downloaded from Google Fonts at build time and served from /_astro/ with
  // the other hashed assets. latin-ext covers Portuguese. Generated metric
  // fallbacks are off so characters the fonts lack (such as →) render in the
  // same system font as before.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Epilogue",
      cssVariable: "--font-display",
      weights: [700, 800, 900],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Inter", "Arial", "sans-serif"],
      optimizedFallbacks: false,
    },
    {
      provider: fontProviders.google(),
      name: "Plus Jakarta Sans",
      cssVariable: "--font-body",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Inter", "Arial", "sans-serif"],
      optimizedFallbacks: false,
    },
    {
      provider: fontProviders.google(),
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      weights: [600, 700],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["Georgia", "serif"],
      optimizedFallbacks: false,
      options: { experimental: { variableAxis: { opsz: [["9", "144"]] } } },
    },
    {
      // A separate family because the upright faces stop at 600 and 700: the
      // ledger lines ask for 400 and must keep rendering at 600.
      provider: fontProviders.google(),
      name: "Fraunces",
      cssVariable: "--font-fraunces-italic",
      weights: [500],
      styles: ["italic"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["Georgia", "serif"],
      optimizedFallbacks: false,
      options: { experimental: { variableAxis: { opsz: [["9", "144"]] } } },
    },
    {
      provider: fontProviders.google(),
      name: "IBM Plex Sans",
      cssVariable: "--font-plex",
      weights: [400, 500, 600],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["system-ui", "sans-serif"],
      optimizedFallbacks: false,
    },
  ],

  redirects: {
    '/privacy-policy': '/privacy',
    '/contact': '/support#contact-panel',
    '/pt/contact': '/pt/support#contact-panel',
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        mode: "compile"
      }
    }
  },

  adapter: cloudflare({
    imageService: 'compile',
  }),
});
