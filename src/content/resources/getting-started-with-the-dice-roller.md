---
fullArticleAvailable: true
title: "Getting Started with Dice Studio"
summary: "A first look at rolling dice in the app."
category: "dice-roller"
order: 1
icon: "fa-slab fa-regular fa-star"
duration: "5 min read"
updated: "2026-11-19"
tags: ["dice", "getting-started"]
keywords:
  - Dice roller
  - Getting started
  - Roll dice
related:
  - dice-formulas-and-customization
  - saving-and-managing-dice-formulas
---

> This guide describes Mythic GME 1.7.0 and later. Dice Studio, labels, Push, and the 3D dice settings are new in 1.7.0. In 1.6.x, this screen was called Dice Roller.

Dice Studio is where you build, test, and roll custom dice formulas. On a phone, open the drawer and tap **DICE STUDIO**. The app runs on its own dice parser (derived from Adventuresmith's `dart_dice_parser`), so try out any custom formula right in Dice Studio before you rely on it in play.

## Where your rolls go

- **Studio test rolls.** Any roll made in Dice Studio is a Studio test roll. It does not get written to your Journal, and Dice Studio keeps the 20 newest rolls.
- **Journal dice rolls.** To log rolls to your Journal as a General dice roll, tap **Switch to Dice Roller** to enter dice mode.
- **Combined roll list.** The roll list in Dice Studio displays both Studio test rolls and logged dice rolls.

## The layout at a glance

- **Formula field and Roll button.** Type a formula such as `1d20+5` and tap **Roll** (the button with the d20 icon).
- **Four helper tabs below the field.** Tap buttons to assemble a formula without typing every symbol:
  - **Dice.** `d4`, `d6`, `d8`, `d10`, `d12`, `d20`, `D100`, `1D66`, `d2`, and `4dF`.
  - **Join.** The operators `+`, `-`, and `*`, parentheses, and your saved labels.
  - **Mod.** Advantage, Disadvantage, Keep High, Keep Lowest, Exploding, Compounding, Reroll 1s, Reroll <=2, Count Criticals, Cap at X, and Floor at X.
  - **Saved.** Your saved formulas. Tap a formula to put it into the field, or tap its roll button to roll it right away.
- **Typed shortcuts.** Type modifiers after `+` or `-` (such as `+2`) yourself, along with drop (`-H`, `-L`), reroll once (`ro`), and count (`#`).
- **Roll list.** Each row shows the formula, the rolled dice, and any success or critical counts when the formula marks them. A check mark follows each success or critical success, a cross follows each failure or critical failure, and a lock appears before each die kept by a Push.

> A Studio test roll shows your formula with parentheses added so you can see how the app grouped it.

## Build your first rolls

1. Tap a die button such as `d20` and add a modifier such as `+5`, or type `1d20+5` directly into the formula field.
2. Tap **Roll**.

Here are common rolls to start with:

- D20 with a bonus: `1d20+3`
- Advantage or Disadvantage: `2d20kh+5` (keep highest) or `2d20kl+5` (keep lowest)
- Damage dice: `2d6+3`
- Percentile: `1d%` (same as `1d100`)
- Fudge or Fate dice: `4dF`

When you want to branch out, try these modifiers:

- Keep or drop: `3d20kh2` (keep 2 highest) or `4d6-L` (drop lowest)
- Exploding or compounding: `4d6!` (explode) or `5d6!!` (compound); add `o` to trigger once (`!o`, `!!o`)
- Reroll: `4d6r1` (reroll 1s) or `4d6ro<2` (reroll results under 2 once)
- Count successes: `6d6#>=5` (count dice rolling 5 or higher)
- D66: `1D66` with an uppercase `D` (lowercase `d66` rolls a 66-sided die)

Use parentheses when combining pools so the grouping stays clear, such as `(1d8!!+1d6!!) kh` for a Savage Worlds trait die and wild die.

## Labels for dice pools

A dice pool is a group of dice with a label, such as `"Attack": 2d6, "Damage": 1d8`. A Studio test roll shows one line per pool with its color, label, total, and dice. In the Adventure Log, a labeled roll saves as a single entry.

You manage labels on the **Join** tab:

- Tap a saved label to insert it before your dice.
- Tap **+** to save a new label.
- Long-press a label to rename it, remove it, change the order of your labels, or change its color.
- Open **Manage labels** to see every label with a **Color** button under each name.

To pick a color, choose **Automatic**, one of the quick colors (White, Red, Black, Teal, Purple, or Brown), or **Custom** (pick any color or enter a hex code), then tap **Done**. An Automatic label picks a quick color that the other pools in the same roll are not using.

Renaming or removing a label does not change formulas that already use it. A label cannot contain `"` and two labels cannot differ only in capitalization.

## Push a roll

Push keeps your successes and rolls the remaining dice again, like in Year Zero games.

1. On your newest Studio test roll, tap the arrow at the end of the row.
2. Tap **Push**. The result appears as a new Studio test roll.

You can also push a dice roll in your Adventure Log. The pushed roll is written to your Journal as a new **Pushed dice roll**, and the roll you pushed cannot be pushed again. Add `@push=1` to a formula so it can be pushed only once, or add `@lock=sf` to keep failures locked alongside successes.

For the complete Push rules, including what Push does not reroll and when the button is not offered, see [Dice Formulas & Customization](/resources/dice-formulas-and-customization/).

## Saving and managing formulas

- **Save Formula.** Saves whatever is in the formula field and lets you add a name and description. On a phone, **Save Formula** and **Manage Formulas** appear below the formula field. On a tablet or desktop, they appear above it.
- **Manage Formulas.** Opens your Saved Formulas list so you can import, export, edit, reorder, and delete formulas. The app asks you to confirm before deleting a formula.
- **Importing files.** Importing appends every formula in the file to the end of your Saved Formulas list without checking for duplicates. If you place a file by hand instead of importing, name it `saved_formulas.json` and put it in the `formulas` folder inside the app's storage folder. That file replaces your entire saved list.

## 3D dice and sound

When **Animate dice rolls** is turned on, Mythic rolls 3D dice across the table for `d4`, `d6`, `d8`, `d10`, `d12`, `d20`, `d100`, and `D66`. Rolling a `d100` throws two `d10` dice, one for tens and one for ones.

Some rolls skip the 3D animation and show their result right away:

- More than 12 dice in a single roll (each `d100` or `D66` counts as 2 dice).
- `dF` dice and custom-face dice.
- Formulas that explode, compound, or reroll.
- Other die sizes, such as `d2` or `d30`.

3D dice also stay off whenever your device is set to reduce motion.

To tune how the dice feel on the table, open the **3D dice** panel in Dice Studio. While dice are rolling on screen, the panel slides out of the way so you can watch them land.

- **Display duration.** Sets how long the dice stay on screen after stopping, from 1 to 15 seconds.
- **Gravity, Throw strength, Spin, Bounce, and Friction.** Adjust how the dice tumble and settle. Each slider starts at `1.00`.
- **Reset.** Returns all five physics sliders to `1.00`.
- **Sample roll.** Throws one `d6` so you can test your tweaks right away. Available when **Animate dice rolls** is on and your device allows animations.

With **Animate dice rolls** on, 3D dice make collision sounds as they hit the table, screen edges, and each other. Open **Settings > Dice Studio** to toggle **Dice sound** or adjust the **Dice volume** slider.

## Results and readability

Toggle **Show dice total** to choose whether the Dice Studio roll list displays the sum for each roll. When it is off, each roll lists its individual dice without a total, though rolls with no dice list (such as a count) still show their answer. The Adventure Log always shows the total.

Dropped dice are not listed in the result row, and kept dice added by explosions appear as ordinary numbers without separate explosion highlighting. Using short names and brief descriptions keeps your Saved Formulas list clear during play.

## Related guides

- [Saving and Managing Dice Formulas](/resources/saving-and-managing-dice-formulas/)
- [Dice Formulas & Customization](/resources/dice-formulas-and-customization/)
- [Importing & Exporting Saved Formulas](/resources/importing-and-exporting-saved-formulas/)
