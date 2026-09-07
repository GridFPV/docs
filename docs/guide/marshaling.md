# Marshaling

Marshaling is where you **check and fix a heat** before the result counts.

You can correct laps against the recorded radio signal, add penalties, handle protests, and
decide the official result. Every change is written down, and the standings update straight
away.

Open the **Marshaling** stage inside an event. The page has two halves:

- **Pilot marshaling** — one pilot's laps, their signal graph, and the fixes.
- **Heat rulings & protests** — things that apply to the whole heat.

## Choose what to fix

- **Marshal heat** — which heat you're looking at. It follows Race Control's current heat by
  default, but you can pin **any** heat, including a finished one, without disturbing the race
  in progress.
- **Pilot to marshal** — one pilot at a time. The graph and lap list both follow this.

## Pilot marshaling

### The signal graph

If your timer records signal strength (RotorHazard does), you get each pilot's **signal trace**
with a mark at every recorded lap. This is your evidence.

Think of it as a heartbeat line. When a drone flies past the gate its signal gets stronger, so
the line rises into a hump. Each hump should be one lap.

- **Click a lap mark** to select that lap in the list below. It works the other way too.
- **Zoom** with the mouse wheel, or the **+ / − / Fit** buttons. Zoomed in, drag to move around.
- **Hover** anywhere to see the exact time and signal strength there. **Add lap here** puts a
  crossing at that moment.

### The lap list {#the-lap-list}

Each row is a lap, with its number and time. The fixes are right on the row:

| Fix | Use it when | What happens |
| --- | --- | --- |
| **Remove** | The crossing **never really happened** — noise, or a reflection. | The crossing is deleted. The laps on either side join into one. |
| **Save time** | The lap is real but the time is wrong. | Select the lap, type the correct time, save. |
| **Split** | Two real laps got recorded as one long one, because the gate missed a crossing. | Cuts the lap in half. Then fix each half with Save time. |
| **Throw out** | The lap **did happen but shouldn't count** — a cut course, a penalty. | It stays visible and on the clock, but is left out of scoring. |
| **+ Add lap** | The gate missed a crossing completely. | Adds one at a time you type. Works even for a pilot with zero laps. |

::: tip Remove vs Throw out — the one to get right
**Remove** changes what happened. The crossing was never a real lap.

**Throw out** changes the score. The lap really happened, but it shouldn't count.

Quick test: **bad detection → Remove. Broken rule → Throw out.**
:::

### The removal record {#the-removal-record}

Removed crossings don't vanish. They stay visible as crossed-out rows, each with a **Restore**
button if you change your mind.

This record is shared with the re-detection tool, so a crossing you removed is never offered
back to you later as "a lap to add".

Some crossings are removed **automatically**, and those show up here too:

#### "under min lap, auto-removed"

The round's **min lap time** caught it. Someone crossed the gate sooner than a real lap could
possibly take, so it wasn't counted.

The crossing was probably real — the pilot did fly past the gate — it just came too soon to be
a lap. Maybe they cut the course, or turned around at the gate. **Restore** it if it should
count.

#### "same pass (gate bounce), auto-removed"

The gate saw the **same drone go past once but reported it more than once**.

This is a hardware quirk, not something the pilot did. When a drone sits in the gate's strongest
zone, the radio signal can bounce around and trip the detector several times in a fraction of a
second. Three or four reports, one actual pass.

GridFPV groups these into a single line so they don't bury your real laps:

```
∅  3 same-pass crossings (gate bounce)  ▸
```

Click it to open the group and see each crossing, with its own **Restore** button. There is no
"restore all" — restoring a whole bounce group is never what you want, and one wrong click
would add three fake laps.

::: tip These two look similar and are not the same thing
**Under min lap** = a real crossing that came too soon to count. Set by the **round**, because
it's about your track.

**Gate bounce** = not a separate crossing at all. The same pass, reported twice. Set by the
**timer**, because it's about that gate's antenna and where it sits.

You also hear the difference: an under-min-lap crossing **beeps**, because the gate really did
see something. A bounce is **silent**, because nothing new happened.

If you're seeing a lot of bounce groups, that's the gate telling you it's too sensitive. See
[gate bounce](/guide/timers#gate-bounce-the-same-pass-window).
:::

### Tune detection {#tune-detection}

If a heat recorded signal, **Tune detection** lets you work out a pilot's laps again from the
trace. This is the fix for a timer that was set up wrong before the race.

1. Drag the **enter** and **exit** level lines on the graph, or type the numbers.
2. The lap list turns into a **live preview** showing which laps would be kept, added or removed
   at those levels.
3. **Commit re-detection** makes the preview real. Each change is recorded like any other fix.

Nothing happens until you commit, and this **never changes the timer's own settings**.

::: tip Fixing the heat vs fixing the gate
**Tune detection** fixes *this recorded race*. It's after the fact.

To change what the gate detects **from now on**, use the timer's Tune page — see
[Tuning a Gate](/guide/tuning).
:::

## Heat rulings & protests {#heat-rulings-protests}

Everything below the divider applies to the **whole heat**, no matter which pilot is showing.

### Penalties

- **Disqualify** a pilot, with an optional reason.
- Add a **time penalty**.
- **Deduct points**.

Pick the pilot, pick the penalty, and apply.

**Reverse ruling** undoes an earlier penalty, throw-out, protest decision or heat void. You pick
it from the history. Only one ruling of each kind stands at a time — reversing one lets you make
a fresh one.

### Protests

- **File protest** — record a protest against a pilot with a note. You can file one while a heat
  is still running, after it ends, or even against a finished result.
- **Resolve protest** — decide it: **Upheld**, **Denied**, or **Withdrawn**.
- **An open protest blocks Finalize.** A heat can't go official while a protest is unresolved.
- If the heat is restarted, pending protests are cleared — the re-race replaces them.

### The heat result

- **Finalize** locks an Unofficial heat as **Final**.
- Once Final, everything that could change the result locks too. The banner's **Revert →
  Unofficial** is the one way back in. (You can still file protests against a Final result.)
- **Void heat** throws out the whole heat so it doesn't count. Undo it with Reverse ruling.

### The history

**Recent rulings** lists every fix and decision on this heat: what happened, to whom, and when.
The full event-wide history is on the **Audit** stage.

Nothing is ever changed quietly. If it moved the result, it's in the list.

## Good to know

- **Results update as you go.** Standings, rankings, and anything seeded from this round change
  the moment a ruling lands. There's no recalculate button.
- **Fixes belong to one run.** After a Restart, corrections aimed at the abandoned run are
  refused and your screen tells you to refresh, rather than being silently ignored.
- **A Final result is frozen.** Late data from the timer and result-changing rulings are turned
  away until you press Revert.
