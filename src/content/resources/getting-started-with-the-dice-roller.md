---
fullArticleAvailable: true
title: "Getting Started with Dice Studio"
summary: "A first look at rolling dice in the app."
category: "dice-roller"
order: 1
icon: "fa-slab fa-regular fa-star"
duration: "5 min read"
updated: "2026-11-04"
tags: ["dice", "getting-started"]
keywords:
  - Dice roller
  - Getting started
  - Roll dice
related:
  - dice-formulas-and-customization
  - saving-and-managing-dice-formulas
---

Dice Studio is where you build and test dice formulas. On a phone, open the drawer and tap DICE STUDIO. This quick start shows the basics so you can roll confidently right away.

> This guide describes Mythic GME 1.7.0 and later. Dice Studio, labels, Push and the 3D dice settings are new in 1.7.0. In 1.6.x, this screen is called Dice Roller.

> ##### Syntax engine and docs
> The roller uses the app's own version of Adventuresmith's dart_dice_parser. The pub.dev page describes the original package, so check a formula in the app before you rely on it. For the full grammar and additional examples, see: https://pub.dev/packages/dart_dice_parser

## Where rolls go

- A roll made in Dice Studio is a Studio test roll. It is not written to your Journal. Dice Studio keeps the 20 newest.
- A roll made in dice mode is written to your Journal as a General dice roll. To open dice mode, tap **Switch to Dice Roller**.
- The roll list in Dice Studio shows both.

## The layout at a glance
- **Formula field and Roll button:** Type a formula (for example, `1d20+5`) and tap **Roll**, the button with the d20 icon.
- **Tabs below the formula field:** Four tabs add to the formula for you.
  - **Dice:** d4, d6, d8, d10, d12, d20, D100, 1D66, d2 and 4dF.
  - **Join:** the operators `+`, `-` and `*`, parentheses, and your saved labels.
  - **Mod:** Advantage, Disadvantage, Keep High, Keep Lowest, Exploding, Compounding, Reroll 1s, Reroll ≤2, Count Criticals, Cap at X and Floor at X.
  - **Saved:** your saved formulas. Tap one to put it in the field, or tap its roll button to roll it.
- Type numbers yourself after a `+` or `-` (for example, `+2`). Type drop (`-H`, `-L`), reroll once (`ro`) and count (`#`) yourself too.
- **Roll list:** each row shows the formula, the dice, and the success and critical counts when the formula marks them. A check mark follows each success or critical success, a cross follows each failure or critical failure, and a lock comes before each die a push kept.

> Tip: A Studio test roll shows your formula with parentheses added. They show how the app grouped it.

## Labels
A dice pool is a group of dice with a label, such as `"Attack": 2d6, "Damage": 1d8`. A Studio test roll shows one line for each pool, with its color, its label, its total and its dice. In the Adventure Log, a labeled roll is one entry.

On the **Join** tab:
- Tap a saved label to put it in front of your dice.
- Tap **+** to save a new label.
- Long-press a label to rename it, remove it, change the order of your labels or change its color.
- **Manage labels** lists every label, with a **Color** button under each name.

To choose a color, pick **Automatic**, one of the quick colors (White, Red, Black, Teal, Purple, Brown) or **Custom**. Custom lets you pick any color or type its hex code. Then tap **Done**. An Automatic label takes a quick color that the other pools in the roll are not using.

Renaming or removing a label doesn't change formulas that already use it. A label can't contain `"`, and two labels can't differ only in upper and lower case.

## Build your first rolls
1) Tap a die button (for example, `d20`) and add a modifier (for example, `+5`).
2) Or type directly: `1d20+5`
3) To roll, tap **Roll**.

### Common examples
- D20 + bonus: `1d20+3`
- Advantage/Disadvantage: `2d20kh+5` (keep highest) or `2d20kl+5` (keep lowest)
- Damage dice: `2d6+3`
- Percentile: `1d%` (same as `1d100`)
- Fudge/Fate dice: `4dF`

### Helpful basics you can try later
- Keep/Drop: `3d20kh2` (keep 2 highest) or `4d6-L` (drop lowest)
- Exploding/Compounding: `4d6!` (explode) or `5d6!!` (compound); add `o` for once (`!o`, `!!o`)
- Reroll: `4d6r1` (reroll 1s), `4d6ro<2` (reroll once results under 2)
- Count successes: `6d6#>=5` (how many 5+)
- D66 (uppercase): `1D66` (lowercase `d66` is a 66‑sider)

Tip: Use parentheses for clarity when mixing pools, e.g., `(1d8!!+1d6!!) kh` (Savage Worlds trait + wild, keep highest).

## Push a roll
Push keeps your successes and rolls the other dice again, as in Year Zero games.
1) On your newest Studio test roll, tap the arrow at the end of the row.
2) Tap **Push**. The pushed roll is added as a new Studio test roll.

- You can also push a dice roll in your Adventure Log. The pushed roll is written to your Journal as a new **Pushed dice roll**, and the roll you pushed can't be pushed again.
- Add `@push=1` to a formula so it can be pushed only once, or `@lock=sf` to keep failures too.

For the full rules, including what Push doesn't re-roll and when it isn't offered, see [Dice Formulas & Customization](/resources/dice-formulas-and-customization/).

## Saving and managing formulas
- **Save Formula** saves the formula in the field and lets you give it a name and a description. On a phone the Save Formula and Manage Formulas buttons are under the formula field, and on a tablet or desktop they are above it.
- **Manage Formulas** opens the Saved Formulas list. There you can import, export, edit, reorder and delete formulas. The app asks you to confirm before it deletes a formula.
  - Import adds every formula in the file to the end of your Saved Formulas list. It does not check for duplicates.
  - If you place a file by hand, name it saved_formulas.json and put it in the formulas folder inside the app's storage folder. That file becomes your whole list.

## 3D dice
When **Animate dice rolls** is on, the app rolls 3D dice for d4, d6, d8, d10, d12, d20, d100 and D66. A d100 rolls two d10, one for tens and one for ones.

Some rolls show the result at once, with no 3D dice:
- more than 12 dice in one roll. A d100 or a D66 counts as 2.
- dF dice and custom-face dice
- formulas that explode, compound or reroll
- other die sizes, such as d2 or d30

When your device is set to reduce motion, no 3D dice show.

In Dice Studio, the **3D dice** panel has these settings:
- **Display duration** sets how long the dice stay on screen after they stop, from 1 to 15 seconds.
- **Gravity**, **Throw strength**, **Spin**, **Bounce** and **Friction** change how the dice move. Each starts at 1.00.
- **Reset** sets those five back to 1.00.
- **Sample roll** rolls one d6 so you can see the change. It is available only when **Animate dice rolls** is on and the device allows animations.
- While the dice are on screen, the panel moves out of the way.

**Dice sound:** With **Animate dice rolls** on, 3D dice make a sound when they hit the table, the edges of the screen, or each other. In Settings, the Dice Studio section has the **Dice sound** switch and a **Dice volume** slider.

## Results and readability
- **Show dice total** — Shows the total of each roll in the Dice Studio roll list. When off, a roll lists its dice without the total. A roll with no dice to list, such as a count, still shows its answer. The Adventure Log always shows the total. Dropped dice aren’t listed, and kept dice values generated by explosions still appear as ordinary numbers, without separate explosion highlighting.
- Short names and simple modifiers keep formulas scannable; add context in the Saved entry’s description when you save.

## Related guides
See the Related Guides section at the bottom of this page.
