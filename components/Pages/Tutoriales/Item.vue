<template>
  <v-card :to="`/tutoriales/${tutorial.alias}`" outlined nuxt>
    <VImageLazy :src="absoluteUrlImage" :title="tutorial.title" :height="220" />
    <v-card-title primary-title>
      <h3 class="mb-4 font-weight-medium body-1">{{ tutorial.title }}</h3>
      <div class="mb-2 body-2">{{ tutorial.description }}</div>
      <!--
      <div class="my-4">
        <Tags :tags="tags" />
      </div>
      -->
    </v-card-title>
    <v-card-text class="text-center">
      <Extra :extra="tutorial.extra" />
      <!--
      <template v-for="tag in tutorial.tags.level">
        <v-chip :key="tag" class="ma-1" outlined>
          <v-icon size="16" class="mr-1">
            mdi-school-outline
          </v-icon>
          {{ tag }}
        </v-chip>
      </template>
      -->
    </v-card-text>
  </v-card>
</template>

<script>
import Extra from '@/components/Pages/Tutoriales/Extra'
// import Tags from '@/components/Pages/Tutoriales/Tags'

export default {
  name: 'Item',
  components: {
    Extra
    // Tags
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
    /*
    tags() {
      const tags = this.tutorial.tags
      return tags.technology
        .concat(tags.hardware)
        .concat(tags.software)
        .concat(tags.level)
        .concat(tags.others)
    }
    */
  }
}
</script>

<style lang="scss" scoped></style>
