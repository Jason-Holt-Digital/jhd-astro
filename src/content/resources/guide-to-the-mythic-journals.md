---
fullArticleAvailable: true
title: "A Guide to the Mythic Journals"
summary: "What a Journal holds, and how to create, import, and export Journals."
category: "adventure-journals"
order: 0
icon: "fa-slab fa-regular fa-book-open"
duration: "6 min read"
updated: "2026-11-19"
tags: ["journals", "getting-started", "import", "export"]
keywords:
  - Journals
  - Getting started
  - Import
  - Export
  - Mythic
downloads:
  - label: "Empty Template"
    href: "/downloads/journal_template.json"
    format: "JSON"
  - label: "Filled Sample"
    href: "/downloads/journal_sample.json"
    format: "JSON"
  - label: "JSON Schema"
    href: "/downloads/journal.schema.json"
    format: "JSON"
related:
  - writing-and-organizing-scenes
  - sharing-adventure-journals
  - saving-and-managing-dice-formulas
---

> This guide describes Mythic GME 1.7.0 and later.

A Journal is the app's saved record for one adventure or campaign. Everything from that game lives inside it, so you can run several campaigns side by side without mixing their lists, scenes, or logs.

## Create and play in a Journal

For normal play, you do not need a template file. Open **Settings > Files**, tap **Create New Journal**, and enter a name.

If that name is already in use, the app will not replace the existing Journal unless you separately confirm the overwrite. If you confirm, the app creates a fresh empty Journal with that name and replaces the old contents.

Here is how a typical session flows in the app:

1. **Before you start.** Open your Journal, set the starting Chaos Factor, and add a few Threads and Characters you expect to see (plus Features if you are playing a prepared adventure).
2. **During each scene.** Frame your Expected Scene, run a Scene Check, ask Fate Questions, and roll on Meaning Tables or Random Events as the story unfolds. Fate rolls, Scene Checks, and Random Events save to the Adventure Log automatically.
3. **Add your own notes.** To add an interpretation or quick summary directly to the Adventure Log, tap the add button in the Adventure Log header, write in the **Add Narrative** sheet, and tap **Add to Log**.
4. **Between scenes.** Update your Chaos Factor (down if your character stayed in control, up if things spun out) and update your Adventure Lists as the story shifts.

## What a Journal holds

Every Journal is self-contained and tracks these pieces on its own:

- **Chaos Factor.** The core Mythic dial from 1 to 9 that shapes Scene Checks and oracle odds. The app saves the Journal's current Chaos Factor on each new scene. Editing an earlier scene does not change the Journal's Chaos Factor, and only your latest scene sets it.
- **Scenes.** Short titles and summaries that mark the beats of play. A scene's type (Expected, Altered, or Interrupt) is recorded as a Log Entry from a Scene Check rather than stored on the scene itself.
- **Adventure Log.** The time-ordered record of your Fate Chart or Fate Check answers, Scene Checks, Random Events, Meaning Table rolls, dice rolls, and narrative entries.
- **Adventure Lists.** Characters (NPCs, factions, and active elements), Threads (goals and plotlines), and Features (the third list Mythic adds for prepared adventures, covering special locations, objects, or encounters), along with List Notes for each.
- **Expanded campaign tools.** Custom Lists, Thread Progress Tracks, Keyed Scenes, and Progress Points.

## Export, import, and backups

Manage your Journal files from **Settings > Files**.

- **Export journal as JSON.** Saves the entire Journal. Use JSON whenever you want a backup or plan to import the Journal back into the app later.
- **Export journal as Markdown.** Saves a clean text version you can read or paste into Apple Notes, Obsidian, Notion, or Google Docs. Markdown export is for reading only. It leaves out Custom Lists, Thread Progress Tracks, Keyed Scenes, Progress Points, and the per-die dice record, and the app cannot import Markdown back in.

On iOS and Android, exporting opens the share sheet so you can save or send the file wherever you like. On Windows, macOS, and Linux, it opens a save dialog instead.

When you import a `.json` file with a single Journal, the app opens a review sheet first and lists any issues under **Problems found**. If the name matches a Journal already in the app, you can rename the import or choose **Overwrite existing journal**. Overwriting replaces the existing Journal without keeping a copy, so export it first if you might want it back. A file holding a list of Journals imports right away without the review sheet and adds a number to any matching name so nothing gets overwritten.

Saving a Journal does not create a separate backup file, so export as JSON from **Settings > Files** whenever you want a copy you control. The app does try to keep a backup copy in a few specific situations:

- A storage move (including moving into or out of iCloud) or **Import Previous Folder** finds a Journal with the same name in both places.
- A restore replaces a Journal in the iOS, Android, Windows, macOS, or Linux apps. A restore in the web demo keeps no copy.
- A successful iCloud save finds unresolved conflicting versions of a Journal, in which case the app tries to copy those versions into backups before marking them resolved. An ordinary save with no conflict makes no backup.

For full step-by-step export and import details, see [Sharing Adventure Journals](/resources/sharing-adventure-journals/).

## Using a copy in your notes app

If you like keeping a readable campaign log alongside your other RPG notes, export your Journal as Markdown and keep one file per campaign with a scannable name like `journal-elderspire.md` or `my-adventure-2026-09.md`.

If you prefer jotting down scenes by hand outside the app, here is a lightweight template you can copy and paste:

```markdown
### Scene N: Title (CF: X at start)

- Expectation: Expected | Altered | Interrupt
- Fate Question: ... (Odds: Likely, Roll: 43, Outcome: Yes) Interpretation: ...
- Random Event (if any): Focus: ... | Meaning: Action=..., Subject=... | Interpretation: ...
- Notes: 2 to 4 sentences about what actually happened

End-of-scene bookkeeping
- CF adjustment: -1 | +1 (reason)
- List changes: +Character ..., +Thread ..., -Feature ...
```

## Editing a Journal file by hand

You never have to open or edit a JSON file to use Journals. The app handles creating, reading, and exporting `.json` files for you.

If you do want to build a file by hand or inspect the structure, Mythic GME 1.7.0 and later export schema version 6 files using camelCase keys such as `journalName` and `chaosFactor`. The empty template in Downloads below (`journal_template.json`) uses the legacy schema 1 format with PascalCase keys. The app still imports it and converts it to schema 6, though it does not match the current export layout.

If you start from `journal_template.json`:

1. Make a copy with a clear name such as `my-adventure-2026.json` and keep the `.json` extension.
2. Fill in `JournalName` and set `ChaosFactor` to a number from 1 to 9. Both are required on import.
3. If you add scenes by hand, set `SceneChaosFactor` on each scene yourself.

For the complete schema 6 field reference, see [Journal Schema](/resources/journal-schema/).
