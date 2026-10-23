# POLIS Proof of Concept

> Unused experiment. The owner confirmed on 2026-10-04 that this implementation has never been used and may be replaced. Its rules and structure impose no requirements on the future game. See [current direction](../../docs/direction.md).

## Evidence and limitations

Code inspection on 2026-10-04 found that Cooperative rejects every other agent's claim on a shared positive-resource node, while Competitive rejects even its own claims. With strict `YES > NO` approval and NPCs that never disconnect, the human cannot collect resources under reachable play. This is a conclusion from code inspection, not a played-session result.

The [prototype instructions](POLIS-POC-INSTRUCTIONS.md) also contain an unresolved inconsistency: their checklist forbids dormant-node claims, while their detailed claim rules omit that restriction. The implementation permits them when resources remain.

`node --check game.js` passed during the repository inspection. No gameplay validation or product validation has been performed in this collaboration. Resolve the relevant rule questions before treating this experiment as evidence for or against the game concept.

The original usage notes follow; they describe the experiment, not the current product specification.

A terminal-based turn-based strategy game demonstrating a voting-based action approval mechanic.

## Quick Start

```bash
node game.js
```

## How to Play

You play against two NPCs:
- **Cooperative NPC** - tends to approve actions
- **Competitive NPC** - tends to block actions

**Goal:** Be the first to accumulate 10 resources.

### Available Actions

- `claim <node>` - Claim all resources from a connected node (requires vote from all agents at that node)
- `connect <node>` - Connect to a node (requires vote if occupied, max 2 connections)
- `disconnect <node>` - Disconnect from a node (no vote required)
- `pass` - Skip your turn
- `help` - Show help message

### Node IDs
- `a` - Alpha
- `b` - Beta
- `c` - Gamma

### Game Mechanics

**Resources:** Nodes generate +1 resource per turn when they have 2+ connected agents (ACTIVE status).

**Voting:** When your action affects others, they vote YES/NO/ABSTAIN. The action is approved if YES > NO.

**Strategy:** Balance between:
- Connecting to nodes to make them active
- Claiming resources before others do
- Managing relationships with NPCs through the voting system

## Example Turn

```
Your action: connect b

VOTE: Player wants to CONNECT from/to Beta
  Cooperative votes: YES
  Result: APPROVED (1 yes, 0 no)

Player connects to Beta!
```

## Implementation Notes

This is a proof-of-concept implementation to test the core voting mechanic. The entire game is contained in a single `game.js` file for simplicity.

For details on the game rules and implementation requirements, see `POLIS-POC-INSTRUCTIONS.md`.
