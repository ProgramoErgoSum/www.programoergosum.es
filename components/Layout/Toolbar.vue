<template>
  <v-app-bar
    extended
    :extension-height="$vuetify.breakpoint.mdAndUp ? 48 : 0"
    elevate-on-scroll
    :hide-on-scroll="$vuetify.breakpoint.mdAndUp"
    color="white"
    fixed
    dense
    app
  >
    <v-toolbar-title class="hidden-md-and-up">
      <nuxt-link to="/">
        <Logo size="36" class="mt-2" />
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
          class="font-weight-light text-capitalize py-4"
          :class="item.to === '/' ? 'v-btn--active' : ''"
          text
          small
          nuxt
        >
          {{ item.title }}
        </v-btn>
        <v-btn
          v-else
          :key="index"
          :href="item.href"
          :disabled="item.disabled"
          rel="noopener noreferrer"
          target="_blank"
          class="font-weight-light text-capitalize py-4"
          small
          text
        >
          {{ item.title }}
          <v-icon class="pl-1" size="12">mdi-open-in-new</v-icon>
        </v-btn>
      </template>
    </div>

    <!--
    <Forkme />
    -->

    <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:extension>
      <v-toolbar-items class="extension">
        <v-toolbar-title class="px-3 mr-5">
          <nuxt-link to="/">
            <Logo class="mt-2" />
          </nuxt-link>
        </v-toolbar-title>
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
            rel="noopener noreferrer"
            target="_blank"
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
