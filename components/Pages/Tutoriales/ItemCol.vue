<template>
  <v-card :to="`/tutoriales/${tutorial.alias}`" nuxt>
    <VImageLazy :src="absoluteUrlImage" :title="tutorial.title" :height="250" />
    <v-card-title primary-title>
      <h3 class="mb-4 title">{{ tutorial.title }}</h3>
      <div class="subtitle-1">{{ tutorial.description }}</div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'Item',
  components: {},
  props: {
    tutorial: {
      type: Object,
      required: true
    }
  },
  computed: {
    absoluteUrlImage() {
      return `${this.$store.state.tutoriales.repo_raw}/${this.tutorial.alias}/${this.tutorial.image}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
