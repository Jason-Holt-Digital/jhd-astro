---
fullArticleAvailable: true
title: "Organizing Custom Tables"
summary: "Use categories, icons, tags, and links to keep your Custom Tables easy to find and use."
appSummary: "Use categories, icons, and tags to organize your Meaning and Event Focus tables."
category: "custom-tables"
order: 2
icon: "fa-slab fa-regular fa-list-squares"
duration: "5 min read"
updated: "2026-11-19"
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

> This guide describes Mythic GME 1.7.0 and later.

As your library of Custom Tables grows, categories, icons, and tags keep everything easy to find during play.

## Where to organize

On a phone, open the navigation drawer and tap **TABLE EDITOR** under **Tools**, then tap the **Category** tab. On a tablet or desktop, select **Custom Tables** in the navigation rail, then select the third icon in the left sidebar (**Categories**).

Categories, icons, and translations live right alongside your tables.

> ### How to unlock Custom Tables
>
> - On the Apple App Store, Google Play, and Amazon, Custom Tables is part of the one-time Expanded Features unlock.
> - On the Microsoft Store and itch.io, Custom Tables is included with Mythic GME Digital.

## Meaning Tables and Event Focus tables

- **Meaning Tables** give you prompt words to interpret and can chain to other tables.
- **Event Focus tables** decide what kind of event happens, such as NPC Action, and often act as the first roll in a Random Event.

## Categories and icons

Categories set the icon, label, and sort behavior for groups of tables. They control how tables are grouped in the app. They do not chain rolls together. If you want one roll to trigger another, use table linking instead.

The app seeds built-in categories from a bundled asset file. You can restore the built-in categories with **Reset Categories to Defaults** in **Table Settings**, and any categories you created yourself stay untouched.

You can edit a built-in category or create your own with the **+** button on the **Category** tab. Your custom categories appear in the same list as the built-in ones. The app has no in-app control to reorder categories, though you can adjust `sortOrder` directly in `categories.json` as covered in [Categories Schema](/resources/categories-schema/).

### Removing and hiding categories

- An unedited built-in category offers **Hide this category**. Its tables leave your lists along with it, and no files are deleted.
- An edited built-in category offers **Delete my edited version**, which restores the original category.
- A category you created yourself offers **Delete**.
- Deleting a category cannot be undone.
- Some unedited built-in categories cannot be hidden, including **Custom** and **Event Focus**. A category that holds the **Random Event Focus Table** cannot be hidden either, and neither can that table.
- To show hidden items again, open **Table Settings** and expand **Hidden tables** or **Hidden categories**. Choose **Show** for one item or **Show all** for the whole list. Showing a category brings back its tables too, except any table you hid on its own.
- To restore the original built-in tables after editing them, use **Discard Edits to Built-in Tables** in **Table Settings**.

### Naming and language tips

Keep display names short and put extra context in the description field so table rows stay readable on small screens.

You can add translations in your preferred language. The app supports English, Portuguese, Brazilian Portuguese, Spanish, Mexican Spanish, French, Italian, and German. Thanks to RetroPunk for the Brazilian Portuguese support.

## Tags and search

Add tags to your tables to make search and grouping faster. Consistent tags work well for adventure arcs, biomes, factions, and tones.

An entry can carry tags only through a `tags` column in an imported CSV or through JSON.

## Categories vs. linking and nesting tables

Categories organize tables into groups so you can find them quickly. Linking and nesting connect rolls so that rolling one table automatically triggers another table or Adventure List.

- Set an **Entry Link** on a specific entry to roll another table or an Adventure List whenever that result comes up.
- Use **Linked Tables** on the **Controls** tab to roll one or more other Meaning Tables every time a table is rolled, unless that table uses weights. Lists can be linked only from a single entry.
- Chained rolls stop after 10 levels.

For the full breakdown of entry links, table-level links, and Random Event chains, see [Linking & Nesting Tables](/resources/linking-and-nesting-tables/).

## Starter files and weighted tables

JSON, CSV, TXT, and PSV templates and samples for Meaning Tables and Event Focus tables, plus a Categories template and sample, live under Starter downloads in [Getting Started with Custom Tables](/resources/getting-started-with-custom-tables/).

You cannot build a weighted table by hand yet, though you can import a Meaning Table CSV with `result` and `weight` columns up to 100 rows. When any entry has a weight above 1, the app picks results by weight instead of rolling on the ranges. See [Getting Started with Custom Tables](/resources/getting-started-with-custom-tables/) for details.

## Next steps

- Create your first tables in [Getting Started with Custom Tables](/resources/getting-started-with-custom-tables/).
- Set up chained rolls in [Linking & Nesting Tables](/resources/linking-and-nesting-tables/).
- Import and export files in [Importing & Exporting Custom Tables](/resources/importing-and-exporting-custom-tables/).
- Look up JSON fields in [Custom Table Schema](/resources/custom-table-schema/) and [Categories Schema](/resources/categories-schema/).
