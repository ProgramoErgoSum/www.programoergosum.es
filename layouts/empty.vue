<template>
  <v-app>
    <v-main>
      <nuxt class="nuxt-content" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, noarchive, nofollow'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
