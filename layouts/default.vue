<template>
  <v-app>
    <!--<Systembar />-->
    <Navigation />
    <Toolbar />
    <v-content>
      <nuxt class="nuxt-content" />
    </v-content>
    <Privacy />
    <ToTop />
    <Footer />
  </v-app>
</template>

<script>
// import Systembar from '@/components/Layout/Systembar'
import Navigation from '@/components/Layout/Navigation'
import Toolbar from '@/components/Layout/Toolbar'
import Privacy from '@/components/Layout/Privacy'
import ToTop from '@/components/Layout/ToTop'
import Footer from '@/components/Layout/Footer'

export default {
  components: {
    // Systembar,
    Navigation,
    Toolbar,
    Privacy,
    ToTop,
    Footer
  },
  head() {
    const canonical = `${process.env.www}${this.$route.path}`
    return {
      link: [
        // Global
        { rel: 'canonical', href: canonical }
        // { hid: 'description', name: 'description', content: description }
        // { hid: 'keywords', name: 'keywords', content: tags }
      ],
      meta: [
        // Open Graph https://ogp.me/
        { property: 'og:locale', content: 'es' },
        { property: 'og:site_name', content: 'Asociación Programo Ergo Sum' },
        { property: 'og:url', content: canonical },
        { hid: 'o:ty', property: 'og:type', content: 'website' },
        // { hid: 'o:t', property: 'og:title', content: title }
        // { hid: 'o:d', property: 'og:description', content: description }
        // { hid: 'o:i', property: 'og:image', content: image }

        // Twitter
        { name: 'twitter:site', content: '@ProgramoErgoSum' },
        { name: 'twitter:creator', content: '@ProgramoErgoSum' },
        { name: 'twitter:card', content: 'summary_large_image' }
        // { hid: 't:t', name: 'twitter:title', content: title }
        // { hid: 't:d', name: 'twitter:description', content: description }
        // { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
