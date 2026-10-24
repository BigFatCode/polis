# 06 Tech table

Type: task
Status: claimed
Blocked by: 01
Claimed by: Claude (draft of 2026-10-24, awaiting owner review)

## Question

Draft the cost table for every tech in the first experiment: three domains × tiers 1–3, each with its output per work tick and its cost vector of resources plus work ticks per domain, authored individually with no formula. Constraints from [ticket 01](01-progression-system.md): tier 1 costs own-domain work only; cross-domain need starts at tier 2; the numbers must make the owner's generator example literal (a mixed group builds a tier-2 energy tech in about a day of ticks, a solo agent needs far more than the summed time). The owner reviews the draft; the table is data, not a decision, until it has been run.

## Draft

### Assumptions the draft adds to ticket 01

These are not decided anywhere yet. Each is needed to make the arithmetic work; reject any and the numbers shift.

1. **A work tick either produces or builds, never both.** Build ticks train the builder (at the tier being built) but yield no resource.
2. **Utilization applies to build ticks as well as production.** A level-0 agent's tick counts 25% toward a tier-2 build and 12.5% toward tier 3. This is the mechanism that makes solo cross-domain work slow; without it, solo is only slowed by hand-gathering.
3. **Learning points:** stretch (tier = level + 1) 2 per tick; matched 1; slow (tier below level, or two or more above) 0.5. A level is 8 points. Build ticks learn at the tier being built.
4. **Tier outputs double-ish:** tier 0 (hand-work) 1, tier 1 → 3, tier 2 → 6, tier 3 → 12 per tick. Tier 2 over tier 1 is the owner's "200% energy boost."

### Output per work tick (any domain, full utilization)

| Tier | Output |
| --- | --- |
| 0 (no tech) | 1 |
| 1 | 3 |
| 2 | 6 |
| 3 | 12 |

### Cost vectors

Resources are spent up front; work ticks are put in afterwards, in the named domain, and are reduced by utilization. E = Energy, M = Materials, R = Research.

| Tech | Resources | Work ticks |
| --- | --- | --- |
| Energy 1 | 8 E | 4 E |
| Materials 1 | 8 M | 4 M |
| Research 1 | 8 R | 4 R |
| Energy 2 (the "upgraded generator") | 24 E, 12 M, 12 R | 8 E, 6 M, 6 R |
| Materials 2 | 12 E, 24 M, 8 R | 6 E, 8 M, 4 R |
| Research 2 | 16 E, 8 M, 24 R | 4 E, 4 M, 8 R |
| Energy 3 | 72 E, 36 M, 24 R | 16 E, 8 M, 8 R |
| Materials 3 | 36 E, 72 M, 24 R | 8 E, 16 M, 8 R |
| Research 3 | 48 E, 24 M, 72 R | 8 E, 6 M, 16 R |

Authoring intent: tier 2 leans on the two other domains unequally so the three contracts a group might sign are not interchangeable; tier 3 needs level 3 in its own domain for full utilization, and the cap of 5 means no one can be master in one and better than novice in both others, so tier-3 work in a third domain is always slow for someone.

### Worked examples (checked by stepping the rules tick by tick)

**First tool from the clean slate.** Hand-gather 8 of your resource (8 ticks, matched learning → novice at tick 8), pay, build 4 ticks at tier 1. Tool in hand at **tick 12**, level 1 with 4 points toward competent. The first day is "get your tool," as intended.

**Energy 2 by a three-member contract**, each member already holding their own tier-1 tool. Energy member: produce 24 E (8 ticks), build 8 E-ticks at full → **16 ticks**. Materials member: produce 12 M (4 ticks, which lifts them to competent), build 6 M-ticks at full → 10 ticks. Research member: same → 10 ticks. Generator complete **16 ticks after tooling, 28 from the slate**; summed person-ticks 36.

**Energy 2 by a solo energy novice** with only Energy 1: produce 24 E (8), hand-gather 12 M (12) and 12 R (12), pay, build 8 E-ticks (8), 6 M-ticks and 6 R-ticks at 50–100% as levels rise (8 each) → **56 ticks after tooling**. That is 3.5× the contract's wall-time and 1.6× its summed person-ticks: "more than plainly ×3," as the owner's example requires. The cap bites on the way: reaching competent in Materials and Research knocks Energy back to novice.

**Energy 3 by a solo at the cap** (Energy master, Materials competent, Research 0): the 8 R-ticks at 12.5% take 36 real ticks, during which the agent becomes a research master and loses energy mastery to replacement. Possible, excessively long, and the context-reshaping cost is the mechanism, not a rule.

### For the owner to review

- Assumptions 1–4 above, especially 2: utilization on build ticks is the single biggest lever on claim D.
- Whether tier-3 costs should be this steep for a first run that may end around tier 2.
- Whether the asymmetric cross-domain mixes at tier 2 are wanted, or symmetric is simpler to reason about for the agents.
- The run length placeholder in ticket 02 follows from this table: a competent solo reaches Energy 2 at roughly tick 70 from the slate, so T near 72 (three fictional days) is where "solo just reaches the generator" lands.
