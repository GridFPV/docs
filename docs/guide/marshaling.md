# Marshaling

Marshaling is where you **review and correct a heat** — fix its laps against the recorded
radio signal, apply penalties, handle protests, and set the official result. Every change is
a recorded ruling on an append-only log: results are **re-derived live** from the corrected
record, and the audit trail shows exactly who changed what.

Open the **Marshaling** stage in the event workspace. The page has two labeled regions:

- **Pilot marshaling** — one pilot's laps, signal trace, and corrections.
- **Heat rulings & protests** — whole-heat scope: penalties, protests, and the result.

## Pick what to marshal

- **Marshal heat** — choose *which heat* you're reviewing. It follows Race Control's current
  heat by default, but you can pin **any** heat — including a finished one — without touching
  the heat Race Control is running.
- **Pilot to marshal** — focus on one pilot at a time; the signal graph and lap list show
  that pilot.

## Pilot marshaling

### The signal graph

For heats timed by hardware that captures signal (RotorHazard), each pilot's **RSSI trace**
is drawn with a marker at every recorded lap. It is the evidence you marshal against.

- **Click a lap marker** to select that lap in the list below (and vice versa).
- **Zoom** with the mouse wheel over the trace, or the **+ / − / Fit** buttons. While
  zoomed, **drag to pan**.
- Hover shows the exact time and signal strength at the cursor; **Add lap here** inserts a
  crossing at that instant.

### The lap list

Each lap row shows its number and time, with the corrections right on the row:

- **Remove** — this crossing **never really happened** (a reflection, noise). The pass is
  deleted and the laps on either side merge into one.
- **Select a lap** to open its inline editor:
  - **Lap time (s)** — pre-filled with the lap's current time. Change it and **Save time**
    to re-time the lap.
  - **Split** — halves the lap at its midpoint. Use it when a missed gate crossing folded
    two real laps into one double-length lap, then tune either half with Save time.
  - **Throw out** — the lap **happened but doesn't count** (course cut, penalty). It stays
    on the clock and in the list; it's excluded from scoring. Reversible from the audit.
- **+ Add lap** at the bottom of the pilot's box inserts a missed crossing at a typed time
  (works even for a pilot with zero laps).

::: tip Remove vs Throw out
**Remove** edits reality — the crossing was never a lap, and neighbouring laps merge.
**Throw out** edits the score — the lap was real but shouldn't count. If in doubt: bad
detection → Remove; rule violation → Throw out.
:::

### The removal record

Removed passes stay **visible** as struck rows — *"removed pass at 12.4s — stays removed"* —
with a **Restore** button if you change your mind. This record is shared with re-detection,
so a crossing you removed is never offered back to you as "a lap to add."

Laps auto-removed by the round's **minimum lap time** (a double-detection echo) appear the
same way, labeled *"under min lap, auto-removed"* — Restore overrides the floor if the lap
was real.

### Tune detection

When a heat has captured signal, **Tune detection** lets you re-derive a pilot's laps from
the trace — the fix for a mis-calibrated timer:

1. Drag the **enter/exit** level handles on the graph (or type the levels).
2. The lap list becomes a **live preview**: which laps would be kept, added, or removed at
   those levels.
3. **Commit re-detection** makes the preview official — each change lands as a normal
   correction, visible in the audit.

Tuning is preview-only until you commit, and never writes calibration back to the timer.

## Heat rulings & protests

Everything below the divider applies to the **whole heat**, regardless of which pilot is
shown.

### Competitor rulings

- **Disqualify** (with an optional reason), add a **time penalty**, or **deduct points** —
  pick the competitor, the penalty, and Apply.
- **Reverse ruling** — undo a prior penalty, throw-out, protest resolution, or heat void,
  chosen from the audit trail. One standing ruling of a kind at a time: reversing it re-arms
  a fresh one.

### Protests

- **File protest** — record a protest against a competitor with a note. Protests can be
  filed while a heat is Running or after, and even against an official result.
- **Resolve protest** — rule on a filed protest: **Upheld**, **Denied**, or **Withdrawn**.
- **Open protests block Finalize** — a heat can't go official with an unresolved protest.
- A protest dies with its run: if the heat is restarted, pending protests are cleared (the
  re-race supersedes them).

### The heat result

- **Finalize** an Unofficial heat to lock its result as **Final**. Once Final, every
  result-changing surface locks; the banner's **Revert → Unofficial** is the one way to
  re-open it for correction. (Protests stay filable against a Final result.)
- **Void heat** — throw out the whole heat so it doesn't count. Reversible via
  Reverse ruling.

### The audit trail

**Recent rulings** lists every correction and ruling on the marshaled heat — what happened,
to whom, when. The full event-wide history lives on the **Audit** stage. Nothing is ever
silently changed: if it moved the result, it's in the trail.

## Good to know

- Corrections **re-fold the result live** — standings, rankings, and anything seeded from
  this round update the moment a ruling lands.
- Rulings are **run-scoped**: after a Restart, corrections aimed at the abandoned run are
  refused (your screen tells you to refresh) rather than silently ignored.
- An official (Final) result is **frozen** — late timer data and result-changing rulings are
  rejected until you Revert.
