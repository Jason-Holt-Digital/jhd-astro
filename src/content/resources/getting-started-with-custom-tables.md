---
fullArticleAvailable: true
title: "Getting Started with Custom Tables"
summary: "Create Meaning Tables and Event Focus tables, add translations and links, and import ready-made starters."
appSummary: "Create Meaning and Event Focus tables, add translations and links, and import tables from files."
category: "custom-tables"
order: 1
icon: "fa-slab fa-regular fa-newspaper"
duration: "9 min read"
updated: "2026-11-23"
tags: ["custom-tables", "getting-started", "meaning-tables", "event-focus", "categories"]
keywords:
  - Custom tables
  - Meaning Tables
  - Event Focus
  - Categories
  - Getting started
downloads:
  - label: "Meaning Template (JSON)"
    href: "/downloads/meaning_table_template.json"
    format: "JSON"
  - label: "Meaning Sample (JSON)"
    href: "/downloads/meaning_table_sample.json"
    format: "JSON"
  - label: "Meaning Template (CSV)"
    href: "/downloads/meaning_table_template.csv"
    format: "CSV"
  - label: "Meaning Example (CSV)"
    href: "/downloads/meaning_table_example.csv"
    format: "CSV"
  - label: "Meaning Template (TXT)"
    href: "/downloads/meaning_table_template.txt"
    format: "TXT"
  - label: "Meaning Template (PSV)"
    href: "/downloads/meaning_table_template.psv"
    format: "PSV"
  - label: "Event Focus Template (JSON)"
    href: "/downloads/event_focus_template.json"
    format: "JSON"
  - label: "Event Focus Sample (JSON)"
    href: "/downloads/event_focus_sample.json"
    format: "JSON"
  - label: "Event Focus Template (CSV)"
    href: "/downloads/event_focus_template.csv"
    format: "CSV"
  - label: "Event Focus Example (CSV)"
    href: "/downloads/event_focus_example.csv"
    format: "CSV"
  - label: "Event Focus Template (TXT)"
    href: "/downloads/event_focus_template.txt"
    format: "TXT"
  - label: "Event Focus Template (PSV)"
    href: "/downloads/event_focus_template.psv"
    format: "PSV"
  - label: "Categories Template (JSON)"
    href: "/downloads/categories_template.json"
    format: "JSON"
  - label: "Categories Sample (JSON)"
    href: "/downloads/categories_sample.json"
    format: "JSON"
related:
  - custom-table-schema
  - categories-schema
  - importing-and-exporting-custom-tables
---

> This guide describes Mythic GME 1.7.0 and later.

Custom Tables lets you build your own Meaning Tables and Event Focus tables right inside the app, edit built-in tables to fit your game, or import starter files.

## Where to find Custom Tables

On a phone, open the navigation drawer and tap **TABLE EDITOR** under **Tools**. On a tablet or desktop, select **Custom Tables** in the navigation rail.

> ### How to unlock Custom Tables
>
> - On the Apple App Store, Google Play, and Amazon, Custom Tables is part of the one-time Expanded Features unlock.
> - On the Microsoft Store and itch.io, Custom Tables is included with Mythic GME Digital.

## Make your first Meaning Table

1. On a phone, open the **Oracle** tab and tap the **+** button to start the Create Table wizard. On a tablet or desktop, select the first icon in the left sidebar (**Meaning Tables**) and click the **+** button below the icons.
2. Give the table a name and pick a category from the list. If you want a category of your own, create it first with the **+** button on the **Category** tab.
3. Set the roll range. For a first table, 1 to 10 or 1 to 20 is a good starting size, and you can expand to 1 to 100 later.
4. Add your entries. In the phone wizard, the app spreads your entries evenly across the range for you. Keep the ranges continuous with no gaps or overlaps, which the app checks before saving.
5. Add a description, tags, or translations if you want them. Only Event Focus tables and categories have an icon of their own.
6. Save the table and test it with a few rolls.

## Make an Event Focus table

1. On a phone, open the **Event** tab and tap the **+** button. On a tablet or desktop, select the second icon in the left sidebar (**Event Focus**) and click the **+** button below the icons.
2. Set the range. Event Focus tables are usually 1 to 100, though smaller ranges work fine too.
3. Add entries that describe what kind of event happens, such as NPC Action or Move Toward A Thread.
4. Save the table and try a few test rolls.

