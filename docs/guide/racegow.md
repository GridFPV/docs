# RaceGOW at Home

[RaceGOW](https://www.racegow.com/) is a whoop racing competition you fly in your own house.
You build the season's track from PVC, fly it, and send in your **fastest 3 laps in a row** with
a video clip. GridFPV has a built-in path for exactly that.

This page shows how to time a RaceGOW run, get a timer into your video, and get the number you
need for the submission form.

::: tip What you need
- A RotorHazard timer with **one node**, tuned to your whoop's video channel. See
  [Connecting a Timer](/guide/timers) and [Tuning a Gate](/guide/tuning).
- GridFPV running on the laptop next to the track.
- For the video: OBS (or any recorder that can show a web page), your goggles' DVR or a camera
  pointed at the track.
:::

## One-time setup

You do this once, not for every track.

1. Open **Timers** on the home screen and add your RotorHazard. Connect it, install the plugin,
   and tick the **channel** your whoop flies on under available channels.
2. That's it. You can add yourself as a pilot from the RaceGOW page.

You don't need to make an event, a class, a round, or a heat. The RaceGOW page does all of that
for you.

## Start a track run

1. On the home screen, click **Events**, then **+ New event**. (On a brand-new install the
   button says **Create your first event**.)
2. Pick **RaceGOW track run**, then click **Set up track run**. That opens the RaceGOW page.
3. Fill in the short form:

   | Field | What to put |
   | --- | --- |
   | **Track** | The track's name, like `RaceGOW6 Track 1`. Name it the way RaceGOW does. |
   | **Pilot** | You. The first time, pick **+ New pilot** and type your callsign. |
   | **Timer** | Your RotorHazard. (The **Simulator** is there too, for a pretend run.) |
   | **Your channel** | The channel your whoop's video is on. |

4. Click **Set up run**. GridFPV makes an event for this track and opens the run screen.

Your run shows up on the **Events** page like any other event, with a **RaceGOW** tag. Click it
there to get back to the run screen. The RaceGOW page lists your runs too.

Behind the scenes it is an ordinary event with one **Time Trials** round, scored by **Best of 3
laps**, with no limit on how many times you fly. You can open it in the full console any time.

## Fly

The run screen has one big button.

1. Put your whoop on the start line and click **Start run**. The timer goes live one second
   later. There is no start tone to wait for. Laps are timed gate to gate, so your first crossing
   just starts lap 1.
2. Fly. Every lap shows up in the list as you cross the gate. As soon as you have 3 laps, the
   screen shows your **best 3 in a row** and highlights which laps they were.
3. Land and click **Stop run**. The run is saved. (A run also stops by itself after 10 minutes,
   which is longer than any pack. If that happens, click **Save run**.)
4. Want another go? Click **Fly again**. Each pack is its own run, and every run is kept.

Your best 3-lap time **across all runs** is shown under **Your best so far**. That is the
number RaceGOW wants.

::: tip A lap that isn't a lap
If the gate counts one crossing twice, or you cut a gate, open the run in the full console and
fix it on the **Marshaling** page. The run screen shows the fixed laps right away. See
[Marshaling](/guide/marshaling).
:::

## Get a timer into your video

RaceGOW's rules say your video needs a **timer in view**. GridFPV gives you one as an overlay
you put over your recording.

1. On the run screen, find **Timer in your video** and click **Copy URL**.
2. In OBS, add a **Browser** source and paste the URL. Make it the same size as your video.
3. Put it on top of your DVR or camera source. It has a see-through background, so only the
   clock and the laps show.
4. Record as you fly.

The overlay shows the run clock, the last few laps, your best 3 this run, and your best 3 today.
It only reads. Closing OBS never touches your run.

::: tip Pick the colors that show up on your video
Above the URL, choose **Light text on dark** or **Dark text on light**. Dark works over most
goggle DVR. Light works over a bright room camera. The URL changes when you pick, so copy it
after you choose. You can also add `/light` to the end of the URL yourself.
:::

::: warning One computer, or two?
The overlay follows whatever run is open in GridFPV. If OBS runs on a different computer, open
the console's address on that computer instead of `localhost`. You can find it on the
[Getting Started](/guide/getting-started) page.
:::

## Send it in

When you've flown your best:

1. Under **Your best so far**, click **Copy**. You get a short text like this:

   ```
   RaceGOW6 Track 1 — Recon
   Best 3 consecutive laps: 21.437 s (7.012 / 7.201 / 7.224)
   Run 3 of 5, laps 4–6, Sep 26, 2026, 2:03 PM
   Timed by GridFPV on Garage RH (RotorHazard)
   ```

2. Paste the time into RaceGOW's submission form, and upload the clip from the run it names.

Every lap is on GridFPV's record with the time it happened, so the three laps are always laps you
really flew in a row.

## Coming back to a track

The RaceGOW page lists every track run you've made. Click **Open** to go back to one and fly
more runs. Your earlier runs and your best are still there.

To rename or delete a run, use the **Events** page. A run is a normal event.
