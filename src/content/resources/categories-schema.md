---
fullArticleAvailable: true
title: "Categories Schema"
summary: "Reference for the table categories JSON file format."
category: "advanced"
order: 4
icon: "fa-slab fa-regular fa-sort"
duration: "Reference"
updated: "2026-11-19"
tags: ["schema", "categories", "custom-tables", "reference"]
keywords:
  - Categories schema
  - JSON
  - Custom tables
downloads:
  - label: "Categories Schema"
    href: "/downloads/categories.schema.json"
    format: "JSON"
  - label: "Categories Template"
    href: "/downloads/categories_template.json"
    format: "JSON"
  - label: "Categories Sample"
    href: "/downloads/categories_sample.json"
    format: "JSON"
related:
  - organizing-custom-tables
  - getting-started-with-custom-tables
---

> This page describes Mythic GME 1.7.0 and later.

## Overview

Categories define display names, icons, and sort order for groups of Custom Tables. The app ships with built-in categories that you can edit, and you can add your own categories alongside them in `categories.json`. For managing categories inside the app, see [Organizing Custom Tables](/resources/organizing-custom-tables/).

## Root structure

```json
{
  "defaultCategories": [
    { "id": "core-tables", "displayName": "Core Tables", "iconKey": "dice", "sortOrder": 0, "isBuiltIn": true }
  ],
  "categories": [
    { "id": "my-category", "displayName": "My Category", "iconKey": "dice", "sortOrder": 900, "isBuiltIn": false }
  ]
}
```

- `defaultCategories` (array, required). Built-in categories shipped with the app. When you edit a built-in category in the app, its `id` is recorded in an optional `editedBuiltInCategoryIds` array.
- `categories` (array, required). User-created categories. Add, rename, or remove your custom categories here.

Both arrays are required, and either array may be empty.

## `TableCategoryInfo` fields

- `id` (string, required). Kebab-case identifier.
- `displayName` (string, required). Category label shown in the app.
- `iconKey` (string, required). Icon name. Bundled categories use keys such as `dice`, `user`, `map`, `book`, and `question`. An unrecognized key displays a question-mark icon.
- `sortOrder` (int, required). Lower numbers appear first. Categories created in the app receive `900`, and sort order can be changed only by editing `categories.json`.
- `isBuiltIn` (bool, required). Indicates whether the category belongs in `defaultCategories` (`true`) or `categories` (`false`).
- Optional fields include `description` (string), `displayNameTranslations` (object mapping language code to string), `descriptionTranslations` (object mapping language code to string), `tags` (array of strings), and `source` (string).

Every entry must include `id`, `displayName`, `iconKey`, `sortOrder`, and `isBuiltIn` with the right JSON types. If any required field is missing or has the wrong type, the app loads no categories from the file and attempts to save a timestamped copy named `invalidated-categories`.

## Lifecycle in the app

- With Expanded Features unlocked, the app can copy a baseline `categories.json` into `meaning_tables/categories.json` inside your current storage location (the app folder, a custom folder, or iCloud). The app keeps an existing file instead of overwriting it.
- **Edit Category** works on built-in categories as well as your own. Built-in categories cannot be deleted, though you can hide an unedited built-in category or delete your edited version to restore the original. Some built-in categories, such as **Custom** and **Event Focus**, cannot be hidden.
- **Reset Categories to Defaults** in **Table Settings** restores every built-in category to its shipped state and removes edits to built-in categories. Categories with `isBuiltIn` set to `false` are kept, and hidden categories remain hidden.
- Set `isBuiltIn` to `false` on your own categories. On save, the app places each entry in the array matching its `isBuiltIn` flag. Whether a category behaves as built-in in the app (offering **Hide this category** and **Delete my edited version**) depends on its `id` matching a shipped category.
- The template and sample files in Downloads hold only a few entries and an empty `defaultCategories` array. Copy their entries into your existing `categories.json` rather than replacing the whole file, or built-in categories will go missing until you run **Reset Categories to Defaults**.

## Downloads

The Downloads section at the bottom of this page includes `categories.schema.json`, `categories_template.json`, and `categories_sample.json`.

## Related

- [Getting Started with Custom Tables](/resources/getting-started-with-custom-tables/) and [Organizing Custom Tables](/resources/organizing-custom-tables/) for creating and managing categories in the app.
- [Custom Table Schema](/resources/custom-table-schema/) for the Meaning Table and Event Focus table JSON format.
