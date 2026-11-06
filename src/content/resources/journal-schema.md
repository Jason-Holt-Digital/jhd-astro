---
fullArticleAvailable: true
title: Journal Schema
summary: "Reference for the Journal JSON file format."
category: advanced
order: 1
icon: fa-slab fa-regular fa-link
duration: Reference
updated: 2026-11-04
tags: ["schema", "journals", "reference", "download"]
keywords:
  - Journal schema
  - JSON
  - Download
  - Mythic journal
downloads:
  - label: "Legacy Schema 1 Journal Validator (JSON)"
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

This page documents the canonical keys for the Mythic Journal export format and how each field is used. If you’re building tools or validating exports, start here. For a practical walkthrough of creating and managing journals, see [A Guide to the Mythic Journals](/resources/guide-to-the-mythic-journals/).

Plain English: You don’t need to know code to use journals. “JSON” is just a structured text file the app reads and writes, and the “schema” below is a rulebook for tools to validate those files. If you’re not building tooling, you can safely skip the details here.

## Downloads

See the Downloads section at the bottom of this page for files. The JSON schema download there is a legacy schema 1 validator that expects PascalCase top-level keys such as `JournalName`. It is not a validator for the camelCase schema 6 files that Mythic GME 1.7.0 and later export. For current key names such as `journalName`, use the schema 6 field reference on this page.

Tip: After downloading the empty template, make a copy and rename it from `journal_template.json` to a meaningful name (for example: `my-adventure-2025.json`). Keep the `.json` extension. The template is a legacy schema 1 file with PascalCase keys, so the Journal's name comes from the `JournalName` field inside the file, not from the file's name. Set `JournalName` before you import. Files that Mythic GME 1.7.0 and later export use camelCase keys such as `journalName`.

## Field reference (canonical export keys)

The app writes the journal's declared top-level fields in camelCase, for example journalName, chaosFactor, scenes, and logEntries. Known older keys, such as the PascalCase JournalName, are still read from old files and converted to their current names. When an imported file comes from a compatible newer schema version, its unknown top-level fields can be written back with their original spelling. See Unknown and wrong-type fields below for which nested objects keep unknown keys.

- `journalName` (string): Your journal/campaign name.
- `chaosFactor` (int 1–9): Current CF used for checks and event odds.
- `scenes` (array of objects): Each scene has:
  - `title` (string): Optional title.
  - `sceneSummary` (string): Brief description.
  - `sceneChaosFactor` (int 1–9, default 5): CF at the scene’s start (snapshot).
  - `sceneAdjustments` (array of objects): Structured adjustment records with `range`, `description`, `result`, `additionalAdjustments`, and `droppedAdjustment`.
  - The app saves a Scene Adjustment roll as its own log entry, with rollType Scene Adjustment and a sceneAdjustment object. It writes an empty sceneAdjustments list on every scene it creates, and that list is not a place for free text.
  - `createdAt` (ISO8601 string): When the scene was created.
