# Round Formats

A **format** decides how a round is structured — who flies, in what order, and how they
advance. GridFPV treats formats as pluggable, so the same race-running flow powers everything
from a casual practice session to a full elimination bracket. This page helps you pick one and
set it up.

You choose a format **per round** on the [Rounds & Heats](/guide/running-an-event#stage-2-rounds-heats)
stage. Each format produces its heats and tells GridFPV how to rank pilots. A typical event
chains a couple of rounds — for example *Open Practice*, then *Qualifying*, then a *Bracket*
seeded from qualifying.

## Choosing a format at a glance

| Format | Use it when you want… |
| --- | --- |
| **Open Practice** | Casual warm-up flying with no scoring pressure. |
| **Qualifying** | A fair ranking to seed a bracket or final. |
| **Round Robin** | Everyone to meet everyone, points-based. |
| **ZippyQ** | A rolling "fly when ready" queue, added to on demand. |
| **Single / Double Elimination** | A head-to-head bracket to a winner. |
| **Multi-Main** | Tiered A/B/C finals so the whole field gets a real final. |

## The formats

### Open Practice

**What it is.** One open heat over the channels you choose. Pilots get on a channel and fly.
Laps are shown live on a per-channel **practice board**, but they are **not recorded** — the
board clears when you start a fresh run.

**When to use it.** Warm-ups, open track time, and shaking out your setup before competition
starts.

**How to set it up.**
1. Add a round and choose **Open Practice**.
2. (Optional) set a **time limit** in minutes — leave it blank for no limit, and end the run
   manually.
3. Pick the **active channels** — the timer node seats that are live for the session.
4. In Live Control, run the heat and use **New run · clear board** to start each fresh
   practice run.

Open Practice has no win condition and no ranking — it is purely flying time.

### Qualifying

**What it is.** Each pilot flies **multiple heats**, and their **best result ranks** them.
Pilots fly on **fixed, static channels** (assigned on Classes & Roster), and heats are
channel-balanced so everyone gets fair air. The resulting ranking is exactly what a bracket
seeds from.

**When to use it.** Whenever you need a fair seeding before a final or a bracket — the
standard competitive opener.

**How to set it up.**
1. Add a round and choose the qualifying format (**Timed Qual**).
2. Set **Heats per pilot** — how many heats each pilot flies (default 3). Best result counts.
3. Choose the **win condition**, which doubles as the **ranking metric** (see below).
4. Fill heats; each pilot appears across several heats on their fixed channel.

::: tip
In qualifying, the win condition **is** the ranking. Pick *Best Lap* to rank by fastest lap,
*Best N Consecutive* to rank by best consecutive laps, or *Timed — Most Laps* to rank by laps
flown.
:::

### Round Robin

**What it is.** Pilots are grouped and meet across multiple heats, ranked by combined points
(or, for a timed condition, by total laps).

**When to use it.** A group stage where you want broad, even matchups rather than a knockout.

**How to set it up.** Choose **Round Robin**, set **Heats per pilot** and **heat size**, and
pick a win condition. Pilots fly on static channels like qualifying.

### ZippyQ

**What it is.** A **rolling** format. Rather than a fully precomputed schedule, you add rounds
on demand and pilots fly when they are ready.

**When to use it.** Relaxed sessions, big open fields, or any "fly when you're ready" format
where you want to add depth as the day goes.

**How to set it up.** Choose **ZippyQ** and start with however many initial rounds you want
(default 0). Add more rounds from the Rounds & Heats stage as pilots queue up.

### Single / Double Elimination

**What it is.** Classic head-to-head **brackets**, seeded from a qualifying ranking.

- **Single Elimination** — one loss and you are out.
- **Double Elimination** — a pilot must lose twice; a losers' bracket gives a second chance,
  and the top of each bracket meets in the final.

**When to use it.** The competitive finale — a direct path to a winner.

**How to set it up.**
1. Run a qualifying round first to produce a ranking.
2. Add a bracket round, set its **seeding** to **From ranking**, choose the qualifying round
   as the source, and set **Top N advance** to take the top seeds.
3. Set the **heat size** (default 2 for head-to-head).
4. Channels are assigned **per heat** from your timer's pool, so each match gets clean
   frequencies. Use **Advance to bracket** to feed qualifying results in.

### Multi-Main

**What it is.** Tiered finals — **A-main, B-main, C-main**, and so on — so the whole field
gets a meaningful final at its level, not just the top group.

**When to use it.** Larger fields where you want everyone to have a real final, with the top
seeds in the A-main.

**How to set it up.** Choose **Multi-Main**, seed it **From ranking** off your qualifying
round, and set the **main size** (pilots per tier). The top seeds fill the A-main, the next
tier the B-main, and so on.

## Win conditions

A **win condition** decides when a heat ends and how its pilots are ranked. You pick one per
round (Open Practice is the exception — it has none).

### Timed — Most Laps (recommended)

Fly for a set time; **most laps wins**, with total time as the tiebreak. The heat ends when
the time window elapses, plus the **grace window** (default 30s) so a pilot's final lap still
counts if they crossed the gate just after the buzzer.

This is the recommended default for most racing: everyone flies the same amount of time, "most
laps wins" is easy to call and easy to understand, and the grace window keeps close finishes
fair.

### First to N Laps

The first pilot to complete **N laps** wins, and the heat ends when the leader gets there.
Good for a fast, decisive bracket match. Set the **laps** target on the round.

### Best Lap

Ranks by the **single fastest lap**. Used in qualifying, where the heat runs to its time limit
(or until you force it to end) and the best lap each pilot turned is what counts.

### Best N Consecutive

Ranks by the **fastest run of N back-to-back laps** (N defaults to 3). Also a qualifying
metric — it rewards consistency over a single hot lap.

::: tip Which win condition?
For head-to-head racing, **Timed — Most Laps** or **First to N Laps**. For seeding a field,
qualify on **Best Lap** (raw pace), **Best N Consecutive** (consistency), or **Timed — Most
Laps** (endurance) depending on what you want to reward.
:::
