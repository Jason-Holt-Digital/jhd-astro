// Slides for the homepage app showcase: one rotating set across the apps,
// each app on its own canvas inside the site's frame. Every line here is
// approved site copy: the Mythic GME lines are the web.billboard keys, the
// TomeKeeper lines come from its own page, and names, taglines and summaries
// come from lib/apps. The Mythic GME screens are placeholders until the light
// Mythic recapture lands; their alt text arrives from track B with it, so they
// are decorative until then.
import type { ImageMetadata } from "astro";
import { getApps, statusLabel, type AppEntry, type Lang } from "./apps";
import exceptionalYes from "../assets/mythic-gme/1.7.0/clips/exceptional-yes-poster.jpg";
import meaningRoll from "../assets/mythic-gme/1.7.0/clips/meaning-roll-v2-poster.jpg";
import listsRoll from "../assets/mythic-gme/1.7.0/clips/lists-roll-v2-poster.jpg";
import desktopThrow from "../assets/mythic-gme/1.7.0/clips/desktop-throw-poster.jpg";
import panelsEn from "../assets/mythic-gme/1.7.0/desktop/en/window-1.png";
import panelsPt from "../assets/mythic-gme/1.7.0/desktop/pt/window-1.png";
import tkHomeIpad from "../assets/apps/tomekeeper/home-ipad.jpg";
import tkHomeIphone from "../assets/apps/tomekeeper/home-iphone.jpg";
import tkTableIpad from "../assets/apps/tomekeeper/table-ipad.jpg";
import tkBookmarksIpad from "../assets/apps/tomekeeper/bookmarks-ipad.jpg";

export type Canvas = "night-folio" | "tomekeeper" | "coming-soon";
export type Layout = "phones" | "desktop-phone" | "tablet-phone" | "tablet" | "none";

export interface Screen {
  src: ImageMetadata;
  alt: string;
}

export interface Slide {
  eyebrow: string;
  title: string;
  /** Second headline line, set in the canvas's accent voice. */
  titleAccent?: string;
  lead: string;
  note?: string;
  canvas: Canvas;
  hue?: string;
  layout: Layout;
  screens: Screen[];
}

export interface ShowcaseApp {
  app: AppEntry;
  status: string;
  cta: string;
  slides: Slide[];
}

