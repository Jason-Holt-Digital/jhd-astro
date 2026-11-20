---
fullArticleAvailable: true
title: "Custom Table Schema"
summary: "Reference for the Custom Tables JSON file format."
category: "advanced"
order: 3
icon: "fa-slab fa-regular fa-layer-group"
duration: "Reference"
updated: "2026-11-19"
tags: ["schema", "custom-tables", "meaning-tables", "event-focus", "reference"]
keywords:
  - Meaning Table schema
  - Event Focus schema
  - Unified Table v3
  - JSON
downloads:
  - label: "Meaning Schema"
    href: "/downloads/meaning_table.schema.json"
    format: "JSON"
  - label: "Event Focus Schema"
    href: "/downloads/event_focus_table.schema.json"
    format: "JSON"
related:
  - getting-started-with-custom-tables
  - importing-and-exporting-custom-tables
  - linking-and-nesting-tables
---

> This page describes Mythic GME 1.7.0 and later.

## Overview

This reference documents the Unified Table v3 JSON format used by Meaning Tables and Event Focus tables on import and export. If you want step-by-step instructions for creating or importing tables inside the app, see [Getting Started with Custom Tables](/resources/getting-started-with-custom-tables/) and [Importing & Exporting Custom Tables](/resources/importing-and-exporting-custom-tables/).

## Meaning Table (v3)

Required keys are `id`, `categoryId`, `displayName`, and `entries`. These keys have no defaults. If you omit optional header keys, `schemaVersion` defaults to `3`, `tableType` defaults to `"meaning-table"`, `rangeStart` defaults to `1`, and `rangeEnd` defaults to `100`.

### Core fields

- `id` (string, required). Built-in tables use snake_case, though the app does not enforce a naming style.
- `categoryId` (string, required). Built-in categories use kebab-case. On import, an unrecognized category ID falls back to `"custom"`.
- `displayName` (string, required). Table title shown in the app.
- `entries` (array, required). List of table entry objects.
- `schemaVersion` (int, default `3`). Format version.
- `tableType` (string, default `"meaning-table"`). Table kind.
- `rangeStart` (int, default `1`) and `rangeEnd` (int, default `100`). Inclusive roll bounds.

### Optional table fields

- `description` (string), `descriptionTranslations` (object), and `displayNameTranslations` (object).
- `defaultLanguage` (string, for example `"en"`).
- `isBuiltIn` and `isUserCreated` (booleans). On import, the app forces `isBuiltIn` to `false` and `isUserCreated` to `true` regardless of the file's values.
- `source` (string) and `tags` (array of strings).
- `tableRollOn` (array of Meaning Table IDs). Any non-Meaning-Table ID or Adventure List name is skipped.
- `data` (object). Container for extension metadata.
- `baseDice` (string, for example `"1d10"`). Dice expression rolled on this table. When omitted, the app rolls a single die sized to the range.
- `defaultDoubleRoll` (boolean, default `true`). Set to `false` to roll the table once by default. A table whose `tags` include `"crafter"` also rolls once. The `1x`/`2x` selector on the table's row overrides both.
- `isPremium` (boolean). Ignored on import. The app decides which tables require the Expanded Features unlock.
- `replacement` and `displayRoll` (booleans). Preserved from Foundry VTT imports and written back on export without changing roll behavior.
- `dice` (legacy). Ignored in Mythic GME 1.7.0 and later. Use `baseDice` instead.

### Entry fields

- `range` (array of two ints `[start, end]`, required). Inclusive roll range for the entry.
- `result` (string, required). Text returned when the entry is rolled.
- Optional fields include `description`, translations, `tags`, `entryRollOn`, `disabled`, and `data`.
- `weight` (int, optional). If any entry in a Meaning Table has a `weight` above `1`, the app picks results by weight instead of by range and skips the table's `tableRollOn` links. Leave `weight` out or set it to `1` on every entry to roll by range. Event Focus tables ignore `weight`.

### Validation rules

- Active entries must cover `rangeStart` through `rangeEnd` exactly once with no gaps or overlaps.
- Entries with `disabled` set to `true` or `range` set to `[0, 0]` are ignored during coverage checks.

### Minimal Meaning Table JSON

Use a `categoryId` that exists in your app, such as `"custom"`.

```json
{
  "id": "action_basics",
  "schemaVersion": 3,
  "tableType": "meaning-table",
  "rangeStart": 1,
  "rangeEnd": 10,
  "categoryId": "custom",
  "displayName": "Action Basics",
  "entries": [
    { "range": [1, 5], "result": "Common" },
    { "range": [6, 10], "result": "Uncommon" }
  ]
}
```

## Event Focus Table (v3)

### Required keys

- `id`, `categoryId`, and `displayName` (non-empty strings). On import, the app sets `categoryId` to `"event-focus"`.
- `entries` (array). Each entry requires `range` and `result`.

### Optional keys and defaults

- `schemaVersion` (int, default `3`), `rangeStart` (int, default `1`), and `rangeEnd` (int, default `100`).
- `tableType` (string). A single-file import uses the **Event Focus Tables** card you selected and sets `tableType` afterward. Inside a `tables` wrapper file, set `tableType` to `"event-focus"` so the table identifies itself. If omitted, the selected card decides. An unknown `tableType` value fails import.

### Optional table fields

- `displayNameTranslations`, `description`, `descriptionTranslations`, `defaultLanguage`, `isBuiltIn`, `isUserCreated`, `source`, `tags`, `tableRollOn`, `data`, and `baseDice`.
- `data.iconKey` (string). Sets the icon on the table's card, for example `"bullseye"`. An unrecognized key displays a question mark.

### Entry fields

- `range` (`[start, end]`, required) and `result` (string, required).
- Optional fields include `description`, translations, `tags`, `entryRollOn`, `disabled`, `data`, and `weight` (ignored on Event Focus tables).
- `action` and `additionalRolls`. Stored and re-exported without affecting rolls.

### Minimal Event Focus JSON

This is a shortened example, not the built-in Event Focus table.

```json
{
  "id": "event_focus_core",
  "schemaVersion": 3,
  "tableType": "event-focus",
  "rangeStart": 1,
  "rangeEnd": 20,
  "categoryId": "event-focus",
  "displayName": "Event Focus",
  "entries": [
    { "range": [1, 10], "result": "Remote Event" },
    { "range": [11, 20], "result": "NPC Action" }
  ]
}
```

## Downloads

The Downloads section at the bottom of this page contains `meaning_table.schema.json` and `event_focus_table.schema.json`. Starter templates and samples live on [Getting Started with Custom Tables](/resources/getting-started-with-custom-tables/).

## Related

- [Getting Started with Custom Tables](/resources/getting-started-with-custom-tables/) and [Organizing Custom Tables](/resources/organizing-custom-tables/) for creating and grouping tables.
- [Linking & Nesting Tables](/resources/linking-and-nesting-tables/) for `entryRollOn` and `tableRollOn` behavior.
- [Importing & Exporting Custom Tables](/resources/importing-and-exporting-custom-tables/) for CSV, TXT, PSV, JSON, and Foundry VTT import rules.
