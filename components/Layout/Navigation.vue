<template>
  <v-navigation-drawer v-model="drawer" fixed app>
    <!--
    <div class="logo">
      <nuxt-link to="/">
        <Logo class="pt-2" />
      </nuxt-link>
    </div>
    -->
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>menu</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Menú</v-list-tile-title>
      </v-list-tile>
    </v-list>
    <v-divider />
    <v-list>
      <template v-for="item in navigation">
        <v-list-tile :key="item.link" :to="item.link">
          <v-list-tile-action>
            <v-icon v-text="item.icon" />
          </v-list-tile-action>
          <v-list-tile-title v-text="item.title" />
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations } from 'vuex'

// import Logo from '@/components/Layout/Logo'

export default {
  name: 'Navigation',
  /*
  components: {
    Logo
  },
  */
  props: {
    navigation: {
      type: Array,
      required: true
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

<style lang="scss" scoped>
.logo {
  padding: 25px 5px;
  text-align: center;
  background: #f5f5f5;
}
</style>
