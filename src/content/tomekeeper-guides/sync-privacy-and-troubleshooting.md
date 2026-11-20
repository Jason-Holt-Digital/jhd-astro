---
title: "Sync, Privacy, and Troubleshooting"
summary: "Set up optional iCloud Sync or Google Drive Sync, see where files live, and fix common snags."
category: "sync-and-help"
order: 6
icon: "fa-slab fa-regular fa-cloud"
duration: "5 min read"
updated: "2026-11-19"
tags:
  - sync
  - icloud
  - google-drive
  - privacy
  - troubleshooting
keywords:
  - icloud sync
  - google drive sync
  - windows storage
  - privacy
  - diagnostics
  - troubleshooting
  - ocr
  - heic
related:
  - importing-books-and-using-sets
  - clipping-from-books-onto-a-table
  - building-your-table-with-notes-pdfs-and-dice
---

Tome Keeper keeps your books, notes, and Tables on your device first. Cloud sync is optional and uses your own cloud storage rather than a Jason Holt Digital server.

## Sync on iPhone, iPad, and Mac with iCloud Sync

Open **Settings > SYNC > iCloud Sync** on each Apple device you want to sync. Sync is off by default and stores data in your private iCloud database.

Use the **Sync book files** toggle to control how book PDFs move between devices. Leave it on to upload your book PDFs to iCloud, or turn it off to keep book PDFs local while still syncing Sets, bookmarks, Page Tags, reading positions, and Tables. PDF attachments on Tables (including PDF character sheets added through **Components > Import**) still sync when this toggle is off. Books stored only in iCloud show a cloud badge and download automatically the moment you open them.

## Sync on Android with Google Drive Sync

Open **Settings > SYNC > Google Drive Sync** on each Android device and pick a Google account. Tome Keeper writes sync data to a private app data folder inside your own Google Drive.

Sets, bookmarks, Page Tags, reading positions, and Tables sync in the background on any connection. Book PDFs upload on Wi-Fi only so large rulebooks do not use up your mobile data.

## Local storage on Windows

On Windows, Tome Keeper stores your database, imported PDFs, and Tables locally in your user app-support folder. Keeping them outside synced desktop folders prevents OneDrive file locks and conflicts. Windows does not include cloud sync or the app-icon picker.

## Privacy and diagnostics

Tome Keeper requires no account, shows no ads, and runs no Jason Holt Digital library server. Your books stay on your device or in your own private iCloud or Google Drive space.

Tome Keeper includes opt-out crash and performance reporting through Sentry under **Settings > DIAGNOSTICS > Share diagnostics**. You can turn it off at any time. Diagnostic reports never contain your PDFs, book titles, notes, or screenshots.

## Common snags and honest limits

- **DriveThruRPG key will not connect.** Check that **My Library Access** is turned on for your Application Key in DriveThruRPG, paste the key again, and retry.
- **Search misses words in a book.** Search reads bookmarks, Page Tags, the table of contents, and embedded PDF text. Scanned image-only PDFs are not OCR-searchable.
- **No ink markup, text highlighters, or Table undo.** Tome Keeper does not include freehand PDF ink or text highlighters on book pages, and Table does not have undo yet.
- **HEIC images will not import on Windows.** Windows does not support HEIC images in Tome Keeper. Convert the image to PNG, JPG, or WebP before importing.
- **Sync stopped after an account change or full storage.** Free space in your iCloud or Google Drive account, or confirm the active account in **Settings > SYNC** and tap **Try again**.

If something still does not work, check the [Tome Keeper support page](/tomekeeper/support/) or email [ryan@jasonholtdigital.com](mailto:ryan@jasonholtdigital.com).
