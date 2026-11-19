---
fullArticleAvailable: true
title: "Importing & Exporting Saved Formulas"
summary: "How to import and export saved dice formulas."
category: "dice-roller"
order: 4
icon: "fa-slab fa-regular fa-exchange"
duration: "5 min read"
updated: "2026-11-19"
tags: ["dice", "formulas", "import", "export"]
keywords:
  - Saved Formulas
  - Import
  - Export
  - JSON
related:
  - saving-and-managing-dice-formulas
  - formula-schema
---

> This guide describes Mythic GME 1.7.0 and later.

Use this guide when you want to import starter packs, move Saved Formulas between devices, or keep a backup copy. If you are looking for formula notation or day-to-day list editing, start with [Dice Formulas & Customization](/resources/dice-formulas-and-customization/) or [Saving and Managing Dice Formulas](/resources/saving-and-managing-dice-formulas/).

## Where to find Import and Export

Open **Dice Studio** and tap **Manage Formulas**. On a phone, **Save Formula** and **Manage Formulas** appear below the formula field. On a tablet or desktop, they appear above it.

## Import Saved Formulas

Tap **Manage Formulas > Import** and choose a `.json` file. Import appends every entry in the file to the end of your Saved Formulas list. There is no replace option and no duplicate check.

Import does not require a specific file name. In the native apps, the file must end in `.json` (in any letter case). On the web, the file picker asks for `.json` files without checking the extension separately.

### Supported JSON shapes

The recommended format is the canonical wrapped object:

```json
{
  "formulas": [
    { "formula": "2d20kh+5", "name": "Advantage +5", "description": "D&D 5e attack check" }
  ],
  "version": "1.0",
  "schemaVersion": "1"
}
```

An exported file always includes `"version": "1.0"` and `"schemaVersion": "1"` as text, and Import ignores both fields.

For compatibility, Import also accepts a top-level array of formula objects. A single formula object on its own is rejected, so wrap it in an array. Export always writes the wrapped object format.

## Export Saved Formulas

Tap **Manage Formulas > Export** to download or save a `.json` file you can back up or share.

- Export does not include the labels you saved on the **Join** tab or their colors, and Import ignores labels in a file.
- When you move storage or use **Import Previous Folder**, the app merges your saved formulas, labels, and label colors into the new location.
- If another device sharing your storage still runs 1.6.x, saving a formula on that device removes your labels and label colors across every device sharing the list. See Mixed app versions in [Formula Schema](/resources/formula-schema/).

## Placing a file manually

If you prefer placing a file directly in storage instead of using Import, name it `saved_formulas.json` and put it in the `formulas` folder inside the app's storage folder.

That file becomes your entire Saved Formulas list. If the app cannot read it, it may load a readable backup copy when one exists, without modifying your file.

## Starter downloads

Ready-to-import formula sets for popular systems. Use **Manage Formulas > Import** to append any set to your current list.

- D&D 5e: [Download](/downloads/formulas_dnd5e.json)
- Pathfinder 2e: [Download](/downloads/formulas_pf2.json)
- Shadowrun: [Download](/downloads/formulas_shadowrun.json)
- Blades in the Dark: [Download](/downloads/formulas_blades.json)
- Savage Worlds: [Download](/downloads/formulas_savage_worlds.json)
- Year Zero Engine (partial): [Download](/downloads/formulas_year_zero.json)
- Vampire V5: [Download](/downloads/formulas_vampire_v5.json)
- PbtA: [Download](/downloads/formulas_pbta.json)
- Fate Core: [Download](/downloads/formulas_fate.json)
- Call of Cthulhu 7e: [Download](/downloads/formulas_coc7e.json)
- Cypher: [Download](/downloads/formulas_cypher.json)
- Warhammer (d6 pools): [Download](/downloads/formulas_warhammer_d6.json)
- Lancer: [Download](/downloads/formulas_lancer.json)
- Ironsworn: [Download](/downloads/formulas_ironsworn.json)
- Starforged: [Download](/downloads/formulas_starforged.json)
- Dungeon Crawl Classics: [Download](/downloads/formulas_dcc.json)
- The One Ring (approximation): [Download](/downloads/formulas_one_ring.json)

## Practical tips

- Keep formula names short and put extra context in the description.
- Export before a large import so you have a snapshot of your current list. Keep in mind that importing that export back into the same list adds each formula again as a separate entry, because Import only appends.
- Use the canonical wrapped format (`formulas`, `version`, and `schemaVersion`) when sharing formula sets with other players.

Dice Studio is powered by `mythic_dice_parser` 8.3.0, the app's own dice parser derived from Adventuresmith's `dart_dice_parser`. Test custom formulas in Dice Studio to confirm how they behave in the app.

## Related guides

- [Getting Started with Dice Studio](/resources/getting-started-with-the-dice-roller/)
- [Saving and Managing Dice Formulas](/resources/saving-and-managing-dice-formulas/)
- [Dice Formulas & Customization](/resources/dice-formulas-and-customization/)
- [Formula Schema](/resources/formula-schema/)
