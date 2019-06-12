<template>
  <v-app class="home">
    <Header />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Layout/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped></style>
