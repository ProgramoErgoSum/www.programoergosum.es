<template>
  <div class="card ma-3">
    <v-avatar size="110">
      <VImageLazy
        :src="card.image"
        lazy-src="/lazy-user.png"
        :title="card.name"
      />
    </v-avatar>
    <p class="my-3">
      {{ card.name }}
    </p>
    <p class="my-3 font-weight-light description">
      {{ card.description }}
    </p>
    <v-btn
      v-if="card.social.url"
      icon
      :href="card.social.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon size="18" color="#000">mdi-link</v-icon>
    </v-btn>
    <v-btn
      v-if="card.social.twitter"
      icon
      :href="card.social.twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon size="18" color="#1da1f2">mdi-twitter</v-icon>
    </v-btn>
    <v-btn
      v-if="card.social.github"
      icon
      :href="card.social.github"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon size="18" color="#333">mdi-github-circle</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * card.name
     * card.image
     * card.description
     * card.social.url
     * card.social.twitter
     * card.social.github
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
  text-align: center;
  .description {
    max-width: 220px;
    margin: 0 auto;
    font-size: 14px;
  }
}
</style>
