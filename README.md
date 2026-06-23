# GridFPV Documentation

User-facing documentation for **GridFPV** — self-hosted drone-race timing and event
management. The site is built with [VitePress](https://vitepress.dev/).

> This is the **user documentation** repo. It is separate from the internal design/architecture
> docs, which live in [`GridFPV/gridfpv`](https://github.com/GridFPV/gridfpv) under `docs/`.
> Content here is task-oriented and friendly — how to download, run, and operate GridFPV — not
> architectural rationale.

## Local development

Requires Node.js 18+.

```sh
npm install            # install dependencies (VitePress)
npm run docs:dev       # start the dev server with hot reload
npm run docs:build     # build the static site into docs/.vitepress/dist
npm run docs:preview   # preview the built site locally
```

## Structure

```
docs/
├── .vitepress/
│   └── config.mts          # site config: nav, sidebar, local search
├── index.md                # landing / home page
└── guide/
    ├── getting-started.md  # how to download & run GridFPV (native + hosted)
    ├── running-an-event.md # the event workspace, stage by stage
    ├── formats.md          # round formats & win conditions
    ├── timers.md           # connecting Mock / RotorHazard + heat lifecycle
    └── faq.md              # common questions
```

Getting Started is complete content; the other guide pages are solid outlines with `TODO`
markers that we fill in over time.

## Search

Search is enabled using VitePress's built-in **local** search provider — it indexes the site
at build time and needs no external service.

## Deployment (GitHub Pages)

A GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds the site and deploys it to **GitHub Pages** on every push to the default branch.

> [!IMPORTANT]
> Pages is **not enabled yet**. This repo is currently **private**, and GitHub Pages on a free
> organization requires the repo to be **public**. The deploy workflow is in place and ready;
> it will publish once the repo is made public and Pages is turned on
> (**Settings → Pages → Build and deployment → Source: GitHub Actions**).

The site is configured with a base path of `/docs/` for project-site hosting at
`https://gridfpv.github.io/docs/`. If it is ever served from a different base (e.g. a custom
domain root), set the `DOCS_BASE` environment variable at build time.

## License

Documentation content is released under the **AGPL-3.0** license, matching the GridFPV
project.
