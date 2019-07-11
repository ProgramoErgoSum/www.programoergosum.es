<template>
  <div class="card ma-3">
    <v-card :href="card.link" target="_blank">
      <v-img
        :src="`merchandising/images/${card.img}`"
        :lazy-src="`/lazy.png`"
        :alt="card.title"
        height="250"
      >
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5" />
          </v-layout>
        </template>
      </v-img>
      <v-card-title primary-title>
        <h3 class="mb-2">
          {{ card.title }}
        </h3>
        <p class="mt-2 mb-0">
          {{ card.description }}
        </p>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * card.name
     * card.image
     * card.description
     * card.link
     */
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  .description {
    max-width: 200px;
    margin: 0 auto;
    font-size: 14px;
  }
}
</style>
