# Connecting a Timer

A **timer** is GridFPV's source of truth for what happens on the track — every time a drone
crosses the gate. You set a timer up **once** under **Timers** on the home hub, then **select
it for an event**. This page covers the built-in Mock timer, connecting RotorHazard (including
the required GridFPV plugin), configuring nodes and channels, and the heat lifecycle from the
race director's seat.

## The built-in Mock timer

The **Mock** timer is a built-in simulator. It produces realistic gate crossings with no
hardware at all, so you can learn the whole race flow, rehearse an event setup, or demo
GridFPV on a single laptop. The Mock timer ships with the app and is always ready — there is
nothing to connect, and it needs no plugin.

To add or tune one:

1. Open **Timers** on the home hub and click **+ Add timer** (a built-in Mock is already
   there to use as-is — it carries a **Built-in** badge and cannot be removed).
2. Set the **Kind** to **Mock (synthetic)**.
3. Optionally adjust:
   - **Laps** — how many laps each simulated pilot flies (default 3).
   - **Lap pace (ms)** — the nominal time for one simulated lap (default 30000, i.e. 30s).
4. Save. Now select the Mock timer for your event (in the [setup
   wizard](/guide/running-an-event#step-1-timer-channels) or on the event's Timers screen).

::: tip Test the whole flow with the simulator
Add a Mock timer, create an event, and run a heat through **Stage → Start → finish →
Finalize**. It is the fastest way to learn race control and to sanity-check an event before
you are at the field with real gear.
:::

## RotorHazard

[RotorHazard](https://github.com/RotorHazard/RotorHazard) is a popular open-source RF timing
system. GridFPV connects to it over its web server and talks to the **GridFPV RotorHazard
plugin** running inside RH (RotorHazard **4.3.0 or newer**).

::: danger The GridFPV plugin is required
**Stock RotorHazard is not enough.** GridFPV will connect to a plugin-less RotorHazard so you
can diagnose it — but it **refuses to select that timer for an event**, and refuses to arm a
heat on it. The plugin is what lets GridFPV own the race: it neutralizes RotorHazard's own
race format and min-lap filter so every crossing reaches GridFPV and RH makes no scoring
decisions of its own.

Installing it is a few clicks from inside GridFPV — see [Install the GridFPV
plugin](#install-the-gridfpv-plugin) below. The Mock timer needs no plugin.
:::

### Add the timer

1. Make sure your RotorHazard server is running and reachable on your network. Note its
   **server URL** — the same address you open RotorHazard's own web interface at, for example
   `http://localhost:5000` or `http://192.168.1.40:5000`.
2. In GridFPV, open **Timers → + Add timer** and set the **Kind** to **RotorHazard**.
3. Enter the **URL** and save.

::: warning The URL is dialed exactly as entered
Use plain `http` (not `https`), and no trailing slash. If you later **Edit** the timer and
change its URL, GridFPV re-dials the new address straight away — you do not have to remove and
re-add the timer.
:::

### Connect it and check it works {#connect-and-test}

You do **not** need an event to test a timer. Each RotorHazard row on the **Timers** page
carries a **Connect** button; press it and GridFPV dials the URL and holds the connection open.
The button becomes **Disconnect** while the hold is up, so you can let it go again.

This is the "am I plugged in?" check to run when you arrive at a venue — before you have an
event, a roster, or a single heat.

While a timer is held, the row tells you where things stand in plain language:

| What you see | What it means |
| --- | --- |
| **Connecting…** | GridFPV is dialing. |
| **Reachable — this timer is answering.** | The URL is right and RotorHazard is up. |
| **Could not reach this timer. Check the URL, and that RotorHazard is running.** | Nothing answered. |
| **The connection dropped. Retrying…** | It answered once and went away; GridFPV keeps retrying. |

The status pill beside it shows the raw state — **Ready** (the Mock, which needs nothing),
**Configured** (a RotorHazard timer that has not been dialed yet), **Connecting**,
**Connected**, **Disconnected**, or **Error**.

Once a RotorHazard timer is connected, a **plugin badge** appears next to the pill:

- **plugin ✓** — the GridFPV plugin is present and healthy. Hover it for the plugin and RHAPI
  versions.
- **⚠ plugin missing** — connected, but stock RotorHazard. Click the badge for the install
  guide.
- **⚠ plugin update** — the plugin is there but speaks a protocol this GridFPV does not.
  Click the badge; the guide names the mismatch.

Before a timer has ever connected there is **no badge at all** — plugin presence is only
knowable over a live connection, so "not yet connected" is its own state, not "plugin missing".

### Install the GridFPV plugin {#install-the-gridfpv-plugin}

Click the **⚠ plugin missing** badge on the timer's row. The install guide walks the whole job
without ever leaving GridFPV:

1. **Download `gridfpv-plugin.zip`** with the button in the dialog. GridFPV serves the bundle
   itself — there is nothing to fetch from the internet. The dialog reports whether the
   download succeeded, and where it went (your browser's usual Downloads folder).
2. **Unzip it.** Inside is a single **`gridfpv`** folder. *That folder* is what you copy — not
   the zip, and not the wrapper folder some unzippers add around it.
3. **Copy the `gridfpv` folder into RotorHazard's `plugins/` directory**, so you end up with
   `plugins/gridfpv/` holding `__init__.py` and `manifest.json` **directly** inside it, with no
   extra folder in between.
4. **Press Restart timer** in the dialog. RotorHazard only loads plugins at startup, so the
   folder you just dropped in is inert until it restarts — and GridFPV can restart it for you
   over the connection it is already holding. It drops off for a few seconds, reconnects by
   itself, and the badge turns green.

::: tip Where is RotorHazard's `plugins/` folder?
It lives in RotorHazard's **data directory**, which depends on how RH was installed. The
dialog has a "Where is RotorHazard's `plugins/` folder?" section with the details; the short
version:

- **Usually `~/rh-data/plugins/`** — on a Raspberry Pi, `/home/pi/rh-data/plugins/`.
- **Older, in-place installs:** `<RotorHazard>/src/server/plugins/`.
- **Custom or vendor timers** (NuclearHazard and friends) put it somewhere else again. Whatever
  the layout, it is the `plugins/` folder beside RotorHazard's `config.json` and `database.db`
  — and RH logs `Data path: …` in its startup log.

**The folder often does not exist yet.** A fresh RotorHazard with no user plugins has none —
if there is no `plugins/` in the data directory, create it yourself.
:::

::: warning Restarting is refused mid-race
**Restart timer** restarts your timing hardware, so GridFPV asks you to confirm it — and the
Director refuses it outright while a heat is staged, armed or running on that timer. The
refusal names the heat.
:::

### Select it for an event

With the plugin present, **select the RotorHazard timer for your event** — on the event
workspace's **Timers** screen, or in the [setup
wizard](/guide/running-an-event#step-1-timer-channels). GridFPV keeps the link alive between
heats.

If the plugin is not present, the row says so and tells you what to do instead of just greying
out — for example:

> *‹Timer› isn't running the GridFPV plugin, which Grid requires to race a RotorHazard timer.
> Install it, restart RotorHazard, then tick it for this event.*

or, for a timer that has never been dialed:

> *‹Timer› hasn't been connected yet, so Grid can't tell whether it's running the GridFPV
> plugin. Connect it first, then tick it for this event.*

::: tip Double-detections are handled in GridFPV
A gate reflection can register two crossings milliseconds apart. The plugin switches off
RotorHazard's own min-lap filter so **every** crossing reaches GridFPV, and GridFPV then
enforces its own per-round **minimum lap time** (default 5s on new rounds): a crossing that
would close a shorter lap is auto-removed, visibly, with a marshal **Restore** override. See
[Marshaling](/guide/marshaling#the-removal-record).
:::

## Nodes and channels

### Channels vs nodes {#channels-vs-nodes}

These are two different things, and the difference matters when you set up a timer:

- **Nodes** are the timer's physical receivers — its **node count caps how many pilots can be
  in one heat**. An 8-node timer runs heats of up to 8 pilots.
- **Channels** are the frequencies the timer can tune to. A timer can offer **more channels
  than it has nodes** — say 8 available channels on a 4-node timer — so you can choose which
  channels a given heat uses.

### Configure the nodes {#configure-nodes}

Every timer row carries a **node reading** you can click — it opens the node configuration for
that timer.

- GridFPV **asks the timer how many nodes it has** when it connects, and the dialog shows both
  numbers side by side: **Timer reports** and **GridFPV uses**. If they disagree the row flags
  it too (**Timer reports 4**). Getting this wrong is expensive — a heat seated for eight
  pilots on a four-node timer records nothing for four of them.
- **Follow the timer** clears any count you pinned by hand, so the hardware's own reading is
  the width again. That is the one-click repair for a timer stuck at a stale number.
- **Enabled nodes** lets you switch off individual receivers — a dead node you do not want
  seated. The number of *enabled* nodes is what caps a heat's size, and a node the timer has
  never reported is flagged as such.
- Nodes are named **Node 1**, **Node 2**, … throughout the console.

You can still pin a **Node count** by hand on the timer form (default 8) when a timer cannot
report one.

### Pick the available channels {#available-channels}

The timer form's **Available channels** picker is the global answer to *what may this timer
ever use?* — ticked from the standard FPV catalog (Raceband, Fatshark, and so on), grouped by
band.

- Each band has a **select-all box**. It is **tri-state**: empty when none of the band is
  ticked, indeterminate when some are, checked when all are. Clicking an indeterminate box
  **fills** the band (it never throws away a subset you picked by hand); clicking a full band
  clears it.
- Each channel is labelled with its frequency — *Raceband R7 — 5880* — because that is what
  you are matching against a VTX or RotorHazard's own screen.
- **Channel capability** says whether the timer is **Fixed (built-in set)** — it can only tune
  the channels it declares — or **Flexible (any channel)**. A flexible timer also accepts a
  **Custom channel (MHz)**: a raw centre frequency that is not in the catalog.

::: tip This is the global record, not the event's
Ticking channels here edits the **timer**, everywhere it is used. Deciding *which node flies
which channel in this event* is a separate, event-owned thing — see [channel
layouts](/guide/running-an-event#channel-layouts).
:::

### Assigning channels

Per-pilot channels come from your event's **primary timer**:

- **Time Trials** use **static** channels — each pilot keeps a fixed channel you assign on
  [Classes & Roster](/guide/running-an-event#stage-1-classes-roster). Use **Auto-assign
  channels** to spread the pool across the field, then override anyone as needed.
- **Head-to-Head rounds** assign channels **per heat** from the timer's pool, so each group
  gets clean, conflict-free frequencies.

For full control over which node flies which frequency, define
[channel layouts](/guide/running-an-event#channel-layouts) on the event and name them on a
round.

## Tuning a gate

If a gate is missing laps — or recording laps nobody flew — its detection thresholds are the
thing to look at. The **Tune** button on a connected timer's row opens the per-node tuning
page. See [Tuning a Gate](/guide/tuning).

## The heat lifecycle

Every heat moves through the same clear sequence of states. Knowing them makes race control
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

From Race Control you drive the heat with a few actions:

- **Stage** — move a Scheduled heat to Staged and start the staging countdown.
- **Start** — arm a Staged heat and run the start procedure (the countdown runs itself).
- **Stop** — end a Running race now; pilots land and the result stands as flown.
- **Finalize** — lock an Unofficial heat as Final; **Advance** moves on to the next heat.
- **Abort** / **Restart** — reset the heat all the way back to **Scheduled** so you can
  re-stage it; **Discard** throws the heat out entirely. (The destructive ones ask for
  confirmation.)

::: info Practice heats end differently
A Practice heat has no result to make official, so it is never offered **Finalize**,
**Advance** or **Revert**. Its end-of-run action is **Run again** — the same reset, named for
what practice actually does. See [Practice](/guide/formats#practice).
:::

### The start procedure

When you **Start** a staged heat, it arms and runs a start procedure before going live:

1. **A short randomized hold** — a brief delay (a couple of seconds, randomized per the
   round's start procedure) so pilots can't anticipate the exact go.
2. **The start tone** — GridFPV plays the audible go-tone itself.

The instant the hold elapses, the heat moves to **Running** on its own — listen for the
tone. Procedure audio (start tone, end-of-race countdown pips, race-end buzzer) is
**always on** and plays whatever page you're on; the spoken **lap callouts** are the
informational layer, muted by the **Callouts** toggle in Race Control.

### How a heat ends

A Running heat **ends on its own** when its [win condition](/guide/formats#win-conditions) is
met, plus a **grace window** (default 30s) that lets late crossings still count. The heat then
moves to **Unofficial**, where you can review and correct it in
[Marshaling](/guide/marshaling) before you **Finalize** it. To end it early, press **Stop**.

### Choosing the current heat

Race Control runs **one heat at a time**. A heat picker at the top lets you choose which heat
is current — but it **locks once a heat is staged or running**, so you can't switch mid-race.
Finalize or abort the current heat to unlock it. Filled heats are named **&lt;Round&gt; Heat
N** (for example *Qualifying Heat 1*), which is what you'll see in the picker.
