module.exports = {
  name: 'lsp-vue',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/lsp-vue/',
    },
  },
  site: {
    title: 'lsp-vue',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'tree',
            title: 'Tree 树',
          },
          {
            path: 'editable',
            title: 'Editable 可编辑元素',
          },
        ],
      },
    ],
  },
};
