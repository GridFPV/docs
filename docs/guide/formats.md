# Round Formats

A **format** decides how an event is structured — who flies, in what order, and how they
advance. GridFPV treats formats as pluggable, so the same race-running flow powers everything
from a casual practice session to a full elimination bracket.

> [!NOTE]
> This page is an outline that we are filling in over time. Each format below has a short
> description today and will grow into a full how-to with configuration details.

## Choosing a format

You pick a format per round when you set up [Rounds & Heats](/guide/running-an-event). Each
format produces its heats and tells GridFPV how to rank pilots.

## The formats

### Qualifying

Each pilot flies **multiple heats**, and their **best result ranks** them. The standard way
to seed a field fairly before a final or a bracket.

<!-- TODO: Number of rounds, how best result is chosen, seeding output. -->

### Open Practice

Casual, **channel-based** flying with no fixed bracket — pilots get on a channel and fly.
Good for warm-ups and open track time.

<!-- TODO: Channel assignment, rolling heats, no ranking pressure. -->

### Single / Double Elimination

Classic **brackets**. In single elimination one loss is out; in double elimination a pilot
must lose twice. Built from a seeded field.

<!-- TODO: Bracket sizing, seeding, byes, double-elim lower bracket. -->

### Round Robin

Every pilot meets every other pilot (or every group), spreading matchups evenly across the
field.

<!-- TODO: Group sizing, scheduling, tie-breaks. -->

### ZippyQ

A **rolling** format — the director adds rounds on demand and pilots fly when they are ready,
rather than from a precomputed schedule.

<!-- TODO: Adding rounds on the fly, queueing pilots. -->

### Multi-Main

Tiered finals — **A/B/C…-mains** — so the whole field gets a meaningful final at its level,
not just the top group.

<!-- TODO: Tier assignment from qualifying, main sizing. -->

## Win conditions

A **win condition** decides when a heat ends and how its pilots are ranked. Most formats let
you choose one:

- **Best Lap** — fastest single lap wins.
- **First to N Laps** — first pilot to complete N laps wins; the heat ends when the leader
  gets there.
- **Timed — Most Laps** — fly for a set time; most laps completed wins.
- **Best N Consecutive** — fastest run of N back-to-back laps wins.

<!-- TODO: How each interacts with the grace window and tie-breaks. -->
