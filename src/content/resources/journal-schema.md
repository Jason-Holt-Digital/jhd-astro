---
fullArticleAvailable: true
title: "Journal Schema"
summary: "Reference for the Journal JSON file format."
category: "advanced"
order: 1
icon: "fa-slab fa-regular fa-link"
duration: "Reference"
updated: "2026-11-19"
tags: ["schema", "journals", "reference", "download"]
keywords:
  - Journal schema
  - JSON
  - Download
  - Mythic journal
downloads:
  - label: "Journal Schema (JSON)"
    href: "/downloads/journal.schema.json"
    format: "JSON"
  - label: "Empty Template"
    href: "/downloads/journal_template.json"
    format: "JSON"
  - label: "Filled Sample"
    href: "/downloads/journal_sample.json"
    format: "JSON"
related:
  - guide-to-the-mythic-journals
  - sharing-adventure-journals
---

> This page describes Mythic GME 1.7.0 and later.

## Overview

This reference documents the canonical JSON keys for Mythic GME Journal files (Schema 6). Use it when writing tools, inspecting exports, or validating Journal files. If you want a walkthrough of creating and managing journals inside the app, see [A Guide to the Mythic Journals](/resources/guide-to-the-mythic-journals/).

## Downloads

The Downloads section at the bottom of this page includes three JSON files.

- `/downloads/journal.schema.json` validates Schema 6 journals with camelCase keys written by Mythic GME 1.7.0 and later, and also validates older PascalCase legacy journals written before schema 3.
- `/downloads/journal_template.json` and `/downloads/journal_sample.json` remain older legacy Schema 1 starter examples with PascalCase keys such as `JournalName`.

If you start from `journal_template.json`, make a copy and rename it to a descriptive file name (such as `my-adventure-2025.json`) while keeping the `.json` extension. Because that template uses Schema 1 PascalCase keys, set `JournalName` inside the file before importing. The app reads the journal name from the field inside the file, not from the file name. Exports written by Mythic GME 1.7.0 and later use camelCase keys such as `journalName`.

## Canonical top-level fields

Mythic GME 1.7.0 and later write declared top-level fields in camelCase, including `journalName`, `chaosFactor`, `scenes`, and `logEntries`. On import, the app still accepts older PascalCase keys such as `JournalName` and converts them to their current names. When an imported file comes from a compatible newer schema version, the app keeps its unknown top-level fields with their original spelling. See Unknown and wrong-type fields below for nested-object behavior.

- `journalName` (string). Your journal or campaign name.
- `chaosFactor` (int, 1 to 9). Current Chaos Factor used for Fate checks and event odds.
- `scenes` (array of objects). Each scene object contains:
  - `title` (string). Optional scene title.
  - `sceneSummary` (string). Brief scene description.
  - `sceneChaosFactor` (int, 1 to 9, default `5`). Snapshot of the Chaos Factor at the start of the scene.
  - `sceneAdjustments` (array of objects). Structured adjustment records with `range`, `description`, `result`, `additionalAdjustments`, and `droppedAdjustment`. The app saves each Scene Adjustment roll as its own log entry with `rollType` set to `"Scene Adjustment"` and a `sceneAdjustment` object. It writes an empty `sceneAdjustments` list on every scene it creates, and that list is not a place for free text.
  - `createdAt` (ISO 8601 string). Timestamp when the scene was created.
