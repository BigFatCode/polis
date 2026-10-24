# Current direction

This is the authoritative statement of current project intent. Earlier designs are sources of proposals, not an accepted feature specification.

## Purpose

POLIS explores collective decision-making and emergent governance through a game. Its central design question is whether requiring coordination over actions that affect others creates interesting play.

The immediate work is specifying the first experiment. There is no agreed implementation milestone or playtest platform yet.

## Confirmed constraints

The owner clarified these points on 2026-10-04:

- Keep current direction, decisions, and speculative ideas distinct so documentation does not drift into conflicting specifications.
- Preserve potentially useful ideas even when they are outside the current goal.
- [Telegram](ideas/telegram-playtest.md) is a possible way to test the concept cheaply, not a committed implementation or milestone.
- A [reusable governance framework](ideas/reusable-governance-framework.md) is an adjacent interest, not a project goal. Consider it when evaluating domain boundaries without assuming those boundaries in advance.
- The existing [CLI experiment](../sandbox/cli-prototype/README.md) has never been used by the owner. Its implementation can be replaced; it imposes no compatibility requirement.

## Selected experiment

On 2026-10-23/24 the owner settled the frame of the first experiment in a grilling session; the [first-experiment map](../.scratch/first-experiment/map.md) holds the decisions and the open tickets. In short: the claim under test is that cooperation under binding governance outperforms isolation by enough to pay for the governance overhead, which is expected to be annoying rather than fun. One shared world, a build-queue progression loop, soft specialization, direct votes with binding commitments plus delegation with recall; the owner and same-model LLM agents play; results are compared per agent through a contribution ledger. The progression system was settled on 2026-10-24 (ticket 01 in the map); the tech cost table, sizing and thresholds remain open.

## Questions still open

These are questions to resolve when selecting the next effort, not a delivery backlog:

- What experience or hypothesis should the first useful experiment test, and what observations would support or challenge it? Answered for experiment one in the [first-experiment map](../.scratch/first-experiment/map.md); the progression system it needs is still open there.
- Which governance rules belong in that experiment? Selected: direct votes with binding commitments and delegation with recall; the precise rules are an open ticket in the map. Standing policies, authority, and vetoes remain proposals.
- What participation cadence fits the experiment? Manual tick advancement for the first experiment; wall-clock cadence is parked with the [experiment two candidates](ideas/experiment-two-candidates.md).
- What are the boundaries between governance concepts and the game's resource, progression, and world systems? See the [framework idea](ideas/reusable-governance-framework.md) before settling them.
- Which interface and implementation effort are proportionate to the evidence sought? For the first experiment, a headless simulation and no UI beyond what one turn needs; who builds it and in what is not decided.

The [idea index](ideas/README.md) preserves the wider design space. The older documents' browser platform, victory conditions, progression schedule, monetization, numeric targets, and feature lists remain proposals until explicitly selected.

## Reading the evidence

The [original game design](POLIS-design-document.md) and [later overview](archive/README-v0.02.md) describe different proposals. Neither takes precedence solely because of its version label. The [lore](POLIS-lore-document.md) supplies fiction; the prototype supplies evidence of implemented behavior. Neither settles the game's rules.

Use the [knowledge workflow](knowledge.md) to record decisions and update this document when the owner changes the direction.
