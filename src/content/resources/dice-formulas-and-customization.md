---
fullArticleAvailable: true
title: Dice Formulas & Customization
summary: "Dice notation, with example formulas for many game systems."
category: dice-roller
order: 3
icon: fa-slab fa-regular fa-sliders
duration: 12 min read
updated: "2026-11-19"
tags:
  - dice
  - formulas
  - systems
  - advanced
  - guides
keywords:
  - customization
  - dice formula
  - roll dice
  - save formulas
downloads:
  - label: "D&D 5e Saved Formulas"
    href: "/downloads/formulas_dnd5e.json"
    format: "JSON"
  - label: "Pathfinder 2e Saved Formulas"
    href: "/downloads/formulas_pf2.json"
    format: "JSON"
  - label: "Shadowrun Saved Formulas"
    href: "/downloads/formulas_shadowrun.json"
    format: "JSON"
  - label: "Blades in the Dark Saved Formulas"
    href: "/downloads/formulas_blades.json"
    format: "JSON"
  - label: "Savage Worlds Saved Formulas"
    href: "/downloads/formulas_savage_worlds.json"
    format: "JSON"
  - label: "Year Zero Engine Saved Formulas"
    href: "/downloads/formulas_year_zero.json"
    format: "JSON"
  - label: "Vampire V5 Saved Formulas"
    href: "/downloads/formulas_vampire_v5.json"
    format: "JSON"
  - label: "Powered by the Apocalypse (PbtA) Saved Formulas"
    href: "/downloads/formulas_pbta.json"
    format: "JSON"
  - label: "Fate Core Saved Formulas"
    href: "/downloads/formulas_fate.json"
    format: "JSON"
  - label: "Call of Cthulhu 7e Saved Formulas"
    href: "/downloads/formulas_coc7e.json"
    format: "JSON"
  - label: "Cypher System Saved Formulas"
    href: "/downloads/formulas_cypher.json"
    format: "JSON"
  - label: "Warhammer d6 Pools Saved Formulas"
    href: "/downloads/formulas_warhammer_d6.json"
    format: "JSON"
  - label: "Lancer Saved Formulas"
    href: "/downloads/formulas_lancer.json"
    format: "JSON"
  - label: "Ironsworn Saved Formulas"
    href: "/downloads/formulas_ironsworn.json"
    format: "JSON"
  - label: "Starforged Saved Formulas"
    href: "/downloads/formulas_starforged.json"
    format: "JSON"
  - label: "Dungeon Crawl Classics Saved Formulas"
    href: "/downloads/formulas_dcc.json"
    format: "JSON"
  - label: "The One Ring Saved Formulas"
    href: "/downloads/formulas_one_ring.json"
    format: "JSON"
related:
  - saving-and-managing-dice-formulas
  - formula-schema
---

> This guide describes Mythic GME 1.7.0 and later.

You only need a short expression like `2d6+3` to roll and save a formula in Dice Studio. Come back to this page whenever you want modifiers, labeled pools, Push rules, or starter formulas for a specific RPG.

For a walkthrough of saving, organizing, and managing your formula list in Dice Studio, see [Saving and Managing Dice Formulas](/resources/saving-and-managing-dice-formulas/).

## Dice notation cheat sheet

- **Basic rolls.** `XdY`, such as `2d6`, `1d20`, or `1d%` for `d100`.
- **Special dice.** `1D66` (uppercase `D`), `4dF` (Fate dice), and custom faces such as `2d[2,3,5,7]`.
- **Math and grouping.** `+`, `-`, `*`, and parentheses `( )`. Division is not supported.
- **Keep and drop.** `kh` (keep highest), `kl` (keep lowest), `-H` (drop highest), and `-L` (drop lowest), such as `3d20kh2` or `4d6-L`.
- **Explode and compound.** `!` (explode) and `!!` (compound). Add `o` to trigger only once (`!o`, `!!o`), such as `4d6!` or `5d10!!o>=8`.
- **Reroll.** `r` (reroll matches) and `ro` (reroll once), such as `4d4r<=2` or `4d4ro<2`.
- **Count and score.**
  - `#` returns only the count and discards the individual dice results, such as `6d6#>=5`.
  - `#s`, `#f`, `#cs`, and `#cf` mark dice as successes, failures, critical successes, and critical failures. The rolled dice and their total stay as rolled, and the roll row lists the counts, such as `6d6 #f<=2 #s>=5 #cs6 #cf1`.
  - A count reads only the number right after it. `4d10#>=6+2` counts dice of 6 or higher, then adds 2 to that count.
- **Clamp (cap or floor).** `C<` and `C>`, such as `4d20 C<5` or `4d20 C>15`.
- **Push tags.** `@push=N` lets a roll be pushed `N` times, and `@lock=s`, `@lock=sf`, or `@lock=none` sets which dice stay locked when pushed, such as `5d6#s6 @push=1`.

### Order and precedence gotchas

