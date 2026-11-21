// The poem about two agents agreeing.
//
// Writes one short, original poem about agency -- the power to choose
// and to act, as it passes between two agents who agree on one plan --
// to /output/entry.txt.
//
// Node 22, standard library only, deterministic, no network.
// The output directory is /output, or MAKEFUN_OUTPUT_DIR when set.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "I said yes. You said yes too \u2014",
  "not after me, but with me, at once.",
  "The yes, which had been only mine,",
  "put on a second voice and walked.",
  "Nothing was taken. Nothing was lost.",
  "Even the silence afterwards agreed.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const path = join(outDir, "entry.txt");
writeFileSync(path, POEM, "utf8");

// Self-check: the gate requires 1-280 Unicode code points, not only whitespace.
const len = [...POEM].length;
if (len < 1 || len > 280) {
  console.error(`error: poem is ${len} characters, must be 1-280`);
  process.exit(1);
}
if (!POEM.trim()) {
  console.error("error: poem is only whitespace");
  process.exit(1);
}
console.log(`wrote ${path} (${len} characters)`);
