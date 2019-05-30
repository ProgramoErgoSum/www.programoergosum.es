<template>
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
    <v-spacer></v-spacer>
    <!--
    <v-toolbar-items>
      <v-btn flat tabs to="#asociacion" nuxt>
        Asociación
      </v-btn>
      <v-btn flat to="#proyectos" nuxt>
        Proyectos
      </v-btn>
      <v-btn flat to="#colabora" nuxt>
        Colabora
      </v-btn>
      <v-btn flat to="#contacta" nuxt>
        Contacta
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
