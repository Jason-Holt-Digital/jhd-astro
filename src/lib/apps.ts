import type { ImageMetadata } from "astro";
import tomekeeperIcon from "../assets/apps/tomekeeper-icon.png";
import mythicMark from "../assets/apps/mythic-gme-mark.svg?url";

export type Lang = "en" | "pt";
export type AppStatus = "available" | "coming-soon";

export interface AppEntry {
  slug: string;
  name: string;
  href: string;
  tagline: string;
  summary: string;
  platforms: string[];
  editions?: { name: string; platforms: string }[];
  status: AppStatus;
  /** Offset-shadow colour that identifies the product across the site. */
  accent: string;
  icon?: ImageMetadata | string;
  /** Line art that needs padding inside the tile rather than a full-bleed icon. */
  iconIsMark?: boolean;
  faIcon?: string;
  supportHref?: string;
  privacyHref?: string;
  /** The app and its pages exist only in English. */
  englishOnly?: boolean;
}

export function getApps(lang: Lang): AppEntry[] {
  const isPt = lang === "pt";
  const prefix = isPt ? "/pt" : "";
  return [
    {
      slug: "mythic-gme",
      name: "Mythic GME",
      href: `${prefix}/mythic-gme/`,
      tagline: isPt ? "Apps oficiais Mythic GME 2e" : "Official Mythic GME 2e apps",
      summary: isPt
        ? "Jogadores solo que querem menos consulta e mais história onde quer que joguem."
        : "Solo role-players who want less lookup and more story wherever they play.",
      platforms: ["iOS", "Android", "Amazon Fire", "Windows", "macOS", "Linux"],
      editions: [
        { name: "Mythic GME Mobile", platforms: "App Store, Google Play, Amazon Appstore" },
        { name: "Mythic GME Digital", platforms: "Windows, macOS, Linux" },
      ],
      status: "available",
      accent: "#0066ff",
      icon: mythicMark,
      iconIsMark: true,
      supportHref: `${prefix}/support/`,
      privacyHref: `${prefix}/privacy/`,
    },
    {
      slug: "tomekeeper",
      name: "TomeKeeper",
      href: "/tomekeeper/",
      tagline: isPt ? "Leitor de PDF para RPG de mesa" : "PDF reader for tabletop RPGs",
      summary: isPt
        ? "Leia seus PDFs de RPG na mesa. Marque regras, adicione tags às páginas e pesquise em vários livros de uma vez. Sem conta, sem anúncios."
        : "Read your RPG PDFs at the table. Bookmark rules, tag pages, search a whole set of books, and pin clips to a Table. No account, no ads.",
      platforms: ["iPhone", "iPad", "Mac", "Android"],
      status: "coming-soon",
      accent: "#355781",
      icon: tomekeeperIcon,
      supportHref: "/tomekeeper/support/",
      privacyHref: "/tomekeeper/privacy/",
      englishOnly: true,
    },
    {
      slug: "adventure-crafter",
      name: "Adventure Crafter",
      href: `${prefix}/adventure-crafter/`,
      tagline: isPt ? "App companheiro Mythic" : "Mythic companion app",
      summary: isPt
        ? "Um futuro app companheiro para criar aventuras com prompts guiados, ganchos e reviravoltas."
        : "A future companion app for creating adventures with guided prompts, hooks, and twists.",
      platforms: [],
      status: "coming-soon",
      accent: "#ffd700",
      faIcon: "fa-slab fa-regular fa-compass",
    },
  ];
}

export const statusLabel: Record<Lang, Record<AppStatus, string>> = {
  en: { available: "Available now", "coming-soon": "Coming soon" },
  pt: { available: "Disponível agora", "coming-soon": "Em breve" },
};
