# Round Formats

A **round** is a chunk of racing. Its **format** decides who flies, in what order, and how
pilots are ranked at the end.

You pick a format **for each round** on the
[Rounds & Heats](/guide/running-an-event#stage-2-rounds-heats) stage. Then you **chain rounds
together** with seeding — for example Practice, then Time Trials, then a Head-to-Head final made
up of the fastest qualifiers.

GridFPV has three formats. They're kept simple on purpose: each does one job, and you build
bigger structures by chaining them.

## Which one do I want?

| Format | Pick it when you want… |
| --- | --- |
| **Practice** | Casual flying, nothing scored. |
| **Time Trials** | A fair ranking. Everyone races the clock. |
| **Head-to-Head** | Real racing. Pilots against each other, in groups. |

## The round types {#the-round-types}

### Practice

**What it is.** One open session on the channels you choose. Pilots get on a channel and fly.

Laps show up live on a **practice board**, one line per channel. Like every other format, the
laps are **saved** — they're in the lap list and the history, and you can go fix them
afterwards.

What Practice never does is **score**. It ranks nobody and feeds no standings.

**When to use it.** Warm-ups, open track time, and shaking out your setup before racing starts.

**How to set it up.**
1. Add a round and choose **Practice**.
2. Optionally set a **time limit** in minutes. Leave it blank to run until you stop it.
3. Pick the **active channels** for the session.
4. In Race Control, run the heat. When it ends you get **Run complete** and one button — **Run
   again** — which re-stages the same heat.

A Practice round makes **one heat**, re-run over and over. Each run's laps stay on screen until
you press Run again, so there's always a chance to look at what just happened.

Practice has no win condition, no ranking and no result to make official, so Race Control offers
no **Finalize**, **Advance** or **Revert** for it.

::: tip You can tune the gate during practice
Because nothing is being scored, GridFPV lets you change gate levels *while* a practice session
runs — which is exactly when you have pilots in the air to test against. See
[Tuning a Gate](/guide/tuning#when-tuning-is-refused).
:::

### Time Trials

**What it is.** Every pilot races **the clock**, not each other. Each pilot flies one or more
heats, and their **best result** is what ranks them.

Pilots keep **one fixed channel** all round (assigned on Classes & Roster), and GridFPV splits
the field into as many heats as it needs, capped by your timer's node count. A 64-pilot field
just works.

**When to use it.** Any time you need a fair ranking before a final. This is the standard way to
open a competitive night. The finished ranking is exactly what a later round's **From ranking**
seeding pulls from.

**How to set it up.**
1. Add a round and choose **Time Trials**.
2. Set **Heats per pilot** — how many heats everyone flies (default 3). Best result counts.

   Set it to **0** to run **open-ended**: the button becomes **Generate next heat** and makes one
   more each time you ask. Good for "keep qualifying until we run out of daylight."
3. Choose the **win condition**, which is also the ranking (see below): **Best of N laps** or
   **Timed — Most Laps**. Best-of-N is always timed, so you also set a **race time**.
4. Generate the heats. Each pilot appears across them on their own channel.

::: tip Finalize each heat, or the ranking won't settle
A round's ranking only counts heats you've **finalized**.

So finalize each heat once you're happy with it, from Marshaling or Race Control. Then the
ranking — and anything seeded from it — is ready to use.
:::

### Head-to-Head

**What it is.** Real racing. The field is split into **groups** who race each other, and the
round ranks everyone by how they finished.

The groups are drawn once, when you generate the heats, and every heat in the round uses those
same groups.

**When to use it.** Mains, finals, and points-racing club nights — any time pilots should be
racing each other rather than the clock.

**How to set it up.**
1. Add a round and choose **Head-to-Head**.
2. Set the **Group size** — pilots per heat, capped by your timer's node count.
3. Set **Heats per group** — how many times each group races (default 1).

   With 2 or more, the **same groups** race again and their scores add up across heats. That's
   the classic "three rounds of points racing with your group" club format. Groups **take
   turns**, so a group's heats are spread through the round rather than run back to back.
4. Pick the **win condition**: **Timed — Most Laps** or **First to N Laps**. Both end a heat
   decisively.
5. Pick the **scoring**:
   - **Placement** — rank by finishing position, winners first. With several heats per group, a
     pilot's best single result counts.
   - **Points** — each position earns points from a table you can edit (a steep
     10 / 6 / 4 / 3 / 2 / 1 by default, one row per position). Points **add up across every heat
     a pilot flies**, which is what makes multi-heat racing worth doing.
6. Channels are assigned **per heat** from your timer's pool, so each group gets clean
   frequencies.

## Seeding — chaining rounds together {#seeding-chaining-rounds-together}

Every scored round says where its pilots come from:

- **From roster** — the class's members, as entered on Classes & Roster. The usual choice for
  practice and the first qualifying round.
- **From ranking** — a previous round's finished ranking. Pick one or more **source rounds**
  (several are combined by each pilot's best result), then set **Take top** — how many pilots
  come through.

  The number is capped by how many pilots are actually available, so you can't ask for a top 16
  out of a 10-pilot field.

That's how an event chains together: Time Trials seeded from the roster, then a Head-to-Head
final seeded **From ranking** with the top 8.

::: info Brackets are coming back later
Bracket builders (single and double elimination), multi-main tiers, and round-robin structures
are being rebuilt on top of these three formats and will return in a future release.

Until then you can chain rounds by hand with **From ranking** seeding. A time trial into a top-N
final covers most club nights.
:::

## Channels for a round

By default a round's channels are picked automatically from the primary timer's list.

For exact control, define [channel layouts](/guide/running-an-event#channel-layouts) on the
event — a layout says which channel goes on which node — and tick the ones this round may use:

- **One layout** — every heat uses it. This is the bracket case.
- **Several** — heats take turns through them, so back-to-back heats don't share channels. This
  is the qualifier case, where pilots keep their own channel.
- **None** — automatic, as before.

You can still override any individual Scheduled heat from its own **Layout** dropdown.

## Round timing & safeguards {#round-timing-safeguards}

Every scored round has a few timing settings. The defaults are sensible; leave them unless you
have a reason.

| Setting | What it does | Default |
| --- | --- | --- |
| **Staging time** | The "pilots to the line" countdown. Just for you — nothing happens on its own. | 5:00 |
| **Start delay** | A short random wait between Start and the go-tone, so nobody can time it. | 2–5s |
| **Grace window** | How long after the race ends a late crossing still counts. | 30s |
| **Min lap time** | Any lap shorter than this is removed automatically as impossible. | 5s |
| **Protest window** | 0 means you Finalize by hand. Any other number finalizes automatically that many seconds after the race. | 0 |

::: tip Min lap time vs the timer's same-pass window
These sound alike and are not the same thing.

**Min lap time** (here, on the round) means *"a lap can't be this fast on my track."* The pilot
probably did cross the gate — they just cut the course, or turned around at it.

**The same-pass window** (on the timer) means *"the gate reported one pass twice."* Nobody flew
anything extra; the hardware repeated itself.

Both get removed automatically, both are shown in
[Marshaling](/guide/marshaling#the-removal-record) with a Restore. But they're different
problems with different fixes. See
[gate bounce](/guide/timers#gate-bounce-the-same-pass-window).
:::

::: warning Raced rounds lock their scoring rules
Once a round has raced heats, the settings that decide scoring **lock**: format, classes, win
condition, seeding and min lap time. Changing them would quietly re-score races that already
happened.

The label, staging and start timing, grace window, protest window and heats-per-pilot stay
editable.
:::

## Win conditions {#win-conditions}

A **win condition** decides when a heat ends and how pilots are ranked. Each format offers the
ones that make sense for it. Practice has none.

### Timed — Most Laps (recommended)

Fly for a set time. **Most laps wins**, with total time breaking a tie.

The heat ends when the time runs out, plus the **grace window** (30s by default) so a pilot's
last lap still counts if they crossed just after the buzzer.

This is the recommended default for most racing. Everyone flies the same amount of time, "most
laps wins" is easy to call and easy for pilots to understand, and the grace window keeps close
finishes fair. Available in Time Trials and Head-to-Head.

### First to N Laps

The first pilot to finish **N laps** wins, and the heat ends as soon as they get there. Good for
a fast, decisive race. Set the lap target on the round. Head-to-Head only.

### Best of N Laps

Ranks each pilot by their **fastest run of N laps in a row**.

- **N = 1** ranks by single fastest lap — raw pace.
- **N = 3** (the default) rewards being consistent rather than having one hot lap.

Always timed: you fly the race-time window, and your best run counts. Time Trials only, where it
doubles as the qualifying score.

::: tip Which one should I pick?
**Racing pilots against each other:** Timed — Most Laps, or First to N Laps.

**Seeding a field:** Best of 1 for raw pace, Best of 3 for consistency, or Timed — Most Laps for
endurance. Pick whichever you want to reward.
:::
