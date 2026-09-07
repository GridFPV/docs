# Connecting a Timer

A **timer** is the hardware that watches the gate and tells GridFPV every time a drone goes
past. It's where all your lap data comes from.

You set a timer up **once** under **Timers** on the home screen, then **pick it for an event**.

This page covers the built-in fake timer, connecting RotorHazard (including the plugin you
need), setting up nodes and channels, and the states a heat moves through.

## The built-in Mock timer {#the-built-in-mock-timer}

The **Mock** timer is a pretend timer built into GridFPV. It invents realistic gate crossings
with no hardware at all.

Use it to learn the app, practise setting up an event, or demo GridFPV on one laptop. It's
always there, nothing to connect, and no plugin needed.

To add or adjust one:

1. Open **Timers** on the home screen. A Mock timer is already there with a **Built-in** badge,
   and you can use it as-is. To make another, click **+ Add timer**.
2. Set **Kind** to **Mock (synthetic)**.
3. Optionally change:
   - **Laps** — how many laps each fake pilot flies (default 3).
   - **Lap pace (ms)** — roughly how long one fake lap takes (default 30000, which is 30
     seconds).
4. Save, then pick it for your event.

::: tip Rehearse the whole thing with no hardware
Add a Mock timer, make an event, and run a heat through **Stage → Start → finish → Finalize**.
It's the fastest way to learn race control, and a good sanity check before you're standing at
the field with real gear.
:::

## RotorHazard {#rotorhazard}

