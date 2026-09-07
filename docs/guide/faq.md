# FAQ

Short answers to common questions. For the full walkthroughs see
[Running an Event](/guide/running-an-event), [Round Formats](/guide/formats) and
[Connecting a Timer](/guide/timers).

## Where is my race data kept?

**Desktop app:** in a folder called **`gridfpv-data/`** right next to the app file. Everything
is in there — pilots, classes, events, and every lap of every race.

- To back it up, copy the folder.
- To move computers, copy the app and the folder together.
- To start fresh, rename or move it. GridFPV makes a new empty one next time it starts.

**Web version:** the same data sits with the server on the machine you started it on — not in
your browser. Opening it from another device doesn't copy anything. Everyone is reading and
writing the same data on that one machine.

See [Getting Started](/guide/getting-started#_3-where-your-race-data-is-kept).

## Desktop app or web version?

They're the **same app** with the same data. Pick by how you want to reach it.

- **Desktop app** — simplest. One file, double-click, a window opens. Ideal for running an event
  on one laptop at the field.
- **Web version** — when you want a browser, a second screen, or other devices on your network
  seeing the same event.

## Which timers work with GridFPV?

Today: the built-in **Mock** timer (a simulator for learning and demos) and **RotorHazard 4.3.0
or newer** with the **GridFPV RotorHazard plugin** installed. More are planned.

See [Connecting a Timer](/guide/timers).

## Do I really need the plugin for RotorHazard?

**Yes. A plain RotorHazard is not enough.**

GridFPV will connect to one without the plugin so you can work out what's wrong, but it won't
let you pick that timer for an event and won't start a heat on it.

The plugin is what lets GridFPV run the race. It switches off RotorHazard's own race format and
its own lap filtering, so every crossing reaches GridFPV and RotorHazard makes no scoring
decisions of its own.

Installing it is a few clicks from inside GridFPV. See
[Install the GridFPV plugin](/guide/timers#install-the-gridfpv-plugin).

## Why can't I tick my RotorHazard timer for an event?

One of three things, and the timer's row says which:

- **It's never been connected**, so GridFPV can't tell whether the plugin is there. Connect it
  first — you don't need an event to do that.
- **The plugin is missing.** Install it and restart RotorHazard.
- **The plugin is the wrong version** for this GridFPV. Update it and restart RotorHazard.

See [Connect and test](/guide/timers#connect-and-test).

## How do I check a timer works before race day?

Open **Timers** on the home screen and press **Connect**. You don't need an event, a roster or a
heat.

GridFPV dials the address and tells you in plain words whether it's reachable, or what to check
if it isn't. Once it's up, a badge shows whether the plugin is there. **Disconnect** lets it go
again.

Do this at home, not at the field.

## What's the difference between channels and nodes?

**Nodes** are the timer's physical receivers. **The number of nodes is the maximum pilots in one
heat** — an 8-node timer runs heats of 8.

**Channels** are the frequencies the timer can listen on. A timer can have **more channels than
nodes**, so you choose which ones each heat uses.

Nodes are the chairs. Channels are the stations any chair can be tuned to.

See [channels vs nodes](/guide/timers#channels-vs-nodes).

## Why "Timed — Most Laps" instead of a fixed lap count?

Because it's how FPV racing usually works. Everyone flies the **same amount of time**, and
**most laps wins**.

It's easy to call, easy for pilots to understand, and the **grace window** (30s) means a pilot's
last lap still counts if they crossed just after the buzzer.

You can still use **First to N Laps** for a fixed-distance race. See
[Win conditions](/guide/formats#win-conditions).

## Are practice laps saved?

**Yes, exactly like any other format.** They're in the lap list and the history, and you can fix
them afterwards.

What Practice never does is **score**. It ranks nobody and feeds no standings, so there's no
result to finalize. Use **Time Trials** when you want results that count.

See [Practice](/guide/formats#practice).

## My gate isn't recording laps. Where do I start?

Open the timer's **Tune** page and watch the live signal while somebody flies a pass.

The shaded **crossing band** is your answer. If it doesn't appear around the pass, the gate's
enter and exit levels don't match what a real pass looks like on your track. Set them by hand,
or press **Capture** and fly a pass to let the timer measure one.

See [Tuning a Gate](/guide/tuning).

Mid-race, when tuning is blocked, Race Control's read-only **Gate signal** strip shows the same
trace, so you can at least tell which problem you have.

## Why did a lap disappear on its own?

Two different rules do this, and Marshaling tells you which:

**"under min lap, auto-removed"** — the round's **min lap time** caught it. Somebody crossed the
gate sooner than a real lap could take on your track. The crossing was probably real; they may
have cut the course or turned round at the gate. Restore it if it should count.

**"same pass (gate bounce), auto-removed"** — the gate reported **one** drone going past as
several crossings a fraction of a second apart. Radio signal bouncing around, not extra flying.
These are grouped into one line so they don't bury your real laps.

Neither is ever silent. Both show up in
[Marshaling](/guide/marshaling#the-removal-record) with a **Restore** button.

See [gate bounce](/guide/timers#gate-bounce-the-same-pass-window) for the difference in detail.

## What's the difference between Remove and Throw out?

**Remove** says the crossing **never really happened** — noise, or a reflection. The crossing is
deleted and the laps around it join up.

**Throw out** says the lap **did happen but shouldn't count** — a cut course, a penalty. It
stays on the clock and stays visible, but is left out of scoring.

Quick test: **bad detection → Remove. Broken rule → Throw out.**

See [Marshaling](/guide/marshaling#the-lap-list).

## How do I do a quick test with no hardware?

Add the built-in **Mock** timer, make an event, and run a heat through **Stage → Start → finish
→ Finalize**.

The Mock timer invents realistic crossings, so you can practise the whole race-control flow on
one laptop. See [the Mock timer](/guide/timers#the-built-in-mock-timer).

## Do pilots need accounts? Is there a cloud?

**No cloud, no accounts.** GridFPV runs entirely on your own machine. At a field with no
internet it still runs your whole event.

- The race director's **own machine is trusted automatically**. Nothing to log into.
- Another device on the network may need a **passphrase**, which the director sets.
- A **read-only view** lets pilots and spectators check standings without changing anything.

## How do I reset everything for a fresh test?

Quit GridFPV, then rename or move the **`gridfpv-data/`** folder next to the app. Next launch
makes a new empty one.

Keep the old folder if you might want that data back.

## How do I export results?

On the [Results](/guide/running-an-event#stage-5-results) stage, press **Export JSON**. It
downloads whatever you're looking at, using real callsigns rather than internal ids.

## Can I run two tracks or two events at once?

One event runs one track at a time through Race Control.

You can keep **as many events as you like** in your library and open whichever you're running.
Make and switch between them on the **Events** page.

## What version am I running?

Bottom-right corner of the screen — for example *GridFPV v0.4.0*. Include it in any bug report.

## What's still coming?

GridFPV is actively growing. A few areas are deliberately lighter today:

- **Tournament structures** — bracket builders (single and double elimination), multi-main tiers,
  and round robin — are being rebuilt on top of the three formats and will return. Until then,
  chain rounds by hand with **From ranking** seeding.
- **Streaming and broadcast** (overlays, announcer feeds) and an optional **cloud** tier are on
  the roadmap.

We'd rather ship these properly than promise them early. What's written here is what works
today.