- characters (array): names used when an Event Focus result such as NPC Action calls for a Character. Export is strings, and an empty slot is an empty string. Legacy object forms (`Character` or `character`) are accepted on import. In files with schemaVersion 0–2, a Choose placeholder becomes an empty string; from schema 3 onward, Choose is read as an actual name.
- `threads` (array<string>): Plotlines used for Mythic results like “Close a Thread” or “Move Toward a Thread”. An empty slot is an empty string; legacy object forms use `Thread` or `thread`.
- `features` (array<string>): Locations/objects/concepts that flavor events and context. An empty slot is an empty string; legacy object forms use `Feature` or `feature`.
- `activatedThreadSections` / `activatedCharacterSections` / `activatedFeatureSections` (int, default 1): How many 5‑item sections are active in each list. The app shows 1–5 sections, so up to 25 items per list are visible and used for rolls. The 25-item figure is the display and roll capacity, not a documented import limit. Older files use the PascalCase names, such as `ActivatedThreadSections`.
- `logEntries` (array of objects): Oracle history. Common fields:
  - rollType is a free-form string, not a closed list of values. Examples that Mythic GME 1.7.0 and later produce: Scene, Fate Chart, Fate Check, Scene Check, Scene Adjustment, Random Event, Event Focus, Meaning Table, Narrative, Keyed Scene, Discovery Fate Question, and General dice roll. A missing rollType is read as Unknown. A Scene entry is a scene separator: its outcome is the scene title, its odds is an empty string, and its sceneId is the scene's createdAt value. A General dice roll entry has odds N/A, an empty question, and an outcome in the form `<formula> = <total>`.
  - question (string): the text typed for a Fate question. A Scene Check entry stores the fixed text Scene Check here, and its outcome holds the scene label in the app's language, for example Expected Scene in English.
  - `odds` (string): Odds descriptor (e.g., Likely, 50/50).
  - `chaosFactor` (int): CF at the time of the roll.
  - `rollResult` (int): d100 for Fate Chart; total for Fate Check.
  - `outcome` (string, default Unknown): The result text, for example Yes or Exceptional No for a Fate question. For a Scene Check it holds the scene label in the app's language. The schema does not limit this field to a fixed list of values.
  - `isSceneCheck` (bool): True when the entry is a Scene Check result.
  - `timestamp` (ISO8601 string): When it happened. The app always writes it. A missing timestamp is read as 1970-01-01.
  - Optional: `individualDieResults`, `modifierValue`, `modifiedTotal` (Fate Check details),
    `randomEvent`, `eventFocus`, `sceneAdjustment`, `sceneAdjustmentRoll`, `diceRoll`, `sceneId`.
  - `randomEvent` (object): `eventFocus`, `meanings` (a map of string labels to string values), `meaningDescriptions`, and `linkedResults`, plus the optional ties `characterResult`, `threadResult`, and `featureResult` and an optional `eventFocusRoll`.
  - Other optional log fields are eventFocusRoll, sceneCheckResult, meaningTableName, discoveryExplanation, diceFormula, and diceResults. meaningDescriptions and discoverySubRolls are always written as lists and may be empty. diceSuccessCount, diceFailureCount, diceCriticalSuccessCount, and diceCriticalFailureCount are also optional. diceRoll is the per-die record of a General dice roll, described below. sceneId links a Scene entry to its scene. Optional log fields are omitted when they have no value.
  - `linkedResults` (array, in `randomEvent` and `eventFocus`): each item has `tableName`, `result`, and `roll`, with optional `characterResult`, `threadResult`, and `featureResult`, and `customListResults` (an object of string to string).
- listNotes (object): free-form notes per list, in characterNotes, threadNotes, and featureNotes. It is optional in a file you import, and an export omits it when it has no value.
- schemaVersion (int, current = 6): the data schema version, used for migration. The app writes schemaVersion 6, and minReaderVersion 4 or 6 (see Mixed app versions below). Older files are migrated when they load and saved as schema 6.
- minReaderVersion (int): the oldest schema a reader must understand to open the file. The app shows "Update required" for a file whose minReaderVersion is above 6. When a file has no minReaderVersion, the app checks schemaVersion instead. A file with a higher schemaVersion but a minReaderVersion of 6 or lower still loads, keeps its unknown top-level keys, and keeps its higher schemaVersion when saved. It also keeps its own minReaderVersion when that is higher than the one the app would write.
- Exports also always contain customLists, threadProgressTracks, keyedScenes, tableProgressPoints, rev, base, and minReaderVersion. lastCharacterRoll, lastThreadRoll, and lastFeatureRoll appear only when they have a value.

### Mixed app versions

Version 1.6.8 of the app wrote schema 4. Version 1.7.0 and later write schemaVersion 6, and sets minReaderVersion to the oldest version that keeps all of the Journal's data:

- minReaderVersion 4 when version 1.6.8 keeps everything. 1.6.8 can open the Journal. Custom Lists and Progress Points don't change this: 1.6.8 keeps them in the file but doesn't show them.
- minReaderVersion 6 when the Journal holds data that 1.6.8 would lose or misread. That includes a dice roll logged in dice mode, a scene added in 1.7.0 (it adds a scene entry to the Adventure Log), linked table results on a Random Event or Event Focus, a Progress Track with Conclusion, Leverage, Protection or Horror data, a Keyed Scene waiting for the next scene, and a list entry named Choose. 1.6.8 shows "Update required" for this Journal.

Version 1.6.7 and earlier don't check minReaderVersion. They open the Journal and drop the data they don't know when they save it. If you play on more than one device, update every device to 1.7.0.

### Unknown and wrong-type fields

- Unknown keys are kept at the top level of the Journal, and inside Thread Progress Tracks, Leverages, and Protections.
- Unknown keys inside scenes, log entries, Custom Lists, and Keyed Scenes are dropped when the app saves.
- A field with the wrong JSON type, for example text where a number belongs, stops the whole Journal from loading.

### Dice roll record (`diceRoll`)

A General dice roll entry can carry `diceRoll`, the record of every die.

