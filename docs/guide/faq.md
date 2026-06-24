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
support for **RotorHazard** over its server URL. More timing sources are planned. See
[Connecting a Timer](/guide/timers).

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

## Do laps in Open Practice get saved?

No. Open Practice shows laps live on the per-channel practice board, but they are **not
recorded** — it is free flying time with no scoring. Starting a new run clears the board. Use
**Qualifying** when you want results that count. See
[Open Practice](/guide/formats#open-practice).

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

One event runs one track at a time through Live Control. You can keep **multiple events** in
your library and open whichever one you are running; create and switch between them from the
**Events** page on the home hub.

## What's still coming?

GridFPV is actively growing. A few areas are deliberately lighter today and will deepen over
time:

- **Marshaling** currently focuses on lap-level corrections (insert / void / adjust / penalty);
  signal-based lap recovery on supported hardware will expand.
- **Live callouts and overlays** (announcer audio, broadcast graphics) are on the roadmap.

We would rather ship these well than overpromise — what's documented here is what works today.
