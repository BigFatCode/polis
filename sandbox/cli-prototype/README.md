# POLIS Proof of Concept

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
