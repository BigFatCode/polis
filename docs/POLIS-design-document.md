# POLIS - Game Design Document v0.01

> Historical design proposal. Preserved for its ideas, not an accepted specification or roadmap. Read [current direction](direction.md) for confirmed intent and the [idea index](ideas/README.md) for when to revisit these proposals. The original content follows unchanged.

## Executive Summary

**Genre:** Experimental Cooperative Strategy / Governance Simulation
**Platform:** Browser-based multiplayer
**Core Hook:** Every action affecting others requires approval - unless you accumulate enough authority to override them
**Unique Selling Point:** Emergent governance where players naturally evolve from democracy to technocracy to autocracy based on effectiveness

---

## 1. Core Concept

### The Fundamental Dynamic
Every action affecting others triggers voting - unless you have enough authority to override. Authority accumulates through successful leadership and specialized expertise, but the context window limitation ensures no permanent monopolies.

### The Emergence
Players aren't forced into any particular governance model. Communities naturally evolve structures based on what works: democracy, technocracy, autocracy, or anarchy. The ability to disconnect and reconnect keeps the system fluid and voluntary.

---

## 2. Setting & Context

### World
Near-future Earth or colony. Players control automated settlements that can be managed by single operators or collective councils. The fiction is minimal - just enough to justify the mechanics.

### Player Role
Settlement operators managing drone workers, defensive units, and research facilities. You're not the drones - you're the AI giving them orders.

### Victory Conditions
- **Survival Victory:** Last 30 days against escalating threats
- **Wonder Victory:** Complete a massive project requiring significant resources
- **Dominance Victory:** Control 75% of map resources
- **Federation Victory:** Unite all players under a single governance model

---

## 3. Core Mechanics

### 3.1 Action System

#### Dynamic Authority Check:
- Before any action executes, system checks for affected third parties
- If action affects others: triggers voting
- If proposer's authority outweighs all affected parties: auto-approves
- Players can disconnect from communities to escape authority structures

#### Examples:
- Moving your unit on empty land: no vote needed
- Building on shared territory: affected neighbors vote
- Using communal resources: resource contributors vote
- Changing governance rules: all members vote

### 3.2 The VoteWall

When voting is triggered:

**1. Proposal Phase**
   - Player describes action with justification
   - System calculates affected parties and required votes
   - Shows authority weights of all participants

**2. Voting Phase**
   - Only affected parties vote
   - Voting power weighted by relevant experience
   - Default is simple majority (modifiable via governance)

**3. Execution Phase**
   - Approved actions queue immediately
   - Failed proposals show what votes were missing

#### TODO: Time Window System
- Need solution for preventing AFK blocking and spam
- Consider: Dynamic timing based on action scale? Reputation penalties for urgency abuse?
- Async voting with execution thresholds?

### 3.3 Specialization System

#### Experience-Based Specialization:
- Each activity category has separate experience coefficient
- Experience gained through performing actions (not just voting)
- Experience directly affects voting power in relevant categories
- Specializations act as "plugins" with positive/negative modifiers

#### Skill Matching:
- **Underqualified:** Penalty to effectiveness and experience gain
- **Matched:** Optimal effectiveness and learning rate
- **Overqualified:** Diminishing returns on effectiveness, minimal experience gain

#### Context Window Limitation (AI Lore):
- Total experience capacity across all categories
- When limit reached, gaining experience causes decay in other areas
- Highest experience categories decay fastest
- Prevents permanent specialization monopolies
- Forces strategic choices about knowledge retention

#### Respecialization:
- Possible but costly (resources and/or experience decay)
- Represents "installing new plugins" or "retraining neural networks"
- Strategic tool for adapting to new challenges

### 3.4 Governance Evolution

#### Starting State:
Simple majority for all decisions, equal voting weight

#### Modifiable Parameters (via governance votes):
- Voting thresholds (majority, supermajority, unanimous)
- Voting weights (equal, experience-based, contribution-based)
- Authority accumulation rules (caps, decay rates, transfer methods)
- Delegation systems (proxy chains, category-specific, revocation rules)
- Emergency powers (crisis triggers, temporary executives)
- Resource distribution (merit-based, equal, need-based)

#### Possible Evolution Paths:

**Path A - Technocracy:**
- Experience-weighted voting becomes dominant
- Specialists control their domains
- High efficiency but barrier to new players

**Path B - Liquid Democracy:**
- Complex delegation chains emerge
- Topic-specific proxy voting
- Flexible but potentially confusing

**Path C - Authoritarian Efficiency:**
- Single player accumulates maximum authority
- Auto-approves most decisions
- Fast execution but player attrition

**Path D - Anarchist Federation:**
- Minimal shared governance
- Small autonomous cells cooperate loosely
- Resilient but limited scale

---

## 4. Gameplay Systems

### 4.1 Resources
- **Basic:** Food, Materials, Energy (everyone can gather)
- **Advanced:** Data, Components, Fuel (requires specialization)
- **Strategic:** Artifacts, Blueprints (requires cooperation)

### 4.2 Threats & Challenges

#### Environmental (affects everyone equally)
- Resource depletion zones
- Weather events
- Terrain obstacles

