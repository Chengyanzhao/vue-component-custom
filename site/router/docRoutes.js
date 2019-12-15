export default [
  {
    path: 'docs/customize-theme',
    component: () => import('../docs/customize-theme.en-US.md'),
  },
  {
    path: 'docs/customize-theme-cn',
    component: () => import('../docs/customize-theme.zh-CN.md'),
  },
  {
    path: 'docs/getting-started',
    component: () => import('../docs/getting-started.en-US.md'),
  },
  {
    path: 'docs/getting-started-cn',
    component: () => import('../docs/getting-started.zh-CN.md'),
  },
  {
    path: 'docs/i18n',
    component: () => import('../docs/i18n.en-US.md'),
  },
  {
    path: 'docs/i18n-cn',
    component: () => import('../docs/i18n.zh-CN.md'),
  },
  {
    path: 'docs/introduce',
    component: () => import('../docs/introduce.en-US.md'),
  },
  {
    path: 'docs/introduce-cn',
    component: () => import('../docs/introduce.zh-CN.md'),
  },
  {
    path: 'docs/use-with-vue-cli',
    component: () => import('../docs/use-with-vue-cli.en-US.md'),
  },
  {
    path: 'docs/use-with-vue-cli-cn',
    component: () => import('../docs/use-with-vue-cli.zh-CN.md'),
  },
  {
    path: 'docs/faq',
    component: () => import('../docs/faq.en-US.md'),
  },
  {
    path: 'docs/faq-cn',
    component: () => import('../docs/faq.zh-CN.md'),
  },
  {
    path: 'docs/download',
    component: () => import('../docs/download.en-US.md'),
  },
  {
    path: 'docs/download-cn',
    component: () => import('../docs/download.zh-CN.md'),
  },
  {
    path: 'docs/sponsor',
    component: () => import('../docs/sponsor.en-US.md'),
  },
  {
    path: 'docs/sponsor-cn',
    component: () => import('../docs/sponsor.zh-CN.md'),
  },
  {
    path: 'docs/changelog',
    component: () => import('../docs/CHANGELOG.en-US.md'),
  },
  {
    path: 'docs/changelog-cn',
    component: () => import('../docs/CHANGELOG.zh-CN.md'),
  },
  { path: '', redirect: '/docs/introduce/' },
]
