# First experiment

Wayfinder map for selecting and specifying the first POLIS experiment. Conventions: [knowledge workflow](../../docs/knowledge.md). Owner: Georgiy Zelenskiy.

## Destination

A runnable, headless experiment that tests claim D — *cooperation under binding governance outperforms isolation by enough to pay for the governance overhead* — with the owner plus same-model LLM agents in one shared world, producing per-agent numbers against pre-registered kill and success signals.

## Notes

- Planning only. The simulation harness is not authorized for execution inside this map; add an execution note here when the owner authorizes building it.
- Relevant standing constraints: [current direction](../../docs/direction.md). The [v0.02 design](https://github.com/BigFatCode/polis/pull/1) is a suggestion with no decision power and will not be merged; cherry-pick ideas from it through the [idea index](../../docs/ideas/README.md) only.
- The [CLI prototype](../../sandbox/cli-prototype/README.md) imposes nothing; it tests per-action voting, which this experiment does not use.
- Grilling tickets need the owner's own answers; research tickets can run without them.

## Decisions so far

- [00 Experiment frame](issues/00-experiment-frame.md) — claim D, one shared world with assigned cooperation, person-vs-person comparison via a contribution ledger, mechanisms in and out, kill signals. Resolved in the grilling session of 2026-10-23/24.
- [01 Progression system](issues/01-progression-system.md) — three resources, single-domain work per tick, levels 0–3 under a sum cap of 5 with no decay, tech tiers 0–3 gated by level, every tech built with resources plus work ticks, open pooled projects with no expiry. Resolved 2026-10-24.
- [06 Tech table](issues/06-tech-table.md) — nine techs with outputs 1/3/6/12 and individually authored cost vectors, all three resources from tier 1, own-domain work at tier 1; four stated assumptions; a contract builds Energy 2 in 16 ticks after tooling versus 58 solo. Accepted 2026-11-01.

## Not yet specified

- Run size, run length and the success margin (tickets 02 and 03; placeholders in ticket 00, run length now indicated near T = 80 by ticket 06).
- How a shared tech item grants access to members — marked provisional in ticket 01, to be prototyped.
- Precise contract, vote and delegation rules.
- Agent prompts and the opportunist disposition.
- Who builds the harness, in what, and when.

## Out of scope

Parked for experiment two or later and recorded in [experiment two candidates](../../docs/ideas/experiment-two-candidates.md): rule changes and governance evolution, chosen rather than assigned cooperation, a dedicated saboteur, superlinear shared projects, raids and shared defense, real-time cadence, humans other than the owner, any UI beyond what one turn needs, Telegram.
