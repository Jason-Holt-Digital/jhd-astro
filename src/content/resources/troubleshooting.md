---
fullArticleAvailable: true
title: "Troubleshooting"
summary: "What to do about backups, import and storage messages, and iCloud sync problems, and how to report a bug."
category: "adventure-journals"
order: 2
icon: "fa-slab fa-regular fa-life-ring"
duration: "Quick checklist"
updated: "2026-11-19"
tags: ["troubleshooting", "support"]
keywords:
  - Troubleshooting
  - Support
  - Help
---

> This page describes Mythic GME 1.7.0 and later.

If something looks off with your Journals, backups, storage folder, or iCloud Sync, start here.

## I need a backup of my Journal

An ordinary save does not create a separate backup file. To keep your own backup, open the Journal, go to **Settings > Files**, and select **Export journal as JSON**.

The app creates automatic backup copies only in these situations:

- A storage move (including turning iCloud Sync on or off) or **Import Previous Folder** finds a Journal with the same name in both places. The copy the app does not keep becomes the backup.
- A restore replaces a Journal in the iOS, Android, Windows, macOS, or Linux app. A restore in the web demo keeps no copy.
- A Journal saved in iCloud has conflicting versions. When the app saves that Journal, it tries to copy the other versions into separate backup files.

## The Restore from Backup list is empty

That is normal. Because ordinary saves do not create backups, the list stays empty until one of the backup events above happens.

When backup copies are listed, check the date on a copy before restoring it. Copies saved from an iCloud conflict do not appear in this list. To read those, tap the badge on that Journal's row.

Here is how long the app keeps automatic backups:

- In folder storage, backups from a storage move or **Import Previous Folder** may be deleted once they are older than 7 days and the device is low on memory.
- The app never deletes backups created when a restore replaces a Journal.
- The app never deletes backup copies kept in iCloud.

## Restoring a Journal

Open **Settings > Files** and tap a Journal's **More options** menu to find **Restore from Backup** and **Restore from File**. Both replace the Journal after you confirm.

In the iOS, Android, Windows, macOS, and Linux apps, the app keeps a backup copy of the Journal it replaces. In the web demo, **Restore from Backup** is not available. **Restore from File** is available there, and it keeps no copy of the Journal it replaces.

## I created a Journal and an older one is gone

If you create a Journal using a name that already exists, check the confirmation box, and confirm, the new empty Journal replaces the old one. The old Journal's contents are deleted and no new backup copy is made, though any earlier backups remain untouched.

Journal names ignore letter case, so `Elderspire` and `elderspire` count as the same name.

## Messages about Journals

- **Update required: update Mythic GME to open this Journal.** A newer version of the app saved this file. Update Mythic GME and open it again.
- **You cannot delete your only Journal. Create another Journal first.** The app always keeps at least one Journal. Create another Journal first, then delete the one you no longer want.
- **The Journal could not be imported.** You may see this message or a more specific one like **Select a .json Journal file.** or **This file is not valid JSON.** Make sure the file ends in `.json`, contains valid JSON, and holds a Journal.
- **Unable to Import Journal.** Check the **Problems found** list on the review sheet to see what the file is missing.

## Storage Access Needed

A full screen with the title **Storage Access Needed** means the app's storage is not ready. Select **Choose Storage Folder** to pick a folder, or select **Use App Documents** to use the app's own folder. If you see a **Retry** button instead, select it to check your storage folder again.

If you see a notice about a folder you chose earlier, the app could not open that folder and fell back to its default folder. It stays on the default folder, even after a restart, until you switch it back. Everything you play in the meantime saves to the default folder. Select **Reconnect** (which switches back only if the app can open that folder), **Choose folder**, or **Use app default**.

## A Journal named "(Conflicted copy ...)" appeared

This happens in folder storage when a Journal file changes outside the app while you have unsaved changes. The app opens the version from disk and saves your unsaved changes as a separate Journal.

Its name combines the original Journal name, `(Conflicted copy`, the device name, and the date and time. Look for it in your Journals list.

## iCloud Sync

**Use iCloud Sync** is available on iPhone, iPad, and some Mac versions of the app. It is not in the web demo, and the app marks it as experimental.

While sync is on, **Change Location** and **Reset Location** are disabled, and the section shows **iCloud Status** along with a **Force Sync** button.

If the status shows a problem, select the help icon beside the switch:

- If iCloud is unavailable, **Set up iCloud sync** opens with steps to turn on iCloud Drive.
- If sync failed, **iCloud Sync Error** opens with recovery steps. If **Use iCloud Sync** is off, turn it back on. If it is already on, select **Force Sync** to reload your Journals list from iCloud.

Before moving files, the app asks you to confirm and tells you what will be copied or replaced:

- **Turning iCloud Sync on.** Moves your Journals, saved formulas, custom tables, and category lists from this device into iCloud. Afterward, the app removes local originals that have not changed since they were copied, as long as their copies or merged results in iCloud are also unchanged. Backup copies stay where they were, along with any files that cannot be read, have changed, or cannot be checked or safely removed. Unreadable Journals may be skipped.
- **Turning iCloud Sync off.** Copies those files back to this device and leaves iCloud as it was, so your other devices still see them.
- **Name conflicts.** If both locations hold a Journal with the same file name, the app keeps the more recently modified one and backs up the other. If it cannot tell which is newer, it keeps the copy in the destination location.

## Reset Location

**Reset Location** moves every Journal back to the app's own folder. If your Journals are stored in another folder, the app asks you to confirm first. If they are already in the app's own folder, nothing moves and no prompt appears.

## Linux

File dialogs on Linux need `xdg-desktop-portal` and a portal backend. If the file window cannot open during import, export, or **Restore from File**, the app shows: `"The app could not open the file window. Install xdg-desktop-portal and a portal backend, then try again."`

## The web demo

In the web demo, Journals save in your browser on that device. You cannot choose custom folders or use cloud sync. Clearing site data or switching browsers can remove your Journals, so export them as JSON to keep them safe.

## Undo

Undo restores the last deleted Adventure Log entry, Scene, custom Meaning Table, custom Event Focus table, edited built-in table, or cleared list. The app remembers the last 20 deletions. Opening another Journal clears this history, and a cleared Custom List cannot be restored if the list itself no longer exists.

- **iOS and Android.** Shake the device, then select **Undo** when prompted.
- **Mac.** Press `Cmd+Z`.
- **Windows and Linux.** Press `Ctrl+Z`.

## Report a bug

In the app, open **Support**. Under **Contact Support**, choose **Email Support**, **Visit Support Website**, or **Join Our Discord Community**. You can also reach out anytime on the [Support page](/support/).

Include the version line from the Support screen so I can see both your app version and build number. Note that the copy icon beside it copies only the build number.
