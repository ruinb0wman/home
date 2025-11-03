import type { DefaultTheme } from "vitepress"

export default [
  {
    text: 'Blog',
    link: '/blog',
    items: [
      {
        collapsed: true,
        text: '2025', items: [
          {
            text: '06', collapsed: true, items: [
              { text: '05-skill map', link: '/blog/2025-06/05.md' }
            ]
          }
        ]
      },
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
            ]
          }
        ]
      },
      { text: 'Client', link: '' },
      {
        text: 'BackEnd', link: '', collapsed: true, items: [
          {
            text: 'Prisma',
            collapsed: true,
            items: [
              { text: 'what is', link: '/notes/back-end/prisma/01-whatis.md' }
            ]
          }
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
              text: '01', link: '/notes/lang/rust/01.md'
            }]
          },
          {
            text: 'js/ts',
            collapsed: true,
            items: [
              { text: '01', link: '/notes/lang/js/01.md' }
            ]
          },
          {
            text: 'python',
            collapsed: true,
            items: [
              { text: '01', link: '/notes/lang/python/01.md' }
            ]
          }
        ]
      },
    ]
  },
  { text: 'Project', link: '/project' },
  { text: 'Read', collapsed: true },
] as DefaultTheme.Sidebar