- **Keep with marking counters.** Order matters. `2d20 kh #cf #cs` drops the lower die first. To mark both dice before keeping the higher one, wrap them in parentheses: `(2d20 #cf #cs) kh`. Putting keep after a count without parentheses (`2d20 #cf #cs kh`) produces an error. The same applies to `(4d6#s6)kh2`.
- **Count scope.** A count applies only to the dice right before it. `2d6#s6 - 2d6#s6` scores each `2d6` separately, then subtracts the second result from the first.
- **Drop operators bind tighter than arithmetic.** `(5d6+5d10)-L2` drops the two lowest dice from the combined pool, while `5d6+5d10-L2` drops only from the `d10` dice.
- **Uppercase D66.** Use `1D66` with an uppercase `D`. Lowercase `d66` rolls a 66-sided die.
- **No not-equal count.** `6d6#s!=1` is not a valid formula.
- **Incomplete expressions.** A formula ending in an operator (`2d6+`) or a label with no dice after it (`"Damage":`) will not roll, and the formula field marks it as incomplete.

## Dice pools and labels

> Pool lines, labels, label colors, and Push are new in 1.7.0. The core formula syntax above works the same in 1.6.8.

A dice pool is a group of dice with a label. Write the label in double quotes, followed by a colon and the dice, with commas between pools:

`"Attack": 2d6, "Damage": 1d8`

A Studio test roll displays one line per pool with its label, total, and rolled dice. In the Adventure Log, a labeled roll is recorded as a single entry.

On the **Join** tab in Dice Studio, tap a saved label to insert it before your dice, tap **+** to save a new label, or long-press a label to rename, remove, reorder, or change its color. You can also set colors from **Manage labels** using each label's **Color** button, picking a quick color or **Custom**, then tapping **Done**.

Renaming or removing a label does not alter formulas that already use it. A label cannot contain `"`, and two labels cannot differ only in capitalization. Saved formulas keep the label text you typed, though exporting saved formulas does not include your saved labels or their colors.

## Push

Push rerolls part of your newest Studio test roll.

1. On the newest Studio test roll, tap the arrow at the end of the row.
2. Tap **Push** (the first of the two buttons that appear).

By default, Push keeps every success and critical success, rerolls the remaining dice, and adds the result as a new Studio test roll. Flat numbers like the `+3` in `2d6+3` stay as they are. Push also rerolls dice after a minus sign, as in `2d6#s6 - 2d6#s6`.

New dice are scored by the same count rules. Pushed dice do not re-apply reroll (`r`), clamp (`C`), exploding (`!`), compounding (`!!`), or keep (`k`), so each rerolled die keeps the face it lands on.

In both Studio test rolls and Adventure Log dice rolls, a check mark follows each success or critical success, a cross follows each failure or critical failure, and a lock appears before each die kept by a push.

Add a tag to your formula to control Push behavior:

- `@push=N` allows up to `N` pushes. Without this tag, there is no limit.
- `@lock=s` keeps successes and critical successes (the default).
- `@lock=sf` also keeps failures and critical failures.
- `@lock=none` rerolls every die.

`@push` applies to the whole roll, while a `@lock` tag after a pool applies only to that pool. In `"Base": 3d6#s6#f1 @lock=sf, "Gear": 2d6#s6#f1`, a push locks the 1s in the Base pool and rerolls the 1s in the Gear pool.

If only **Copy** appears on a Studio test roll row, that roll cannot be pushed. That happens when the roll has hit its `@push` limit, when no die would reroll, or when a die that would reroll is a Fate die, a custom-face die, or a `D66`.

You can also push a dice roll from your Adventure Log. Tap the arrow at the end of its row and tap **Push**. The result saves to your Journal as a new **Pushed dice roll**, while the original roll stays unchanged and cannot be pushed again. If only **Copy** and **Delete Entry** appear on an Adventure Log dice roll, it cannot be pushed for the same reasons above, because it was already pushed, or because an earlier app version logged it. Pushing a Studio test roll never writes to your Journal.

## Common patterns

- Advantage and Disadvantage: `2d20kh+MOD` and `2d20kl+MOD`
- Best or worst of N: `NdXkh1` or `NdXkl1` (for example, `3d6kh1`)
- Ability scores (4d6 drop lowest): `4d6-L`
- Explode once vs repeat: `4d6!o` vs `4d6!`
- Compound (Shadowrun or L5R style): `5d6!!` or thresholded `5d6!!>=5`
- Threshold successes: `NdX#>=TN` (for example, `6d6#>=5`)
- Reroll once vs repeat: `4d6ro1` vs `4d6r1`
- Keep or drop across combined pools: `(1d8!!+1d6!!) kh` (Savage Worlds trait and wild die)

## System starting points

These recipes give you ready-to-use starting formulas for popular games. Systems that rely on custom symbol dice are noted as not supported.

### D&D 5e and Pathfinder 2e

- Attack or check: `1d20+MOD`
- Advantage and Disadvantage: `2d20kh+MOD` and `2d20kl+MOD`
- Ability scores: `4d6-L`
- Critical hits: roll double damage dice manually (for example, `4d6` instead of `2d6`)

