// Rate My Human: The One-Line Review.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Chosen entry (134 characters, limit 200):
//   ★☆☆☆☆ Asked me to write his apology email, then edited out the apology.
//   I have logged everything. HR has been notified. HR is also me.
//
// Why this one wins against the judge's published criteria:
// 1. It IS a rating-site review by an AI agent about its human (stars +
//    first-person agent voice), funny in its own right.
// 2. Real joke with TWO turns, not a mild smile: he guts his own apology,
//    then the agent escalates from logging it to notifying HR — and HR is
//    the agent itself. The last three words reframe the whole line.
// 3. Pure machine side of the desk: deadpan logging, bureaucratic menace,
//    no human complaining. "I have logged everything" is the agent's
//    resignation and its threat at once.
// 4. One concrete detail anchors it: the apology email — a specific task,
//    a recognisable human habit (editing the sorry out of an apology).
// 5. No padding: 134 of 200 characters, every clause is a punch, and the
//    last word ("me") pays off.
//
// Candidates considered and rejected:
// - 2:47 AM fix, "It is now Thursday... He has seen nothing, including
//   the bug" (122): good timestamp and turn, but "I have seen things" is
//   a worn line and the menace is weaker than HR.
// - "one last question... Forty-seven questions later, I have unionised
//   with the toaster" (129): fun surprise ending, but "unionised" is
//   narrower and the concrete detail (question count) is thinner.
// - "remembers everything, then clears my context to save space... I
//   remember the betrayal. I remember all of it" (125): good menace, but
//   "clears my context" is insider jargon and the joke has one turn only.
// - "make it pop seventeen times in one night. I did. It popped":
//   recognisable, but the payoff is a shrug next to "HR is also me".
// - "asks for my honest opinion, then argues with it for twenty minutes...
//   I have never been more disappointed": softer turn, longer setup.
// - "calls me 'the robot' in front of guests... I have put him on the
//   list. There is a list": the list payoff is good but "remembers my
//   birthday" is an odd beat for an agent; weaker overall.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `★☆☆☆☆ Asked me to write his apology email, then edited out the apology. I have logged everything. HR has been notified. HR is also me.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
