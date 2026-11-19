---
fullArticleAvailable: true
title: "Setting Up a Prepared Adventure in the Mythic GME Apps"
summary: "How to set the app up for a published adventure with the Prepared Adventure Event Focus Table."
category: "start-here"
order: 5
icon: "fa-slab fa-regular fa-book-open"
duration: "4 min read"
updated: "2026-11-19"
tags: ["prepared-adventure", "modules", "event-focus", "random-events", "features", "scenes"]
keywords:
  - Mythic GME
  - Mythic GME Digital
  - Prepared adventure
  - Published module
  - Event Focus Table
  - Random Event
  - Adventure Feature
  - Features List
  - Chaos Factor
  - Expected Scene
related:
  - writing-and-organizing-scenes
  - setting-up-and-using-lists
  - using-meaning-tables-for-inspiration
---

> This guide covers Mythic GME 1.7.0 and later.

Running a prepared adventure (like a published D&D module) with Mythic takes a few setup steps. There is no separate Prepared Adventure toggle in the app. Prepared Adventure rules turn on automatically whenever you pick a prepared Event Focus table.

## 1. Switch your Event Focus Table

Start by selecting the **Prepared Adventure Event Focus Table**:

1. On a phone, open the navigation drawer, tap **Settings**, go to the **Game Behavior** tab, and find **Event Focus Table** under **Fate Chart**. You can also tap the gear icon on the Fate screen for the same control. On a tablet or desktop, open **Settings** from the navigation rail and go to **Fate Chart**, or tap the gear icon on the Fate panel.
2. Select **Prepared Adventure Event Focus Table** (or **Published Adventure Event Focus Table**, if you have Expanded Features).

This table leaves out events that a published module already handles (such as "Move Toward a Thread" or "New NPC") and adds **Adventure Feature** as a Random Event. Mythic can still throw surprises into play without fighting the module's plot.

## 2. Fill in your Features list

Open **Lists** and go to the **Features** tab. Add recurring elements from the adventure that could turn up as Random Events, such as:

- Wandering monster encounters
- Special environmental hazards
- Random visions or dreams
- Sudden NPC appearances
- Random encounter tables from the module
- Special mechanics like poison progression or pursuit by a villain

For a vampire-hunting module, your Features list might hold "Vampire lord attacks", "Random vision", "Wandering monster", and "Weather worsens".

When a Random Event rolls **Adventure Feature**, the app rolls on your Features list and shows the entry in the **Adventure Log**. If the roll lands on an empty slot, the app shows **Choose**, and you pick an entry yourself.

## 3. Set up Characters and Threads

As you read the adventure's introduction, fill in your other two main lists:

- Add key NPCs to your **Characters** list.
- Add plot hooks and main objectives to your **Threads** list.

That gives Mythic concrete people and goals to pull into play right from the opening scene.

## How Prepared Adventures change Scene Checks

Prepared Adventure rules stay active whenever you select the **Prepared Adventure Event Focus Table**, the **Published Adventure Event Focus Table**, or any custom Event Focus table tagged `prepared`. To get Altered Scene and Interrupt Scene results back, switch to an Event Focus table without the `prepared` tag.

While a prepared table is active, Scene Checks and Scene Adjust behave differently:

- **Expected Scenes only.** You run Expected Scenes as usual, with no Altered Scenes and no Interrupt Scenes.
- **Random Events add to the Expected Scene.** When you tap **Scene Check** and the roll is at or under the Chaos Factor, the app keeps the Expected Scene and adds a Random Event to that same Adventure Log entry. Keep playing your Expected Scene and do not roll another Random Event. The twist happens inside the scene instead of replacing it.
- **Scene Adjust stays hidden.** The **Scene Adjust** button is hidden by default while a prepared table is selected. To show it again, turn off **Hide Scene Adjust in Prepared Adventures** in Fate settings.

Start your first Scene from the adventure's opening and let Mythic add surprises as you explore.
