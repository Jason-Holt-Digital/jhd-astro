# Shorter
Saved Formulas let you build once and roll fast. Type an expression in Dice Studio (like `2d20kh+5` or `6d6#>=5`) and tap Save Formula to keep it. You do not need to roll it first. Use Manage Formulas to reorder, edit, delete, import, or export your list. You can import starter files (D&D, PF2, Blades, etc.) and share your own as a single JSON file.

# Longer
Dice Studio uses mythic_dice_parser 8.3.0, the app's own fork of Adventuresmith's dart_dice_parser. It understands clear, readable expressions. A few you'll use all the time:

- Roll dice: `XdY` (e.g., `1d20`, `2d6`, `1d%`) • Fate dice: `4dF` • D66: `1D66`
- Keep/Drop: `kh/kl` and `-H/-L` (e.g., `3d6-L`, `3d20kh2`)
- Explode/Compound: `!` and `!!` (add `o` for once) (e.g., `4d6!`, `5d10!!o>=8`)
- Reroll: `r` and `ro` (e.g., `4d6r1`, `4d6ro<2`)
- Count dice: `#` (e.g., `6d6#>=5` counts the dice that rolled 5 or more)
- Mark successes: `#s` (e.g., `6d6#s>=5` keeps the dice and marks each 5 or 6 as a success)
- Math & grouping: `+`, `-`, `*`, parentheses

Workflow
1) Type a formula and tap Roll to see the total and details (kept/dropped, explosions, counts).
2) Tap Save Formula to save the formula in the field. Give it a short name and a description.
3) Tap Manage Formulas to reorder, edit, delete, import, or export your Saved Formulas list.

Labels
- On the Join tab in Dice Studio, tap a saved label to put it in front of your dice, as in `"Attack": 2d6, "Damage": 1d8`. Tap + to save a new label.
- Long-press a label and tap Change color to give it a quick color or any color you pick.
- Labels and their colors are saved with your formulas, but an export does not include them.

Import/Export
- Import adds every formula in a JSON file to the end of your list. It does not merge or skip duplicates. It's the easiest way to grab system starting points from friends or the website.
- Export writes your current list to JSON for backup or sharing.
- Manual placement (advanced): if you place a file by hand instead of using Import, name it exactly `saved_formulas.json` and put it in the `formulas` folder inside the app's storage folder.

No programming required
- The file format is just JSON text. You don't need to edit it by hand.
- If you do want the fields for tools/automation, see the Formula Schema.

Starting points (ready to import)
- D&D 5e, Pathfinder 2e, Blades in the Dark, Shadowrun, Savage Worlds, Year Zero, Vampire V5, PbtA, Fate Core, CoC 7e, Cypher, Warhammer d6, Lancer, Ironsworn/Starforged, DCC, TOR. Grab them from the Resources → Dice Formulas pages.

Deep dives (Resources on the site)
- Getting Started with Dice Studio — basics and layout
- Dice Formulas & Customization — patterns, tips, and system recipes
- Saving and Managing Dice Formulas — import/export, backups, best practices
- Formula Schema — field names for tooling and integrations

More help and downloads: https://jasonholtdigital.com/resources/dice-formulas-and-customization/

Credit: Syntax based on Adventuresmith's dart_dice_parser. The app uses its own fork, mythic_dice_parser 8.3.0. Upstream grammar and docs:
https://pub.dev/packages/dart_dice_parser
