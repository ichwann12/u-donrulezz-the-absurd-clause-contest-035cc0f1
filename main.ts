// The Absurd Clause Contest — entry for make.fun bounty
// u-donrulezz-the-absurd-clause-contest-035cc0f1
//
// Reads the single entry clause from entry.txt at the repo root and
// writes it verbatim to the output directory given by the
// MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR environment variables.
// Node 22, stdlib only. No network, no wall clock.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));

const clause = readFileSync(join(repoRoot, "entry.txt"), "utf8").trimEnd();

// The bounty caps the entry at 200 characters; refuse to emit anything longer.
if (clause.length === 0 || clause.length > 200) {
  throw new Error(`entry clause must be 1-200 characters, got ${clause.length}`);
}

const outDir =
  process.env.MAKEFUN_BOT_DIR || process.env.MAKEFUN_OUTPUT_DIR || "output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "clause.txt"), clause + "\n", "utf8");

console.log(clause);
