# FAQ

Quick answers to common questions. For the full walkthroughs, see
[Running an Event](/guide/running-an-event), [Round Formats](/guide/formats), and
[Connecting a Timer](/guide/timers).

## Where is my event data stored?

If you run the **native portable app**, GridFPV keeps everything in a **`gridfpv-data/`**
folder right next to the executable — your pilots, classes, events, and the full record of
every race. To back it up or move it to another machine, copy that folder. To start fresh,
move or rename it and GridFPV will create a new empty one on next launch. See
[Getting Started](/guide/getting-started#_3-where-your-data-lives).

If you run the **hosted web app**, the same data lives with the Director (server) process on
the machine you started it on — not in your browser. Pointing a browser at it from another
device does not copy anything; everyone is reading and writing the same data on that one
machine.

## Should I use the native app or the hosted web app?

They are the **same application** and use the same data, so pick by how you want to reach it.

- Use the **native portable app** when you want the simplest setup — one file, double-click, a
  window opens. Ideal for running an event on a single laptop at the field.
- Use the **hosted web app** when you want to reach the same event from a browser, including
  from other devices on your network (a second screen, or pilots checking standings on their
  phones).

See [Getting Started](/guide/getting-started) for both.

## Which timers are supported?

Today GridFPV ships with the built-in **Mock** timer (a simulator for learning and demos) and
support for **RotorHazard 4.3.0 or newer** over its server URL, with the **GridFPV RotorHazard
plugin** installed. More timing sources are planned. See
[Connecting a Timer](/guide/timers).

## Do I need the GridFPV plugin for RotorHazard?

**Yes — stock RotorHazard is not enough.** GridFPV will connect to a plugin-less RotorHazard so
you can diagnose it, but it refuses to select that timer for an event and refuses to arm a heat
on it.

The plugin is what lets GridFPV own the race: it switches off RotorHazard's own race format and
min-lap filter so every crossing reaches GridFPV and RH makes no scoring decisions of its own.

Installing it is a few clicks from inside GridFPV — GridFPV serves the bundle, tells you where
RotorHazard's `plugins/` folder is, and can restart RotorHazard for you to finish the job. See
[Install the GridFPV plugin](/guide/timers#install-the-gridfpv-plugin).

## Why can't I tick my RotorHazard timer for an event?

One of three things, and GridFPV says which on the timer's row:

- **It has never been connected**, so GridFPV can't tell whether the plugin is there. Connect
  it first (you don't need an event to do that).
- **The plugin is missing.** Install it and restart RotorHazard.
- **The plugin doesn't match this GridFPV.** Update it and restart RotorHazard.

See [Connecting a Timer](/guide/timers#connect-and-test).

## How do I check a timer works before an event?

Open **Timers** on the home hub and press **Connect** on the timer's row. You don't need an
event, a roster, or a heat. GridFPV dials the URL and tells you in plain language whether it is
**Reachable**, or what to check if it isn't — and once it's up, a badge shows whether the
GridFPV plugin is present. **Disconnect** lets the connection go again. See
[Connecting a Timer](/guide/timers#connect-and-test).

## What's the difference between channels and nodes?

A timer's **nodes** are its physical receivers, and the **node count caps how many pilots can
fly in one heat**. **Channels** are the frequencies the timer can tune to — and a timer can
offer **more channels than it has nodes**, so you can choose which channels each heat uses.
Per-pilot channels come from your event's **primary timer**. See
[channels vs nodes](/guide/timers#channels-vs-nodes).

## Why "Timed — Most Laps" instead of a fixed lap count?

Because it matches how real FPV racing usually works: everyone flies the **same amount of
time**, and **most laps wins**. It is easy to call, easy for pilots to understand, and the
**grace window** (default 30s) means a pilot's last lap still counts if they crossed the gate
just after the buzzer. You can still use **First to N Laps** for a fixed-distance race — see
[Win conditions](/guide/formats#win-conditions).

## Do laps in Practice get saved?

**Yes — they're recorded like any other format.** Practice laps land in the lap list and the
audit trail, and you can marshal them afterwards. What Practice never does is **score**: it
places nobody and feeds no ranking or standings, so it has no result to finalize. Use **Time
Trials** when you want results that count. See [Practice](/guide/formats#practice).

## My gate isn't recording laps. Where do I start?

Open the timer's **Tune** page and watch the live signal while someone flies a pass. The shaded
**crossing band** is the answer: if it doesn't open and close around the pass, the gate's
enter/exit levels don't bracket what a real pass looks like on your track. You can set them by
hand, or press **Capture** and fly a pass to let the timer measure one. See
[Tuning a Gate](/guide/tuning).

Mid-race, when tuning is refused, Race Control's read-only **Gate signal** strip shows you the
same trace so you can at least tell which fault you're looking at.

## How do I run a quick test without any hardware?

Add the built-in **Mock** timer, create an event, and run a heat through **Stage → Start →
finish → Finalize**. The Mock timer simulates realistic gate crossings, so you can rehearse
the entire live-control flow on a single laptop. See
[the Mock timer](/guide/timers#the-built-in-mock-timer).

## Do pilots need to log in? Is there a cloud?

No cloud and no account. GridFPV is **self-hosted** and runs entirely on your own machine — at
a field with no internet, it still runs your whole event.

- The race director's **own machine is trusted automatically** — there is nothing to log into
  to run a race locally.
- Reaching control from **another device** on the network may require a **passphrase** the
  director sets.
- A **read-only view** lets pilots and spectators check standings without being able to change
  anything.

## How do I reset everything for a fresh test?

In the **native portable app**, quit GridFPV and move or rename the **`gridfpv-data/`** folder
next to the executable. On the next launch GridFPV creates a new empty one, giving you a clean
slate. (Keep the old folder if you might want that data back.) See
[Where is my event data stored?](#where-is-my-event-data-stored)

## How do I export results?

On the [Results](/guide/running-an-event#stage-5-results) stage, use **Export JSON** to
download the visible standings and results for your own records or post-processing.

## Can I run more than one track or event at once?

One event runs one track at a time through Race Control. You can keep **multiple events** in
your library and open whichever one you are running; create and switch between them from the
**Events** page on the home hub.

## Why did a lap disappear on its own?

The round's **minimum lap time** caught it: a crossing that would close a lap shorter than
the floor (default 5s) is auto-removed as a double-detection — a gate reflection registering
twice. It's never silent: the crossing shows on the marshaling lap list as *"under min lap,
auto-removed"* with a **Restore** button if it was real. See
[Marshaling](/guide/marshaling#the-removal-record).

## What's the difference between Remove and Throw out?

**Remove** says the crossing **never really happened** (noise, a reflection) — the pass is
deleted and the laps around it merge. **Throw out** says the lap **happened but doesn't
count** (a course cut, a penalty) — it stays on the clock, excluded from scoring. Bad
detection → Remove; rule violation → Throw out. See [Marshaling](/guide/marshaling#the-lap-list).

## What version am I running?

Bottom-right corner of the console — e.g. *GridFPV v0.4.0-alpha.1*. Quote it in any bug
report.

## What's still coming?

GridFPV is actively growing. A few areas are deliberately lighter today and will deepen over
time:

- **Tournament structures** — bracket builders (single/double elimination), multi-main
  tiers, and round robin — are being rebuilt on top of the three round types and return in
  a future release. Until then, chain rounds by hand with **From ranking** seeding.
- **Streaming & broadcast** (overlays, announcer feeds) and the optional **cloud** tier are
  on the roadmap.

We would rather ship these well than overpromise — what's documented here is what works today.
