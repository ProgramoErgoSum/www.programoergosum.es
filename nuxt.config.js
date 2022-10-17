import path from 'path'

import apiActividades from './api/v1/actividades.json'
import apiBlogs from './api/v1/blogs.json'
import apiFormaciones from './api/v1/formaciones.json'
import apiTags from './api/v1/tags.json'
import apiTutoriales from './api/v1/tutoriales.json'

const www =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://www.programoergosum.es'
const cdn =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://www.programoergosum.es'

export default {
  // mode: 'universal',
  target: 'static',

  router: {
    base: '/'
  },
  env: {
    www,
    cdn
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
      { hreflang: 'es' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      {
        name: 'google-site-verification',
        content: 'FT0Qc7McHBOZwLy1lVLXXNONbp3A_o4MX1gTApbyX6Y'
      }
    ],
    link: [
      { hreflang: 'es' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#eb8059' },

  /*
   ** Customize messages
   */
  messages: {
    error_404: 'Página no encontrada'
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/style/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '@/plugins/gdpr.client.js', mode: 'client' },
    { src: '@/plugins/global.js' },
    { src: '@/plugins/template.js' }
  ],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    // treeShake: true,
    // customVariables: ['@/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#ae4119',
          secondary: '#101a24'
        },
        dark: {
          primary: '#ae4119',
          secondary: '#222222'
        }
      }
    }
  },
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
      priority: 0.5,
      lastmod: new Date()
    },
    exclude: ['/404', '/legal', '/gracias', '/tutoriales/tags'],
    routes() {
      const pagesFormaciones = apiFormaciones.map(el => {
        return {
          url: `/formaciones/${el.alias}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: el.date.mdate
        }
      })
      const pagesTags = apiTags.map(el => {
        return {
          url: `/tutoriales/tags/${el.alias}`,
          changefreq: 'weekly',
          priority: 0.5,
          lastmod: new Date()
        }
      })
      const pagesTutoriales = apiTutoriales.map(el => {
        return {
          url: `/tutoriales/${el.alias}`,
          changefreq: 'weekly',
          priority: 1,
          lastmod: el.date.mdate
        }
      })
      const pagesActividades = apiActividades.map(el => {
        return {
          url: `/actividades/${el.alias}`,
          changefreq: 'monthly',
          priority: 0.3,
          lastmod: el.date.mdate
        }
      })
      const pagesBlogs = apiBlogs.map(el => {
        return {
          url: `/blog/${el.alias}`,
          changefreq: 'monthly',
          priority: 0.1,
          lastmod: el.date.mdate
        }
      })

      return pagesFormaciones
        .concat(pagesTags)
        .concat(pagesTutoriales)
        .concat(pagesActividades)
        .concat(pagesBlogs)
    }
  },

  /*
   ** Generate
   ** See https://nuxtjs.org/api/configuration-generate
   */
  generate: {
    crawler: false, // Nuxt >= v2.13
    concurrency: 10,
    async routes() {
      const pagesDefault = ['/', '/404', '/legal/coc', '/legal/cookies']
      const pagesActividades = await apiActividades.map(el => {
        return `/actividades/${el.alias}`
      })
      const pagesBlogs = await apiBlogs.map(el => {
        return `/blog/${el.alias}`
      })
      const pagesFormaciones = await apiFormaciones.map(el => {
        return `/formaciones/${el.alias}`
      })
      const pagesTags = await apiTags.map(el => {
        return `/tutoriales/tags/${el.alias}`
      })
      const pagesTutoriales = await apiTutoriales.map(el => {
        return `/tutoriales/${el.alias}`
      })

      return Promise.all([
        pagesDefault,
        pagesActividades,
        pagesBlogs,
        pagesFormaciones,
        pagesTags,
        pagesTutoriales
      ]).then(v => {
        return [...v[0], ...v[1], ...v[2], ...v[3], ...v[4], ...v[5]]
      })
    }
  },

  /*
   ** Build configuration
   */
  build: {
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
        // Doc: https://www.npmjs.com/package/frontmatter-markdown-loader
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'doc'),
        options: {
          mode: [
            // 'meta',
            // 'html',
            // 'vue-component',
            // 'vue-render-functions',
            'body'
          ],
          vue: {
            root: 'DynamicMarkdown'
          }
        }
      })
    }
  }
}
