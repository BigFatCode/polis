# 00 Experiment frame

Type: grilling
Status: resolved
Blocked by: none
Claimed by: Georgiy Zelenskiy (grilling session with Claude, 2026-10-23/24)

## Question

What does the first POLIS experiment test, and what observation would show the core hook failed?

## Answer

### Claim D

Cooperation under binding governance outperforms isolation by enough to pay for the governance overhead. Governance is expected to be annoying rather than fun — like MMO clan leadership — and what it buys is **enforceability**. Rejected for experiment one: "governance adds engagement" (A, not believed achievable yet), "governance doesn't kill the hook" (B, too weak), "governance structures emerge" (C, still the long-term dream, far too expensive first).

### Premise

Borrow a proven progression loop and inject governance. Of the reference loops (Universal Paperclips, Factorio/Shapez, Travian), the **build queue over ticks** archetype is selected: explicit resource trade-offs, async by nature, representable without a spatial client. Observation recorded on the premise: co-op Factorio already works with zero formal governance, so the experiment is really testing whether *formalizing* coordination beats doing it informally.

### Structure

- **One shared world.** Communication open to everyone. Binding contracts available to anyone.
- **Cooperation is assigned** in experiment one: the owner decides which agents enter contracts, and the assignment doubles as setting the mid-term build goals. Chosen cooperation is experiment two.
- **Comparison is person vs person**, not group vs group. Every contribution to every project and vote is ledgered, so each agent's whole-game impact is traceable (an MVP can be named even among losers). "Ungoverned" simply means uncontracted individuals in the same world.
- **Owner's role:** experimenter first (configure, run, read numbers), then a second pass as a player inside the contracted group, with manual tick advancement, to judge whether the overhead feels worth it.

### Players

The owner plus LLM agents: same model, same base prompt, same seed; only rules and dispositions differ. Dispositions are fixed by the owner and hidden from the agents, including one opportunist in the contracted group. When a group fails, an after-run retro explains why rather than a scripted-agent control.

### Mechanisms in

- Private progression per agent.
- Soft specialization: expertise per domain grows by use; the sum across domains is capped, so raising one decays the highest other. Nobody is hard-locked out of anything; solo achievement of multi-domain projects is possible but excessively slow because of context reshaping.
- Direct vote with binding commitments: a proposal names the project, each member's contribution and the distribution of output; once passed, contributions are enforced.
- Delegation with recall, available from the start, as burden relief and as the route by which leadership may emerge. Replaces a separate leader+officers mechanism.
- Distribution of shared output is written into the contract (default template: by contribution share).
- Sunk contributions: a project that never completes yields nothing. Coordination failure must hurt; cooperation carries the risk of sabotage and stalled plans in exchange for effectiveness.

### Signals

- Metrics: per-agent progression at a fixed end tick; time-to-milestone; governance overhead (ticks in votes, proposals, messages) reported separately, never subtracted.
- **Friction kill:** mean contracted agent is at or below mean solo agent.
- **No-op kill:** informal cooperators, if any form, match contracted cooperators.
- **Success margin:** to be set once the progression system exists (ticket 03).

### Placeholders retracted as premature on 2026-10-24

6 agents (4 contracted, 2 solo), 3 domains, fixed end tick T sized so a competent solo just reaches the first milestone, success at 50% or more per-capita over solo. Re-ask in tickets 02 and 03 after ticket 01.

### Out of experiment one

Rule changes and governance evolution (C); chosen cooperation; dedicated saboteur; superlinear shared projects; raids and shared defense; leader+officers as a distinct mechanism; real-time cadence; humans other than the owner; any UI beyond what one turn needs; Telegram.