#### Hostile Forces (requires coordination)
- Raider attacks (increasing intensity)
- Rival AI settlements
- Rogue drone swarms

#### Internal Crises (tests governance)
- Resource shortages requiring rationing
- Conflicting expansion opportunities
- Tech path divergence

### 4.3 Research System

#### Solo Tech Trees:
- Basic efficiency upgrades
- Simple defensive structures
- Resource extraction improvements

#### Cooperative Tech Trees:
- Advanced specialization bonuses
- Mega-structures
- Game-changing technologies
- Governance innovations

---

## 5. Progression Flow

### Early Game (Days 1-7)
- Players explore basic mechanics and gain initial experience
- First authority accumulation through successful proposals
- Simple governance with equal voting weights
- Individual skill development without context window pressure

### Mid Game (Days 8-20)
- Context window limitations force specialization choices
- Authority-based auto-approvals become common
- Governance modifications reflect emerging power structures
- Community splitting as incompatible playstyles clash

### Late Game (Days 21-30)
- Maximum experience players juggle context window trade-offs
- Governance structures fully customized to community needs
- Power consolidation or federation formation
- Victory conditions within reach for organized groups

---

## 6. Monetization & Retention

### Free Core
- Full gameplay access
- Basic settlement customization
- Standard drone models

### Premium Options
- Cosmetic settlement themes
- Statistical analysis of your governance participation
- Private server hosting
- Advanced replay viewing

---

## 7. Unique Gameplay Scenarios

### Scenario A: "The Context Window Crisis"
- Veteran player maxes out total experience capacity
- Needs to pivot from economic to military for raid defense
- Must sacrifice accumulated economic expertise
- Other players seize economic voting majority during transition
- **Lesson learned:** Specialization has long-term trade-offs

### Scenario B: "The Benevolent Dictator"
- Skilled player accumulates authority through successful decisions
- Begins auto-approving actions without votes
- Colony thrives under efficient leadership
- New players can't contribute meaningfully, start disconnecting
- Dictator left ruling empty server
- **Lesson learned:** Efficiency vs engagement balance

### Scenario C: "The Specialist Revolution"
- Three specialists dominate their respective domains
- Each has voting control over their area
- Attempt to expand influence triggers context window limits
- Newer players exploit knowledge gaps to challenge authority
- **Lesson learned:** Expertise monopolies are temporary

---

## 8. Technical Requirements

### Core Features (MVP)
- Real-time voting system with 10-60 second windows
- Basic resource/unit management
- Simple combat resolution
- Specialization bonuses
- Constitutional modification system

### Planned Features (Post-Launch)
- Delegation chains and proxy voting
- Complex alliance systems
- Asymmetric victory conditions
- Governance template sharing
- Historical governance analytics

---

## 9. Success Metrics

### Emergent Gameplay Success
- Different servers evolve different stable governance models
- Players discover non-obvious coordination strategies
- Authority accumulation vs community splitting creates meaningful tension
- Context window limitation drives specialization trade-offs

### Commercial Success
- 30-day retention > 15%
- Average session > 45 minutes
- Players explore different specialization paths
- Communities naturally form and split based on governance preferences

### Design Success
- Voting becomes strategic tool, not tedious obstacle
- Governance evolution happens naturally through play
- Both authoritarian and collective strategies remain viable
- Experience system creates meaningful role differentiation

---

## 10. Risk Mitigation

### Risk: Voter Fatigue
**Solution:** Batched voting sessions, delegation options, policy-based auto-approval

### Risk: Toxic Deadlock
**Solution:** Server splitting mechanics, reputation systems, timeout defaults

### Risk: Solved Meta
**Solution:** Rotating challenge types, asymmetric maps, seasonal rule variations

### Risk: Empty Servers
**Solution:** AI settlements for practice, asynchronous turn-based mode, merge mechanics

---

## 11. Open Design Questions

### Delegation Mechanics
- **Granularity:** Can players delegate by category (mining votes vs military votes)?
- **Revocation:** Instant or delayed? Any penalty for frequent changes?
- **Transparency:** Are delegation chains visible to all players?

### Experience Systems
- **Gain Rate:** Only action executors or also voters?
- **Distribution:** Winner-takes-all or shared among participants?
- **Visibility:** Show exact numbers or abstracted tiers?

### Community Management
- **Disconnection Cost:** Cooldown period? Resource loss? Experience penalty?
- **Server Merging:** How to reconcile different governance models?
- **Minimum Viable Population:** When does a community become unplayable?

### Voting Mechanics
- **Time Windows:** How to prevent AFK blocking without rigid timers?
- **Spam Prevention:** Proposal limits? Reputation costs?
- **Emergency Overrides:** Should crises bypass normal voting?

---

## Summary

POLIS creates a sandbox where governance structures emerge from player choices rather than designer mandate. By making authority accumulation and community participation both viable paths, the game generates natural experiments in coordination. The context window limitation ensures no permanent power monopolies, while the ability to disconnect and reconnect keeps communities fluid. Success isn't measured by which governance model wins, but by whether players find meaningful strategic depth in navigating and shaping their political structures.
