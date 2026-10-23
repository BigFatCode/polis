# Project knowledge workflow

## Give each kind of knowledge one home

| Kind | Authoritative home | What belongs there |
| --- | --- | --- |
| Current intent | [direction.md](direction.md) | Purpose, confirmed scope and constraints, unresolved questions |
| Vocabulary | [CONTEXT.md](../CONTEXT.md) | Tight definitions of domain concepts |
| Possible future work | [ideas/](ideas/README.md) | Motivation, status, reconsideration conditions, links to evidence |
| Significant architectural decisions | `docs/adr/NNNN-title.md` | The decision, why it was made, and consequential trade-offs |
| Multi-session decision effort | `.scratch/<effort>/map.md` and child tickets | Wayfinder destination, questions, dependencies, and resolutions |
| Experiment | Its directory under `sandbox/` | Hypothesis, implementation, observed results, limitations |
| Fiction | [Lore](POLIS-lore-document.md) | Setting and narrative framing |
| Earlier proposals | [Original design](POLIS-design-document.md), [earlier overview](archive/README-v0.02.md) | Preserved historical content with a visible status notice |

The root README is navigation. AGENTS.md routes collaborators to the relevant sources. Neither repeats the specification.

## Capture and revisit ideas

Give a distinct idea its own file when it has enough substance to explain its value and when to revisit it. Add a link to the [idea index](ideas/README.md). A short, related collection may remain grouped in that index until a particular idea becomes active.

Each idea record contains:

- **Status:** parked, exploring, adopted, or rejected.
- **Motivation:** what problem or opportunity makes it worth retaining.
- **Revisit when:** a concrete decision or observation that should bring it back into discussion.
- **Origins and outcomes:** source material and links to any subsequent decision, experiment, or ADR.

Review relevant parked ideas when choosing an experiment, revising scope, or deciding domain boundaries. An idea's existence or `exploring` status does not commit the project to building it.

On adoption or rejection, retain the record, change its status, and link the reason. Write the resulting current requirement in its authoritative home rather than maintaining a second specification inside the idea.

## Record decisions at the right weight

Routine scope clarifications belong in current direction or the affected idea. Record experimental observations beside the experiment, with the method and limits of the evidence. Distinguish a code inspection from a played session.

Create an ADR when an architectural choice has meaningful reversal cost, involves real alternatives, and would be surprising without its rationale. The directory is created with the first actual ADR; an empty architecture or a speculative framework does not require one.

Use sequential names such as `0001-title.md`. Start with a title and a short account of the context, decision, and reason. Add alternatives, consequences, and status only where useful. Separate proposed from accepted decisions. Preserve superseded ADRs and link their replacements.

## Use Wayfinder for substantial unresolved efforts

The default tracker is repo-local Markdown, following Wayfinder's local tracker convention. Keep these files versioned with the repo so another session can resume from them. No active map is created merely to populate this structure. When using the installed Wayfinder skill, consult its full process and required ticket-specific skills; the conventions below describe this repository's tracker.

1. Agree a concrete destination with the owner. If the route is already clear and fits one session, perform the authorized work directly.
2. Create `.scratch/<effort>/map.md` with **Destination**, **Notes**, **Decisions so far**, **Not yet specified**, and **Out of scope**. Notes identify relevant skills and standing constraints. Leave Decisions so far empty initially.
3. Create one child ticket per precise question at `.scratch/<effort>/issues/NN-title.md`. Use `Type: research|prototype|grilling|task`, `Status: open`, and `Blocked by: none` or a comma-separated list of ticket numbers. The body begins with **Question**. Create tickets before wiring dependencies.
4. Find the next ticket by scanning children in number order for an open, unclaimed ticket whose blockers are all resolved. Claim it by setting `Status: claimed` and recording `Claimed by:` before working. Check existing claims before editing shared files.
5. Append the answer under **Answer**, set `Status: resolved`, and add a named link with a one-line gist to the map's Decisions so far. The ticket owns the detailed resolution; an architectural resolution may instead link to its authoritative ADR.
6. Turn newly precise questions into tickets and remove their corresponding fog from Not yet specified. Keep open tickets discoverable by scanning children rather than copying a backlog into the map. For a ticket found outside the destination, record the reason under Answer, set `Status: resolved` and `Outcome: out of scope`, and link it under Out of scope rather than Decisions so far. Revisit any dependent tickets whose premises change as a result.

Charting a map does not resolve its decision tickets. Work through at most one non-research ticket per session. Research can run independently; prototype and grilling tickets require the owner's actual input. Task tickets perform prerequisite work needed to make a decision. Refer to maps and tickets by linked titles in conversation.

Planning is the default. Carry implementation inside a map only when its agreed Notes explicitly include execution. If moving to an external tracker later, move the active records and leave links rather than maintaining two competing trackers.

## Finish a documentation change

Check relative links, update affected statuses and index entries, and verify that every removed current claim either has a replacement source or remains recoverable as historical material. Preserve existing user edits. Historical claims remain historical even when a later document links to them.
