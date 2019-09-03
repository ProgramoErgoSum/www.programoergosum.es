<template>
  <v-card :href="card.link" flat target="_blank" rel="noopener noreferrer">
    <v-img
      :src="`images/merchandising/${card.img}`"
      :lazy-src="`/lazy.png`"
      :alt="card.title"
      height="350"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5" />
        </v-row>
      </template>
    </v-img>
    <v-card-title>
      {{ card.title }}
    </v-card-title>
  </v-card>
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

<style lang="scss" scoped></style>
