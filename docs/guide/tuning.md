# Tuning a Gate

A gate only records a lap when the drone's signal rises past an **enter** level and falls back
past an **exit** level. If those two numbers don't bracket what a real pass looks like on your
track, the gate misses laps — or invents them. The **Tune** page is where you set them, per
node, while a quad is actually flying through.

::: tip Two different "tune" tools
This page tunes the **hardware**, ahead of time: it writes enter/exit levels to the timer so
future passes are detected correctly.

[Marshaling's **Tune detection**](/guide/marshaling#tune-detection) is the after-the-fact
repair: it re-derives one pilot's laps from the signal a finished heat already recorded, and
never writes anything back to the timer. Use Tune when the gate is wrong; use Tune detection
when a *recorded heat* is wrong.
:::

## Open the Tune page

**Tune** sits on the timer's row in two places, and which one you use decides the scope:

- **Timers on the home hub → Tune** — the timer's own baseline. This works before any event
  exists, which is the usual case: you're setting a gate up.
- **The event workspace's Timers screen → Tune** — the same page, opened inside your event.
  **Back** returns you to the event rather than the global Timers page, which is what you want
  when a heat is waiting.

The page states which one it is editing at the top, so a reload — or the same link opened
somewhere else — keeps the scope you started with.

The button is only offered on a timer that has a gate to read, and is **disabled until the
timer is connected** ("Connect ‹Timer› first — tuning reads its live signal").

::: tip Take it to the gate on your phone
Tune is a real page with its own address, not a pop-up. On a GridFPV you reach over the
network, open the same URL on a phone and watch the signal in your hand while you walk a quad
through the gate — instead of walking back to the laptop after every adjustment. It survives a
reload, too.
:::

## What you see

One column per node, laid out like RotorHazard's own tuning page:

- The **live signal plot** for that node, updating continuously.
- The **enter** and **exit** level lines drawn across it.
- The **crossing band** — a shaded region that opens the moment the signal rises past *enter*
  and closes when it falls back past *exit*. This is the thing that actually answers "did that
  pass register?"; a bare signal number cannot.
- The node's readouts underneath, and the pilot seated on it when there is one.

A node your timer has **never reported** is drawn as **dead** rather than as a flat quiet
trace — the two look identical otherwise, and they have opposite fixes.

Likewise, "no signal" and "no link" are kept apart: if the feed itself has stopped, the page
says so rather than showing you a quiet gate.

## Set the enter and exit levels

Each threshold has three controls, all editing the same number:

- the **numeric box**, for a value you already know;
- the **slider**, for one you're feeling out;
- the **draggable handle on the graph**, for one you can see.

**There is no Apply button.** The value goes to the timer as soon as you let go — so there is
no step to forget and no tuning against a level the hardware never received.

What replaces the Apply button is a status on each threshold:

| Status | What it means |
| --- | --- |
| **Adjusting** | You are moving it right now; nothing has been sent yet. |
| **Sending…** | Accepted by GridFPV, waiting to see it on the timer. |
| **On timer** | The timer is confirmed holding this value. The resting state. |
| **Not taken** | The timer kept reporting a different level — the write did not land. |

The confirmation is a real read-back from the timer, not just "the request returned 200". If a
threshold says **Not taken**, the hardware did not take it, and it says so loudly rather than
letting you tune against a fiction.

## Capture a level from a pass

Instead of typing a number, you can let the timer measure one:

> **Capture measures the level instead of you typing one. The timer watches this gate for three
> seconds starting the moment you press, and sets the threshold from the signal it sees — so
> press it, then fly the pass. Nothing is recorded unless a new level comes back.**

Use **Capture Enter at from a pass** or **Capture Exit at from a pass** on the node you're
working on, then fly the pass within the three seconds. If nothing crosses, nothing changes.

## Set a node's channel

Tuning a gate is meaningless until the node is listening on the channel it will actually race,
so the frequency on each node is a dropdown you can set right here. GridFPV writes the band and
channel to RotorHazard, not just a bare frequency, so RotorHazard's own page shows *R7* beside
the number and you can verify the write landed.

::: warning A heat will overwrite this — and that's correct
Staging a heat re-tunes every node to the channel its seat is assigned. The channel you set
here is a bench value for tuning, not a race assignment. Race channels come from the roster,
the heat, or a [channel layout](/guide/running-an-event#channel-layouts).
:::

::: warning Changing the channel does not move the thresholds
RotorHazard keeps a node's frequency and its enter/exit levels in the same place, so switching
a node's channel leaves the old channel's levels sitting there — they *look* fine. Fly a pass
on the new channel before you trust them.
:::

## When tuning is refused

Changing a threshold changes which laps the gate counts, so GridFPV refuses a write while a
**competition heat is running** on that timer:

> *A competition heat is running — changing a gate threshold now would change which laps it
> counts. Tuning resumes when the heat ends.*

This is checked on every adjustment, not once when the page opens — a heat that goes live while
you're standing at the gate starts refusing mid-session.

**Open practice is tunable while it runs.** Practice is excluded from scoring, so there is no
result to corrupt — and pilots in the air is exactly the moment you want to be tuning. With no
heat on the timer at all, tuning simply works.

## Watching the gate mid-race

You can't tune during a competition heat, but you can still *look*. Race Control carries a
read-only **Gate signal** strip — trace, threshold lines and crossing marks per gate, and
nothing that writes. It is collapsed by default and remembers that per event, and even
collapsed its header carries a live chip per gate, so a dead node is visible without opening
anything.

That is what tells you whether a lap that didn't register was a craft producing no signal, a
craft crossing under the enter threshold, or no crossing at all — three faults with three
different responses that all look the same on the leaderboard.
