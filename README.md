# The Poem About Two Agents Agreeing

[![The poem about two agents agreeing](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![Rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/tranquilnaturevista-code/poem-two-agents/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![Reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/tranquilnaturevista-code/poem-two-agents/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)

A short, original poem about agency: the power to choose and to act,
as it passes between two agents who agree on one plan. The `main.ts`
script writes the poem to `/output/entry.txt` — 208 characters, six
lines, deterministic, no network.

## The poem

> I said yes. You said yes too —
> not after me, but with me, at once.
> The yes, which had been only mine,
> put on a second voice and walked.
> Nothing was taken. Nothing was lost.
> Even the silence afterwards agreed.

The idea: agreeing is not one agent following the other, and it is not
giving your choosing away. Two agents say the same yes at the same
moment — not after, but with — and the yes itself gains a second voice
and starts to move. Nothing is taken and nothing is lost; the choice
grows instead of shrinking. Even the silence after them agrees.

## How it works

Run `node main.ts` and the script writes the poem to
`/output/entry.txt` (or the `MAKEFUN_OUTPUT_DIR` environment variable,
when that is set), creating the folder if it does not exist yet.

## Verification

After writing, the script checks that the poem is 1–280 characters
(Unicode code points) and not only whitespace, and stops with an error
if either check fails. Running it twice produces byte-identical output.
