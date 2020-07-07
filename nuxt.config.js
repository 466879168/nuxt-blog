
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/my-ico.ico' },
      { hid: 'prism', rel: 'stylesheet', href: '/css/prism.css' }
    ],
    script: [
      { src: '/js/prism.js' },
      { src: '/js/iconfont.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    /**
     * 配置全局 css
     */
    'element-ui/lib/theme-chalk/index.css',
    '@assets/styles/global.less',
    '@assets/styles/iconfont.css'
  ],
  styleResources: {
    less: [
      './assets/styles/variable.less'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/axios',
      ssr: true
    },
    {
      src: "@/plugins/element-ui",
      ssr: true
    },
    {
      src: "@/plugins/loading",
      ssr: false
    },
    {
      src: "@/plugins/libs",
      ssr: true
    },
    {
      src: "@/assets/js/iconfont.js",
      ssr: false
    },
    {
      src: '~/plugins/message',
      ssr: false
    },
  ],
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://119.45.37.203',
      // target: 'http://localhost:8888',
      pathRewrite: {
        '^/api': '/'
      }
    },
    '/wp-content': {
      target: 'http://119.45.37.203'
      // target: 'http://localhost:8888'
    }
  },
  env: {
    baseUrl: '/api'
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
