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
          { text: 'Round Formats', link: '/guide/formats' },
          { text: 'Connecting a Timer', link: '/guide/timers' },
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
            { text: 'Running an Event', link: '/guide/running-an-event' },
            { text: 'Round Formats', link: '/guide/formats' },
            { text: 'Connecting a Timer', link: '/guide/timers' },
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
