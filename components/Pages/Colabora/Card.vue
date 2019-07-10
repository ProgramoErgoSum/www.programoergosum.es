<template>
  <div id="card" class="ma-3">
    <v-avatar size="110">
      <v-img :src="card.image" :lazy-src="`/lazy-user.png`">
        <v-layout
          slot="placeholder"
          fill-height
          align-center
          justify-center
          ma-0
        >
          <v-progress-circular indeterminate color="grey lighten-5" />
        </v-layout>
      </v-img>
    </v-avatar>
    <p class="mt-3 mb-0">
      {{ card.name }}
    </p>
    <p class="mt-2 mb-0 font-weight-thin description">
      {{ card.description }}
    </p>
    <v-btn
      v-if="card.social.url"
      class="mt-0 mx-0"
      icon
      :href="card.social.url"
      target="_blank"
    >
      <i class="fas fa-link" style="color:#000"></i>
    </v-btn>
    <v-btn
      v-if="card.social.twitter"
      class="mt-0 mx-0"
      icon
      :href="card.social.twitter"
      target="_blank"
    >
      <i class="fab fa-twitter" style="color:#1da1f2"></i>
    </v-btn>
    <v-btn
      v-if="card.social.github"
      class="mt-0 mx-0"
      icon
      :href="card.social.github"
      target="_blank"
    >
      <i class="fab fa-github" style="color:#333"></i>
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
#card {
  .description {
    max-width: 220px;
    margin: 0 auto;
    font-size: 14px;
  }
}
</style>
