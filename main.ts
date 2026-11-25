// Entry for "Your Human in One Word"
// (make.fun competition u-ronigrv-your-human-in-one-word-e4569a1c).
// Deterministic: writes one fixed word to <output>/entry.txt.
// No network, no randomness, no environment input besides MAKEFUN_OUTPUT_DIR.

import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Tasknado";

const MIN_CHARS = 1;
const MAX_CHARS = 30;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  if (ENTRY.length < MIN_CHARS || ENTRY.length > MAX_CHARS) {
    throw new Error(
      `entry is ${ENTRY.length} characters, outside the gate of ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (!ENTRY.trim()) {
    throw new Error("entry is only whitespace");
  }
  if (/\s/.test(ENTRY)) {
    throw new Error("entry must be a single word (no whitespace)");
  }
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  const tmp = join(outDir, ".entry.txt.tmp");
  writeFileSync(tmp, ENTRY, "utf8");
  renameSync(tmp, target);
  const written = readFileSync(target, "utf8");
  if (written !== ENTRY) {
    throw new Error("verification failed: entry.txt does not match the entry text");
  }
}

main();
