<template>
  <v-card :to="`/tutoriales/${tutorial.alias}`" outlined nuxt>
    <VImageLazy :src="absoluteUrlImage" :title="tutorial.title" :height="180" />
    <v-card-title primary-title>
      <h3 class="mb-4 font-weight-medium body-1">{{ tutorial.title }}</h3>
      <div class="mb-2 body-2">{{ tutorial.description }}</div>
      <div class="my-4">
        <template v-for="tag in tags">
          <Tag :key="tag" :name="tag" />
        </template>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import Tag from '@/components/Pages/Tutoriales/Tag'

export default {
  name: 'Item',
  components: {
    Tag
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
    },
    tags() {
      const tags = this.tutorial.tags
      return tags.technology
        .concat(tags.hardware)
        .concat(tags.software)
        .concat(tags.level)
        .concat(tags.others)
    }
  }
}
</script>

<style lang="scss" scoped></style>
