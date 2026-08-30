# Running an Event

This is the end-to-end walkthrough: create an event, run the setup wizard, then work
through the event workspace stage by stage to a finished result. If you have not launched
GridFPV yet, start with [Getting Started](/guide/getting-started) and add a
[Mock timer](/guide/timers#the-built-in-mock-timer) so you can follow along without hardware.

The **event workspace** is a sequence of **stage pages** down the left sidebar:

**Classes & Roster → Rounds & Heats → Race Control → Marshaling → Results**

Two more sidebar entries sit alongside them and are visited as needed rather than in order:
**Timers** (which timers this event races, and its channel layouts) and **Audit** (the
event-wide ruling history).

You move through the stages in order, but you can revisit any of them at any time. There is no
separate "edit" mode — setting an event up is just visiting its early stages. Most choices
**save automatically** as you make them, so you can close and reopen the event without losing
work.

## Create an event

1. From the home hub, open **Events**.
2. Create a new event and give it a name (for example *Tuesday Club Night*).
3. Open it. You land in the event workspace, and the **setup wizard** offers to walk you
   through the common path.

## The setup wizard

The wizard is a quick guided first pass that gets a standard event ready in a few clicks. It
covers the same ground as the early stage pages, in this order:

**Timer & channels → Classes & Roster → First round → Review**

Every selection **auto-saves** as you go — there is no Save button, and you can leave and
come back. Use **Next** / **Back** to move between steps, **Skip** to jump past an optional
step, and **Finish setup** on the last step.

### Step 1 — Timer & channels {#step-1-timer-channels}

Choose the timer (or timers) that feed this event and confirm their channels and node count.

::: warning You need at least one timer
**Next is disabled until you select a timer.** A timer defines how many pilots can fly at
once (its node count) and which channels they can fly on. If you have not set one up yet, add
the built-in **Mock** timer — see [Connecting a Timer](/guide/timers).
:::

::: danger RotorHazard needs the GridFPV plugin
A RotorHazard timer can only be selected once GridFPV has connected to it **and** confirmed
the GridFPV plugin is running on it. If it can't be ticked, the row says why and what to do —
connect it, or install the plugin and restart RotorHazard. See [Install the GridFPV
plugin](/guide/timers#install-the-gridfpv-plugin).
:::

If you select more than one timer, mark one as the **Primary** (it feeds the race and
supplies the channel list); the others act as hot-standby **Alternates**.

### Step 2 — Classes & Roster

Pick the classes this event runs, mark who is present, and place pilots into each class with
their channel. This is the same work the [Classes & Roster](#stage-1-classes-roster) stage
does — the wizard just front-loads it.

### Step 3 — First round

Define one round so the event is ready to fill heats. Choose a **format** and its
**win condition** (see [Round Formats](/guide/formats)). One round is enough to start; you
can add more later on the Rounds & Heats stage.

### Step 4 — Review

A short readiness check confirms you have at least one class, one placed pilot, a timer, and
a round. None of these block you — it is a gentle "ready to race?" summary. Click
**Finish setup** to land in the workspace.

::: tip
Everything the wizard does is also editable later from the stage pages. If you skip the
wizard or want to change something, just open the matching stage.
:::

## Timers & channel layouts {#timers-and-layouts}

The workspace's **Timers** screen does two jobs for this event.

### Pick the event's timers

Tick the timers this event races and mark one **Primary** — it feeds the race and supplies the
channel list; the rest are hot-standby **Alternates**. A RotorHazard timer is only tickable
once it has connected and its GridFPV plugin has answered; if it isn't, the row explains why
and what to fix. See [Connecting a Timer](/guide/timers).

Each connected timer's row also carries a **Tune** button, which opens
[gate tuning](/guide/tuning) scoped to this event — and returns you here when you're done. That
matters mid-event, when a gate is missing laps and a heat is waiting.

### Channel layouts {#channel-layouts}

A **channel layout** is one complete tuning of your timer for this event: *which channel goes
on which node*, one channel per enabled node. Layouts live on the **event** — defining one
never touches the timer's own settings.

::: tip Two scopes, two questions
The channel checkboxes on the timer answer *what may this timer ever use?* — the global record.
A **layout** answers *what goes on which node in this event?* The global set is just the pool a
new layout is seeded from.
:::

Why you'd want more than one:

- **A bracket** is one layout for the whole tournament — N channels for N pilots per heat, and
  they never move.
- **A GQ-style qualifier** is many layouts, so each pilot can stay on their own channel across
  the round.

Neither is the "right" one; pick the strategy your event needs.

To build one, open **Channel layouts** at the bottom of the Timers screen, name it (for example
*Bracket A*), and choose a channel for each node. Two rules apply:

- **Two nodes on the same channel is an error**, and so is leaving an enabled node unset — a
  layout is a *complete* tuning. Either blocks Save.
- **Reusing a channel between two layouts is only a warning**, never a block. GridFPV names both
  layouts and the shared channels, and says what it costs: fine for a bracket flying one layout,
  but it means a pilot can't stay on one channel across both if you're running qualifiers that
  way.

#### The IMD reading

While you pick channels, GridFPV shows an **IMD rating** for the set — live, as you tick. It is
the same measure RotorHazard reports for the same channels, so the numbers match what you're
used to reading there.

- **Higher is cleaner**, 100 is the ceiling, and a genuinely bad set goes negative.
- Alongside the number, GridFPV names the **worst offender** — the specific mixing product
  behind the rating, e.g. *2 × Raceband R2 − Raceband R1 = 5732 MHz — lands on Raceband R3* — or
  says plainly that *nothing mixes within 35 MHz of a channel this layout uses*.

It is **information, never a refusal**: a poor rating saves like any other. There is
deliberately no clean/marginal/poor verdict, because the best achievable rating collapses as
you add pilots — a Raceband-only timer genuinely cannot beat 0 at five pilots, and a fixed
threshold would just call every six-pilot layout dirty.

The reading is shown while you're still choosing, because that is the only moment it can change
anything: a layout is defined once and flown all event.

## Stage 1 — Classes & Roster {#stage-1-classes-roster}

This stage decides **who races and on what channel**. Your pilots and classes come from the
app-level registries (set up once under **Pilots** and **Classes** on the home hub), so here
you are mostly selecting and arranging. It has three sections.

### Classes

Tick the classes this event runs (for example *Open* and *Spec*). Need a class that does not
exist yet? Use **+ Add class** to create it. Your selection saves automatically.

### Pilots (roster)

Mark who is actually at the event today:

1. Tick each directory pilot who is present, or use **+ Add pilot** to add a new one on the
   spot. **Select all** / **Unselect all** help with a big field.
2. Place present pilots into classes:
   - With a **single class**, every present pilot is filled in for you.
   - With **multiple classes**, use each class's grid to **Place all** / **Clear all** or
     tick individual pilots.

::: tip Running a simulator?
Sim players appear in the roster automatically as they join, so you do not have to add them
by hand.
:::

### Channels

Each placed pilot flies a channel — their fixed binding for qualifying and time-trial rounds.

1. (If you have more than one timer) pick which timer's channels to use under
   **Channels from…**.
2. Click **Auto-assign channels** to spread the available channels across every placed pilot.
3. Override any individual pilot's channel from the dropdown in the placement grid.

::: warning No channels to assign?
If auto-assign is greyed out, your timer has no available channels yet. Open the **Timers**
stage, pick a timer, and give it some available channels. See
[channels vs nodes](/guide/timers#channels-vs-nodes) for what these mean.
:::

## Stage 2 — Rounds & Heats {#stage-2-rounds-heats}

A **round** is a chunk of racing run with one [format](/guide/formats) — a time trial,
a head-to-head final, a practice session, and so on. **Heats** are the lineups within a round that fly
together.

### Define a round

1. Click **+ Add round**.
2. Fill in the round form:
   - **Label** — a name like *Qualifying R1* or *Mains*.
   - **Format** — the round type: Practice, Time Trials, or Head-to-Head
     ([Round Formats](/guide/formats)).
   - **Eligible class** — the class this round runs for.
   - **Win condition** — how the heat ends and pilots are ranked, e.g. *Timed — Most Laps*
     (see [Win conditions](/guide/formats#win-conditions)). Timed conditions ask for a
     **race time**; lap-count conditions ask for a **laps** number.
   - **Seeding** — start **From roster**, or **From ranking** to seed from earlier
     rounds (pick one or more source rounds and **Take top** — how many pilots from that
     ranking race here; the count is bounded by the source rounds' field).
   - **Channel layouts** — which of the event's
     [channel layouts](#channel-layouts) this round's heats may fly. Tick **one** and every
     heat in the round flies it. Tick **several** and heats alternate through them in order, so
     back-to-back heats don't share channels (each ticked layout shows its position in the
     cycle). Tick **none** and channels are picked automatically from the timer's allowed set,
     as before.
   - **Start & timing** — staging time, the **start procedure** delay range, the
     **grace window** (default 30s), the **min lap time** (default 5s — crossings that would
     close a shorter lap are auto-removed as double-detections, marshal-restorable; 0 = off),
     and the **protest window** (0 = manual finalize; otherwise the result auto-finalizes
     that many seconds after race end). The defaults are sensible; leave them unless you
     have a reason to change them.
3. Save the round. You can **Edit** or **Remove** it later.

::: tip Refusals say why
Editing or removing a round isn't always allowed — a round with a heat in progress is one
example. When GridFPV declines, it tells you in words and names the heat involved (*"this round
has a heat in progress (Practice Heat) — finalize or reset it before removing the round"*),
rather than showing an error code.
:::

::: warning Raced rounds freeze their scoring rules
Once a round has raced heats, its scoring-defining settings (format, classes, win condition,
seeding, min lap time) **lock** — editing them would silently re-score finished results. The
label, staging/start timing, grace, protest window, and the heats-per-pilot count stay
editable.
:::

### Fill heats

Each round card carries its own heat controls:

- Click **Generate heats** to build the round's lineups automatically from your roster and
  format (an open-ended round offers **Generate next heat**, one at a time), or use **Add heat**
  to seat one by hand.
- Filled heats are named **&lt;Round&gt; Heat N** — for example *Qualifying Heat 1*,
  *Qualifying Heat 2*. A Practice round produces a single *Practice Heat*.
- For Time Trials, each pilot flies several heats ("Heats per pilot") on their fixed channel,
  and the round's win condition becomes the ranking. A later round — say a Head-to-Head
  final — seeds **From ranking** off it.

### Adjust a heat's channels and seating

While a heat is still **Scheduled**, two things about it are yours to change:

- **Layout** — a dropdown on the heat, listing the layouts its round names. Leave it on
  **Automatic** to take the round's rotation, or pin one. Each heat's seats are labelled with
  the channels of the layout *it* flies, so what you read is what that heat will race on.
- **Edit seating** — the escape hatch when the automatic lineup isn't what you want. Seating is
  **seat-first**: you're filling the timer's gates, and a seat doesn't need a pilot (an empty
  gate is legitimate). Saving an empty seating clears the override and hands the heat back to
  the automatic answer.

Past Scheduled, a heat keeps the channels it raced on — and a raced heat still *shows* the
layout it flew, because that is the record.

## Stage 3 — Race Control {#stage-3-race-control}

This is the race-running cockpit. You drive **one heat at a time** through its lifecycle and
watch it play out. For the full state-by-state detail, see
[the heat lifecycle](/guide/timers#the-heat-lifecycle).

### Pick the current heat

At the top, the **current heat** and its **phase** are shown large and color-coded. Use the
heat picker to choose which heat is current.

::: warning
The heat picker **locks** once a heat is staged or running — you cannot switch heats mid-race.
Finalize or abort the current heat first.
:::

### Stage, then start

1. **Stage** the heat. This begins the staging countdown ("pilots to the line"). The
   countdown is informational — nothing auto-advances, so take your time and **Start when
   ready**.
2. **Start** the heat. It arms and runs the start procedure: a short **randomized hold**
   (so pilots can't anticipate the exact go), then the **start tone**. The countdown runs
   itself — there is nothing to press between Start and the tone.
3. The moment the hold elapses, the heat goes **Running** on its own — listen for the tone.

### Race audio

The console is the race's voice, and it follows you to **every page** — you can stage a
heat, walk over to Marshaling or Rounds, and still hear everything:

- **Procedure tones** are always on: the start tone, the end-of-race countdown pips
  (5…1s), and the race-end buzzer.
- **Lap callouts** — a crossing pip plus a spoken *"‹callsign›, lap N, ‹time›"* for every
  recorded lap — are the informational layer. The **Callouts** toggle in Race Control mutes
  them (the procedure tones stay).

### Watch the race

While Running, the **live standing** updates per pilot (laps, last lap, best lap). A
**timed** heat shows a big **countdown** from the race time — past zero it runs negative
through the grace window (yellow, then red) — with a smaller count-up elapsed clock beside
it. Other heats show the classic count-up. In Practice you get a **practice board** per
channel instead, showing each active channel's laps, last lap and best lap.

The race **ends on its own** when the win condition is met, plus the grace window (default
30s) so late crossings still count. The heat then moves to **Unofficial**. If you need to
end it early, press **Stop**.

### The gate signal strip

A lap that doesn't register looks the same on the board whatever caused it. The **Gate signal**
strip — collapsed by default, and it remembers that per event — shows the live signal trace,
threshold lines and crossing marks for each gate, so you can tell a craft producing no signal
from one crossing under the threshold from one that never crossed at all.

Even collapsed, its header carries a live chip per gate, so a dead node is visible without
opening anything. It is **read-only**: you cannot change a threshold from here, and GridFPV
refuses threshold writes during a scored heat anyway. For actually setting levels, see
[Tuning a Gate](/guide/tuning).

### Practice ends differently

A Practice heat has no result to make official, so Race Control doesn't offer **Finalize**,
**Advance** or **Revert** for one. When the run ends you get **Run complete** — *"Practice isn't
scored — review the board, then Run again when you're ready"* — and one obvious action,
**Run again**, which re-stages the same heat for another go. **Discard** is still there if you
want the heat gone. The run's laps stay on the board, the lap list and in Marshaling until you
choose to go again.

### Finish to Unofficial, then Final

- When the heat reaches **Unofficial**, the result is provisional — this is your window to
  fix anything (see [Marshaling](/guide/marshaling)).
- When the result looks right, **Finalize** to lock it as **Final**. **Advance** moves you
  on to the next heat.

::: tip Off-ramps when you need them
**Stop** ends a Running race now (pilots land; the result stands as flown). **Abort** or
**Restart** reset a heat all the way back to Scheduled (you re-stage it), and **Discard**
throws it out entirely. The destructive ones ask for confirmation.
:::

## Stage 4 — Marshaling {#stage-4-marshaling}

Marshaling is where you **correct a heat** — fix laps against the recorded signal, apply
penalties, handle protests, and set the official result. It has grown into its own guide:
**[Marshaling](/guide/marshaling)** covers every tool in detail.

The one-paragraph version: pin any heat (without touching the one Race Control is running),
focus one pilot at a time, and correct their laps right on the lap list — **Remove** a false
crossing, **Save** an edited lap time, **Split** a double-length lap, **Throw out** a lap
that shouldn't count, **Add** a missed one, or re-derive the whole set from the RSSI trace
with **Tune detection**. Below the divider, whole-heat rulings: penalties, protests,
**Finalize / Revert**, and **Void heat**. Every change is an audited ruling and results
re-fold live.

## Stage 5 — Results {#stage-5-results}

The Results stage shows your **standings and finished results**. One view selector drives the
whole page, so you always see exactly one thing at a time:

- **Per-class standings** aggregated across that class's rounds — position, pilot, points,
  best lap, laps, and rounds entered.
- **Round standings** for each scored round as data comes in.
- **Per-heat results** — each round in the selector is followed by its own **Final** heats.
  Pick one for its finishing order: position, pilot, laps, the deciding metric, and best lap.
- **Export JSON** to download the visible results (with pilot callsigns, not internal ids)
  for your own records or post-processing.

Penalties are stated rather than implied on a per-heat result:

- A **disqualified** pilot carries a solid **DQ** badge and the reason *"Disqualified — ranked
  after every finisher"*, with a jump to the ruling in the audit trail. You see *why* a pilot is
  last, not just that they are.
- A **voided** heat leads with a banner saying it does not count toward the round or class
  standings, and its table is dimmed so it can never read as a normal result.

A heat appears here once it is **Final** — the point at which it is scored and its marshaling
rulings are baked in. Standings populate as heats are scored, so this stage fills in naturally
as the day runs.

## What's next

- Choosing how to structure your rounds? See [Round Formats](/guide/formats).
- Wiring up real hardware? See [Connecting a Timer](/guide/timers).
- A gate missing laps? See [Tuning a Gate](/guide/tuning).
- Quick questions? Check the [FAQ](/guide/faq).
