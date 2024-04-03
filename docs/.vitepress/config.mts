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
          { text: 'HTTP 常见问题', link: '/network/http' },
          { text: 'HTTP 缓存', link: '/network/catch' },
        ]
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'JS 基础', link: '/javascript/basic' },
        ]
      },
      {
        text: 'CSS',
        items: [
          { text: 'CSS 基础', link: '/css/basic' },
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: 'Vue 基础', link: '/vue/basic' },
        ]
      },
      {
        text: 'React',
        items: [
          { text: 'React 基础', link: '/react/basic' },
        ]
      },
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
