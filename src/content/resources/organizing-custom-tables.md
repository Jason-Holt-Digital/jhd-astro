---
fullArticleAvailable: true
title: "Organizing Custom Tables"
summary: "Use categories, icons, tags, and links to keep your Custom Tables easy to find and use."
appSummary: "Use categories, icons, and tags to organize your Meaning and Event Focus tables."
category: "custom-tables"
order: 2
icon: "fa-slab fa-regular fa-list-squares"
duration: "5 min read"
updated: "2026-11-04"
tags: ["custom-tables", "categories", "icons", "tags", "linking"]
keywords:
  - Categories
  - Icons
  - Tags
  - Linking tables
  - Custom tables
related:
  - categories-schema
  - getting-started-with-custom-tables
---

## Where to organize

- On a phone, open the navigation drawer and tap TABLE EDITOR under Tools. On a tablet or desktop, select Custom Tables in the navigation rail, or in the Classic 6-Panel Layout (Desktop) click the Custom Tables icon button at the lower right.
- On a phone, choose the Category tab. On a tablet or desktop, choose the third icon in the left sidebar (Categories).
- Categories, icons, and translations are managed alongside your tables.
> - Unlocking note: 
> - on Google Play, Amazon, and the Apple App Store, Custom Tables is an IAP; Itch.io and Microsoft Store include it with a higher‑priced purchase.

## Meaning vs Event Focus

- Meaning Tables: give prompt words for you to interpret, and can chain to other tables.
- Event Focus Tables: decide what kind of event happens (e.g., NPC Action), often the first roll in an event workflow

## Categories & icons

- Categories define icon, label, and sort behavior for table groups
- The app seeds built‑in categories from an asset file. You can restore the built-in categories with Reset Categories to Defaults in Table Settings. The categories you created are kept.
- You can edit a built-in category, or add your own with the + button on the Category tab. Your own categories appear in the same list as the built-in ones, and the app has no control to reorder them.

Removing and hiding categories
- A built-in category you have not edited offers **Hide this category**. Its tables leave your lists along with it. No files are deleted.
- A built-in category you have edited offers **Delete my edited version**, which brings back the original category.
- A category you created yourself offers **Delete**.
- Deleting a category cannot be undone.
- Some unedited built-in categories cannot be hidden, including **Custom** and **Event Focus**. A category that holds the **Random Event Focus Table** cannot be hidden either, and neither can that table.
- To show hidden items again, open **Table Settings** and expand **Hidden tables** or **Hidden categories**. Use **Show** for one item or **Show all** for everything in that list. When you show a category, its tables come back too, except any table that is still hidden on its own.
- To go back to the original built-in tables after editing them, use **Discard Edits to Built-in Tables** in Table Settings.

Best practices
- Short display names; add detail in descriptions
- Swap in your preferred language. The app is available in English, Portuguese, Brazilian Portuguese, Spanish, Mexican Spanish, French, Italian, and German. Thank you, Retropunk, for the Portuguese support!

## Tags and search

- Add tags to tables to improve search and grouping. An entry can carry tags only through a tags column in an imported CSV or through JSON.
- Use consistent tags for adventure arcs, biomes, factions, tones, etc.

## Linking tables

- Set a link on a specific entry to roll another table or an Adventure List right away when that result comes up.
- Use Linked Tables on the Controls tab to roll one or more other Meaning Tables every time this table is rolled, unless the table uses weights. A list can be linked only from a single entry.
- Chained rolls stop after 10 levels.

## Starter files

- Meaning templates/samples: JSON, CSV, TXT, PSV
- Event Focus templates/samples: JSON, CSV, TXT, PSV
- Categories template/sample
- Find them under the “Getting Started with Custom Tables” guide’s Starter downloads

## Weighted tables

- You can't build a weighted table by hand yet. You can import a Meaning Table CSV with result and weight columns, up to 100 rows. When any entry has a weight above 1, the app picks an entry by weight instead of rolling on the ranges. See “Getting Started with Custom Tables” for details.

## Next steps

- Get oriented and create your first tables: see “Getting Started with Custom Tables”
- Import/Export details: see “Importing & Exporting Custom Tables”
- JSON field reference: see “Custom Table Schema” and “Categories Schema”
