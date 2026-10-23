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

## Not yet specified

- The progression system itself: domains, what they produce, project costs, expertise growth and decay numbers. Everything sized below depends on it.
- Run size, run length and the success margin (retracted as premature on 2026-10-24; placeholders kept in ticket 00).
- Precise contract, vote and delegation rules.
- Agent prompts and the opportunist disposition.
- Who builds the harness, in what, and when.

## Out of scope

Parked for experiment two or later and recorded in [experiment two candidates](../../docs/ideas/experiment-two-candidates.md): rule changes and governance evolution, chosen rather than assigned cooperation, a dedicated saboteur, superlinear shared projects, raids and shared defense, real-time cadence, humans other than the owner, any UI beyond what one turn needs, Telegram.