[RotorHazard](https://github.com/RotorHazard/RotorHazard) is a popular open-source timing
system. GridFPV talks to it over its web address, and needs the **GridFPV RotorHazard plugin**
installed on it. RotorHazard must be **version 4.3.0 or newer**.

::: danger The plugin is required
**A plain RotorHazard is not enough.** GridFPV will connect to one without the plugin so you can
check what's wrong — but it **won't let you pick that timer for an event**, and won't start a
heat on it.

The plugin is what lets GridFPV run the race. It switches off RotorHazard's own race format and
its own lap filtering, so every crossing reaches GridFPV and RotorHazard doesn't make any
scoring decisions of its own.

Installing it is a few clicks from inside GridFPV — see
[Install the GridFPV plugin](#install-the-gridfpv-plugin). The Mock timer needs no plugin.
:::

### Add the timer

1. Make sure your RotorHazard is running and reachable on your network. Note its **web
   address** — the same one you'd open RotorHazard in a browser with, like
   `http://localhost:5000` or `http://192.168.1.40:5000`.
2. In GridFPV, open **Timers → + Add timer** and set **Kind** to **RotorHazard**.
3. Enter the address and save.

::: warning Type the address exactly
Use plain `http`, not `https`, and no slash on the end.

If you later edit the timer and change the address, GridFPV dials the new one straight away. You
don't need to delete and re-add it.
:::

### Connect it and check it works {#connect-and-test}

**You don't need an event to test a timer.** Every RotorHazard row on the Timers page has a
**Connect** button. Press it and GridFPV dials the address and holds the connection open. The
button turns into **Disconnect**.

This is your "am I plugged in?" check when you arrive at a venue — before you have an event, a
roster or a single heat.

While connected, the row tells you where things stand:

| What you see | What it means |
| --- | --- |
| **Connecting…** | GridFPV is dialling. |
| **Reachable — this timer is answering.** | The address is right and RotorHazard is up. |
| **Could not reach this timer. Check the URL, and that RotorHazard is running.** | Nothing answered. |
| **The connection dropped. Retrying…** | It answered once, then went away. GridFPV keeps trying. |

Next to that is a status pill: **Ready** (the Mock, which needs nothing), **Configured** (a
RotorHazard you haven't dialled yet), **Connecting**, **Connected**, **Disconnected**, or
**Error**.

Once connected, a **plugin badge** appears:

- **plugin ✓** — the plugin is there and healthy. Hover for version numbers.
- **⚠ plugin missing** — connected, but no plugin. Click the badge for the install guide.
- **⚠ plugin update** — the plugin is there but it's the wrong version for this GridFPV. Click
  the badge; it explains the mismatch.

Before a timer has ever connected there's **no badge at all**. GridFPV can only tell whether the
plugin is there over a live connection, so "not connected yet" is its own state — not "plugin
missing".

### Install the GridFPV plugin {#install-the-gridfpv-plugin}

Click the **⚠ plugin missing** badge. The guide walks the whole job without leaving GridFPV:

1. **Download `gridfpv-plugin.zip`** using the button in the dialog. GridFPV has the file built
   in — nothing is fetched from the internet. The dialog tells you where it saved.
2. **Unzip it.** Inside is one folder called **`gridfpv`**. *That folder* is what you copy — not
   the zip, and not any extra wrapper folder your unzipper adds around it.
3. **Copy the `gridfpv` folder into RotorHazard's `plugins/` folder.** You should end up with
   `plugins/gridfpv/` containing `__init__.py` and `manifest.json` **directly** inside — no
   extra folder in between.
4. **Press Restart timer** in the dialog. RotorHazard only loads plugins when it starts, so the
   folder you just copied does nothing until it restarts. GridFPV can restart it for you over
   the connection it already has. It disappears for a few seconds, comes back, and the badge
   turns green.

::: tip Where is RotorHazard's `plugins/` folder?
It's in RotorHazard's **data folder**, and where that is depends on how RotorHazard was
installed. The dialog has the full details. The short version:

- **Usually `~/rh-data/plugins/`** — on a Raspberry Pi that's `/home/pi/rh-data/plugins/`.
- **Older installs:** `<RotorHazard>/src/server/plugins/`.
- **Custom or vendor timers** (NuclearHazard and similar) put it somewhere else again.

Whatever the layout, it's the `plugins/` folder sitting next to RotorHazard's `config.json` and
`database.db`. RotorHazard also prints `Data path: …` in its startup log.

**The folder often doesn't exist yet.** A fresh RotorHazard with no plugins has none. If there's
no `plugins/` folder, make one.
:::

::: warning Restarting is refused during a race
**Restart timer** restarts your actual timing hardware, so GridFPV asks you to confirm — and
refuses outright while a heat is staged, armed or running on that timer. The refusal names the
heat.
:::

### Pick it for an event

With the plugin present, pick the timer on the event's **Timers** page or in the
[setup wizard](/guide/running-an-event#step-1-timer-channels). GridFPV keeps the connection
alive between heats.

If the plugin isn't there, the row tells you what to do rather than just going grey:

> *‹Timer› isn't running the GridFPV plugin, which Grid requires to race a RotorHazard timer.
> Install it, restart RotorHazard, then tick it for this event.*

Or, for one that's never been dialled:

> *‹Timer› hasn't been connected yet, so Grid can't tell whether it's running the GridFPV
> plugin. Connect it first, then tick it for this event.*

## Gate bounce: the same-pass window {#gate-bounce-the-same-pass-window}

Sometimes a gate reports **one drone going past as two, three or four crossings**, a fraction of
a second apart.

Nothing went wrong with the flying. When a drone sits right in the gate's strongest zone, its
video signal bounces off things and reaches the receiver more than once. The gate is doing its
job — it just did it several times for one pass.

GridFPV deliberately switches off RotorHazard's own filter for this, so **every** crossing
reaches GridFPV and GridFPV decides what's real. That means GridFPV needs its own answer, and
the **same-pass window** is it.

### What the setting does

The same-pass window is a length of time on the **timer** form:

> *Two crossings closer together than this are one physical pass — a gate bounce, not a lap.*

- **Default: 1 second.** That's comfortably longer than a bounce burst (usually a tenth of a
  second or so) and far shorter than any real lap.
- **Maximum: 2 seconds.** Nobody flies a two-second lap, so the setting can never eat a real one
  no matter what you type.
- **Set it to 0** to switch it off completely.

Crossings caught by this rule are removed from scoring, but never hidden. They appear grouped in
[Marshaling](/guide/marshaling#the-removal-record) as *"same pass (gate bounce), auto-removed"*,
with a Restore on each one. They also stay **silent** — no beep — because nothing new actually
happened.

### Why it's on the timer, not the round

Bounce is a property of **that gate**: its antenna, how sensitive it is, where it sits on the
track. It's the same for every race you run on it. So it belongs to the timer, and you set it
once.

Compare that with the round's **min lap time**, which is a **racing rule** about your track —
"a lap can't possibly be faster than this." Different question, different owner.

| | Same-pass window | Min lap time |
| --- | --- | --- |
| **Set on** | The timer | The round |
| **Question it answers** | "Did the gate report one pass twice?" | "Is this too fast to be a real lap?" |
| **About** | Your hardware | Your track |
| **Typical value** | 1 second | 5 seconds |
| **Does it beep?** | No — nothing new happened | Yes — the gate really saw something |

### Changing it later is safe

The window in force is **recorded when the heat arms**, and finished races keep the value they
raced under.

So you can change this setting mid-event without quietly re-scoring races that already ran. New
setting, next race. Your finished results don't move.

::: tip Seeing lots of bounce groups?
That's your gate telling you it's very sensitive. It's not breaking anything — GridFPV is
handling it — but it's worth a look at the gate's enter and exit levels, or moving the antenna.
See [Tuning a Gate](/guide/tuning).
:::

## Nodes and channels {#nodes-and-channels}

### Channels vs nodes {#channels-vs-nodes}

These are two different things, and mixing them up causes real problems:

- **Nodes** are the timer's physical receivers. **The number of nodes is the maximum number of
  pilots in one heat.** An 8-node timer runs heats of up to 8 pilots.
- **Channels** are the frequencies the timer can listen on. A timer can offer **more channels
  than it has nodes** — say 8 channels on a 4-node timer — so you can choose which channels a
  given heat uses.

Think of nodes as the number of chairs, and channels as the list of radio stations any one chair
can be tuned to.

### Set up the nodes {#configure-nodes}

Every timer row shows a **node reading** you can click to open its node settings.

- GridFPV **asks the timer how many nodes it has** when it connects, and shows both numbers:
  **Timer reports** and **GridFPV uses**. If they disagree, the row flags it.

  Getting this wrong is expensive. A heat set up for eight pilots on a four-node timer records
  nothing at all for four of them.
- **Follow the timer** clears any number you pinned by hand and goes back to what the hardware
  says. That's the one-click fix for a timer stuck on a stale number.
- **Enabled nodes** lets you switch off individual receivers — a dead one you don't want anybody
  seated on. The number of *enabled* nodes is what caps a heat.
- Nodes are called **Node 1**, **Node 2**, and so on throughout GridFPV.

You can still pin a **Node count** by hand on the timer form for a timer that can't report one.

### Pick the available channels {#available-channels}

The **Available channels** picker answers: *what channels may this timer ever use?* Tick them
from the standard FPV list (Raceband, Fatshark and so on), grouped by band.

- Each band has a **select-all box** with three states: empty when none are ticked, part-filled
  when some are, checked when all are. Clicking a part-filled box **fills** the band — it never
  throws away a selection you made by hand. Clicking a full one clears it.
- Each channel shows its frequency — *Raceband R7 — 5880* — because that's what you're matching
  against a video transmitter or RotorHazard's own screen.
- **Channel capability** says whether the timer is **Fixed** (it can only use the channels it
  declares) or **Flexible** (any channel). A flexible timer also accepts a **custom channel** in
  MHz for something not on the list.

::: tip This is the timer's list, not the event's
Ticking channels here changes the **timer**, everywhere it's used.

Deciding *which node flies which channel in this event* is separate — see
[channel layouts](/guide/running-an-event#channel-layouts).
:::

### How pilots get channels

Per-pilot channels come from your event's **primary timer**:

- **Time Trials** use **fixed** channels. Each pilot keeps one channel, assigned on
  [Classes & Roster](/guide/running-an-event#stage-1-classes-roster). Use **Auto-assign
  channels** to spread them out, then change anyone you need to.
- **Head-to-Head** assigns channels **per heat** from the timer's pool, so each group gets clean
  frequencies.

For full control, define [channel layouts](/guide/running-an-event#channel-layouts) on the event
and name them on a round.

## Tuning a gate

If a gate is missing laps — or recording laps nobody flew — its detection levels are what to
look at. The **Tune** button on a connected timer opens the per-node tuning page. See
[Tuning a Gate](/guide/tuning).

## The heat lifecycle {#the-heat-lifecycle}

Every heat moves through the same states. Knowing them makes race control predictable:

| State | What it means |
| --- | --- |
| **Scheduled** | The heat exists with its lineup, but hasn't started. |
| **Staged** | The "pilots to the line" countdown is running. Nothing happens on its own when it ends. |
| **Armed** | The start procedure is running: the random wait, then the tone. |
| **Running** | The race is live. Gate crossings count. |
| **Unofficial** | The race is over but the result isn't locked. Late crossings and fixes can still land. |
| **Final** | The result is locked. |

### Your controls

- **Stage** — move a Scheduled heat to Staged and start the countdown.
- **Start** — arm a Staged heat and run the start procedure. It finishes by itself.
- **Stop** — end a running race now. Pilots land, and the result stands as flown.
- **Finalize** — lock an Unofficial heat as Final. **Advance** moves to the next heat.
- **Abort** / **Restart** — reset the heat all the way back to Scheduled so you can re-stage it.
- **Discard** — throw the heat out entirely.

The destructive ones ask you to confirm.

::: info Practice heats end differently
A Practice heat has no result to make official, so it never offers **Finalize**, **Advance** or
**Revert**. Its end-of-run button is **Run again**. See [Practice](/guide/formats#practice).
:::

### The start procedure

When you press **Start** on a staged heat:

1. **A short random wait** — a couple of seconds, different every time, so pilots can't guess the
   exact go.
2. **The start tone** — GridFPV plays it.

The instant the wait ends, the heat goes **Running** on its own. Listen for the tone.

Race sounds — start tone, the last-5-seconds pips, and the end buzzer — are **always on** and
play whatever page you're looking at. The spoken **lap callouts** are the extra layer, muted by
the **Callouts** switch in Race Control.

### How a heat ends

A running heat **ends by itself** when its [win condition](/guide/formats#win-conditions) is
met, plus a **grace window** (30 seconds by default) so a late crossing still counts.

It then goes to **Unofficial**, where you can review and fix it in
[Marshaling](/guide/marshaling) before you **Finalize**. To end early, press **Stop**.

### Choosing the current heat

Race Control runs **one heat at a time**. The picker at the top chooses which — but it **locks
once a heat is staged or running**, so you can't switch mid-race. Finalize or abort first.

Heats are named **&lt;Round&gt; Heat N**, like *Qualifying Heat 1*, which is what you'll see in
the picker.
