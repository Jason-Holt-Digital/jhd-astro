---
fullArticleAvailable: true
title: "Saving and Managing Dice Formulas"
summary: "How to save, load, import, and export saved dice formulas."
category: "dice-roller"
order: 2
icon: "fa-slab fa-regular fa-floppy-disk"
duration: "5 min read"
updated: "2026-11-19"
tags: ["dice", "formulas", "saved-formulas", "import", "export"]
keywords:
  - Saved Formulas
  - Dice formulas
  - Import
  - Export
  - JSON
downloads:
  - label: "Empty Template"
    href: "/downloads/saved_formulas_template.json"
    format: "JSON"
  - label: "Filled Sample"
    href: "/downloads/saved_formulas_sample.json"
    format: "JSON"
  - label: "Saved Formulas Schema"
    href: "/downloads/saved_formulas.schema.json"
    format: "JSON"
related:
  - formula-schema
  - dice-formulas-and-customization
---

> This guide describes Mythic GME 1.7.0 and later.

Save the dice rolls you reach for often so you do not have to retype them mid-scene. Saved formulas are global across the app rather than tied to a single Journal, so they follow you from campaign to campaign.

## Where to find Saved Formulas

Open **Dice Studio**. On a phone, **Save Formula** and **Manage Formulas** appear below the formula field. On a tablet or desktop, they appear above it.

The app reads and writes `.json` files automatically through those buttons, so you never need to edit JSON by hand unless you want to. If you do want sample files to inspect, check the empty template, filled sample, and schema in the Downloads section below.

## Save, edit, and organize formulas

1. **Save a formula.** Type or build a formula in the field and tap **Save Formula** (you do not need to roll it first). Give it a short, recognizable name and put any extra context in the description.
2. **Reorder or edit.** Tap **Manage Formulas** to drag formulas into order or remove ones you no longer need. Tap **Edit** to show an edit button on each formula, then tap **Done** when you finish.
3. **Delete with confirmation.** Deleting a formula asks you to confirm first. If you cancel, the formula stays in your list.

## Export and import your list

Open **Manage Formulas** to back up your list or pull in formulas from a file.

- **Export.** Tap **Export** to save a `.json` file you can keep as a backup or share with someone else. You can rename the exported file to whatever makes sense to you.
- **Import.** Tap **Import** and choose a `.json` file. Import does not require a specific file name. In the native apps, the file must end in `.json` (in any letter case). On the web, the file picker asks for `.json` files without checking the extension separately. A `.json` extension alone does not guarantee the file's contents are valid.
- **How Import appends.** Import runs right away without asking and adds every formula in the file to the end of your list. It never replaces your list and does not check for duplicates, so importing a file you already have adds a second copy of each formula. Every imported entry receives its own new ID, so editing or deleting a duplicate affects only that copy. Because Import only adds entries, an exported file works as a backup you can import from later, not a one-tap overwrite of your current list.

For starter formula packs and manual file placement details, see [Importing & Exporting Saved Formulas](/resources/importing-and-exporting-saved-formulas/).

## Labels and mixed app versions

On the **Join** tab in Dice Studio, you can save labels such as `Attack` or `Damage` to place in front of your dice pools. To set a label's color, long-press it and tap **Change color**, or tap the **Color** button beneath its name in **Manage labels**.

Labels and their colors are stored alongside your saved formulas on your device, but formula exports do not include them.

If another device sharing your storage still runs Mythic GME 1.6.x, saving a formula on that device removes your labels and label colors across every device that shares the list, while keeping your formulas intact. Update every device to 1.7.0 or later before saving labels. See [Formula Schema](/resources/formula-schema/) for the full details.

## If your list cannot load

On desktop and tablet, **Restore Backup** appears automatically if your Saved Formulas list cannot load, including when using iCloud. **Restore Backup** skips any backup it cannot read. If no readable backup is available, the app shows `"Failed to restore from backup"`.

## File shapes for power users

Import accepts either a wrapped object containing a `formulas` list or a top-level array of formula objects. Export always writes the wrapped object format.

Dice Studio runs on the app's own dice parser (derived from Adventuresmith's `dart_dice_parser`), so test any hand-edited formula inside the app before using it in a session.

## Related guides

- [Dice Formulas & Customization](/resources/dice-formulas-and-customization/)
- [Importing & Exporting Saved Formulas](/resources/importing-and-exporting-saved-formulas/)
- [Formula Schema](/resources/formula-schema/)
