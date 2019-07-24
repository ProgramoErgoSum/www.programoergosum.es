<template>
  <v-app>
    <Navigation />
    <Toolbar />
    <v-content>
      <nuxt class="nuxt-content" />
      <ToTop />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from '@/components/Layout/Navigation'
import Toolbar from '@/components/Layout/Toolbar'
import ToTop from '@/components/Layout/ToTop'
import Footer from '@/components/Layout/Footer'

export default {
  components: {
    Navigation,
    Toolbar,
    ToTop,
    Footer
  },
  head() {
    const canonical = `${process.env.www}${this.$route.path}`
    return {
      meta: [
        // Global
        { rel: 'canonical', href: canonical },
        // Facebook
        { property: 'og:site_name', content: 'ProgramoErgoSum' },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: canonical },
        // Twitter
        { name: 'twitter:site', content: '@ProgramoErgoSum' },
        { name: 'twitter:creator', content: '@ProgramoErgoSum' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