- `dice` (array): one object per die.
- `pushCount` (int, default 0): how many times the roll was pushed.
- `pushLimit` (int, optional): how many pushes the formula allows, from `@push=N`.
- `pushedFrom` (ISO8601 string, optional): the `timestamp` of the entry that was pushed. A General dice roll entry with `pushedFrom` set shows in the Adventure Log as "Pushed dice roll".

Each die object:

- `value` (int, required): the face the die shows.
- `type` (string, required): one of `numbered`, `fate`, `d66`, `custom`, or `constant`. If a die has another type, the app keeps the whole `diceRoll` record as it is and writes it back when it saves. It shows that roll from `diceResults`, and the roll cannot be pushed.
- `sides` (int): the number of sides.
- `faces` (array of int): the faces of the die. Required for `fate` and `custom`.
- `components` (array of two ints from 1 to 6): the two dice of a `d66`.
- `pool` (string): the dice pool label, when the formula uses one.
- `kept` (bool, default true): false when the die was dropped.
- `locked`, `subtracted`, `success`, `failure`, `criticalSuccess`, `criticalFailure`, `totaled` (bool, default false).
- `scoreRules` (array): the counts that score the die. Each rule has `count` (`s`, `f`, `cs`, or `cf`), `comparison` (`=`, `<`, `<=`, `>`, or `>=`), and `target` (int).
- `lock` (string): `s`, `sf`, or `none`, from the formula's `@lock` tag.

### Custom Lists (`customLists`)

Each item has `id` (string, required), `name` (string), `entries` (array of strings, where an empty string is an empty slot), and `notes` (string).

### Thread Progress Tracks (`threadProgressTracks`)

Each track requires:

- `id` (string)
- `focusThreadName` (string)
- `trackType` (string): `thread` or `horror`.
- `trackLength` (string): `short`, `medium`, `long`, or `custom`.
- `createdAt` (ISO8601 string)

The app doesn't show a track with any other `trackType` or `trackLength` value. It keeps the track in the file and writes it back unchanged when it saves.

Optional fields: `customPoints` (int), `currentProgress` (int), `isResolved`, `endedUnresolved`, `isArchived` (bool), `flashpointPerPhase` (object of phase to bool), `conclusionDelayed`, `conclusionPlayed` (bool), `leverages`, `protections`, `horrorPlotArmorEnabled` (bool, default true), and `updatedAt` (ISO8601 string).

- `leverages` (array): each item has `id`, `name`, `createdAt`, `lost`, and `strengthenedCount`.
- `protections` (array): each item has `id`, `name`, `createdAt`, and `lost`.

### Keyed Scenes (`keyedScenes`)

Each item requires `id`, `name`, `triggerDescription`, `eventDescription`, and `createdAt` (ISO8601 string). Optional fields: `count` (int), `targetCount` (int), `isRecurring`, `autoIncrement`, `isActive` (bool), `triggeredOnScenes` (array of ISO8601 strings), and `awaitingNextScene` (bool).

### Progress Points (`tableProgressPoints`)

An object of table name to Progress Points, for example `{"Actions": 3}`. Each value is kept between 1 and 99. A value of zero or less is dropped.

### Markdown export

The Markdown export is for reading. It leaves out Custom Lists, Thread Progress Tracks, Keyed Scenes, Progress Points, and the per-die dice record, and the app cannot import it.

### Notes on alignment with Mythic

- Scene type is derived from the log: a scene has no outcome field. A Scene Check log entry has `isSceneCheck` set to true and stores the scene label in `outcome` and `sceneCheckResult`, in the app's language (for example Expected Scene in English).
- Random Events: Use `randomEvent.eventFocus`, `meanings`, and optional ties (`characterResult`, `threadResult`, `featureResult`).
- Chaos Factor shifts: When CF changes for a scene, set `sceneChaosFactor` on the scene and capture the rationale in a log entry, not in `sceneAdjustments`.
- Lists for inspiration: Adventure Lists drive event connections; expand with the `activated*Sections` fields as needed (up to 25 visible items per list).

## Minimal skeleton

This is a minimal example with the current schema 6 key names. It is not a complete export: a file exported by the app contains more fields. It is also different from the downloadable `journal_template.json`, which is a legacy schema 1 file with PascalCase keys.
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

This example has one scene, a scene separator entry, a General dice roll with its dice record, and one item in each of the newer lists. An app export also writes the other top-level fields listed above.
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

To import a Journal, the file needs a recognized Journal name key (`journalName`, or `JournalName` in older files) and a Chaos Factor key (`chaosFactor` or `ChaosFactor`). Many other fields have default values in the data format, but the import screen runs its own checks, which can differ from those defaults.
