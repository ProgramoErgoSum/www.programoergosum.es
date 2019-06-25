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
        /*
        {
          title: 'Colabora',
          icon: 'group',
          link: '/colabora'
        },
        */
        {
          title: 'Blog',
          icon: 'description',
          link: '/blog'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
