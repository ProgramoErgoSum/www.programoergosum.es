<template>
  <v-app>
    <v-content>
      <nuxt class="nuxt-content" />
    </v-content>
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
