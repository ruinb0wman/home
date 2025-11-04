import type { DefaultTheme } from "vitepress"

export default [
  {
    text: 'Blog',
    items: [
      {
        text: '2025', collapsed: true, items: [
          {
            text: '06', collapsed: true, items: [
              { text: '首屏加载优化', link: '/blog/2025/06/first_screen_optimize.md' }
            ]
          },
          {
            text: '07', collapsed: true, items: [
              { text: '跨平台方案对比', link: '/blog/2025/07/cross_paltform_compare.md' }
            ]
          },
          {
            text: '10', collapsed: true, items: [
              { text: '通用性能优化', link: '/blog/2025/10/performance' }
            ]
          },
          {
            text: '11', collapsed: true, items: [
              { text: '客户端信息采集', link: '/blog/2025/11/app_inspect' },
              { text: '浏览器缓存机制', link: '/blog/2025/11/cache' },
              { text: 'ink react形式构建命令行工具', link: '/blog/2025/11/ink' }
            ]
          }
        ]
      }
    ]
  },
  {
    text: 'Notes', items: [
      {
        text: 'FrontEnd',
        collapsed: true,
        items: [
          {
            text: "React", collapsed: true, items: [
              { text: "state", link: '/notes/front-end/react/state.md' },
              { text: "style", link: '/notes/front-end/react/style.md' },
              { text: "memo", link: '/notes/front-end/react/memo.md' },
              { text: "lifecircle", link: '/notes/front-end/react/lifecircle.md' },
              { text: "message", link: '/notes/front-end/react/message.md' },
              { text: "dom", link: '/notes/front-end/react/dom.md' },
              { text: "router", link: '/notes/front-end/react/router.md' },
              { text: "context", link: '/notes/front-end/react/context.md' },
              { text: "core", link: '/notes/front-end/react/core.md' },
              { text: "performance", link: '/notes/front-end/react/perfomance.md' },
            ]
          },
          {
            text: 'Nextjs', collapsed: true, items: [
              { text: "auth", link: '/notes/front-end/nextjs/auth.md' },
            ]
          }
        ]
      },
      {
        text: 'Client', collapsed: true, link: '', items: [
          {
            text: 'RN/expo', collapsed: true, link: '/notes/client/react-native/whatis', items: [
              { text: 'components', link: '/notes/client/react-native/components' },
              { text: 'router', link: '/notes/client/react-native/router' },
              { text: 'style', link: '/notes/client/react-native/style' },
            ]
          }
          ,
        ]
      },
      {
        text: 'DataBase', collapsed: true, items: [
          {
            text: 'ORM', collapsed: true, link: '/notes/database/orm/whatis', items: [
              { text: 'Drizzle', link: '/notes/database/orm/drizzle' },
              { text: 'Prisma', link: '/notes/database/orm/prisma' }
            ]
          }
        ]
      },
      {
        text: 'BackEnd', link: '', collapsed: true, items: []
      },
      {
        text: 'Scaffold', collapsed: true, items: [
          { text: 'wsl2', collapsed: true, link: '/notes/scaffold/wsl2' }
        ]
      },
      { text: 'Maintain', link: '' },
      {
        text: 'Lang',
        collapsed: true,
        items: [
          {
            text: 'Rust',
            collapsed: true,
            items: [{
              text: 'whatis', link: '/notes/lang/rust/01.md'
            }]
          },
          {
            text: 'js/ts',
            collapsed: true,
            items: [
              { text: 'whatis', link: '/notes/lang/js/01.md' }
            ]
          },
          {
            text: 'python',
            collapsed: true,
            items: [
              { text: 'whatis', link: '/notes/lang/python/01.md' }
            ]
          }
        ]
      },
    ]
  },
  { text: 'Project', link: '/project' },
  { text: 'Read', collapsed: true },
] as DefaultTheme.Sidebar
