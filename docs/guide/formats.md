# Round Formats

A **round type** decides how a round is structured — who flies, in what order, and how the
round ranks its pilots. You choose one **per round** on the
[Rounds & Heats](/guide/running-an-event#stage-2-rounds-heats) stage, and chain rounds
together with **seeding** — for example *Practice*, then *Time Trials*, then a *Head-to-Head*
final seeded from the time-trial ranking.

GridFPV ships three round types. They are deliberately simple building blocks: each one does
one job well, and bigger structures are assembled by chaining rounds.

## Choosing a round type at a glance

| Round type | Use it when you want… |
| --- | --- |
| **Practice** | Casual warm-up flying with no scoring pressure. |
| **Time Trials** | A fair ranking — every pilot against the clock. |
| **Head-to-Head** | Direct racing in groups, ranked by placement or points. |

## The round types

### Practice

**What it is.** One open heat over the channels you choose. Pilots get on a channel and fly.
Laps are shown live on a per-channel **practice board**, but they are **not recorded** — the
board clears when you start a fresh run.

**When to use it.** Warm-ups, open track time, and shaking out your setup before competition
starts.

**How to set it up.**
1. Add a round and choose **Practice**.
2. (Optional) set a **time limit** in minutes — leave it blank for no limit, and end the run
   manually.
3. Pick the **active channels** — the timer node seats that are live for the session.
4. In Race Control, run the heat and use **New run · clear board** to start each fresh
   practice run.

Practice has no win condition and no ranking — it is purely flying time.

### Time Trials

**What it is.** Every pilot races **the clock**, not each other. Each pilot flies one or more
heats and their **best result ranks** them. Pilots fly on **fixed, static channels** (assigned
on Classes & Roster), and heats are **channel-balanced automatically** — a large field is
split into as many heats as it needs, capped at your timer's node count, so a 64-pilot field
just works.

**When to use it.** Whenever you need a fair seeding before a final — the standard
competitive opener. The finished ranking is exactly what a later round's **From ranking**
seeding draws from.

**How to set it up.**
1. Add a round and choose **Time Trials**.
2. Set **Heats per pilot** — how many heats each pilot flies (default 3). Best result counts.
   Set it to **0** to run the round **open-ended** — the button becomes **Generate next
   heat** and produces one more heat each time you ask, until you stop. Great for "keep
   qualifying until we run out of time."
3. Choose the **win condition**, which **is** the ranking metric (see below): **Best of N
   laps** (N = 1 ranks by single fastest lap; N = 3 rewards consistency) or **Timed — Most
   Laps**. Best-of-N is always timed, so you also set a **Race time** — the length of the
   window each pilot flies.
4. Generate heats; each pilot appears across heats on their fixed channel.

::: tip Finalize to rank
A round's ranking only counts heats you've **finalized**. Until you finalize a round's heats,
its ranking won't be settled — so finalize each heat once you're happy with it (Marshaling or
Race Control), and the ranking — and anything seeded from it — is ready.
:::

### Head-to-Head

**What it is.** Direct racing. The field splits into **groups** that race each other, and the
round ranks everyone by how they finished. One grouping decision per round: the groups are
drawn when you generate heats, and every heat in the round races those same groups.

**When to use it.** Mains, finals, ProSpec-style points racing — any time pilots should race
each other rather than the clock.

**How to set it up.**
1. Add a round and choose **Head-to-Head**.
2. Set the **Group size** — pilots per heat, capped at your timer's node count.
3. Set **Heats per group** — how many back-to-back heats each group races (default 1, a
   single pass where everyone races once). With 2 or more, the **same groups** run again and
   the scoring accumulates across heats — the classic "three rounds of points racing with
   your group" club format.
4. Pick the **win condition**: **Timed — Most Laps** or **First to N Laps** — both end a heat
   decisively.
5. Pick the **scoring**:
   - **Placement** — rank by finishing position (heat winners first). With several heats per
     group, a pilot's best single result counts.
   - **Points** — each finishing position earns points from an **editable per-position
     table** (a steep MultiGP-style 10 / 6 / 4 / 3 / 2 / 1 by default, one row per position,
     following the group size). Points **sum across every heat a pilot flies** — this is what
     makes multi-heat racing meaningful.
6. Channels are assigned **per heat** from your timer's pool, so each group gets clean
   frequencies.

## Seeding — chaining rounds together

Every scored round declares where its field comes from:

- **From roster** — the round's class membership, as entered on Classes & Roster. The usual
  choice for practice and time trials.
- **From ranking** — a previous round's finished ranking. Pick one or more **source rounds**
  (several are combined by each pilot's best result) and **Take top** — how many pilots from
  that ranking race in this round. The count is bounded by the pilots actually available in
  the source rounds, so you can't ask for a cut the ranking can't fill.

That's how an event chains: Time Trials seeded from the roster, then a Head-to-Head final
seeded **From ranking** with the top 8.

::: info Tournament structures return later
Bracket builders (single/double elimination), multi-main tiers, and round-robin structures
are being rebuilt on top of these round types and will return in a future release. Until
then, you can still hand-chain rounds with **From ranking** seeding — a time trial into a
top-N final covers most club nights.
:::

## Round timing & safeguards

Every scored round carries a few timing knobs (set on the round form; the defaults are
sensible):

- **Staging time** — the "pilots to the line" countdown length (informational; default 5:00).
- **Start delay** — the randomized hold range between Start and the go-tone (default 2–5s).
- **Grace window** — how long after the win condition late crossings still count
  (default 30s).
- **Min lap time** — crossings that would close a lap shorter than this are auto-removed as
  double-detections (default 5s on new rounds; 0 = off; every auto-removal is visible in
  [Marshaling](/guide/marshaling#the-removal-record) with a Restore override).
- **Protest window** — 0 means results wait for your manual **Finalize**; a value
  auto-finalizes the result that many seconds after race end, leaving a protest window.

::: warning Raced rounds freeze their scoring rules
Once a round has raced heats, its scoring-defining settings (format, classes, win condition,
seeding, min lap time) lock — editing them would silently re-score finished results. Label,
staging/start timing, grace, protest window, and heats-per-pilot stay editable.
:::

## Win conditions

A **win condition** decides when a heat ends and how its pilots are ranked. Each round type
offers the conditions that make sense for it (Practice is the exception — it has none).

### Timed — Most Laps (recommended)

Fly for a set time; **most laps wins**, with total time as the tiebreak. The heat ends when
the time window elapses, plus the **grace window** (default 30s) so a pilot's final lap still
counts if they crossed the gate just after the buzzer.

This is the recommended default for most racing: everyone flies the same amount of time, "most
laps wins" is easy to call and easy to understand, and the grace window keeps close finishes
fair. Offered in both Time Trials and Head-to-Head.

### First to N Laps

The first pilot to complete **N laps** wins, and the heat ends when the leader gets there.
Good for a fast, decisive head-to-head race. Set the **laps** target on the round.
Head-to-Head only.

### Best of N Laps

Ranks by each pilot's **fastest run of N back-to-back laps**. **N = 1 ranks by the single
fastest lap** (raw pace); N = 3 (the default) rewards consistency over a single hot lap.
Always timed — you fly the race-time window and your best run counts. Time Trials only,
where it doubles as the qualifying metric.

::: tip Which win condition?
For head-to-head racing, **Timed — Most Laps** or **First to N Laps**. For seeding a field,
qualify on **Best of 1** (raw pace), **Best of 3** (consistency), or **Timed — Most Laps**
(endurance) depending on what you want to reward.
:::
