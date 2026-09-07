# Running an Event

This page walks through a whole race day: make an event, set it up, run the heats, and finish
with results.

If you haven't started GridFPV yet, do [Getting Started](/guide/getting-started) first and add
a [Mock timer](/guide/timers#the-built-in-mock-timer) so you can follow along with no hardware.

## How the event workspace is laid out

When you open an event you get a list of **stages** down the left side:

**Classes & Roster → Rounds & Heats → Race Control → Marshaling → Results**

Two more sit below them and you visit those when you need to:

- **Timers** — which timers this event uses, and its channel layouts.
- **Audit** — the history of every decision made during the event.

You normally work through the stages in order, but you can go back to any of them at any time.
There is no separate "edit mode" — setting up the event is just visiting the early stages.

**Almost everything saves by itself** as you change it. There is no Save button to forget. You
can close the event and come back later.

## Make an event

1. On the home screen, open **Events**.
2. Make a new event and name it, like *Tuesday Club Night*.
3. Open it. The **setup wizard** offers to walk you through the basics.

## The setup wizard {#the-setup-wizard}

The wizard is a quick guided pass that gets a normal event ready in a few clicks. It covers the
same ground as the first few stages, in this order:

**Timer & channels → Classes & Roster → First round → Review**

Everything saves as you go. Use **Next** and **Back** to move around, **Skip** to jump past a
step you don't need, and **Finish setup** at the end.

### Step 1 — Timer & channels {#step-1-timer-channels}

Choose the timer this event uses, and check its channels and node count.

::: warning You need at least one timer
**Next stays greyed out until you pick a timer.** The timer decides how many pilots can fly at
once and which channels they can use.

If you haven't set one up yet, use the built-in **Mock** timer — see
[Connecting a Timer](/guide/timers).
:::

::: danger RotorHazard needs the GridFPV plugin
You can only pick a RotorHazard timer once GridFPV has connected to it **and** found the
GridFPV plugin running on it.

If you can't tick it, the row tells you why and what to do. See
[Install the GridFPV plugin](/guide/timers#install-the-gridfpv-plugin).
:::

If you pick more than one timer, mark one as the **Primary**. That one feeds the race and
supplies the channel list. The others are backups.

### Step 2 — Classes & Roster

Pick the classes this event runs, mark who showed up, and put pilots into classes with their
channel. This is the same work as the [Classes & Roster](#stage-1-classes-roster) stage — the
wizard just does it earlier.

### Step 3 — First round

Set up one round so you can make heats. Choose a **format** and a **win condition** (see
[Round Formats](/guide/formats)). One round is enough to start. Add more later.

### Step 4 — Review

A short checklist: do you have a class, a pilot, a timer and a round? None of it blocks you —
it's just a "ready to race?" summary. Click **Finish setup**.

::: tip
Everything the wizard does can be changed later from the stage pages. Skip it if you'd rather
set things up yourself.
:::

## Timers & channel layouts {#timers-and-layouts}

The workspace's **Timers** page does two jobs.

### Pick this event's timers

Tick the timers this event uses and mark one **Primary**. That one feeds the race and supplies
the channel list. The rest are backups.

A RotorHazard timer can only be ticked once it has connected and its GridFPV plugin has
answered. If it can't be ticked, the row says why. See [Connecting a Timer](/guide/timers).

Each connected timer also has a **Tune** button that opens [gate tuning](/guide/tuning) and
brings you back here when you're done. That matters mid-event, when a gate is dropping laps and
a heat is waiting.

### Channel layouts {#channel-layouts}

A **channel layout** is one complete plan for your timer: *which channel goes on which node*.
One channel per node, no gaps.

Layouts belong to the **event**. Making one never changes the timer's own settings.

::: tip Two different questions
The channel tick-boxes **on the timer** answer: *what channels may this timer ever use?*

A **layout** answers: *what goes on which node in this event?*

The timer's list is just the pool a new layout picks from.
:::

Why you might want more than one layout:

- **A bracket** usually needs one layout for the whole tournament. Six channels for six pilots,
  and nobody moves.
- **A qualifier** often wants several, so each pilot can keep their own channel all round.

Neither is more correct. Pick what your event needs.

To make one, open **Channel layouts** at the bottom of the Timers page, name it (like
*Bracket A*), and pick a channel for each node. Two rules:

- **Two nodes on the same channel is an error.** So is leaving a node empty — a layout has to
  be complete. Either one stops you saving.
- **Using the same channel in two different layouts is only a warning.** GridFPV names both
  layouts and the shared channels and tells you what it costs. That's fine for a bracket flying
  one layout. It's a problem if you wanted pilots to keep one channel across two qualifying
  layouts.

#### The IMD number

While you pick channels, GridFPV shows an **IMD rating** for the set, updating as you tick.

IMD stands for intermodulation distortion. In plain terms: when several video transmitters run
at once, their signals mix and create extra fake signals. If one of those fakes lands on a
channel somebody is using, that pilot gets interference. IMD scores how well your channel set
avoids that.

It's the same number RotorHazard shows for the same channels, so it should match what you're
used to.

- **Higher is cleaner.** 100 is the best possible. A genuinely bad set goes below zero.
- Next to the number, GridFPV names the **worst offender** — the exact mix causing the score,
  like *2 × Raceband R2 − Raceband R1 = 5732 MHz — lands on Raceband R3*. Or it tells you
  plainly that nothing mixes close to a channel you're using.

**It never stops you saving.** A bad score saves like any other. There's deliberately no
good/bad verdict, because the best score you can possibly get drops as you add pilots — a
Raceband-only timer genuinely cannot beat 0 with five pilots, and a fixed pass mark would just
call every six-pilot layout bad.

The number is shown while you're still choosing, because that's the only moment it can change
anything. A layout is set once and flown all event.

## Stage 1 — Classes & Roster {#stage-1-classes-roster}

This stage decides **who races, and on what channel**.

Your pilots and classes come from the lists on the home screen, so here you're mostly picking
and arranging. Three sections:

### Classes

Tick the classes this event runs, like *Open* and *Spec*. Need one that doesn't exist yet? Use
**+ Add class**. Your choice saves by itself.

### Pilots

Mark who actually turned up:

1. Tick each pilot who is here, or use **+ Add pilot** for someone new. **Select all** and
   **Unselect all** help with a big field.
2. Put those pilots into classes:
   - With **one class**, everyone is filled in for you.
   - With **several classes**, use each class's grid to **Place all** / **Clear all**, or tick
     people one at a time.

::: tip Running a simulator?
Sim players show up in the roster on their own as they join. You don't add them by hand.
:::

### Channels

Every placed pilot needs a channel. This is their fixed channel for qualifying and time trials.

1. If you have more than one timer, pick whose channels to use under **Channels from…**.
2. Click **Auto-assign channels** to spread the available channels across everyone.
3. Change any individual pilot from the dropdown next to their name.

::: warning Auto-assign greyed out?
Your timer has no channels picked yet. Open the **Timers** stage and give it some. See
[channels vs nodes](/guide/timers#channels-vs-nodes) for what those words mean.
:::

## Stage 2 — Rounds & Heats {#stage-2-rounds-heats}

A **round** is a chunk of racing run one way — a time trial, a final, a practice session. See
[Round Formats](/guide/formats).

A **heat** is one group of pilots flying together inside that round.

### Set up a round

1. Click **+ Add round**.
2. Fill in the form:
   - **Label** — a name like *Qualifying R1* or *Mains*.
   - **Format** — Practice, Time Trials, or Head-to-Head.
   - **Eligible class** — which class races this round.
   - **Win condition** — how the heat ends and how pilots are ranked, like *Timed — Most Laps*
     (see [Win conditions](/guide/formats#win-conditions)). Timed ones ask for a race time;
     lap-count ones ask for a number of laps.
   - **Seeding** — where the pilots come from. **From roster** is the usual start. **From
     ranking** pulls the top pilots out of an earlier round.
   - **Channel layouts** — which [layouts](#channel-layouts) this round's heats may use. Tick
     **one** and every heat uses it. Tick **several** and heats take turns through them, so
     back-to-back heats don't share channels. Tick **none** and channels are picked
     automatically.
   - **Start & timing** — see below. The defaults are fine; leave them unless you have a reason.
3. Save. You can **Edit** or **Remove** it later.

#### Start & timing settings

| Setting | What it does | Default |
| --- | --- | --- |
| **Staging time** | How long the "pilots to the line" countdown runs. Just a timer for you — nothing happens on its own. | 5:00 |
| **Start delay** | A short random wait between pressing Start and the go-tone, so nobody can time the start. | 2–5s |
| **Grace window** | How long after the race ends that a late crossing still counts. | 30s |
| **Min lap time** | Any lap shorter than this is removed automatically. See below. | 5s |
| **Protest window** | 0 means you press Finalize yourself. Any other number makes the result go official that many seconds after the race ends. | 0 |

::: tip Min lap time is a racing rule, not a hardware fix
**Min lap time** means "a lap this short can't be real, so don't count it." It belongs to the
round because it's about your track — a lap that's impossible on a big course might be normal
on a tiny one.

It is **not** the setting for a gate that detects the same pass twice. That's the timer's
**same-pass window**, and it lives on the timer. See
[gate bounce](/guide/timers#gate-bounce-the-same-pass-window).
:::

::: tip Refusals tell you why
Editing or removing a round isn't always allowed — a round with a heat in progress, for
example. When GridFPV says no, it says it in words and names the heat: *"this round has a heat
in progress (Practice Heat) — finalize or reset it before removing the round"*.
:::

::: warning Raced rounds lock their scoring rules
Once a round has raced heats, the settings that decide scoring **lock**: format, classes, win
condition, seeding and min lap time. Changing them would quietly re-score races that already
happened.

Still editable: the label, staging and start timing, grace window, protest window, and the
heats-per-pilot count.
:::

### Make the heats

Each round has its own heat controls:

- **Generate heats** builds the lineups automatically from your roster and format. An
  open-ended round says **Generate next heat** instead and makes one at a time.
- **Add heat** lets you build one by hand.
- Heats are named **&lt;Round&gt; Heat N** — *Qualifying Heat 1*, *Qualifying Heat 2*. A
  Practice round makes a single *Practice Heat*.
- In Time Trials each pilot flies several heats on their own fixed channel, and the round's win
  condition ranks them. A later round can then seed **From ranking** off that.

### Change a heat's channels or seating

While a heat is still **Scheduled**, two things are yours to change:

- **Layout** — a dropdown listing the layouts its round allows. Leave it on **Automatic** to
  take the round's rotation, or pin one. Each seat shows the channel from the layout *that heat*
  is flying, so what you read is what will actually race.
- **Edit seating** — for when the automatic lineup isn't what you want. You're filling the
  timer's gates, and a gate is allowed to be empty. Saving an empty seating clears your changes
  and hands the heat back to the automatic answer.

Once a heat has raced it keeps the channels it raced on, and still shows the layout it flew.
That's the record.

## Stage 3 — Race Control {#stage-3-race-control}

This is where you actually run races. You drive **one heat at a time**. For the full list of
states, see [the heat lifecycle](/guide/timers#the-heat-lifecycle).

### Pick the heat

The **current heat** and its **state** are shown large and colour-coded at the top. Use the
picker to choose which heat you're running.

::: warning
The picker **locks** once a heat is staged or running. You can't switch heats mid-race.
Finalize or abort the current one first.
:::

### Stage, then start

1. **Stage** the heat. This starts the "pilots to the line" countdown. Nothing happens
   automatically when it runs out — take your time and start when you're ready.
2. **Start** the heat. It arms, waits a short random moment so nobody can guess the exact go,
   then plays the **start tone**. You don't press anything in between.
3. The moment the wait is over, the heat goes **Running** on its own. Listen for the tone.

### Race sound

The console is the race's voice, and the sound follows you to **every page**. You can stage a
heat, walk over to Marshaling, and still hear everything.

- **Race sounds are always on**: the start tone, the countdown pips in the last 5 seconds, and
  the end-of-race buzzer.
- **Lap callouts** are the extra layer: a beep for each gate crossing, plus a spoken
  *"‹callsign›, lap 3, 24.1"*. The **Callouts** switch in Race Control mutes these. The race
  sounds keep playing.

::: tip A beep with nobody flying is telling you something
You get a beep for **every** gate crossing, even one that scored nothing. That's on purpose. A
beep when the track is empty means the gate is firing at nothing, and that's exactly the sort
of problem you want to catch early instead of discovering in the results.

The one exception is a gate detecting the same pass twice — see
[gate bounce](/guide/timers#gate-bounce-the-same-pass-window). Those are silent, because they
aren't really separate crossings.
:::

### Watch the race

While Running, the **live standings** update per pilot: laps, last lap, best lap.

A **timed** heat shows a big **countdown** from the race time. Past zero it keeps counting into
the grace window, turning yellow then red, with a smaller count-up clock beside it. Other heats
just count up.

In Practice you get a **practice board** per channel instead, showing each channel's laps, last
lap and best lap.

The race **ends by itself** when the win condition is met, plus the grace window (30s by
default) so late crossings still count. The heat then goes to **Unofficial**. To end it early,
press **Stop**.

### The gate signal strip

A lap that doesn't show up looks the same on the board no matter what caused it. The **Gate
signal** strip shows the live signal from each gate, with the threshold lines and crossing
marks drawn on it. That lets you tell apart three different faults:

- a drone putting out no signal at all,
- a drone crossing but not strongly enough to trip the gate,
- a drone that never crossed.

It's collapsed by default and remembers that per event. Even collapsed, the header shows a live
dot per gate, so a dead node is obvious without opening it.

It is **read-only**. You can't change a threshold from here, and GridFPV blocks threshold
changes during a scored heat anyway. To actually set levels, see [Tuning a Gate](/guide/tuning).

### Practice ends differently

A Practice heat has no result to make official, so Race Control doesn't offer **Finalize**,
**Advance** or **Revert**.

When the run ends you get **Run complete** — *"Practice isn't scored — review the board, then
Run again when you're ready"* — and one button, **Run again**, which re-stages the same heat.
**Discard** is there if you want the heat gone.

The laps from the run stay on the board, in the lap list and in Marshaling until you press Run
again. So there's always a moment to look at what just happened.

### Finish: Unofficial, then Final

- At **Unofficial**, the result is provisional. This is your window to fix things — see
  [Marshaling](/guide/marshaling).
- When it looks right, **Finalize** locks it as **Final**. **Advance** moves you to the next
  heat.

::: tip Ways out
**Stop** ends a running race now — pilots land, and the result stands as flown.
**Abort** and **Restart** reset a heat all the way back to Scheduled so you can re-stage it.
**Discard** throws the heat out entirely. The destructive ones ask you to confirm.
:::

## Stage 4 — Marshaling {#stage-4-marshaling}

Marshaling is where you **fix a heat**: correct laps against the recorded signal, apply
penalties, handle protests, and set the official result.

It has its own page: **[Marshaling](/guide/marshaling)**.

The short version: pick any heat (without disturbing the one Race Control is running), focus on
one pilot, and fix their laps right on the list. **Remove** a crossing that never happened,
**Save** a corrected lap time, **Split** a double-length lap, **Throw out** a lap that
shouldn't count, or **Add** one the gate missed. Below that: penalties, protests,
**Finalize / Revert**, and **Void heat**.

Every change is written down, and results update as you go.

## Stage 5 — Results {#stage-5-results}

The Results stage shows your standings and finished results. One selector at the top drives the
whole page, so you always see exactly one thing:

- **Per-class standings** across all that class's rounds — position, pilot, points, best lap,
  laps, and rounds entered.
- **Round standings** for each scored round, filling in as races finish.
- **Per-heat results** — pick a heat for its finishing order: position, pilot, laps, the
  deciding number, and best lap.
- **Export JSON** downloads what you're looking at, with real callsigns rather than internal
  ids, for your own records.

Penalties are spelled out rather than hidden:

- A **disqualified** pilot gets a solid **DQ** badge and the reason — *"Disqualified — ranked
  after every finisher"* — with a link to the ruling in the audit trail. You can see *why* a
  pilot is last, not just that they are.
- A **voided** heat leads with a banner saying it doesn't count toward anything, and its table
  is dimmed so it can't be mistaken for a normal result.

A heat appears here once it is **Final**. Standings fill in as heats are finalized, so this page
builds up naturally as the day goes.

## Where to go next

- [Round Formats](/guide/formats) — how to structure your rounds.
- [Connecting a Timer](/guide/timers) — real hardware.
- [Tuning a Gate](/guide/tuning) — a gate that's missing laps.
- [FAQ](/guide/faq) — quick questions.
