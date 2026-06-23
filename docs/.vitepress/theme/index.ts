// Custom VitePress theme for the GridFPV docs.
// Extends the default theme and layers the GridFPV "broadcast-console" palette
// (dark blue-slate canvas, electric grid-green accent, Inter type) on top via
// custom.css. The Inter web font is loaded from @fontsource/inter so the docs
// match the app even where Inter isn't installed locally.
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
}

export default theme
