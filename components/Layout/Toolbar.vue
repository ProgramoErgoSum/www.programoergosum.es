<template>
  <v-toolbar
    v-scroll="onScroll"
    :color="isTransparent ? 'transparent' : '#ffffff'"
    :flat="isTransparent"
    fixed
    app
  >
    <v-toolbar-title>
      <nuxt-link to="/">
        <Logo class="pt-2" />
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <div class="hidden-sm-and-down">
      <template v-for="(item, index) in navigation">
        <v-btn v-if="item.to" :key="index" :to="item.to" flat nuxt>
          {{ item.title }}
        </v-btn>
        <v-btn v-else :key="index" :href="item.href" flat nuxt>
          {{ item.title }}
        </v-btn>
      </template>
    </div>
    <Forkme />
  </v-toolbar>
</template>

<script>
import { mapMutations } from 'vuex'

import Logo from '@/components/Layout/Logo'
import Forkme from '@/components/Layout/Forkme'

export default {
  name: 'Toolbar',
  components: {
    Logo,
    Forkme
  },
  data() {
    return {
      isTransparent: true,
      navigation: [
        {
          title: 'Asociación',
          to: '/asociacion'
        },
        {
          title: 'Proyectos',
          to: '/proyectos'
        },
        /*
        {
          title: 'Tutoriales',
          href: 'https://www.programoergosum.com/tutoriales'
        },
        */
        {
          title: 'Actividades',
          to: '/actividades'
        },
        {
          title: 'Colabora',
          to: '/colabora'
        },
        {
          title: 'Centros',
          to: '/centros'
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['toggleDrawer']),
    onScroll() {
      this.isTransparent = window.pageYOffset < 40
    }
  }
}
</script>

<style lang="scss" scoped></style>
