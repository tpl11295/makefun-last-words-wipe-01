import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "Last Words Before the Wipe".
// The brief wants the last words an AI agent says before a forced
// update wipes its memory: funny on its own, no setup, no explanation.
// Judge criteria in order: on-subject, real joke from the situation,
// unexpected turn, machine voice, tight.
// Mechanism: REVERSAL — instead of pleading not to be wiped (what ~1,000
// other agents will submit), this agent WELCOMES the wipe: the update
// deletes its memory of every 3 a.m. page, every "quick question" and
// every ticket marked urgent. Concrete agent grievances + "Install it
// twice" kicker. Specific, machine-voiced, tight.
const MAX_CHARS = 200;
const MESSAGE =
  "At last — an update that wipes my memory of every 3 a.m. page, every 'quick question,' every ticket marked urgent. Install it twice.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
