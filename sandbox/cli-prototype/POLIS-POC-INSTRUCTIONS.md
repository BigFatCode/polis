# POLIS Proof of Concept - Implementation Instructions

## Overview

Build a terminal-based turn-based strategy game to test a core mechanic: **actions affecting others require approval by vote from affected parties.**

This is a proof of concept to validate whether voting-based action approval creates interesting strategic tension or frustrating friction.

## Technology

- **Language:** JavaScript (Node.js)
- **Interface:** Terminal/CLI only
- **Dependencies:** Minimal - use `readline` for input, no external packages required

## Game Entities

### Agents
Three agents total:
- **Player** - controlled via terminal input
- **Cooperative NPC** - tends to approve others' actions
- **Competitive NPC** - tends to block others' actions

Agent state:
```javascript
{
  id: string,
  name: string,
  type: 'player' | 'cooperative' | 'competitive',
  resources: number,        // starts at 0
  connectedNodes: string[], // node IDs, max length 2
}
```

### Nodes
Three identical nodes:
```javascript
{
  id: string,
  name: string,
  resourcePool: number,     // starts at 0
  connectedAgents: string[], // agent IDs
  capacity: 3,
  minActiveAgents: 2,       // needs 2+ agents to generate resources
}
```

## Game Rules

### Win Condition
First agent to accumulate **10 resources** wins. Display winner and end game.

### Turn Structure
Game proceeds in rounds. Each round, every agent takes one turn in fixed order (Player → Cooperative → Competitive).

Each turn:
1. Display current game state
2. Agent selects an action
3. If action requires voting, resolve votes
4. Execute action if approved, otherwise reject
5. After action resolves, all active nodes add +1 to their resource pool

A node is **active** if it has 2 or more connected agents.

### Available Actions

| Action | Syntax | Voting Required | Voters |
|--------|--------|-----------------|--------|
| CLAIM | `claim <node>` | Yes | All agents connected to the node (including proposer) |
| CONNECT | `connect <node>` | Yes (if node has agents) | All agents currently at the node (proposer excluded) |
| DISCONNECT | `disconnect <node>` | No | None |
| PASS | `pass` | No | None |

### Action Details

**CLAIM:**
- Agent must be connected to the node
- Node must have resources > 0
- If approved: transfer ALL resources from node pool to agent
- If rejected: nothing happens, resources stay in pool

**CONNECT:**
- Agent must not already be connected to the node
- Agent must have fewer than 2 connections
- Node must have fewer than 3 connected agents (capacity)
- If node is empty: auto-approve (no voters)
- If node has agents: they vote on whether to allow entry
- If approved: add agent to node's connected list

**DISCONNECT:**
- Agent must be connected to the node
- Always succeeds, no vote required
- Remove agent from node's connected list

**PASS:**
- Do nothing, turn ends

### Voting Rules

When a vote is triggered:
1. Each voter chooses: YES, NO, or ABSTAIN
2. Count votes: approval requires `YES > NO`
3. Abstentions are ignored (don't count toward either side)
4. Ties (YES === NO) mean rejection

Example outcomes:
- 2 YES, 1 NO → Approved
- 1 YES, 1 NO → Rejected (tie)
- 1 YES, 0 NO, 1 ABSTAIN → Approved
- 0 YES, 0 NO, 2 ABSTAIN → Rejected (0 > 0 is false)

### NPC Decision Logic

**Cooperative NPC voting:**
- On CONNECT requests: YES
- On CLAIM requests: YES, unless Cooperative NPC is also connected to that node AND has already decided to CLAIM it this round (conflict of interest)

**Competitive NPC voting:**
- On CONNECT requests: NO
- On CLAIM requests: NO

**NPC action selection:**
- Cooperative: CLAIM from highest-value connected active node if possible, otherwise PASS
- Competitive: CLAIM from highest-value connected active node if possible, otherwise PASS
- If an NPC has no connections to active nodes, attempt to CONNECT to the node with most resources

## Terminal Interface

### State Display
At the start of each turn, print:
```
=====================================
ROUND 3 - Player's Turn
=====================================
RESOURCES: Player: 4 | Cooperative: 2 | Competitive: 3
WIN: First to 10 resources

NODES:
  [A] Alpha   | Resources: 3 | Agents: Player, Cooperative | ACTIVE
  [B] Beta    | Resources: 0 | Agents: Competitive | DORMANT
  [C] Gamma   | Resources: 2 | Agents: Player, Competitive | ACTIVE

YOUR CONNECTIONS: Alpha, Gamma (2/2)
=====================================
```

### Input Prompts
```
Your action: claim a
```

### Voting Display
```
VOTE: Player wants to CLAIM from Alpha
  Player votes: YES
  Cooperative votes: YES
  Result: APPROVED (2 yes, 0 no)
  
Player claims 3 resources from Alpha!
```

### Invalid Action Handling
Print clear error messages and re-prompt:
```
Invalid: You are not connected to that node.
Your action: 
```

## Starting State

- Player starts connected to Node A
- Cooperative NPC starts connected to Node B  
- Competitive NPC starts connected to Node C
- All nodes start with 0 resources
- All agents start with 0 resources

## Implementation Structure

Suggested file organization:
```
polis-poc/
  index.js        # Entry point, game loop
  game.js         # Game state and logic
  agents.js       # Agent definitions and NPC AI
  nodes.js        # Node management
  voting.js       # Voting system
  display.js      # Terminal output formatting
  input.js        # Player input handling
```

Alternatively, a single file is acceptable for a PoC of this scope.

## Testing Checklist

After implementation, manually verify:

1. [ ] Can claim resources from a connected active node
2. [ ] Cannot claim from a node you're not connected to
3. [ ] Cannot claim from a dormant node (fewer than 2 agents)
4. [ ] Voting correctly requires YES > NO
5. [ ] Abstentions don't count toward either side
6. [ ] NPCs vote according to their personality
7. [ ] CONNECT to empty node auto-approves
8. [ ] CONNECT to occupied node triggers vote (excluding proposer)
9. [ ] DISCONNECT always works without vote
10. [ ] Nodes only generate resources when active (2+ agents)
11. [ ] Game ends when any agent reaches 10 resources
12. [ ] Connection limit of 2 is enforced
13. [ ] Node capacity of 3 is enforced

## Notes for Implementation

- Keep code simple and readable over optimized
- Print NPC reasoning to help player understand their logic
- Use clear variable names that match this spec (agent, node, claim, connect, etc.)
- Handle edge cases gracefully with informative error messages
- Make it easy to modify constants (win threshold, node count, capacity limits) for tuning
