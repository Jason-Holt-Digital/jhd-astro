---
fullArticleAvailable: true
title: "Formula Schema"
summary: "Reference for the saved formulas JSON file format."
category: "advanced"
order: 2
icon: "fa-slab fa-regular fa-map"
duration: "Reference"
updated: "2026-11-04"
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
## Overview

This page documents the JSON format for Saved Formulas so your files can be validated and shared between devices or tools. For a practical walkthrough of saving, loading, importing, and exporting formulas from the UI, see [Saving and Managing Dice Formulas](/resources/saving-and-managing-dice-formulas/).

Plain English: You don’t need to know code to use this. “JSON” is just a structured text file the app reads and writes, and the “schema” is a rulebook for tools to double‑check that a file looks right. Most players can ignore the details below.

## Downloads

See the Downloads section at the bottom of this page for files.

Important: Import does not require a particular file name. In the native apps, the file must end in .json (in any letter case). On the web, the file picker asks for .json files, but the app does not check the extension separately. A file name does not make the contents valid. Only the app's own storage file must be named saved_formulas.json.

## Format (canonical)

There are two kinds of file: the app's own storage file and the file that Export writes. They have different shapes.

### Storage file (`formulas/saved_formulas.json`)

The app keeps your saved formulas in `saved_formulas.json` inside the `formulas` folder of its storage location. The app reads two shapes:

- A plain array of formula objects. This is what the app writes until you save a pool label.
- A wrapped object with `formulas` (array of formula objects) and `poolLabels` (array of strings). The app writes this shape after you save your first pool label on the Join tab in Dice Studio.

When you remove your last pool label, the app writes a plain array again. Other fields in a wrapped storage file are kept when the app saves.

Pool labels in `poolLabels`:

- Each label is a string. The app trims spaces from both ends.
- A label cannot contain a double quote (`"`).
- Labels are unique, ignoring letter case.
- When you move storage, or use Import Previous Folder, the app merges the labels. The labels in the destination keep their order, and labels that are new to it are added after them. Labels are compared ignoring letter case.

Storage file with pool labels:

```json
{
  "formulas": [
    { "id": "a", "formula": "1d20+5", "name": "Attack", "description": "", "dateAdded": "2020-01-01T00:00:00.000Z" }
  ],
  "poolLabels": ["Attack", "Damage"]
}
```

### Mixed app versions

Version 1.6.x of the app can read the wrapped storage file, but it writes a plain array every time it saves a formula. If a device on 1.6.x saves a formula, the pool labels are removed for every device that shares that iCloud account or synced folder. Your formulas are kept. Update every device to 1.7.0 before you save pool labels.

### Storage rules

- `formula` is required and cannot be empty.
- `name`, `description`, and `id` are optional strings.
- `dateAdded` is an optional ISO 8601 string. In the storage file, `"dateAdded": null` or a date the app cannot read makes the whole file unreadable. The app then tries its backups.

### Backups

- With folder storage, the app keeps `saved_formulas.json.bak`, `saved_formulas.json.bak.1`, and `saved_formulas.json.bak.2` next to the storage file.
- With iCloud, the app keeps one `saved_formulas.json.bak`. This is new in 1.7.
- On desktop and tablet, Restore Backup appears when the Saved Formulas list cannot load.
- On the web, formulas live in browser storage, and there are no backups.

### Export file

Export always writes a wrapped object with these fields:

- `formulas` (array): The list of saved formulas.
- version (string): Export always writes "1.0". Import ignores this field.
- schemaVersion (string): Export writes "1". Import ignores this field.

Export does not include pool labels, and Import ignores `poolLabels` in a file.

### Formula object fields (import and export)

- formula (required string): must be non-empty and valid dice notation. If any entry in the file fails, nothing in the file is imported.
- `name` (optional string): Display label; defaults to `formula` if missing.
- `description` (optional string): Extra context.
- dateAdded (optional ISO 8601 string): when the formula was created. On import, a missing or unreadable value becomes the time of the import.
- id (optional string): Export writes an id for each formula, but Import ignores it and gives every imported formula a new id. Importing the same file twice adds two separate entries.

### How Import works

- Import is all or nothing. If any formula in the file is not valid, nothing is imported.
- Import adds the formulas to the end of your list. It does not check for duplicates.
- Import gives every formula a new id and trims spaces from each formula.
- The whole import is saved at once, so the backup holds your list from before the import.

### Minimal import example

This is a minimal import template, not a complete captured export. An export also includes `description`, `dateAdded`, and `id` for each formula. On import, `id` is ignored and a new one is assigned.

```json
{
  "version": "1.0",
  "schemaVersion": "1",
  "formulas": [
    { "formula": "2d6+3", "name": "Sword attack" }
  ]
}
```

### Compatibility

- Import accepts the wrapped object shown above or a top-level array of formula objects. A single formula object on its own is rejected.
