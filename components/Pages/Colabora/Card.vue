<template>
  <div class="ma-3 text-center">
    <v-avatar size="110">
      <VImageLazy
        :src="card.image"
        :title="card.name"
        lazy-src="/lazy-user.png"
      />
    </v-avatar>
    <p class="my-3">
      {{ card.name }}
    </p>
    <p class="my-3 font-weight-light subtitle-2">
      {{ card.description }}
    </p>
    <v-btn
      v-if="card.social.url"
      :href="card.social.url"
      icon
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Url"
    >
      <v-icon size="18" color="#000">mdi-link</v-icon>
    </v-btn>
    <v-btn
      v-if="card.social.twitter"
      :href="card.social.twitter"
      icon
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <v-icon size="18" color="#1da1f2">mdi-twitter</v-icon>
    </v-btn>
    <v-btn
      v-if="card.social.github"
      :href="card.social.github"
      icon
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
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
.v-card {
  max-width: 220px;
  margin: 0 auto;
}
</style>
