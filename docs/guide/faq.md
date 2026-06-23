# FAQ

> [!NOTE]
> This page is growing over time. The questions below are answered today; more will be added.

## Where is my event data stored?

If you run the **native portable app**, GridFPV keeps everything in a **`gridfpv-data/`**
folder right next to the executable — your pilots, classes, events, and the full record of
every race. To back it up or move it to another machine, copy that folder. To start fresh,
move or rename it and GridFPV will create a new empty one on next launch. See
[Getting Started](/guide/getting-started#_3-where-your-data-lives).

## Should I use the native app or the hosted web app?

They are the **same application** and use the same data.

- Use the **native portable app** when you want the simplest setup — one file, double-click,
  a window opens. Ideal for running an event on a single laptop at the field.
- Use the **hosted web app** when you want to reach the same event from a browser, including
  from other devices on your network (a second screen, or pilots checking standings).

See [Getting Started](/guide/getting-started) for both.

## Which timers are supported?

Today GridFPV ships with the built-in **Mock** timer (a simulator for learning and demos) and
support for **RotorHazard** over its server URL. More timing sources are planned. See
[Connecting a Timer](/guide/timers).

## Do I need an internet connection or a cloud account?

No. GridFPV is **self-hosted** and runs entirely on your own machine — no account to sign up
for and no mandatory cloud service. This is by design: at a field with no internet, GridFPV
still runs your whole event.

## Do pilots need to log in?

The race director's own machine is trusted automatically — there is nothing to log into to
run a race locally. Reaching control from *another* device may require a passphrase the
director sets.

<!-- TODO: Read-only pilot/spectator access, the passphrase flow, viewing standings from a phone. -->

## How do I export results?

<!-- TODO: Exporting standings and results from the Results stage. -->

## Can I run more than one track or event at once?

<!-- TODO: One event flies one track; how to manage multiple events. -->