export function getShowcase(lang: Lang): ShowcaseApp[] {
  const isPt = lang === "pt";
  const apps = getApps(lang);
  const app = (slug: string) => apps.find((a) => a.slug === slug)!;
  const mythic = app("mythic-gme");
  const tk = app("tomekeeper");
  const crafter = app("adventure-crafter");
  const labels = statusLabel[lang];
  const more = isPt ? "Veja o que ele faz" : "See what it does";

  const mythicSlides: Slide[] = [
    {
      eyebrow: isPt ? "O aplicativo complementar oficial" : "The OFFICIAL companion app",
      title: isPt ? "Jogo sem GM" : "GM-less play",
      titleAccent: isPt ? "na ponta de seus dedos" : "at your fingertips",
      lead: isPt
        ? "Listas de aventuras para Personagens, Tramas e Aspectos, além de Listas Personalizadas com Recursos Expandidos"
        : "Adventure Lists for Characters, Threads, & Features, plus Custom Lists with Expanded Features",
      canvas: "night-folio",
      hue: "#5b3f8c",
      layout: "phones",
      screens: [
        { src: meaningRoll, alt: "" },
        { src: exceptionalYes, alt: "" },
        { src: listsRoll, alt: "" },
      ],
    },
    {
      eyebrow: mythic.name,
      title: isPt ? "Role dados 3D" : "Throw 3D dice",
      titleAccent: isPt ? "com som" : "with sound",
      lead: isPt
        ? "Respostas excepcionais, Eventos Aleatórios e Cenas de Interrupção terminam em câmera lenta"
        : "Exceptional answers, Random Events & Interrupt Scenes end in slow motion",
      canvas: "night-folio",
      hue: "#1f5d63",
      layout: "desktop-phone",
      screens: [
        { src: desktopThrow, alt: "" },
        { src: exceptionalYes, alt: "" },
      ],
    },
    {
      eyebrow: isPt ? "Incluindo celulares dobráveis" : "Including foldable phones",
      title: isPt ? "Com uma interface que se adapta" : "With a UI that adapts",
      titleAccent: isPt ? "ao tamanho da sua tela" : "to your screen size",
      lead: isPt
        ? "Tabelas de Jogo a uma aba de distância em celulares, dobráveis, tablets e desktop"
        : "Game Tables one tab away on phones, foldables, tablets & desktop",
      canvas: "night-folio",
      hue: "#3f4f8c",
      layout: "desktop-phone",
      screens: [
        {
          src: isPt ? panelsPt : panelsEn,
          alt: isPt
            ? "O Mythic GME Digital no computador com três painéis lado a lado: Tabelas de Significado, o Registro de Aventura com as Ações do Destino e as Listas na aba Tramas, com a aba Tabelas na borda direita."
            : "Mythic GME Digital on a desktop with three panels side by side: Meaning Tables, the Adventure Log with Fate Actions, and Lists on the Threads tab, with the Tables tab on the right edge.",
        },
        { src: listsRoll, alt: "" },
      ],
    },
  ];

  // TomeKeeper ships in English only; the pt site shows its pt tagline and
  // summary on one slide and says the app is in English.
  const tkSlides: Slide[] = isPt
    ? [
        {
          eyebrow: tk.tagline,
          title: tk.name,
          lead: tk.summary,
          note: "App e página em inglês.",
          canvas: "tomekeeper",
          layout: "tablet-phone",
          screens: [
            {
              src: tkHomeIpad,
              alt: 'A tela inicial do TomeKeeper em um iPad, com o Mythic Game Master Emulator 2e em "Continue Reading" e, abaixo, "My Books", "My Sets" e "Tables"',
            },
            { src: tkHomeIphone, alt: "A tela inicial do TomeKeeper em um iPhone" },
          ],
        },
      ]
    : [
        {
          eyebrow: tk.tagline,
          title: tk.name,
          lead: "A PDF reader built for tabletop roleplaying games. Bring your rulebooks, adventures and supplements into one library, mark what matters, and find it again fast in the middle of a session.",
          canvas: "tomekeeper",
          layout: "tablet-phone",
          screens: [
            {
              src: tkHomeIpad,
              alt: "TomeKeeper's home screen on iPad: Mythic Game Master Emulator 2e under Continue Reading, with My Books, My Sets and Tables below.",
            },
            { src: tkHomeIphone, alt: "TomeKeeper's home screen on iPhone." },
          ],
        },
        {
          eyebrow: tk.name,
          title: "Tables",
          lead: "Set up a solo player table. Put the rules you keep checking, the counters you track and the maps you play on together on one board, next to the books they came from.",
          canvas: "tomekeeper",
          layout: "tablet",
          screens: [
            {
              src: tkTableIpad,
              alt: "A Table named Broken Empires solo game on iPad, with the Broken Empires map, an adventure cover, the Mythic Fate Chart, a Chaos Factor counter and a note for the next scene.",
            },
          ],
        },
        {
          eyebrow: tk.name,
          title: "Find it at the table",
          lead: "Bookmarks with category colors appear as tabs on the page edge. One tap takes you there.",
          canvas: "tomekeeper",
          layout: "tablet",
          screens: [
            {
              src: tkBookmarksIpad,
              alt: "The Fabula Ultima introduction on iPad, with colored bookmark tabs on the page edge: Introduction, Scenes, Checks, Clocks, Conflict and Fabula Points.",
            },
          ],
        },
      ];

  return [
    { app: mythic, status: labels[mythic.status], cta: isPt ? "Recursos e downloads" : "Features and downloads", slides: mythicSlides },
    { app: tk, status: labels[tk.status], cta: more, slides: tkSlides },
    {
      app: crafter,
      status: labels[crafter.status],
      cta: more,
      slides: [
        { eyebrow: crafter.tagline, title: crafter.name, lead: crafter.summary, canvas: "coming-soon", layout: "none", screens: [] },
      ],
    },
  ];
}