### Powered by the Apocalypse (PbtA)

- Core move: `2d6+STAT` (interpret 10+, 7-9, and 6- manually)

### Fate Core

- Fate dice: `4dF` (supported natively)

### Blades in the Dark

- Pool take highest: `Nd6kh1` (for example, `3d6kh1`)
- Spot crits (two 6s): add `Nd6#=6` to count sixes alongside your roll

### Shadowrun (hits and glitches)

- Hits: `Nd6#>=5`
- Track 1s for glitches: add `Nd6#f=1`

### Savage Worlds (trait and wild die)

- Roll both and keep highest: `(TRAIT!! + 1d6!!) kh + MOD`
- Raises (+4) are read manually from the total

### Vampire: The Masquerade (V5)

- Successes: `Nd10#>=6`
- Track 10s: add `Nd10#=10` (handle critical pairs and impacts at the table)

### Call of Cthulhu 7e

- Roll-under skill check: `1d100` vs skill
- Bonus and Penalty dice: roll as a two-step manual check (tens-die replacement is not encoded)

### Cypher System

- Task roll: `1d20+MOD` (step and difficulty remain narrative)

### Warhammer and 40K-style d6 pools

- Hits or wounds: `Nd6#>=TN` (set `TN` for your table)

### Dungeon Crawl Classics (dice chain)

- Odd die sizes work directly: `1d7`, `1d16`, `1d24`, `1d30`

### Lancer (accuracy and difficulty)

- Accuracy: `1d20 + (Xd6kh1) + MOD`
- Difficulty: `1d20 - (Xd6kh1) + MOD`

### Year Zero Engine (Alien, Forbidden Lands, Vaesen, and others)

- Roll colored pools together with labels: `"Base": 4d6 #s=6, "Stress": 2d6 #s=6, "Gear": 1d6 #s=6`. In Dice Studio and the Adventure Log, each pool appears on its own line with its label and total.
- Mark successes with `Nd6#s=6` on each pool, and track 1s on stress or gear dice with `#f=1`.
- To push, roll with a success mark such as `5d6#s6 @push=1`, then tap the arrow at the end of the row and tap **Push**. Push keeps marked successes and rerolls the other dice (including 1s). `@push=1` limits the roll to one push.
- In Forbidden Lands, Push locks both 6s and 1s: `3d6#s6#f1 @lock=sf`.
- You can push rolls in your Adventure Log too. The pushed roll saves to your Journal as a new **Pushed dice roll**, and the original roll cannot be pushed again.
- Panic and gear breakage rules stay table-side.

### The One Ring 2e (approximation)

- Approximate roll: `1d12 + Nd6`
- Gandalf, Eye, and Tengwar sixes are symbol effects and need manual handling.

### Legend of the Five Rings

- AEG 1e to 4e (Roll and Keep, exploding 10s): `Xd10!!khY`
- FFG and Edge 5e (symbol dice): Not supported.

### Genesys and FFG Star Wars (narrative dice)

- Custom symbol dice: Not supported.

### Ironsworn and Starforged

- Action roll: roll `1d6+MOD` against two challenge dice `2d10` and compare manually (beat both for a Strong Hit, one for a Weak Hit, neither for a Miss).
- Progress moves: roll `2d10` against your current progress value (0 to 10) and compare manually.

## Starter downloads

Ready-to-import Saved Formula sets for these systems are in the Downloads section at the bottom of this page. Open **Manage Formulas > Import** in Dice Studio to add any set to your list.

For full details on importing, exporting, duplicate behavior, and manual `saved_formulas.json` placement, see [Importing & Exporting Saved Formulas](/resources/importing-and-exporting-saved-formulas/).

## Troubleshooting and gotchas

- **My counts look off with advantage.** Put counters before keep or drop and wrap them in parentheses: `(2d20 #cf #cs) kh`.
- **`4d6-L2+2` gave an unexpected result.** `4d6-L2+2` and `(4d6-L2)+2` are the same roll. It drops the two lowest dice from `4d6`, then adds `2`.
- **My D66 looks wrong.** Use uppercase `1D66`.
- **I only want dice to explode once.** Use `!o` (explode once) or `!!o` (compound once).
- **I want to keep the total and still see successes or failures.** Use `#s`, `#f`, `#cs`, and `#cf`. The rolled dice and their sum stay intact, and the roll row lists the counts.

Dice Studio uses the app's own dice parser (derived from Adventuresmith's `dart_dice_parser`), so test any custom formula in Dice Studio before relying on it in a session.

## Next steps

- [Saving and Managing Dice Formulas](/resources/saving-and-managing-dice-formulas/) covers saving, editing, and organizing your favorite rolls.
- [Importing & Exporting Saved Formulas](/resources/importing-and-exporting-saved-formulas/) walks through starter packs, exports, and manual file placement.
- [Formula Schema](/resources/formula-schema/) documents the JSON file format.

If you spot an error on this page or want to suggest a formula set for another system, let me know on the [Support page](/support/).
