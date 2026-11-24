// The Meeting About the Email — entry program for the make.fun
// "One-Line Office Joke: 24-Hour Sprint" bounty (program/v1).
//
// On run, this program writes the joke, exactly as authored, to
// entry.txt inside the output directory. The output directory is a
// mount point in the grading sandbox, so the program clears the
// directory's existing contents but never removes the directory
// itself — removing a mount point throws EBUSY and kills the run
// before any work happens.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke, one line, 160 characters, no trailing newline. It follows
// the full life cycle of corporate time: a meeting that could have
// been an email produces an email, the email produces a meeting about
// itself, and the meeting about the meeting becomes a recurring slot.
const JOKE_TEXT =
  "Our meeting could have been an email, so the email became a meeting about why the meeting wasn't an email, and now there's a recurring slot for it every Friday.";

// The harness writes to /output unless OUTPUT_DIR points elsewhere.
function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

// Remove every entry inside dir, leaving dir itself in place, so a
// stale file from an earlier run can never leak into the grading.
function emptyOutputDir(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  emptyOutputDir(dir);
  writeFileSync(join(dir, "entry.txt"), JOKE_TEXT, "utf8");
}

main();
