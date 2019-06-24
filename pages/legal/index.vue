<template>
  <div class="legal">
    <v-container>
      <v-layout>
        <v-flex>
          <!--
          <Content :readme="readme" />
          -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  head() {
    const title = 'Información'

    return {
      title: title,
      meta: [{ name: 'robots', content: 'nofollow' }]
    }
  }
}
</script>

<style lang="scss" scoped></style>
