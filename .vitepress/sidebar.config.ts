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
      { text: 'BackEnd', link: '' },
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
            items: [{
              text: '01', link: '/notes/lang/js/01.md'
            }]
          }
        ]
      },
    ]
  },
  {
    text: 'Project', link: '/project', items: [
      { text: '临翔慧民居', link: '/project/lxhmj.md' },
    ]
  }, {
    text: 'Read', collapsed: true, items: [
      { text: '小王子', link: '' },
    ]
  },
] as DefaultTheme.Sidebar