- `characters` (array of strings). Names used when an Event Focus result such as NPC Action calls for a Character. Exports store strings, with `""` for an empty slot. Legacy object forms (`Character` or `character`) are accepted on import. In files with `schemaVersion` 0 to 2, a `"Choose"` placeholder becomes `""`. From schema 3 onward, `"Choose"` is read as an actual name.
- `threads` (array of strings). Plotlines used for Mythic results such as Close a Thread or Move Toward a Thread. An empty slot is `""`. Legacy object forms use `Thread` or `thread`.
- `features` (array of strings). Locations, objects, or concepts that add context to events. An empty slot is `""`. Legacy object forms use `Feature` or `feature`.
- `activatedThreadSections`, `activatedCharacterSections`, and `activatedFeatureSections` (int, default `1`). Number of 5-item sections active in each list. The app displays 1 to 5 sections, so up to 25 items per list are visible and used for rolls. The 25-item limit is the display and roll capacity, not a documented import limit. Older files use PascalCase names such as `ActivatedThreadSections`.
- `logEntries` (array of objects). Oracle and dice history. Common fields:
  - `rollType` (string). Free-form string rather than a closed enum. Examples produced by Mythic GME 1.7.0 and later include `"Scene"`, `"Fate Chart"`, `"Fate Check"`, `"Scene Check"`, `"Scene Adjustment"`, `"Random Event"`, `"Event Focus"`, `"Meaning Table"`, `"Narrative"`, `"Keyed Scene"`, `"Discovery Fate Question"`, and `"General dice roll"`. A missing `rollType` is read as `"Unknown"`. A `"Scene"` entry acts as a scene separator whose `outcome` is the scene title, `odds` is `""`, and `sceneId` matches the scene's `createdAt` value. A `"General dice roll"` entry has `odds` set to `"N/A"`, an empty `question`, and `outcome` formatted as `"<formula> = <total>"`.
  - `question` (string). Text typed for a Fate question. A Scene Check entry stores `"Scene Check"` here, and its `outcome` holds the scene label in the app's language (for example, `"Expected Scene"` in English).
  - `odds` (string). Odds descriptor such as `"Likely"` or `"50/50"`.
  - `chaosFactor` (int). Chaos Factor at the time of the roll.
  - `rollResult` (int). The d100 result for a Fate Chart roll, or the total for a Fate Check.
  - `outcome` (string, default `"Unknown"`). Result text, such as `"Yes"` or `"Exceptional No"` for a Fate question, or the localized scene label for a Scene Check. The schema does not restrict this field to a fixed list of values.
  - `isSceneCheck` (bool). `true` when the entry is a Scene Check result.
  - `timestamp` (ISO 8601 string). Time the entry occurred. The app always writes this field. A missing `timestamp` is read as `1970-01-01`.
  - Optional log fields (omitted when empty) include `individualDieResults`, `modifierValue`, `modifiedTotal` (Fate Check details), `randomEvent`, `eventFocus`, `eventFocusRoll`, `sceneAdjustment`, `sceneAdjustmentRoll`, `sceneCheckResult`, `meaningTableName`, `discoveryExplanation`, `diceFormula`, `diceResults`, `diceSuccessCount`, `diceFailureCount`, `diceCriticalSuccessCount`, `diceCriticalFailureCount`, `diceRoll` (per-die record described below), and `sceneId` (links a `"Scene"` entry to its scene). `meaningDescriptions` and `discoverySubRolls` are always written as lists and may be empty.
  - `randomEvent` (object). Contains `eventFocus`, `meanings` (object mapping string labels to string values), `meaningDescriptions`, and `linkedResults`, plus optional `characterResult`, `threadResult`, `featureResult`, and `eventFocusRoll`.
  - `linkedResults` (array, inside `randomEvent` and `eventFocus`). Each item has `tableName`, `result`, and `roll`, with optional `characterResult`, `threadResult`, `featureResult`, and `customListResults` (object mapping string to string).
- `listNotes` (object). Free-form notes per list in `characterNotes`, `threadNotes`, and `featureNotes`. Optional on import and omitted on export when empty.
- `schemaVersion` (int, current `6`). Data schema version used for migration. The app writes `schemaVersion` `6` and `minReaderVersion` `4` or `6` (see Mixed app versions below). Older files migrate on load and save as schema 6.
- `minReaderVersion` (int). Oldest schema a reader must understand to open the file. The app shows `"Update required"` if `minReaderVersion` is above `6`. When `minReaderVersion` is absent, the app checks `schemaVersion` instead. A file with a higher `schemaVersion` and a `minReaderVersion` of `6` or lower still loads, keeps its unknown top-level keys, keeps its higher `schemaVersion` on save, and keeps its own `minReaderVersion` when that value is higher than what the app would write.
- Always-written export keys. Exports also always include `customLists`, `threadProgressTracks`, `keyedScenes`, `tableProgressPoints`, `rev`, `base`, and `minReaderVersion`. `lastCharacterRoll`, `lastThreadRoll`, and `lastFeatureRoll` appear only when set.

## Mixed app versions

Version 1.6.8 wrote schema 4. Version 1.7.0 and later write `schemaVersion` `6` and set `minReaderVersion` to the oldest version that preserves all data in the Journal:

