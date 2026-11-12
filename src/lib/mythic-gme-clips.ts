// Short looping app clips for the Mythic GME page redesign previews, cut from
// the approved 1.7.0 promo footage and served from R2.
import exceptionalYes from "../assets/mythic-gme/1.7.0/clips/exceptional-yes-poster.jpg";
import meaningRoll from "../assets/mythic-gme/1.7.0/clips/meaning-roll-v2-poster.jpg";
import listsRoll from "../assets/mythic-gme/1.7.0/clips/lists-roll-poster.jpg";
import desktopThrow from "../assets/mythic-gme/1.7.0/clips/desktop-throw-poster.jpg";

const base = "https://media.jasonholtdigital.com/mythic-gme/1.7.0/clips";

export const clips = {
  exceptionalYes: { src: `${base}/exceptional-yes-v1.mp4`, poster: exceptionalYes, device: "phone" },
  meaningRoll: { src: `${base}/meaning-roll-v2.mp4`, poster: meaningRoll, device: "phone" },
  listsRoll: { src: `${base}/lists-roll-v1.mp4`, poster: listsRoll, device: "phone" },
  desktopThrow: { src: `${base}/desktop-throw-v1.mp4`, poster: desktopThrow, device: "desktop" },
} as const;

export type Clip = (typeof clips)[keyof typeof clips];

// Groups each app's approved feature lines around a clip, by index into the
// feature list: the first line is the group's headline. Lines not in any group
// go to the full list.
export function groupFeatures(features: readonly string[], groups: Array<{ clip: Clip; lines: number[] }>) {
  const used = new Set(groups.flatMap((g) => g.lines));
  return {
    groups: groups.map((g) => ({ clip: g.clip, headline: features[g.lines[0]!]!, lines: g.lines.slice(1).map((i) => features[i]!) })),
    rest: features.filter((_, i) => !used.has(i)),
  };
}

export const mobileGroups = [
  { clip: clips.exceptionalYes, lines: [0, 1, 2] },
  { clip: clips.meaningRoll, lines: [11, 7] },
  { clip: clips.listsRoll, lines: [3, 4] },
];

export const digitalGroups = [{ clip: clips.desktopThrow, lines: [1, 0, 2, 3] }];
