import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

export const prerender = true;

type GuideEntry = CollectionEntry<"tomekeeperGuides">;
type GuideCategory = GuideEntry["data"]["category"];

const categoryLabels: Record<GuideCategory, string> = {
  "getting-started": "Getting Started",
  "library-and-sets": "Library & Sets",
  reading: "Reading",
  "tables-and-clips": "Tables & Clips",
  "sync-and-help": "Sync & Help",
};

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ?? new URL("https://jasonholtdigital.com");
  const entries = await getCollection("tomekeeperGuides");

  const sorted = [...entries].sort((a, b) =>
    a.data.order === b.data.order
      ? a.data.title.localeCompare(b.data.title)
      : a.data.order - b.data.order,
  );

  const payload = {
    schemaVersion: 1,
    app: "tome-keeper",
    lang: "en",
    docs: sorted.map((entry) => ({
      id: entry.id,
      title: entry.data.title,
      summary: entry.data.summary,
      appSummary: entry.data.summary,
      category: entry.data.category,
      categoryLabel: categoryLabels[entry.data.category],
      url: new URL(`/tomekeeper/guides/${entry.id}/`, baseUrl).toString(),
      duration: entry.data.duration ?? null,
      updated: entry.data.updated ?? null,
      tags: entry.data.tags ?? [],
      keywords: entry.data.keywords ?? [],
      fullArticleAvailable: true,
    })),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
