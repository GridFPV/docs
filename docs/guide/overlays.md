# Overlays: a Timer in Your Video

An **overlay** is a page you put on top of your video in OBS. It shows the race clock, the heat,
and every pilot's laps, on a see-through background. Use it for a stream, a recording, or a
competition that wants a timer in view, like [RaceGOW](https://www.racegow.com/).

The overlay follows whatever is happening in the event you have open. It only reads. Closing
OBS never touches the race.

::: tip What you need
- GridFPV running with an event open.
- OBS, or any recorder that can show a web page.
- Your video source: your goggles' DVR, a camera on the track, or a capture card.
:::

## Find the overlay

1. Open your event.
2. Click **Overlays** in the list down the left side. It sits under **Timers**.

The Overlays page shows each overlay with a **preview** of what it looks like right now, its
**URL**, and a **Copy URL** button. **Open in a new tab** shows the page on its own.

There is one overlay so far, the **Race timer**. It shows:

- the race clock (it counts down when the round has a race time),
- the heat's name and whether it is **LIVE**,
- every pilot in the heat with their laps, last lap, and best lap.

When one pilot is flying alone, it shows their last few laps instead of a table. When the round
scores **Best of N laps in a row**, the best run of laps is highlighted, and the pilot's best for
the day shows too.

## Put it in OBS

1. On the Overlays page, click **Copy URL**.
2. In OBS, add a **Browser** source and paste the URL. Make it the same width and height as your
   video.
3. Put it on top of your video source. The background is see-through, so only the panel shows.
4. Record or stream as you fly.

::: tip Pick the colors that show up on your video
Above the URL, choose **Light text on dark** or **Dark text on light**. Dark works over most
goggle DVR. Light works over a bright room camera. The URL changes when you pick, so copy it
after you choose. You can also add `/light` to the end of the URL yourself.
:::

::: tip The address does not change
The desktop app always serves at `http://127.0.0.1:8080`. You can paste the URL into OBS once
and it keeps working after you restart GridFPV.
:::

::: warning One computer, or two?
If OBS runs on a different computer, the overlay needs to reach GridFPV over your network. The
desktop app only listens on its own computer. Run the server version instead, and use your
computer's network address in the URL, as on the
[Getting Started](/guide/getting-started) page.
:::

## Timing a solo run at home

Competitions like RaceGOW want your fastest laps in a row with a timer in the video. You do not
need anything special for that. Make an ordinary event:

1. Make an event and add yourself to the roster. See [Running an Event](/guide/running-an-event).
2. Make a **Time Trials** round. Set **Rounds** to `0` so you can fly as many times as you like,
   pick **Best of 3 laps in a row** as the scoring, and give it a race time long enough for a
   pack. See [Round Formats](/guide/formats).
3. Put the overlay in OBS, as above.
4. In **Race Control**, make the heat, **Stage** it, **Start**, fly, and **Stop** when you land.
   Each pack is its own heat.

Your best laps in a row across every heat show on the **Results** page, and the overlay shows the
best so far while you fly. Every lap is on GridFPV's record with the time it happened.
