---
fullArticleAvailable: true
title: "Linking & Nesting Tables"
summary: "A link makes one roll lead to another."
appSummary: "How to link tables so that one roll leads to another."
category: "custom-tables"
order: 3
icon: "fa-slab fa-regular fa-link"
duration: "11 min read"
updated: "2026-11-19"
tags: ["custom-tables", "linking", "advanced"]
keywords:
  - Linking tables
  - Nesting tables
  - entryRollOn
  - tableRollOn
related:
  - custom-table-schema
  - importing-and-exporting-custom-tables
---

> This guide describes Mythic GME 1.7.0 and later.

A link makes one roll lead directly to another. When you roll a table that has a link, the app can follow it and roll the linked table or Adventure List right away so you stay in the flow of play.

## Two kinds of links

- **Entry Links** belong to one entry. The app follows them only when that entry comes up as the result.
- **Linked Tables** belong to the whole table. When you roll the table, the app follows every Meaning Table listed there, unless the table uses weights.

## Link one entry

On an entry, choose **Add links** to open **Select Entry Links**. The picker has two tabs:

- **Tables** lists your Meaning Tables and Event Focus tables.
- **Adventure Lists** lists Characters, Threads, Features, and every Custom List in the open Journal by name.

The **Adventure Lists** tab also lists **PC NPCs** and **PC Threads**. A link to either one rolls on the matching Custom List in the open Journal. If the Journal has no list with that name, the app skips the link. If the list exists but is empty, the app still rolls it and shows the result `Choose`.

On a phone, the creation wizard keeps every link you tick for an entry, and the table editor keeps all of them too.

## Link a whole table

**Linked Tables** lives on the **Controls** tab of the table editor. Choose **Select tables** to open **Select Paired Tables**, which lists Meaning Tables you can add. It also lists any Event Focus tables that are already linked so you can remove them, though it does not offer other Event Focus tables to add.

- Pick Meaning Tables here. If an Event Focus table is linked at the table level, the app skips it when you roll.
- When you roll a Meaning Table that uses weights (meaning any entry has a weight above 1), the app skips its table-level links.
- On a phone, the creation wizard cannot set table-level links. Save the table first, then open it in the editor to add **Linked Tables**.

## What happens when you roll

- The app follows the links on the entry that came up. It rolls a linked Meaning Table and then follows that table's own links. It rolls a linked Event Focus table once, and it rolls a linked list once.
- When a table is set to roll twice, the app follows the links of the first result only.
- The app also rolls once on each Meaning Table in **Linked Tables**, unless the rolled table uses weights.
- A chain can go 10 levels below the table you rolled. Past that limit, the result reads `Max Depth Exceeded`.
- If a link's target cannot be found, the app skips it without showing a message.
- A built-in table you hid still rolls when another table links to it.

## Links in a Random Event

In a Random Event, the app rolls each Meaning Table linked to the Event Focus table. It also follows the links on the Event Focus entry that came up, which can roll Meaning Tables or Adventure Lists.

If an Event Focus entry links to another Event Focus table, the app rolls that second table and shows its result alongside the Random Event.

## Links in a file

In a CSV file, put entry links in an `entryRollOn` column and separate multiple targets with semicolons. In JSON, entry links belong in the `entryRollOn` array on an entry, and table-level links belong in the `tableRollOn` array on the table.

Each link stores a table's ID or a list's name. A link to a Custom List matches by the list's name. For full file syntax, see [Custom Table Schema](/resources/custom-table-schema/) and [Importing & Exporting Custom Tables](/resources/importing-and-exporting-custom-tables/).
