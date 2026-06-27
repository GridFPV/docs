# Getting Started

GridFPV is a self-hosted app for timing and managing FPV drone races. This page gets you
from zero to a running GridFPV in a few minutes, then orients you on what you see on first
launch.

There are **two ways to run GridFPV**, and they give you the exact same app:

1. **The native portable app** — the easiest way. Download one file, run it, and a GridFPV
   window opens. Best for running an event on a single laptop at the field.
2. **The hosted web app** — run GridFPV as a server and open it in your browser. Best when
   you want other devices on the network (or a second screen) to reach the same event.

Pick whichever fits how you work. You can switch later — it is the same application either
way, and they read and write the same data folder.

## Option A: The native portable app (recommended)

The native app is **self-contained**: there is nothing to install, no runtime to set up, and
no separate database. You download a single executable, run it, and it opens its own window.

### 1. Download

Grab the build for your operating system from the GridFPV releases page:

- **Windows** — `gridfpv-desktop.exe`
- **Linux** — `gridfpv-desktop`
- **macOS** — `gridfpv-desktop`

::: tip
Put the downloaded file somewhere it can stay, like a `GridFPV` folder in your Documents or
on a USB stick you bring to the field. GridFPV stores its event data **right next to the
executable** (see below), so keeping the app in a stable location keeps your data with it.
:::

### 2. Run it

- **Windows** — double-click `gridfpv-desktop.exe`. If Windows SmartScreen warns about an
  unrecognized app, choose **More info → Run anyway**.
- **macOS / Linux** — you may first need to mark the file as executable:

  ```sh
  chmod +x ./gridfpv-desktop
  ./gridfpv-desktop
  ```

A GridFPV window opens. That is it — you are running.

### 3. Where your data lives

When you run the native app, GridFPV creates a **`gridfpv-data/`** folder **next to the
executable** and keeps everything there — your pilots, classes, events, and the full record
of every race. To back up or move an event, copy that folder. To start completely fresh,
you can move or rename it (GridFPV will create a new empty one on next launch).

::: warning
Because the data lives next to the executable, don't run the app from a read-only location
(like directly inside a mounted disk image / DMG, or a locked download folder). Move it to a
normal folder first so GridFPV can create `gridfpv-data/`.
:::

## Option B: The hosted web app

Running GridFPV as a server lets you open the console in a regular web browser and reach the
same event from other devices on your network — handy for a second display, or for letting
pilots check standings on their phones over the local network.

### 1. Start the server

Run the GridFPV server executable (the **Director**). It starts up and begins serving the
web console locally, printing the address to open — typically:

```
http://localhost:8080
```

### 2. Open it in your browser

Open that address in any modern browser (Chrome, Firefox, Edge, Safari). The GridFPV console
loads in the page. You are now running the same app as the native window, just in a browser
tab.

::: tip Reaching it from other devices
On the same network, other devices can open the console using the host machine's local IP
address instead of `localhost` (for example `http://192.168.1.50:8080`). The race director's
own machine is trusted automatically and needs no login; reaching control from another device
may require a passphrase the director sets. See [Connecting a Timer](/guide/timers) and the
[FAQ](/guide/faq) for more.
:::

## First-run orientation

However you launched it, GridFPV opens on a **home hub** — a small set of top-level pages
along the top:

- **Pilots** — the people who fly. Add a pilot once here and reuse them across every event.
- **Classes** — the categories pilots race in (for example *Open* or *Spec*). Defined once,
  selected per event.
- **Events** — your race days. This is where you create an event and open its workspace to
  actually run it.
- **Timers** — your timing sources. Set up a timer connection once and pick it per event.

The idea is **configure once, select per event**: your pilots, classes, and timers are
durable registries you build up over time, and each event just picks from them.

### Your first five minutes

1. Open **Pilots** and add a couple of pilots (even just yourself and a friend) so you have
   someone to race.
2. Open **Timers** and add the built-in **Mock** timer. It simulates a real timing source so
   you can learn the whole flow without any hardware. (See
   [Connecting a Timer](/guide/timers).)
3. Open **Events**, create a new event, and open it. You land in the **event workspace** — a
   left-to-right sequence of stage pages (Classes & Roster → Rounds & Heats → Race Control →
   Marshaling → Results) that walk you through setting up and running the day. A guided setup
   wizard can do the common path for you.
4. Schedule a heat, **Stage** it, **Start** it, and watch the Mock timer drive a live race
   through to a result.

When you are ready for the real thing, head to [Running an Event](/guide/running-an-event)
for the full walkthrough, [Round Formats](/guide/formats) to choose a structure, and
[Connecting a Timer](/guide/timers) to wire up RotorHazard hardware.
