<template>
  <v-app-bar
    extended
    :extension-height="$vuetify.breakpoint.mdAndUp ? 48 : 0"
    elevate-on-scroll
    :hide-on-scroll="$vuetify.breakpoint.mdAndUp"
    fixed
    dense
    app
  >
    <v-switch
      v-model="$vuetify.theme.dark"
      class="mt-6 hidden-sm-and-down"
      label="Cambia de tema"
      color="primary"
    />

    <v-toolbar-title class="hidden-md-and-up">
      <nuxt-link to="/" aria-label="Inicio">
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
          class="text-capitalize py-4"
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
          class="text-capitalize py-4"
          small
          text
        >
          {{ item.title }}
          <v-icon class="pl-1" size="12">mdi-open-in-new</v-icon>
        </v-btn>
      </template>
    </div>

    <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:extension>
      <v-toolbar-items class="extension">
        <v-toolbar-title class="px-3 mr-5">
          <nuxt-link to="/" aria-label="Inicio">
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
      <v-progress-linear
        v-scroll="onScroll"
        :value="progress"
        height="3"
        background-color="transparent"
        absolute
        bottom
      />
    </template>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import Logo from '@/components/Layout/Logo'

export default {
  name: 'Toolbar',
  components: {
    Logo
  },
  data() {
    return {
      progress: 0
    }
  },
  computed: {
    ...mapGetters(['navigation', 'subNavigation'])
  },
  methods: {
    ...mapMutations(['toggleDrawer']),
    onScroll() {
      this.progress = Math.round(
        (window.scrollY /
          (document.body.scrollHeight -
            document.documentElement.clientHeight)) *
          100
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
