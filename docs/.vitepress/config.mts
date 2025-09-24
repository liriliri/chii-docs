import { defineConfig } from 'vitepress'
import { googleAnalytics, kofi, wechatpay, logo } from './share/config.mjs'

export default defineConfig({
  title: 'Chii',
  description: 'Documentation for Chii and Chobitsu',
  outDir: '../dist',
  srcExclude: ['**/public/**'],
  themeConfig: {
    logo,
    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'Playground', link: '/room/' },
    ],
    sidebar: {
      '/docs/': [
        {
          text: 'Introduction',
          link: '/docs/',
        },
        {
          text: 'Chobitsu API',
          link: '/docs/chobitsu',
        },
        {
          text: 'Contributing Guide',
          link: '/docs/contributing',
        },
      ],
    },
    socialLinks: [
      kofi,
      wechatpay,
      {
        icon: 'github',
        link: 'https://github.com/liriliri/chii',
      },
    ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '中文',
      lang: 'zh',
      themeConfig: {
        outlineTitle: '在这一页上',
        nav: [
          { text: '文档', link: '/zh/docs/' },
          { text: '演示', link: '/zh/room/' },
        ],
        sidebar: {
          '/zh/docs/': [
            {
              text: '简介',
              link: '/zh/docs/',
            },
          ],
        },
      },
    },
  },
  head: googleAnalytics('G-1BL0KS0FSD'),
  vite: {
    ssr: {
      noExternal: ['luna-split-pane'],
    }
  }
})
