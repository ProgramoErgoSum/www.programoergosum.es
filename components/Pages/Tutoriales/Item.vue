<template>
  <v-card :to="`/tutoriales/${tutorial.alias}`" outlined nuxt>
    <VImageLazy :src="absoluteUrlImage" :title="tutorial.title" :height="150" />
    <v-card-title primary-title>
      <h3 class="mb-4 font-weight-medium body-1">{{ tutorial.title }}</h3>
      <div class="mb-2 body-2">{{ tutorial.description }}</div>
      <div class="my-4">
        <Tags :tags="tutorial.tags" />
      </div>
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
