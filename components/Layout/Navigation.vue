<template>
  <v-navigation-drawer v-model="drawer" fixed app>
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>menu</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Menú</v-list-tile-title>
      </v-list-tile>
    </v-list>
    <v-divider />
    <v-list subheader>
      <template v-for="(item, index) in navigation">
        <v-list-tile v-if="item.to" :key="index" :to="item.to">
          <v-list-tile-action>
            <v-icon v-text="item.icon" />
          </v-list-tile-action>
          <v-list-tile-title v-text="item.title" />
        </v-list-tile>
        <v-list-tile v-else :key="index" :href="item.href">
          <v-list-tile-action>
            <v-icon v-text="item.icon" />
          </v-list-tile-action>
          <v-list-tile-title v-text="item.title" />
        </v-list-tile>

        <template v-for="(subitem, subindex) in item.items">
          <v-list-tile v-if="subitem.to" :key="subindex" :to="subitem.to">
            <v-list-tile-action>
              <v-icon />
            </v-list-tile-action>
            <v-list-tile-title
              class="font-weight-light"
              v-text="subitem.title"
            />
          </v-list-tile>
          <v-list-tile v-else :key="subindex" :href="subitem.href">
            <v-list-tile-action>
              <v-icon />
            </v-list-tile-action>
            <v-list-tile-title
              class="font-weight-light"
              v-text="subitem.title"
            />
          </v-list-tile>
        </template>
        <v-divider :key="index" />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Navigation',
  data() {
    return {
      navigation: [
        {
          title: 'Asociación',
          icon: 'domain',
          to: '/asociacion'
        },
        {
          title: 'Proyectos',
          icon: 'code',
          to: '/proyectos',
          items: [
            {
              title: 'Programo Ergo Sum',
              icon: '',
              href: 'https://www.programoergosum.com'
            },
            {
              title: 'Aprende Programando',
              icon: '',
              href: 'https://www.aprendeprogramando.es'
            },
            /*
            {
              title: 'Wiki TIC',
              icon: '',
              href: 'https://wikitic.github.io'
            },
            */
            {
              title: 'El Cable Amarillo',
              icon: '',
              href: 'https://www.elcableamarillo.cc'
            }
          ]
        },
        /*
        {
          title: 'Tutoriales',
          icon: 'code',
          href: 'https://www.programoergosum.com/tutoriales'
        },
        */
        {
          title: 'Actividades',
          icon: 'streetview',
          to: '/actividades'
        },
        {
          title: 'Colabora',
          icon: 'group',
          to: '/colabora'
        },
        {
          title: 'Centros',
          icon: 'school',
          to: '/centros'
        },
        {
          title: 'Blog',
          icon: 'folder_open',
          to: '/blog'
        }
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
    ...mapMutations(['setDrawer'])
  }
}
</script>

<style lang="scss" scoped></style>
