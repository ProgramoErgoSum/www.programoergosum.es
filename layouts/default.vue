<template>
  <v-app>
    <Navigation :navigation="navigation" />
    <Toolbar :navigation="navigation" />
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
  data() {
    return {
      navigation: [
        {
          title: 'Asociación',
          icon: 'domain',
          link: '/asociacion'
        },
        {
          title: 'Proyectos',
          icon: 'code',
          link: '/proyectos'
        },
        {
          title: 'Actividades',
          icon: 'streetview',
          link: '/actividades'
        },
        {
          title: 'Colabora',
          icon: 'group',
          link: '/colabora'
        },
        {
          title: 'Centros',
          icon: 'school',
          link: '/centros'
        }
      ]
    }
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
