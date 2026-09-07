# Tuning a Gate

A gate only records a lap when the drone's signal gets **stronger than one level** and then
**drops back below another**. Those two numbers are called **enter** and **exit**.

If those numbers don't match what a real pass looks like on your track, the gate either misses
laps or invents them. The **Tune** page is where you set them — one node at a time, while
somebody actually flies through the gate.

::: tip There are two different "tune" tools. This is the hardware one.
**This page tunes the gate**, ahead of time. It writes the enter and exit levels to the timer so
future passes are detected properly.

[Marshaling's **Tune detection**](/guide/marshaling#tune-detection) is the after-the-fact repair.
It works out one pilot's laps again from a race that already happened, and never changes the
timer.

**Gate wrong → use this page. Recorded race wrong → use Tune detection.**
:::

## Open the Tune page {#open-the-tune-page}

**Tune** appears on a timer's row in two places, and which one you use decides what you're
editing:

- **Timers on the home screen → Tune** — the timer's own baseline. This works before any event
  exists, which is the usual case when you're first setting a gate up.
- **Inside an event, on its Timers page → Tune** — the same page, opened within your event.
  **Back** returns you to the event instead of the global list, which is what you want when a
  heat is waiting.

The page says which one it's editing at the top, so reloading — or opening the same link
somewhere else — keeps the scope you started with.

The button only appears on a timer that has a gate to read, and stays **disabled until the timer
is connected**: *"Connect ‹Timer› first — tuning reads its live signal."*

::: tip Take it to the gate on your phone
Tune is a real page with its own web address, not a pop-up window.

If you're running the web version, open the same address on your phone and watch the signal in
your hand while you walk a drone through the gate. That beats walking back to the laptop after
every change. It survives a reload too.
:::

## What you're looking at

One column per node, laid out like RotorHazard's own tuning page:

- The **live signal graph** for that node, updating constantly.
- The **enter** and **exit** lines drawn across it.
- The **crossing band** — a shaded block that starts the moment the signal goes above *enter*
  and ends when it falls back below *exit*.
- The node's numbers underneath, and which pilot is on it.

**The crossing band is the thing to watch.** It answers "did that pass actually register?" A
signal number on its own can't tell you that. If a drone flies through and no band appears, the
gate did not count it.

A node your timer has **never reported** is drawn as **dead**, not as a flat quiet line. Those
two look identical otherwise, and they need opposite fixes.

"No signal" and "no connection" are kept apart the same way. If the feed itself has stopped, the
page says so rather than showing you a quiet gate.

## Set the enter and exit levels {#set-the-enter-and-exit-levels}

Each level has three controls, all changing the same number:

- the **number box**, for a value you already know;
- the **slider**, for one you're feeling out;
- the **handle on the graph**, for one you can see.

**There is no Apply button.** The value goes to the timer as soon as you let go. Nothing to
forget, and no tuning against a level the hardware never received.

Instead of an Apply button, each level shows a status:

| Status | What it means |
| --- | --- |
| **Adjusting** | You're moving it right now. Nothing sent yet. |
| **Sending…** | GridFPV took it and is waiting to see it on the timer. |
| **On timer** | The timer confirmed it has this value. This is the normal resting state. |
| **Not taken** | The timer kept reporting something else. The change did not land. |

That confirmation is a real read-back from the hardware, not just "the request didn't error". If
it says **Not taken**, the timer did not accept it — and GridFPV says so loudly rather than
letting you tune against a number that isn't really there.

## Capture a level from a pass {#capture-a-level-from-a-pass}

Instead of guessing a number, you can let the timer measure one.

**Capture watches the gate for three seconds starting the moment you press it**, and sets the
level from the signal it sees. So press it first, *then* fly the pass.

Use **Capture Enter at from a pass** or **Capture Exit at from a pass** on the node you're
working on, then fly through within those three seconds. If nothing crosses, nothing changes.

## Set a node's channel

Tuning a gate is pointless if the node is listening on the wrong channel, so you can set the
frequency right here from a dropdown.

GridFPV writes the band and channel name to RotorHazard, not just a bare number, so
RotorHazard's own screen shows *R7* next to the frequency and you can check the change landed.

::: warning Starting a heat will overwrite this, and that's correct
Staging a heat re-tunes every node to the channel its seat is assigned.

The channel you set here is a bench value for tuning, not a race assignment. Race channels come
from the roster, the heat, or a
[channel layout](/guide/running-an-event#channel-layouts).
:::

::: warning Changing the channel does not move the levels
RotorHazard stores a node's frequency and its enter/exit levels together, so switching a node's
channel leaves the old channel's levels sitting there. They *look* fine.

Fly a pass on the new channel before you trust them.
:::

## When tuning is refused {#when-tuning-is-refused}

Changing a level changes which laps the gate counts. So GridFPV refuses while a **competition
heat is running** on that timer:

> *A competition heat is running — changing a gate threshold now would change which laps it
> counts. Tuning resumes when the heat ends.*

This is checked on every change, not once when the page opens. A heat that starts while you're
standing at the gate will start refusing mid-session.

**Practice is different — you can tune during it.** Practice isn't scored, so there's no result
to damage. And pilots being in the air is exactly when you want to be tuning. With no heat on
the timer at all, tuning just works.

## Watching the gate during a race

You can't tune during a competition heat, but you can still **look**.

Race Control has a read-only **Gate signal** strip: the trace, the level lines and the crossing
marks for each gate, and nothing that changes anything. It's collapsed by default and remembers
that per event. Even collapsed, its header shows a live dot per gate, so a dead node is obvious
without opening it.

That's what tells you which of three problems you're looking at when a lap doesn't appear:

1. the drone put out **no signal at all** — a dead video transmitter, or the wrong channel;
2. the drone **crossed but not strongly enough** to trip the gate — a levels problem, fix it here
   after the heat;
3. the drone **never crossed** — they missed the gate.

All three look identical on the leaderboard. They need three different responses.

## A gate that reports the same pass twice

If a gate is very sensitive, it can report **one** drone going past as several crossings a
fraction of a second apart. That's not a levels problem exactly — the gate is working, just
enthusiastically.

GridFPV handles this with the timer's **same-pass window**, which groups those repeats together
and keeps them out of your lap list. See
[gate bounce](/guide/timers#gate-bounce-the-same-pass-window).

It's worth knowing the difference:

- **Missing laps** → the enter and exit levels are wrong. Fix them on this page.
- **The same lap counted several times** → gate bounce. Handled by the same-pass window, though
  a lot of it is a hint your gate is more sensitive than it needs to be.
