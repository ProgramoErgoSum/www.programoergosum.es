<template>
  <v-toolbar
    v-scroll="onScroll"
    :color="isTransparent ? 'transparent' : '#2d3339'"
    flat
    fixed
    dense
    app
  >
    <!--
    <v-toolbar-title v-show="!isTransparent">
      <nuxt-link to="/">
        <v-img
          :src="require('@/static/logo-programoergosum.png')"
          width="150"
        />
      </nuxt-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-for="item in navigation"
        :key="item.link"
        :to="item.link"
        color="primary"
        flat
        nuxt
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    -->
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isTransparent: true,
      navigation: [
        /*
        {
          title: 'Asociación',
          link: '/asociacion'
        },
        */
        {
          title: 'Proyectos',
          link: '/proyectos'
        }
      ]
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
