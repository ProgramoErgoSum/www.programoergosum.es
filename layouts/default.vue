<template>
  <v-app>
    <Header />
    <v-content class="content">
      <nuxt />
      <ToTop />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Layout/Header'
import ToTop from '@/components/Layout/ToTop'
import Footer from '@/components/Layout/Footer'

export default {
  components: {
    Header,
    ToTop,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 20px;
}
</style>
