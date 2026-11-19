---
fullArticleAvailable: true
title: "Sharing Adventure Journals"
summary: "How to export a Journal as JSON or Markdown, and how to import a Journal file."
category: "adventure-journals"
order: 1
icon: "fa-slab fa-regular fa-share-nodes"
duration: "7 min read"
updated: "2026-11-19"
tags: ["journals", "sharing", "export", "import"]
keywords:
  - Share journals
  - Export
  - Import
  - JSON
related:
  - guide-to-the-mythic-journals
  - writing-and-organizing-scenes
---

> This guide describes Mythic GME 1.7.0 and later.

You can export any Journal as a file to back it up, move it to another device, or share it with a friend, and you can import Journal files right back into the app. Everything lives under **Settings > Files**, in the **Export Journal** and **Import Journal** sections.

## Export a Journal

Export always runs on the Journal you currently have open.

- **Export journal as JSON.** Saves the complete Journal. This is the only format the app can import back in.
- **Export journal as Markdown.** Saves a readable copy for notes apps or sharing with friends. It includes the Chaos Factor, your scenes, your Characters, Threads, and Features with their notes, and every Log Entry. It leaves out Custom Lists, Thread Progress Tracks, Keyed Scenes, Progress Points, and the per-die dice record, and it cannot be imported back into the app.

The exported file is named after your Journal. On iOS and Android, exporting opens the share sheet so you can send the file over AirDrop, save it to the Files app, iCloud Drive, or Google Drive, or share it through another app. On Windows, macOS, and Linux, a save dialog opens so you can save the file to your computer or into a synced folder such as iCloud Drive or Google Drive.

Because an ordinary save does not make a separate backup file, exporting as JSON is the best way to keep your own copy. The app creates automatic backup copies only when a restore replaces a Journal in the native apps, or when a storage move or **Import Previous Folder** finds the same Journal in both places. The one exception during a save is a Journal in iCloud with conflicting versions, where saving can prompt the app to copy the other versions into separate backup files.

## Import a Journal

1. Open **Settings > Files**, select **Import journal from file**, and choose a `.json` file from Files, iCloud Drive, Google Drive, or local storage.
2. Check the **Review Journal Import** sheet. It shows the Journal's details along with **Problems found** and **Notes** if anything needs attention.
3. Select **Import Journal**. The imported Journal becomes your open Journal.

The Journal's name comes from inside the file rather than from the file name on disk. Files saved in older versions of the app still import, and the app converts them automatically.

### If the name is already in use

When an imported Journal shares a name with one you already have, the sheet shows **Journal Name Conflict** with two options:

- **Rename imported journal.** Selected by default. The app suggests the same name with "copy" added. Select **Rename and Import** to keep both Journals.
- **Overwrite existing journal.** Replaces the Journal already in the app. Check **I understand this will overwrite the existing journal**, then select **Overwrite and Import**. The app keeps no backup copy of the Journal it replaces, so export that Journal first if you might want it back.

### If the file cannot be imported

- **Unable to Import Journal.** A single-Journal file is missing a Journal name, a Chaos Factor from 1 to 9, or the `scenes`, `characters`, `threads`, or `features` list. The review sheet lists exactly what is missing. Older files that use `campaignName` do not need a `features` list. A list that is present but empty or `null` shows a warning instead of an error, while a field that is not a list causes an error. Files holding multiple Journals do not use this review sheet.
- **Update required: update Mythic GME to open this Journal.** A newer version of the app saved the file. Update Mythic GME and import the file again.

### Importing a file with several Journals

A file containing a list of Journals imports immediately with no review sheet. If a name is already in use, the app adds a number such as ` (1)` to the imported Journal's name, so a multi-Journal file never overwrites an existing Journal.

The app reads every entry in the file before saving any of them. If any entry cannot be read as a Journal (for instance, one saved in a newer format your version of the app cannot read), nothing from the file is imported. An entry that is only missing some optional details still imports with default values. If a Journal fails while being saved, the app skips it, imports the rest, and tells you how many failed.

## Restore from File is not import

You will also see **Restore from File** in a Journal's **More options** menu. Unlike Import, it replaces that specific Journal with the contents of a `.json` file after you confirm, while keeping the Journal's existing file name.

In the iOS, Android, Windows, macOS, and Linux apps, **Restore from File** saves a backup copy of the Journal it replaces. In the web demo, it keeps no copy, so export the Journal first if you might want to go back.

## Linux and the web demo

On Linux, importing and exporting files requires `xdg-desktop-portal` and a portal backend.

In the web demo, Journals live in your browser's storage on that device. Export your Journals as JSON to back them up or move them to another device.
