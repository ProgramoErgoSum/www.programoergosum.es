<template>
  <v-app-bar
    extended
    :extension-height="$vuetify.breakpoint.mdAndUp ? 48 : 0"
    elevate-on-scroll
    :hide-on-scroll="$vuetify.breakpoint.mdAndUp"
    fixed
    app
  >
    <v-toolbar-title class="mr-10">
      <nuxt-link to="/">
        <Logo height="40" class="mt-2" />
      </nuxt-link>
    </v-toolbar-title>

    <v-spacer />

    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />

    <div class="navigation hidden-sm-and-down">
      <template v-for="(item, index) in navigation">
        <v-btn
          v-if="item.to"
          :key="index"
          :to="item.to"
          :disabled="item.disabled"
          class="font-weight-medium mr-2"
          :class="item.to === '/asociacion' ? 'v-btn--active' : ''"
          text
          nuxt
        >
          {{ item.title }}
        </v-btn>
        <v-btn
          v-else
          :key="index"
          :href="item.href"
          :disabled="item.disabled"
          class="font-weight-medium mr-2"
          text
        >
          {{ item.title }}
        </v-btn>
      </template>
    </div>

    <!--
    <Forkme />
    -->

    <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:extension>
      <v-toolbar-items class="extension">
        <template v-for="(item, index) in subNavigation">
          <v-btn
            v-if="item.to"
            :key="index"
            :to="item.to"
            :disabled="item.disabled"
            class="font-weight-medium text-capitalize mr-2"
            text
            tile
            nuxt
          >
            {{ item.title }}
          </v-btn>
          <v-btn
            v-else
            :key="index"
            :href="item.href"
            :disabled="item.disabled"
            class="font-weight-medium text-capitalize mr-2"
            text
            title
          >
            {{ item.title }}
          </v-btn>
        </template>
      </v-toolbar-items>
    </template>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import Logo from '@/components/Layout/Logo'
// import Forkme from '@/components/Layout/Forkme'

export default {
  name: 'Toolbar',
  components: {
    Logo
    // Forkme
  },
  computed: {
    ...mapGetters(['navigation', 'subNavigation'])
  },
  methods: {
    ...mapMutations(['toggleDrawer'])
  }
}
</script>

<style lang="scss" scoped></style>
