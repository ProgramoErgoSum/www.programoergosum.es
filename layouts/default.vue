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
        }
        /*
        {
          title: 'Blog',
          icon: 'description',
          link: '/blog'
        }
        */
      ]
    }
  },
  head() {
    const title = 'Asociación Programo Ergo Sum'
    const description =
      'Proyectos educativos abiertos para aprender programación y robótica con herramientas libres.'
    const keywords = [
      'asociación',
      'educación',
      'informática',
      'programación',
      'robótica'
    ].toString()
    const image = `${process.env.canonical}/preview.png`
    const canonical = `${process.env.canonical}${this.$route.path}`

    return {
      title: title,
      meta: [
        // Global
        { rel: 'canonical', href: canonical },
        { hid: 'description', name: 'description', content: description },
        { hid: 'keywords', name: 'keywords', content: keywords },
        // Facebook
        { property: 'og:url', content: canonical },
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
