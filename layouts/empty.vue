<template>
  <v-app>
    <Navigation :navigation="navigation" />
    <Toolbar :navigation="navigation" />
    <v-content>
      <nuxt class="nuxt-content" />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Layout/Navigation'
import Toolbar from '@/components/Layout/Toolbar'

export default {
  components: {
    Navigation,
    Toolbar
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
        ,
        {
          title: 'Centros',
          icon: 'school',
          link: '/centros'
        }
        */
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
