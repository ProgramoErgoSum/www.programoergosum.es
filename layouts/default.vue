<template>
  <v-app>
    <v-toolbar
      v-scroll="onScroll"
      :color="isTransparent ? 'transparent' : '#666666'"
      app
      flat
    >
      <!--
      <v-toolbar-title>
        <nuxt-link to="/">
          <v-img
            :src="require('@/static/logo-programoergosum.png')"
            width="150"
          />
        </nuxt-link>
      </v-toolbar-title>
      -->
      <!--
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Login</v-btn>
      </v-toolbar-items>
      -->
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer app fixed absolute inset height="auto">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from '@/components/Layout/Footer'

export default {
  components: {
    Footer
  },
  data() {
    return {
      isTransparent: true
    }
  },
  methods: {
    onScroll() {
      this.isTransparent = window.pageYOffset < 200
    }
  }
}
</script>

<style lang="scss" scoped></style>
