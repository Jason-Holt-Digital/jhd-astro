---
fullArticleAvailable: true
title: "Categories Schema"
summary: "Reference for the table categories JSON file format."
category: "advanced"
order: 4
icon: "fa-slab fa-regular fa-sort"
duration: "Reference"
updated: "2026-11-04"
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

## Plain English

Categories provide names and icons for table groups. The app ships with built‑ins, and you can edit them. You add your own alongside them.

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

- `defaultCategories`: the built-in categories that ship with the app. You can edit a built-in category in the app. The app records the ids of built-in categories you edited in an optional `editedBuiltInCategoryIds` list.
- `categories`: the categories you created. Add, rename, or remove them here.

Both arrays are required, and either one can be empty.

## TableCategoryInfo fields

- `id` (kebab‑case string)
- `displayName` (string)
- iconKey (string). The bundled file uses keys such as dice, user, map, book, and question. A key the app does not know shows a question-mark icon.
- sortOrder (integer, lower numbers first). Categories made in the app get 900, and you can change the order only by editing this file.
- `isBuiltIn` (boolean)
- Optional: `description` (string), `displayNameTranslations` (object of language code to string), `descriptionTranslations` (object of language code to string), `tags` (array of strings), and `source` (string)

Every entry needs id, displayName, iconKey, sortOrder, and isBuiltIn. If one is missing or has the wrong type, the app cannot load any categories from the file and tries to save a copy named invalidated-categories with a timestamp.

## Lifecycle in the app

- Baseline copy: with premium, the app can copy a baseline `categories.json` into your current storage location (meaning_tables/categories.json), which may be the app's own folder, a custom folder, or iCloud. It normally keeps an existing file instead of overwriting it.
- Edit Category works on built-in categories too. A built-in category cannot be deleted. You can hide one you have not edited, and you can delete your edited version of one to bring back the original. Some built-in categories, such as Custom and Event Focus, cannot be hidden.
- Reset Categories to Defaults in Table Settings puts every built-in category back as it ships with the app, so your edits to built-in categories are removed. Categories whose isBuiltIn is false are kept, and hidden categories stay hidden.
- Set isBuiltIn to false on your own categories. When the app saves, it puts each entry in the array that matches its flag. Whether a category counts as built-in in the app, with Hide and Delete my edited version, depends on its id matching a category that ships with the app.
- The category template and sample in Downloads hold only a few categories, with an empty `defaultCategories`. Copy their entries into your own categories.json. Do not replace the whole file with them, or the built-in categories go missing until you use Reset Categories to Defaults.

## Downloads

See the Downloads section at the bottom of this page for files.

## Related

- Getting started and organizing tips: “Getting Started with Custom Tables”, “Organizing Custom Tables”
- Table schemas: “Custom Table Schema”
