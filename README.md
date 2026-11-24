# The Meeting About the Email

[![badge](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/semutadv/office-joke-entry/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/leaderboard)
[![reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/semutadv/office-joke-entry/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

A one-line office joke entered in the make.fun **One-Line Office Joke:
24-Hour Sprint** bounty.

The joke traces the full life cycle of corporate time in a single
sentence of 160 characters: a meeting that could have been an email
sends the email anyway, the email becomes a meeting about why the
meeting was not an email, and that meeting settles in as a recurring
slot every Friday. Anyone who has watched a calendar fill up with
meetings about meetings will recognise the loop — it never closes,
it just recurs.

## How it runs

`node main.ts` writes the joke to `entry.txt` in the output directory
(`/output` by default, or `$OUTPUT_DIR` when set). The program first
clears the output directory's existing contents — never the directory
itself, which is a mount point in the grading sandbox — and then
writes the text with no trailing newline, so the produced file matches
the authored line byte for byte and sits well inside the contest's
1–200 character gate.

## License

MIT — see `LICENSE`.
