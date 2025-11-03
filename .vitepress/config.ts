import { defineConfig } from 'vitepress'
import vite from "./vite.config.ts"
import sidebar from "./sidebar.config.ts"
import nav from "./nav.config.ts"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ruinb0w",
  appearance: 'force-dark',
  themeConfig: {
    // display in header
    nav,
    // display is page side bar
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ruinb0wman' }
    ]
  },
  vite
})
