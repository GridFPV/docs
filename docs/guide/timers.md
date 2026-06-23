# Connecting a Timer

A **timer** is GridFPV's source of truth for what happens on the track — every time a drone
crosses the gate. You set up a timer once under **Timers** on the home hub, then select it
for an event.

> [!NOTE]
> This page is an outline that we are filling in over time. The sections below describe each
> timer and the heat lifecycle at a high level today.

## The built-in Mock timer

The **Mock** timer is a built-in simulator. It produces realistic gate crossings with no
hardware at all, so you can learn the whole race flow, test an event setup, or demo GridFPV
on a single laptop.

Add a Mock timer when you want to practice staging, starting, and finalizing heats before you
are at the field with real gear.

<!-- TODO: Adding a Mock timer, configuring pilots/pace, using it to rehearse an event. -->

## RotorHazard

[RotorHazard](https://github.com/RotorHazard/RotorHazard) is a popular open-source RF timing
system. To use it with GridFPV, point GridFPV at your **RotorHazard server URL** and connect.

<!-- TODO: Finding the RH server URL, connecting, mapping RH nodes to GridFPV pilots, troubleshooting. -->

## The heat lifecycle

Every heat moves through the same clear sequence of states. Knowing them makes live control
predictable:

| State | What it means |
| --- | --- |
| **Scheduled** | The heat exists with its lineup, but hasn't started. |
| **Staged** | The staging countdown is underway; channels/frequencies get assigned. |
| **Armed** | The gate is open and the start procedure is running (announce → hold → tone). |
| **Running** | The race is live; gate crossings count. |
| **Unofficial** | The race has closed but the result is still provisional — late crossings and corrections can still land. |
| **Final** | The result is locked in. |

### The start procedure

When you **Start** a staged heat, it arms and runs a start procedure — an announcement, a
**randomized hold**, then the start tone — before the heat goes live. The randomized hold
keeps pilots from anticipating the exact start.

<!-- TODO: Start procedure timing, the staging countdown, overrides (skip countdown / force end), the grace window. -->
