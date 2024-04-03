import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Frontend Docs",
  description: "Useful Frontend Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Network',
        items: [
          { text: 'HTTP Questions', link: '/network/http' },
          { text: 'HTTP 缓存', link: '/network/catch' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/savokiss/frontend-docs' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2023-${new Date().getFullYear()} savokiss`
    },
  }
})
