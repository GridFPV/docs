import { defineConfig } from 'vitepress'

// GridFPV user documentation site.
// Note: served at the custom-domain root (https://docs.gridfpv.com/), so `base` is `/`.
// Override with the DOCS_BASE env var for alternate hosting (e.g. a project-site subpath).
const base = process.env.DOCS_BASE ?? '/'

export default defineConfig({
  base,
  lang: 'en-US',
  title: 'GridFPV',
  description: 'Self-hosted drone-race timing and event management — user documentation.',
  cleanUrls: true,
  lastUpdated: true,

  // Default to dark mode — the GridFPV app is a dark "broadcast-console" baseline.
  // A toggle to light remains available (custom theme maps both).
  appearance: 'dark',

  // Favicon (the app's grid-green "G" mark). `base` is `/`, so an absolute path works.
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }]
  ],

  themeConfig: {
    // Nav logo (top-left) — the app's mark.
    logo: '/favicon.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guide/getting-started' },
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Running an Event', link: '/guide/running-an-event' },
          { text: 'Marshaling', link: '/guide/marshaling' },
          { text: 'Round Formats', link: '/guide/formats' },
          { text: 'Connecting a Timer', link: '/guide/timers' },
          { text: 'Tuning a Gate', link: '/guide/tuning' },
          { text: 'FAQ', link: '/guide/faq' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            {
              text: 'Running an Event',
              link: '/guide/running-an-event',
              collapsed: true,
              items: [
                { text: 'The setup wizard', link: '/guide/running-an-event#the-setup-wizard' },
                {
                  text: 'Timers & channel layouts',
                  link: '/guide/running-an-event#timers-and-layouts'
                },
                { text: 'Classes & Roster', link: '/guide/running-an-event#stage-1-classes-roster' },
                { text: 'Rounds & Heats', link: '/guide/running-an-event#stage-2-rounds-heats' },
                { text: 'Race Control', link: '/guide/running-an-event#stage-3-race-control' },
                { text: 'Results', link: '/guide/running-an-event#stage-5-results' }
              ]
            },
            {
              text: 'Marshaling',
              link: '/guide/marshaling',
              collapsed: false,
              items: [
                { text: 'The lap list', link: '/guide/marshaling#the-lap-list' },
                { text: 'The removal record', link: '/guide/marshaling#the-removal-record' },
                { text: 'Tune detection', link: '/guide/marshaling#tune-detection' },
                { text: 'Rulings & protests', link: '/guide/marshaling#heat-rulings-protests' }
              ]
            },
            {
              text: 'Round Formats',
              link: '/guide/formats',
              collapsed: true,
              items: [
                { text: 'The round types', link: '/guide/formats#the-round-types' },
                { text: 'Seeding', link: '/guide/formats#seeding-chaining-rounds-together' },
                { text: 'Timing & safeguards', link: '/guide/formats#round-timing-safeguards' },
                { text: 'Win conditions', link: '/guide/formats#win-conditions' }
              ]
            },
            {
              text: 'Connecting a Timer',
              link: '/guide/timers',
              collapsed: true,
              items: [
                { text: 'The Mock timer', link: '/guide/timers#the-built-in-mock-timer' },
                { text: 'RotorHazard', link: '/guide/timers#rotorhazard' },
                {
                  text: 'Install the plugin',
                  link: '/guide/timers#install-the-gridfpv-plugin'
                },
                { text: 'Nodes and channels', link: '/guide/timers#nodes-and-channels' },
                { text: 'Channels vs nodes', link: '/guide/timers#channels-vs-nodes' },
                { text: 'The heat lifecycle', link: '/guide/timers#the-heat-lifecycle' }
              ]
            },
            {
              text: 'Tuning a Gate',
              link: '/guide/tuning',
              collapsed: true,
              items: [
                { text: 'Open the Tune page', link: '/guide/tuning#open-the-tune-page' },
                {
                  text: 'Enter & exit levels',
                  link: '/guide/tuning#set-the-enter-and-exit-levels'
                },
                { text: 'Capture from a pass', link: '/guide/tuning#capture-a-level-from-a-pass' },
                { text: 'When tuning is refused', link: '/guide/tuning#when-tuning-is-refused' }
              ]
            },
            { text: 'FAQ', link: '/guide/faq' }
          ]
        }
      ]
    },

    // Built-in local (offline) search — no external service required.
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GridFPV/gridfpv' }
    ],

    footer: {
      message: 'Released under the AGPL-3.0 License.',
      copyright: 'Copyright © 2026 GridFPV'
    },

    editLink: {
      pattern: 'https://github.com/GridFPV/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
