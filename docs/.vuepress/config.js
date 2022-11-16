module.exports = {
  title: '组件库 DossenUI',
  description: '基于element ui二次封装组件库',
  themeConfig: {
    sidebar: [
      {
        title: '示例 DEMO',
        path: '/demo/pagination',
        collapsable: false,
        children: [
          '../demo/pagination/',
          '../demo/dialog/',
          '../demo/input-password/',
          '../demo/backtop/',
          '../demo/global-loading/',
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}
