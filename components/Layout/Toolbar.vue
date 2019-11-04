<template>
  <v-app-bar :hide-on-scroll="false" elevate-on-scroll fixed app>
    <v-toolbar-title>
      <nuxt-link to="/" aria-label="Inicio">
        <Logo class="mt-2" />
      </nuxt-link>
    </v-toolbar-title>

    <v-spacer />

    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />

    <div class="navigation hidden-sm-and-down">
      <template v-for="(item, index) in navigation">
        <v-btn
          :key="index"
          :to="item.to"
          :disabled="item.disabled"
          :class="item.class"
          class="font-weight-regular text-none mr-2"
          text
          tile
          nuxt
        >
          <v-icon class="pr-2" size="20" color="grey">
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-btn>
      </template>
    </div>

    <v-progress-linear
      v-scroll="onScroll"
      :value="progress"
      height="3"
      background-color="transparent"
      absolute
      bottom
    />
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
    ...mapGetters(['navigation'])
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
