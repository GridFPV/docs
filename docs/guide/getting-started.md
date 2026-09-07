# Getting Started

GridFPV is an app for timing and running FPV drone races. This page gets you from nothing to
a running race in a few minutes.

There are **two ways to run GridFPV**. Both give you the exact same app:

1. **The desktop app** — the easy way. Download one file, run it, and a GridFPV window opens.
   Best for running an event on one laptop at the field.
2. **The web version** — run GridFPV as a small server and open it in a browser. Best when you
   want a second screen, or when other people on your network need to see the same event.

Pick whichever suits you. You can switch later. It is the same app, and both read the same
data folder.

## Option A: The desktop app (start here)

The desktop app is **one file**. Nothing to install, no database to set up.

### 1. Download it

Get the download for your computer from the
[GridFPV releases page](https://github.com/GridFPV/gridfpv/releases):

| Your computer | Download | Unzips to |
| --- | --- | --- |
| **Windows** | `gridfpv-windows-portable.zip` | `gridfpv-desktop.exe` |
| **Linux** | `gridfpv-linux-portable.zip` | `gridfpv-desktop` |
| **macOS** (Apple Silicon) | `gridfpv-macos-portable.zip` | `gridfpv-desktop` |

Each download is a zip with **one file inside**. Unzip it, and that file is GridFPV.

::: tip Put it somewhere it can stay
GridFPV saves your race data **in a folder right next to this file**. So put it somewhere
permanent — a `GridFPV` folder in Documents, or a USB stick you bring to the field. If you move
the app, move the data folder with it.
:::

### 2. Run it

- **Windows** — double-click `gridfpv-desktop.exe`. Windows will warn you about an unrecognised
  app, because the file isn't signed yet. Click **More info → Run anyway**.
- **Linux** — make it runnable, then run it:

  ```sh
  chmod +x ./gridfpv-desktop
  ./gridfpv-desktop
  ```

- **macOS** — make it runnable, then **right-click → Open** the first time. A normal
  double-click gets blocked, because the app isn't signed by Apple.

  ```sh
  chmod +x ./gridfpv-desktop
  ```

A GridFPV window opens. That is it — you are running.

The version number is in the **bottom-right corner** of the screen. Include it if you ever
report a bug.

### 3. Where your race data is kept

GridFPV makes a folder called **`gridfpv-data/`** right beside the app file. Everything lives
there: your pilots, your classes, your events, and every lap of every race.

- **To back it up**, copy that folder.
- **To move to another computer**, copy the app and that folder together.
- **To start completely fresh**, rename or move the folder. GridFPV makes a new empty one next
  time it starts.

::: warning Don't run it from a locked folder
GridFPV needs to create `gridfpv-data/` beside itself. So don't run it straight out of a
disk image, a zip file, or anywhere read-only. Move it to a normal folder first.
:::

## Option B: The web version

Running GridFPV as a server lets you open it in a browser, including from other devices on
your network. Handy for a second screen, or for letting pilots check standings on their phones.

### 1. Start the server

Run the GridFPV server file. It starts up and prints the address to open, usually:

```
http://localhost:8080
```

### 2. Open it in a browser

Open that address in Chrome, Firefox, Edge or Safari. The GridFPV console loads in the page.
Same app, just in a tab.

::: tip Getting to it from another device
Other devices on the same network can open it using your computer's local IP address instead
of `localhost` — for example `http://192.168.1.50:8080`.

The race director's own computer is trusted automatically and needs no password. Another
device may need a passphrase, which the director sets. See the [FAQ](/guide/faq).
:::

## What you see on first launch

GridFPV opens on a **home screen** with four pages across the top:

- **Pilots** — the people who fly. Add someone once, then use them at every event.
- **Classes** — the groups pilots race in, like *Open* or *Spec*. Set up once, picked per event.
- **Events** — your race days. This is where you make an event and open it to run it.
- **Timers** — your timing hardware. Set one up once, then pick it per event.

The idea is **set it up once, pick it per event**. Your pilots, classes and timers build up
over time. Each event just chooses from those lists.

### Your first five minutes

1. Open **Pilots** and add two or three people, even if it's just you and a friend. You need
   someone to race.
2. Open **Timers** and use the built-in **Mock** timer. It pretends to be a real timer, so you
   can learn the whole flow with no hardware at all. See
   [Connecting a Timer](/guide/timers).
3. Open **Events**, make a new event, and open it. You land in the **event workspace** — a set
   of pages down the left that walk you through the day. A setup wizard offers to do the common
   parts for you.
4. Make a heat, press **Stage**, then **Start**, and watch the fake timer race it through to a
   result.

That whole loop takes about two minutes and teaches you most of the app.

::: tip Bringing real hardware? Test it at home first.
GridFPV races RotorHazard timers, but it needs the **GridFPV RotorHazard plugin** installed on
them. This is [**required**](/guide/timers#rotorhazard) — a plain RotorHazard will not run a
heat.

You can add a timer, connect to it and install the plugin from the **Timers** page without
creating an event. Do that at home, not at the field.
:::

## Where to go next

- [Running an Event](/guide/running-an-event) — the full walkthrough of a race day.
- [Round Formats](/guide/formats) — choosing how your rounds are structured.
- [Connecting a Timer](/guide/timers) — wiring up RotorHazard.
- [Tuning a Gate](/guide/tuning) — making the gate detect laps properly.
