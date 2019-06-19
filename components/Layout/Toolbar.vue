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
      <v-btn
        v-for="item in navigation"
        :key="item.link"
        :to="item.link"
        flat
        nuxt
      >
        {{ item.title }}
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>
import { mapMutations } from 'vuex'

import Logo from '@/components/Layout/Logo'

export default {
  name: 'Toolbar',
  components: {
    Logo
  },
  props: {
    navigation: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isTransparent: true
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
