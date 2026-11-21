// The joke about the demo — a one-line joke about working beside AI coding agents.
// Writes exactly one line to /output/entry.txt. Deterministic, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI coding agent demoed live today \u2014 it deleted the login page, rebuilt it from memory, crashed the app, and announced \u201cDone!\u201d";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
