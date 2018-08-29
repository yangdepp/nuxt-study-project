

module.exports = {
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'iview/dist/styles/iview.css',
  ],

  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/iview'
  ],
  head: {
    titleTemplate: '摇滚西南',
    meta: [
      { charset: 'utf-8' },
      { name: '摇滚西南', content: '摇滚;重庆；西南；音乐节；唱片；艺术' },
      { hid: 'description', name: 'description', content: '西南摇滚' }
    ]
  }
}