Once a table is saved, you can connect rolls across tables and Adventure Lists with **Entry Links** and **Linked Tables**. See [Linking & Nesting Tables](/resources/linking-and-nesting-tables/) for how chained rolls work.

## Edit, hide, or delete built-in tables

You can edit any built-in table. The app saves your edited version separately and uses it in place of the original. If you want to keep both versions, choose **Duplicate** from the table's menu and edit the copy instead.

Resets do not wipe out your table edits. To go back to the shipped originals, use **Discard Edits to Built-in Tables** in **Table Settings**.

How you remove a table depends on where it came from:

- An unedited built-in table offers **Hide this table** instead of **Delete**. Hiding takes the table out of your lists without deleting any files, and you can show it again from **Table Settings**.
- An edited built-in table offers **Delete my edited version**. The app removes your copy and loads the original again, and you can undo the action.
- A table you created yourself offers **Delete**, which you can also undo.

## When an update changes a built-in table

> New in 1.7.1.

The app ships the official built-in tables and updates its own copies with each release. It never replaces a built-in table you changed. A table you edited in the app keeps your edits through every update.

If you changed a table's file in your storage folder and an update changes that table, the app waits for you to choose. The same happens when your copy of a built-in table can't be read. Open Settings, then **Table Management**. Under **Tables Waiting for Your Choice**, each table shows its name and one sentence that says why it waits:

- **"The app has a new version of this table, and your copy is different."** Choose **Keep Mine** to keep your copy as it is, or **Use the New Version** to replace it with the version that ships with the app.
- **"Your copy of this table can't be read, so play uses the app's version until you choose."** Choose **Use the App's Version** to replace the copy that can't be read.

Before **Use the New Version** replaces your copy, the app asks you to confirm. It saves a backup file of the old copy first, but no screen in the app can restore it. Edits you saved in the Table Editor are kept.

Until you choose, a dot marks Settings and Table Management. You can keep playing while a table waits: Random Events keep working, and a copy that can't be read is replaced in play by the app's version.

## Translations and metadata

You can add per-table and per-entry translations as you build. The default language is `en`.

Add tags to make searching and grouping easier, and pick category icons once so every table in that category shares the same icon. For more on categories, icons, and tags, see [Organizing Custom Tables](/resources/organizing-custom-tables/).

## Starter downloads

The Downloads section at the bottom of this page has JSON, CSV, TXT, and PSV templates and samples you can use as starting points. To bring one into the app, open the **Files** tab in Custom Tables (the **Import/Export** icon on a tablet or desktop), then tap **Oracle Tables** for a Meaning Table file or **Event Focus Tables** for an Event Focus file.

For format rules and troubleshooting, see [Importing & Exporting Custom Tables](/resources/importing-and-exporting-custom-tables/).

## Weighted tables

You cannot build a weighted table by hand in the editor yet. On the **Controls** tab, the **Weighted** option is marked **Coming Soon**.

To create a weighted Meaning Table now, import a Meaning Table CSV with `result` and `weight` columns, up to 100 rows. The app spreads the weights across 100 slots, so the stored weights can differ slightly from the numbers in your file.

When any entry in a Meaning Table has a weight above 1, the app picks an entry by weight and does not roll the table's linked tables. Event Focus tables always roll on their ranges.

If you select **Roll Ranges** on the **Controls** tab, the app splits the ranges again, though the weights stay on the entries. As long as any entry has a weight above 1, the app still picks by weight.

## Next steps

- Learn how categories, icons, and tags work in [Organizing Custom Tables](/resources/organizing-custom-tables/).
- Chain rolls between tables and Adventure Lists in [Linking & Nesting Tables](/resources/linking-and-nesting-tables/).
- Prepare CSV, TXT, PSV, JSON, and Foundry VTT files in [Importing & Exporting Custom Tables](/resources/importing-and-exporting-custom-tables/).
- Check every JSON field in [Custom Table Schema](/resources/custom-table-schema/) and [Categories Schema](/resources/categories-schema/).
