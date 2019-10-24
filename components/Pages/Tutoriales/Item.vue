<template>
  <v-card :to="`/tutoriales/${tutorial.alias}`" nuxt>
    <VImageLazy :src="absoluteUrlImage" :title="tutorial.title" :height="250" />
    <v-card-title primary-title>
      <h3 class="mb-4 title">{{ tutorial.title }}</h3>
      <div class="mb-2 subtitle-1">{{ tutorial.description }}</div>
      <div class="my-4">
        <Tags :tags="tutorial.tags" />
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import Tags from '@/components/Pages/Tutoriales/Tags'

export default {
  name: 'Item',
  components: {
    Tags
  },
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
