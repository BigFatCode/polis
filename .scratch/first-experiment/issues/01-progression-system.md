# 01 Progression system

Type: grilling
Status: resolved
Blocked by: none
Claimed by: Georgiy Zelenskiy (grilling session with Claude, 2026-10-24)

## Question

What is the progression loop the governance is injected into? Specifically: which domains exist and what each produces; what a mid-term shared project (the "upgraded generator" example) costs across domains and what it yields; how expertise grows with use, what the capped sum is, and how decay applies; and what the tick-level build-queue rules are.

The answer must make the owner's example literal: a mixed-expertise group builds the generator in about a day, a solo agent needs far more than the summed time because of context reshaping, and a group that fails to agree builds nothing while the solo agent keeps producing.

## Answer

### Resources and domains

Three independent, named resources — working names Energy, Materials, Research — with domain = resource, one to one. No production chain; interdependence comes from tech costs and the expertise cap, not from recipes. Each agent has a private stock with no upkeep and no storage cap.

### Tick and actions

A tick is one fictional hour. The game is turn-based, so real pacing is free to change. Each tick an agent takes **one work action in a single domain** plus any number of instantaneous spends (pay for a build, contribute to a project, gift). Governance actions, and whether they cost a tick, belong to [ticket 04](04-contract-and-delegation-rules.md).

### Expertise

- Per domain, **levels 0–3**: unspecialised, novice, competent, master. Discrete, with a progress counter toward the next level. Everyone starts at 0 in every domain.
- **No time-based decay.** The context window is a **cap of 5 on the sum of levels** (master plus competent). When gaining a level would exceed the cap, the agent's highest other domain drops by one level.
- **Learning rate by match.** Expertise gain per work tick depends on the tech tier worked with relative to the agent's level: tier = level + 1 is the stretch, about 2× normal; tier = level is normal; tier below level, or two or more above, is slow. Roughly 8 matched ticks per level; about 24 from nothing to master.

### Tech

- **Tiers 1–3 per domain**, plus an implicit **tier 0**: working a domain with no tech produces at a low base rate.
- Output per work tick = tech tier output × utilization. Utilization is full when the tier is at or below the agent's level and drops by half per level of shortfall (a novice on tier-3 tech works at 25%). Level 0 is debuffed on everything.
- **Clean slate:** nobody owns any tech at the start.

### Building: one mechanism for tech and projects

Every tech is a project. The builder pays its resource cost, then puts **work ticks into it in its domain** until it is complete; those ticks are stretch work and train the builder. A shared project is the same mechanism at scale: pooled resources plus pooled work ticks under a contract.

- Each tech's cost is an **individually authored vector of resources plus work ticks per domain**. No formula and no fixed cross-domain share; [ticket 06](06-tech-table.md) drafts the table.
- **Tier 1 needs own-domain work ticks only**, so the clean slate is escapable alone by hand-gathering; but its resource cost draws on all three domains from tier 1 up (amended 2026-10-24 during the review of ticket 06: a ladder whose first rung costs only its own resource would push even a solo player into single-domain specialization by design). Cross-domain *work* need starts at tier 2, which is where the first contracts are expected. First observable of the experiment: at which tick do contracted agents begin building tier 2, versus solo agents.
- **Pooled totals, no expiry, no withdrawal.** An unfinished project is a loss of production, nothing more: locked resources yield nothing until completion, and no further penalty is stacked on top.
- Projects are **world-visible and open**: any agent may contribute and finish one. Whether a contributor thereby joins the contract and gains access is ticket 04's rule.

### Shared projects — provisional

A contract builds a **shared tech item** of a domain and tier. Members benefit only by working in that domain with it; nothing flows to anyone who puts no ticks in. The contract's distribution clause is therefore **access** (who may use it, and a per-tick cap if needed), not a split of a resource stream. The owner marked this as the part to prototype rather than decide; it replaces the stream-split answer given earlier in the session.

### Score

Cumulative production (resource-equivalent) as the headline per-agent metric; production rate at the end tick reported beside it.

### Parked, not decided

- **Split attention** across domains in one tick (for example 30/20/50 with commitments to specific projects). Part of the owner's longer vision; kept out so the single-domain work action stays crisp. Recorded in [experiment two candidates](../../../docs/ideas/experiment-two-candidates.md).
- **One-way gifts** as the informal cooperation channel outside contracts. Adopted provisionally so the no-op kill signal can fire; the owner has no settled opinion on trade.

### Retired during the session

A fixed 1:2:4 specialization multiplier; five tiers with geometric ×2 costs; a fixed cross-domain cost share; time-based expertise decay; passive build timers. Each was replaced by the rules above.
