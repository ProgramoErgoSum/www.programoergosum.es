<template>
  <div>
    <v-navigation-drawer v-model="drawer" color="secondary" dark app>
      <v-list>
        <template v-for="item in navigation">
          <v-list-tile :key="item.link" :to="item.link">
            <v-list-tile-action>
              <v-icon v-text="item.icon" />
            </v-list-tile-action>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile>
          <v-list-tile
            v-for="subitem in item.items"
            :key="subitem.title"
            :href="subitem.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-list-tile-action>
              <v-icon />
            </v-list-tile-action>
            <v-list-tile-title v-text="subitem.title" />
          </v-list-tile>
          <v-divider :key="item.title" />
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="primary" dark flat fixed app>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" />
      <v-toolbar-title>
        <nuxt-link to="/">
          <v-img
            :src="require('@/static/logo-programoergosum.png')"
            class="mr-5"
            contain
            width="150"
          />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in navigation"
          :key="item.link"
          :to="item.link"
          flat
          nuxt
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      isTransparent: true,
      navigation: [
        {
          title: 'Asociación',
          icon: 'dashboard',
          link: '/asociacion'
        },
        {
          title: 'Proyectos',
          icon: 'dashboard',
          link: '/proyectos',
          items: [
            {
              title: 'Programo Ergo Sum',
              link: 'https://www.programoergosum.com'
            },
            {
              title: 'Aprende Programando',
              link: 'https://www.aprendeprogramando.es'
            },
            {
              title: 'Wiki TIC',
              link: 'https://wikitic.github.io'
            }
          ]
        }
        /*
        ,
        {
          title: 'Actividades',
          icon: 'dashboard',
          link: '/actividades'
        },
        {
          title: 'Contacta',
          icon: 'dashboard',
          link: '/contacta'
        }
        */
      ]
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    }
  },
  methods: {
    ...mapMutations(['setDrawer']),
    ...mapMutations(['toggleDrawer'])
  }
  /*,
  methods: {
    onScroll() {
      this.isTransparent = window.pageYOffset < 200
    }
  }
  */
}
</script>

<style lang="scss" scoped></style>
