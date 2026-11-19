---
fullArticleAvailable: true
title: "Formula Schema"
summary: "Reference for the saved formulas JSON file format."
category: "advanced"
order: 2
icon: "fa-slab fa-regular fa-map"
duration: "Reference"
updated: "2026-11-19"
tags: ["schema", "formulas", "reference", "download"]
keywords:
  - Schema
  - Saved formulas
  - JSON
  - Download
downloads:
  - label: "Saved Formulas Schema"
    href: "/downloads/saved_formulas.schema.json"
    format: "JSON"
  - label: "Empty Template"
    href: "/downloads/saved_formulas_template.json"
    format: "JSON"
  - label: "Filled Sample"
    href: "/downloads/saved_formulas_sample.json"
    format: "JSON"
related:
  - saving-and-managing-dice-formulas
  - dice-formulas-and-customization
---

> This page describes Mythic GME 1.7.0 and later.

## Overview

This reference documents the JSON format for Saved Formulas so you can validate files or move them between devices and external tools. For a walkthrough of saving, loading, importing, and exporting formulas in the app, see [Saving and Managing Dice Formulas](/resources/saving-and-managing-dice-formulas/).

## Downloads and file naming

The Downloads section at the bottom of this page contains the JSON Schema validator (`saved_formulas.schema.json`), an empty template, and a filled sample.

Import accepts any file name. In the native apps, the file name must end in `.json` (any letter case). On the web, the file picker filters for `.json` files without running a separate extension check. Only the app's own storage file must be named `saved_formulas.json`.

## File shapes

The app uses two JSON shapes, one for its internal storage file and another for files written by Export.

### Storage file (`formulas/saved_formulas.json`)

The app stores your saved formulas in `saved_formulas.json` inside the `formulas` folder of its storage location. The reader accepts two shapes:

- A plain array of formula objects. The app writes this shape until you save a pool label.
- A wrapped object containing `formulas` (array of formula objects) and `poolLabels` (array of strings), plus `poolLabelColors` once you assign a color to a label. The app switches to this shape after you save your first label on the **Join** tab in Dice Studio.

When you remove your last label, the app writes a plain array again. Other fields in a wrapped storage file are kept when the app saves.

### Rules for `poolLabels`

- Each label is a string. The app trims spaces from both ends.
- A label cannot contain a double quote (`"`).
- Labels are unique, ignoring letter case.
- When you move storage or use **Import Previous Folder**, the app merges labels. Labels in the destination keep their order, and new labels append after them (compared ignoring letter case). A label keeps its color from the destination, or inherits the incoming color if the destination has none.

### Rules for `poolLabelColors`

- An object that maps each label name to its color. Any name not listed in `poolLabels` is ignored.
- A color is a quick color (`white`, `red`, `black`, `teal`, `purple`, or `brown`) or a custom hex color formatted as `#RRGGBB`. The app writes custom colors in uppercase.
- A label with no entry uses Automatic and takes a quick color not used by other pools in the roll. Any unrecognized color value is ignored and also falls back to Automatic.
- The app writes `poolLabelColors` only when at least one label has a chosen color.
- Renaming a label keeps its color. Removing a label removes its color.

### Storage file example with labels

```json
{
  "formulas": [
    { "id": "a", "formula": "1d20+5", "name": "Attack", "description": "", "dateAdded": "2020-01-01T00:00:00.000Z" }
  ],
  "poolLabels": ["Attack", "Damage"],
  "poolLabelColors": { "Attack": "teal", "Damage": "#C0392B" }
}
```

### Mixed app versions

Version 1.6.x reads the wrapped storage file, though it writes a plain array every time it saves a formula. If a device running 1.6.x saves a formula, `poolLabels` and `poolLabelColors` are removed for every device sharing that iCloud account or synced folder while your formulas remain intact. Update every device to 1.7.0 before saving labels.

### Storage validation rules

- `formula` (string, required). Must be non-empty.
- `name`, `description`, and `id` (strings, optional).
- `dateAdded` (ISO 8601 string, optional). In `saved_formulas.json`, setting `"dateAdded": null` or an unreadable date makes the entire file unreadable and causes the app to fall back to backups.

### Backups

- With folder storage, the app keeps `saved_formulas.json.bak`, `saved_formulas.json.bak.1`, and `saved_formulas.json.bak.2` beside `saved_formulas.json`.
- With iCloud, the app keeps a single `saved_formulas.json.bak` (new in 1.7.0).
- On desktop and tablet, **Restore Backup** appears when Saved Formulas cannot load.
- **Restore Backup** checks backups from newest to oldest and skips any unreadable file. If none can be restored, the app shows `"Failed to restore from backup"`.
- On the web, formulas live in browser storage and no backups are kept.

## Export file

Export always writes a wrapped object with three top-level keys:

- `formulas` (array). List of saved formula objects.
- `version` (string). Export always writes `"1.0"`. Import ignores this field.
- `schemaVersion` (string). Export writes `"1"`. Import ignores this field.

Export omits `poolLabels` and `poolLabelColors`, and Import ignores both keys if present.

## Formula object fields

- `formula` (string, required). Must be non-empty and valid dice notation. If any entry fails validation, nothing in the file is imported.
- `name` (string, optional). Display label. Defaults to `formula` when missing.
- `description` (string, optional). Extra context for the formula.
- `dateAdded` (ISO 8601 string, optional). Creation timestamp. On import, a missing or unreadable value is replaced with the import time.
- `id` (string, optional). Export writes an `id` for each formula, though Import ignores it and assigns a new `id` to every imported formula. Importing the same file twice creates duplicate entries.

## Import behavior

- Import is all or nothing. If any formula in the file is invalid, nothing is imported.
- Import appends formulas to the end of your existing list without checking for duplicates.
- Import assigns a new `id` to each formula and trims leading and trailing spaces from `formula`.
- The full import writes in one save, so the backup preserves your list from before the import.
- Import accepts either the wrapped export object or a top-level array of formula objects. A single bare formula object is rejected.

## Minimal import example

This minimal example is valid for import. A full export written by the app also includes `description`, `dateAdded`, and `id` on each formula.

```json
{
  "version": "1.0",
  "schemaVersion": "1",
  "formulas": [
    { "formula": "2d6+3", "name": "Sword attack" }
  ]
}
```