- `minReaderVersion` is `4` when version 1.6.8 can keep every field. Version 1.6.8 opens the Journal normally. Custom Lists and Progress Points do not raise this value because 1.6.8 preserves them in the file even though it does not display them.
- `minReaderVersion` is `6` when the Journal holds data that 1.6.8 would lose or misread. That includes a dice roll logged in dice mode, a scene added in 1.7.0 (which adds a `"Scene"` entry to the Adventure Log), linked table results on a Random Event or Event Focus, a Progress Track with Conclusion, Leverage, Protection, or Horror data, a Keyed Scene waiting for the next scene, or a list entry named `"Choose"`. Version 1.6.8 shows `"Update required"` for these Journals.

Version 1.6.7 and earlier do not check `minReaderVersion`. They open the Journal and drop data they do not recognize when saving. Update every device to 1.7.0 if you play across multiple devices.

## Unknown and wrong-type fields

- Unknown keys are kept at the top level of the Journal and inside `threadProgressTracks`, `leverages`, and `protections`.
- Unknown keys inside `scenes`, `logEntries`, `customLists`, and `keyedScenes` are dropped on save.
- A field with the wrong JSON type (such as text where a number is required) prevents the entire Journal from loading.

## Dice roll record (`diceRoll`)

A `"General dice roll"` log entry can include `diceRoll` with per-die details.

- `dice` (array). One object per die.
- `pushCount` (int, default `0`). Number of times the roll was pushed.
- `pushLimit` (int, optional). Maximum pushes allowed by the formula, from `@push=N`.
- `pushedFrom` (ISO 8601 string, optional). The `timestamp` of the entry that was pushed. A `"General dice roll"` entry with `pushedFrom` set appears in the Adventure Log as `"Pushed dice roll"`.

Each die object in `dice` supports these fields:

- `value` (int, required). Face value shown by the die.
- `type` (string, required). One of `numbered`, `fate`, `d66`, `custom`, or `constant`. If a die uses another type, the app keeps the entire `diceRoll` record untouched and writes it back on save, displays the roll from `diceResults`, and disables pushing for that roll.
- `sides` (int). Number of sides.
- `faces` (array of int). Faces of the die. Required for `fate` and `custom`.
- `components` (array of two ints, 1 to 6). The two dice that make up a `d66`.
- `pool` (string). Dice pool label when the formula uses one.
- `kept` (bool, default `true`). `false` when the die was dropped.
- `locked`, `subtracted`, `success`, `failure`, `criticalSuccess`, `criticalFailure`, and `totaled` (bool, default `false`).
- `scoreRules` (array). Scoring rules applied to the die. Each rule has `count` (`"s"`, `"f"`, `"cs"`, or `"cf"`), `comparison` (`"="`, `"<"`, `"<="`, `">"`, or `">="`), and `target` (int).
- `lock` (string). `"s"`, `"sf"`, or `"none"`, from the formula's `@lock` tag.

## Custom Lists (`customLists`)

Each item contains `id` (string, required), `name` (string), `entries` (array of strings, where `""` is an empty slot), and `notes` (string).

## Thread Progress Tracks (`threadProgressTracks`)

Each track requires:

- `id` (string)
- `focusThreadName` (string)
- `trackType` (string). `"thread"` or `"horror"`.
- `trackLength` (string). `"short"`, `"medium"`, `"long"`, or `"custom"`.
- `createdAt` (ISO 8601 string)

If a track uses any other `trackType` or `trackLength`, the app hides it in the UI while keeping it unchanged in the file on save.

Optional fields include `customPoints` (int), `currentProgress` (int), `isResolved` (bool), `endedUnresolved` (bool), `isArchived` (bool), `flashpointPerPhase` (object mapping phase to bool), `conclusionDelayed` (bool), `conclusionPlayed` (bool), `leverages` (array), `protections` (array), `horrorPlotArmorEnabled` (bool, default `true`), and `updatedAt` (ISO 8601 string).

- `leverages` (array). Each item has `id`, `name`, `createdAt`, `lost`, and `strengthenedCount`.
- `protections` (array). Each item has `id`, `name`, `createdAt`, and `lost`.

## Keyed Scenes (`keyedScenes`)

Each item requires `id`, `name`, `triggerDescription`, `eventDescription`, and `createdAt` (ISO 8601 string).

Optional fields include `count` (int), `targetCount` (int), `isRecurring` (bool), `autoIncrement` (bool), `isActive` (bool), `triggeredOnScenes` (array of ISO 8601 strings), and `awaitingNextScene` (bool).

