import { defineConfig } from 'vitepress'
import * as fs from 'fs'
import * as path from 'path'

export default defineConfig({
  title: 'Chii',
  description: 'Documentation for Chii and Chobitsu',
  outDir: '../dist',
  srcExclude: ['**/public/**'],
  themeConfig: {
    logo: {
      src: '/logo.png',
      width: 48,
      height: 48,
    },
    nav: [
      { text: 'Docs', link: '/docs' },
      { text: 'Playground', link: '/room' },
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
      ],
    },
    socialLinks: [
      {
        icon: {
          svg: fs.readFileSync(path.resolve(__dirname, 'kofi.svg'), 'utf8'),
        },
        link: 'https://ko-fi.com/surunzi',
      },
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
          { text: '文档', link: '/zh/docs' },
          { text: '演示', link: '/zh/room' },
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
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-1BL0KS0FSD',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1BL0KS0FSD');`,
    ],
  ],
})
