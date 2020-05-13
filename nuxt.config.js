
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
      { rel: 'icon', type: 'image/x-icon', href: '/my-ico.ico' }
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
  ],
  styleResources:{
    less:[
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
      src:"@/plugins/element-ui",
      ssr:true
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy:true
  },
  proxy:{
    '/api': {
      target: 'http://mengyang.info',
      // target: 'http://localhost:8888',
      pathRewrite: {
        '^/api': '/'
      }
    },
    '/wp-content': {
      target: 'http://mengyang.info'
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
    extend (config, ctx) {
    }
  }
}
