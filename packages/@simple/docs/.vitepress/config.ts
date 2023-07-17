import { defineConfig } from 'vitepress'
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@simple/docs",
  description: "simple UI 文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: '指南',
        link: '/guide/getting-started',
        activeMatch: '/guide/',
      },
      {
        text: '组件',
        link: '/components/overview',
        activeMatch: '/components/',
      }
    ],

    sidebar: {
      '/markdown-examples': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速上手', link: '/guide/getting-started' }
          ],
        },
      ],
      '/components/': [
        {
          items: [
            { text: '组件总览', link: '/components/overview' },
            { text: 'Card 卡片', link: '/components/card' }
          ],
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    plugins: [
      vueJsx({
        include: [/\.[jt]sx$/],
      }),
    ]
  }
})
