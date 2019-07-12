import path from 'path'
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

import activities from './static/actividades/list.json'
import blogs from './static/blog/list.json'

const www =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.programoergosum.es'
const cdn =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.programoergosum.es'

export default {
  mode: 'universal',

  router: {
    base: '/'
  },
  env: {
    www: www,
    cdn: cdn
  },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      {
        name: 'google-site-verification',
        content: 'FT0Qc7McHBOZwLy1lVLXXNONbp3A_o4MX1gTApbyX6Y'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        integrity:
          'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        async: true
      },
      {
        innerHTML:
          '(adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-6757981017018187", enable_page_level_ads: true });',
        type: 'text/javascript'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#d25f34' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl', '~/assets/style/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/vuetify.js' },
    { src: '~plugins/components.js' },
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'nuxt-leaflet'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
   ** Sitemap module configuration
   */
  sitemap: {
    hostname: www,
    gzip: true,
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date()
    },
    exclude: ['/404', '/legal', '/gracias'],
    routes() {
      const a = activities.map(item => {
        return {
          url: `/actividades/${item.alias}`,
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: new Date()
        }
      })
      const b = blogs.map(item => {
        return {
          url: `/blog/${item.alias}`,
          changefreq: 'monthly',
          priority: 0.3,
          lastmod: item.date.mdate
        }
      })
      return a.concat(b)
    }
  },

  /*
   ** Generate
   */
  generate: {
    routes: async function() {
      const p = ['/', '/404', '/legal/coc', '/legal/cookies']
      const a = await activities.map(item => {
        return `/actividades/${item.alias}`
      })
      const b = await blogs.map(item => {
        return `/blog/${item.alias}`
      })
      return Promise.all([p, a, b]).then(v => {
        return [...v[0], ...v[1], ...v[2]]
      })
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'static'),
        options: {
          vue: {
            root: 'dynamicMarkdown'
          }
        }
      })
    }
  }
}
