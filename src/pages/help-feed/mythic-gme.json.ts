import type { APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";
import { getResourcesByLang } from "../../lib/collections";

export const prerender = true;

type ResourceEntry = CollectionEntry<"resources">;
type ResourceCategory = ResourceEntry["data"]["category"];

const categoryOrder: ResourceCategory[] = [
  "start-here",
  "adventure-journals",
  "dice-roller",
  "custom-tables",
  "advanced",
];

const categoryLabels: Record<ResourceCategory, string> = {
  "start-here": "Start Here",
  "adventure-journals": "Adventure Journals",
  "dice-roller": "Dice Studio",
  "custom-tables": "Custom Tables",
  advanced: "Schemas & Deep Dives",
};

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ?? new URL("https://jasonholtdigital.com");
  const entries = await getResourcesByLang("en");

  const sorted = [...entries].sort((a, b) => {
    const catDiff =
      categoryOrder.indexOf(a.data.category) -
      categoryOrder.indexOf(b.data.category);
    if (catDiff !== 0) return catDiff;
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return a.data.title.localeCompare(b.data.title);
  });

  const payload = {
    schemaVersion: 1,
    app: "mythic-gme",
    lang: "en",
    docs: sorted.map((entry) => ({
      id: entry.id,
      title: entry.data.title,
      summary: entry.data.summary,
      appSummary: entry.data.appSummary ?? entry.data.summary,
      category: entry.data.category,
      categoryLabel: categoryLabels[entry.data.category],
      url: new URL(`/resources/${entry.id}/`, baseUrl).toString(),
      duration: entry.data.duration ?? null,
      updated: entry.data.updated ?? null,
      tags: entry.data.tags ?? [],
      keywords: entry.data.keywords ?? [],
      fullArticleAvailable: entry.data.fullArticleAvailable === true,
    })),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
