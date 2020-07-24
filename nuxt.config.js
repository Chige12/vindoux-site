require('dotenv').config()
const { APIKEY } = process.env

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Vindoux 公式サイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ユニット『Vin doux』がお届けする、雑談ラヂオ番組公式サイト。毎週日曜日、午後9時30分にYouTubeにて配信予定。今宵も私たちにほろ酔いなさいな🍷 本ラヂオへのお便りはTwitterにて #甘口便り を付けて呟いて下さいね。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Vindoux 公式サイト'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://vindoux.netlify.app'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Vindoux 公式サイト'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'ユニット『Vin doux』がお届けする、雑談ラヂオ番組公式サイト。毎週日曜日、午後9時30分にYouTubeにて配信予定。今宵も私たちにほろ酔いなさいな🍷 本ラヂオへのお便りはTwitterにて #甘口便り を付けて呟いて下さいね。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://vindoux.netlify.app/OGP.png'
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@iburigackoTOAK' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['ress'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/vue-youtube',
    '@/plugins/mixin-common-methods',
    { src :'~/plugins/vue-prlx', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-114375722-5'
    }]
  ],
  stylelint: {
    fix: true,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/svg',
    '@nuxtjs/axios',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/zindex.scss',
      '~/assets/scss/mixins.scss',
    ],
  },
  webfontloader: {
    // add Google Fonts as "custom" | workaround required
    custom: {
      families: ['Sawarabi Mincho'],
      urls: [
        'https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap',
      ],
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** You can extend webpack config here
    */
    postcss: {
      preset: {
        autoprefixer: { grid: 'autoplace' }
      }
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
    },
  },
  env: {
    APIKEY
  }
}
