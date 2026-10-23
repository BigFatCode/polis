# POLIS

> Historical snapshot of the previous root README, retained on 2026-10-04. Its milestone and implementation claims are historical statements, not current status. In particular, Telegram was clarified as a possible experiment. Start with [current direction](../direction.md). Original content is preserved below, with documentation links repaired for this location.

An experimental multiplayer governance simulation where every action affecting others is checked against community-approved policies — unless you accumulate enough authority to act first and let others veto.

## Overview

POLIS is a cooperative strategy game that explores emergent governance. Players don't choose a political system — they evolve one through their actions. Communities naturally develop from democracy to technocracy to autocracy based on what works, with built-in mechanisms preventing permanent power monopolies.

**Current Version:** v0.02 (Early Development)

## Core Mechanics

- **Policy or Authority:** Actions are checked against standing policies; what policies don't cover triggers voting — unless your authority fast-tracks it (others must gather a veto instead)
- **Async by Design:** The world advances in ticks; votes stay open for hours with quorums and sensible defaults — no synchronous presence required
- **Specialization System:** Gain expertise through action, but a limited "context window" forces trade-offs
- **Fluid Governance:** Modify voting rules, authority accumulation, and delegation systems through play
- **Exit by Forking:** Dissenting factions can secede with a proportional share of resources instead of silently quitting

## Development Status

**Phase 0** — Core governance loop prototyped as a Telegram bot (proposal → vote → execution → consequences), currently heading into playtesting.

## Documentation

- [Design Document](../POLIS-design-document.md) - Detailed game design and mechanics
- [Lore Document](../POLIS-lore-document.md) - In-universe context and philosophy

## Contributing

This project is in early development. More information coming soon.

## License

TBD
