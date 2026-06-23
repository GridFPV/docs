import { defineConfig } from 'vitepress'

// GridFPV user documentation site.
// Note: `base` is set for GitHub Pages project-site hosting (https://gridfpv.github.io/docs/).
// Override with the DOCS_BASE env var if the site is ever served from a custom domain root.
const base = process.env.DOCS_BASE ?? '/docs/'

export default defineConfig({
  base,
  lang: 'en-US',
  title: 'GridFPV',
  description: 'Self-hosted drone-race timing and event management — user documentation.',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
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
