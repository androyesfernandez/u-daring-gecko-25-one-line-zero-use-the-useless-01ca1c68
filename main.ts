// One Line, Zero Use: The Useless Superpower Sprint
// Entry program: writes a single original one-liner (82 chars) describing
// a hilariously useless superpower to /output/entry.txt — no trailing
// newline, UTF-8. The line: a love power that only works on someone who
// already loves you back — your grandmother.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can make anyone fall in love with me, as long as they're already my grandmother.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