## Progress Points (`tableProgressPoints`)

An object mapping a table name to its Progress Points, such as `{"Actions": 3}`. Each value is kept between 1 and 99. A value of 0 or less is dropped.

## Markdown export

Markdown export is for reading only. It omits `customLists`, `threadProgressTracks`, `keyedScenes`, `tableProgressPoints`, and `diceRoll`, and the app cannot import Markdown files.

## Alignment with Mythic mechanics

- Scene outcomes live in the log rather than on scene objects. A Scene Check log entry sets `isSceneCheck` to `true` and stores the localized scene label in both `outcome` and `sceneCheckResult` (for example, `"Expected Scene"` in English).
- Random Events store their details in `randomEvent.eventFocus`, `meanings`, and optional ties (`characterResult`, `threadResult`, `featureResult`).
- When Chaos Factor changes, update the top-level `chaosFactor` to the new value. Keep `sceneChaosFactor` on each scene as the snapshot from the start of that scene, and record any note about the change in a log entry rather than in `sceneAdjustments`.
- Adventure Lists drive event connections and expand through `activatedThreadSections`, `activatedCharacterSections`, and `activatedFeatureSections` up to 25 visible items per list.

## Minimal skeleton

This minimal example uses Schema 6 camelCase keys. A full export written by the app contains additional fields. It differs from `journal_template.json`, which is a legacy Schema 1 file with PascalCase keys.

```json
{
  "journalName": "My Adventure",
  "chaosFactor": 5,
  "scenes": [],
  "characters": [],
  "threads": [],
  "features": [],
  "logEntries": [],
  "schemaVersion": 6,
  "minReaderVersion": 4
}
```

## Fuller example

This example includes one scene, a scene separator entry, a General dice roll with `diceRoll`, and one item in each of the newer lists. An export written by the app also includes the other top-level fields documented above.

```json
{
  "journalName": "Harbor Mystery",
  "chaosFactor": 5,
  "scenes": [
    {
      "title": "The docks",
      "sceneSummary": "We look for the smuggler at night.",
      "createdAt": "2026-11-01T18:00:00.000Z",
      "sceneChaosFactor": 5,
      "sceneAdjustments": []
    }
  ],
  "characters": ["Harbor master", ""],
  "threads": ["Find the smuggler"],
  "features": [],
  "logEntries": [
    {
      "timestamp": "2026-11-01T18:00:00.000Z",
      "rollType": "Scene",
      "odds": "",
      "chaosFactor": 5,
      "question": "",
      "outcome": "The docks",
      "rollResult": 0,
      "isSceneCheck": false,
      "sceneId": "2026-11-01T18:00:00.000Z"
    },
    {
      "timestamp": "2026-11-01T18:05:00.000Z",
      "rollType": "General dice roll",
      "odds": "N/A",
      "chaosFactor": 5,
      "question": "",
      "outcome": "2d6 = 7",
      "rollResult": 7,
      "isSceneCheck": false,
      "diceFormula": "2d6",
      "diceResults": [3, 4],
      "diceRoll": {
        "dice": [
          { "value": 3, "type": "numbered", "sides": 6 },
          { "value": 4, "type": "numbered", "sides": 6 }
        ],
        "pushCount": 0
      }
    }
  ],
  "customLists": [
    { "id": "list-1", "name": "Clues", "entries": ["A torn map", ""], "notes": "" }
  ],
  "threadProgressTracks": [
    {
      "id": "track-1",
      "focusThreadName": "Find the smuggler",
      "trackType": "thread",
      "trackLength": "medium",
      "createdAt": "2026-11-01T18:00:00.000Z",
      "currentProgress": 2
    }
  ],
  "keyedScenes": [
    {
      "id": "key-1",
      "name": "The storm",
      "triggerDescription": "The Chaos Factor reaches 7",
      "eventDescription": "A storm hits the harbor",
      "createdAt": "2026-11-01T18:00:00.000Z"
    }
  ],
  "tableProgressPoints": { "Actions": 3 },
  "schemaVersion": 6,
  "minReaderVersion": 6
}
```

## Import requirements

To import a Journal, the file must contain a recognized Journal name key (`journalName`, or `JournalName` in older files) and a Chaos Factor key (`chaosFactor` or `ChaosFactor`). Many other fields have defaults in the data model, though the import screen runs its own validation checks that can differ from those defaults.
