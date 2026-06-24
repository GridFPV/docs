# Connecting a Timer

A **timer** is GridFPV's source of truth for what happens on the track — every time a drone
crosses the gate. You set a timer up **once** under **Timers** on the home hub, then **select
it for an event**. This page covers the built-in Mock timer, connecting RotorHazard, what
channels and nodes mean, and the heat lifecycle from the race director's seat.

## The built-in Mock timer

The **Mock** timer is a built-in simulator. It produces realistic gate crossings with no
hardware at all, so you can learn the whole race flow, rehearse an event setup, or demo
GridFPV on a single laptop. The Mock timer ships with the app and is always ready — there is
nothing to connect.

To add or tune one:

1. Open **Timers** on the home hub and click **+ Add timer** (a built-in Mock is already
   there to use as-is).
2. Set the **Kind** to **Mock (synthetic)**.
3. Optionally adjust:
   - **Laps** — how many laps each simulated pilot flies.
   - **Lap pace (ms)** — the nominal time for one simulated lap.
4. Save. Now select the Mock timer for your event (in the [setup
   wizard](/guide/running-an-event#step-1-timer-channels) or on the event's Timers stage).

::: tip Test the whole flow with the simulator
Add a Mock timer, create an event, and run a heat through **Stage → Start → finish →
Finalize**. It is the fastest way to learn live control and to sanity-check an event before
you are at the field with real gear.
:::

## RotorHazard

[RotorHazard](https://github.com/RotorHazard/RotorHazard) is a popular open-source RF timing
system. GridFPV connects to it over its web server.

### Connect it

1. Make sure your RotorHazard server is running and reachable on your network. Note its
   **server URL** — the same address you open RotorHazard's own web interface at, for example
   `http://localhost:5000` or `http://192.168.1.40:5000`.
2. In GridFPV, open **Timers → + Add timer** and set the **Kind** to **RotorHazard**.
3. Enter the **URL** and save.
4. **Select the RotorHazard timer for your event.** GridFPV connects when the timer is
   selected for the active event and keeps the link alive between heats.

The timer's status pill shows where the connection stands — **Ready**, **Connecting**,
**Connected**, **Disconnected**, or **Error**.

### Channels vs nodes {#channels-vs-nodes}

These are two different things, and the difference matters when you set up a timer:

- **Nodes** are the timer's physical receivers — its **node count caps how many pilots can be
  in one heat**. An 8-node timer runs heats of up to 8 pilots.
- **Channels** are the frequencies the timer can tune to. A timer can offer **more channels
  than it has nodes** — say 8 available channels on a 4-node timer — so you can choose which
  channels a given heat uses.

When you configure a timer you set both: its **node count** (default 8) and its **available
channels** (ticked from the standard FPV catalog — Raceband, Fatshark, and so on — plus custom
frequencies for flexible timers).

### Assigning channels

Per-pilot channels come from your event's **primary timer**:

- **Qualifying / time-trial rounds** use **static** channels — each pilot keeps a fixed
  channel you assign on
  [Classes & Roster](/guide/running-an-event#stage-1-classes-roster). Use **Auto-assign
  channels** to spread the pool across the field, then override anyone as needed.
- **Brackets** assign channels **per heat** from the timer's pool, so each match gets clean,
  conflict-free frequencies.

## The heat lifecycle

Every heat moves through the same clear sequence of states. Knowing them makes live control
predictable:

| State | What it means |
| --- | --- |
| **Scheduled** | The heat exists with its lineup, but hasn't started. |
| **Staged** | The staging countdown is underway — pilots to the line. It is informational; nothing auto-advances. |
| **Armed** | The start procedure is running (announce → randomized hold → tone). |
| **Running** | The race is live; gate crossings count. |
| **Unofficial** | The race has closed but the result is still provisional — late crossings and corrections can still land. |
| **Final** | The result is locked in. |

### The race director's commands

From Live Control you drive the heat with a few actions:

- **Stage** — move a Scheduled heat to Staged and start the staging countdown.
- **Start** — arm a Staged heat and run the start procedure.
- **Finalize** — lock an Unofficial heat as Final.
- **Abort** / **Restart** — reset the heat all the way back to **Scheduled** so you can
  re-stage it. (These ask for confirmation, since they discard the attempt.)
- **Skip countdown** / **Force end** — overrides to push past the automatic timing when you
  need to.

### The start procedure

When you **Start** a staged heat, it arms and runs a start procedure before going live:

1. **Announce** — the console signals the start is coming.
2. **A short randomized hold** — a brief delay (a couple of seconds, randomized) so pilots
   can't anticipate the exact go.
3. **The start tone** — GridFPV plays the audible go-tone itself. There is a **Tone on/off**
   toggle in Live Control if you need to mute it.

The instant the hold elapses, the heat moves to **Running** on its own — listen for the tone.

### How a heat ends

A Running heat **ends on its own** when its [win condition](/guide/formats#win-conditions) is
met, plus a **grace window** (default 30s) that lets late crossings still count. The heat then
moves to **Unofficial**, where you can review and correct it in
[Marshaling](/guide/running-an-event#stage-4-marshaling) before you **Finalize** it. If the
clock can't be trusted, **Force end** steps it to Unofficial immediately.

### Choosing the current heat

Live Control runs **one heat at a time**. A heat picker at the top lets you choose which heat
is current — but it **locks once a heat is staged or running**, so you can't switch mid-race.
Finalize or abort the current heat to unlock it. Filled heats are named **&lt;Round&gt; Heat
N** (for example *Qualifying Heat 1*), which is what you'll see in the picker.
