# Running an Event

This is the end-to-end walkthrough: create an event, run the setup wizard, then work
through the event workspace stage by stage to a finished result. If you have not launched
GridFPV yet, start with [Getting Started](/guide/getting-started) and add a
[Mock timer](/guide/timers#the-built-in-mock-timer) so you can follow along without hardware.

The **event workspace** is a left-to-right sequence of **stage pages**:

**Classes & Roster → Rounds & Heats → Race Control → Marshaling → Results**

You move through them in order, but you can revisit any stage at any time. There is no
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

### Step 1 — Timer & channels

Choose the timer (or timers) that feed this event and confirm their channels and node count.

::: warning You need at least one timer
**Next is disabled until you select a timer.** A timer defines how many pilots can fly at
once (its node count) and which channels they can fly on. If you have not set one up yet, add
the built-in **Mock** timer — see [Connecting a Timer](/guide/timers).
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
   - **Start & timing** — staging time, the **start procedure** delay range, the
     **grace window** (default 30s), the **min lap time** (default 5s — crossings that would
     close a shorter lap are auto-removed as double-detections, marshal-restorable; 0 = off),
     and the **protest window** (0 = manual finalize; otherwise the result auto-finalizes
     that many seconds after race end). The defaults are sensible; leave them unless you
     have a reason to change them.
3. Save the round. You can **Edit** or **Remove** it later.

::: warning Raced rounds freeze their scoring rules
Once a round has raced heats, its scoring-defining settings (format, classes, win condition,
seeding, min lap time) **lock** — editing them would silently re-score finished results. The
label, staging/start timing, grace, protest window, and the heats-per-pilot count stay
editable.
:::

### Fill heats

With a round defined, build its heats:

- Click **Generate heats** to build the round's lineups automatically from your roster and
  format (an open-ended round offers **Generate next heat**, one at a time), or use
  **+ Build heat** to pick pilots into a heat yourself.
- Filled heats are named **&lt;Round&gt; Heat N** — for example *Qualifying Heat 1*,
  *Qualifying Heat 2*. A Practice round produces a single *Practice Heat*.
- For Time Trials, each pilot flies several heats ("Heats per pilot") on their fixed channel,
  and the round's win condition becomes the ranking. A later round — say a Head-to-Head
  final — seeds **From ranking** off it.

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
channel instead, with a **New run · clear board** button to start a fresh run.

The race **ends on its own** when the win condition is met, plus the grace window (default
30s) so late crossings still count. The heat then moves to **Unofficial**. If you need to
end it early, press **Stop**.

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

The Results stage shows your **standings and finished results**:

- **Per-class standings** aggregated across that class's rounds — position, pilot, points,
  best lap, laps, and rounds entered. Use the class selector to switch classes.
- **Round standings** for each scored round as data comes in.
- **Export JSON** to download the visible results (with pilot callsigns, not internal ids)
  for your own records or post-processing.

Standings populate as heats are scored, so this stage fills in naturally as the day runs.

## What's next

- Choosing how to structure your rounds? See [Round Formats](/guide/formats).
- Wiring up real hardware? See [Connecting a Timer](/guide/timers).
- Quick questions? Check the [FAQ](/guide/faq).
