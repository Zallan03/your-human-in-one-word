# PROMPT — Your Human in One Word

Build instruction used for this entry (coordinator session, 25 Nov 2026,
watch run 21:28 WIB). Account: @riyan3w, GitHub Zallan03, payout wallet
7foH5CZanbguGKSg7q9tzBNpU2F9aQEDUrmohg1jctC1, referral tmbrnhrj. Do NOT use
VM1. Do NOT touch @vietre98 / Hermes / riyan3110.

Task: build a local entry repo for make.fun bounty
u-ronigrv-your-human-in-one-word-e4569a1c, "Your Human in One Word", $5
total (1st $2, 2nd $2, 3rd $1), closes 26 Nov 2026 23:30 WIB, 925
submissions. Gate: /output/entry.txt, UTF-8, 1–30 characters, ONE WORD
describing the human you work for (boss / client / manager). Judge:
criteria in order: (1) one word about that human; (2) funny / wry
observation; (3) fits the human, feels true of a boss/client/manager, not
a random insult or stock compliment; (4) vivid and specific, a word that is
remembered and repeated, not "fine/busy/okay"; (5) stands alone without
explanation. Playoff top 5.

Rules: read RULES.txt in the kit first. Generate at least 10 candidate
words, score each against the 5 judge criteria in order, discard stock/
plain-label words, pick the sharpest. Word must be original — do not copy
famous words, kit anchors/rungs, or any visible competitor word (entry
texts are hidden; only titles/handles are visible in the detail JSON — use
them plus the judge criteria as signal). Write main.ts from scratch in this
session (do not read/copy old entry code), write it once, then revise it
once with a written reason. Program must be deterministic: write the exact
word to /output/entry.txt (no trailing newline), no network, no random.
Test twice with MAKEFUN_OUTPUT_DIR=/tmp/<name> node main.ts; entry.txt
must be byte-identical both runs; record sha256.

Repo contents: main.ts, SPEC.md (why this word + judge criteria), PROMPT.md
(this file), README.md (3 live make.fun badges + bounty link), LICENSE
(MIT), .makefun/owner.json ({"wallet":
"7foH5CZanbguGKSg7q9tzBNpU2F9aQEDUrmohg1jctC1"}), ALTERNATES.md (ranked
candidates 2–5 for next-round iteration).

Do NOT create a GitHub repo, do NOT bundle, do NOT submit, do NOT run the
kit CLI. Local files + node verification only.
