<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <!--
          <Content :readme="readme" />
          -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  head() {
    const title = 'Información'

    return {
      title: title,
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
