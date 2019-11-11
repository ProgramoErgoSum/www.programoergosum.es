<template>
  <v-card :to="`/tutoriales/${tutorial.alias}`" outlined nuxt>
    <VImageLazy :src="absoluteUrlImage" :title="tutorial.title" :height="180" />
    <v-card-title primary-title>
      <h3 class="mb-4 font-weight-medium body-1">{{ tutorial.title }}</h3>
      <div class="mb-2 body-2">{{ tutorial.description }}</div>
      <div class="my-4">
        <Tags :tags="tags" />
      </div>
    </v-card-title>
    <!--
    <v-card-text v-if="tutorial.extra" class="pt-6 text-center">
      <div class="d-inline-flex ma-2">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <span v-on="on">
              <v-icon class="mr-2">mdi-school-outline</v-icon>
              {{ tutorial.extra.level }}
            </span>
          </template>
          <span>Nivel de dificultad</span>
        </v-tooltip>
      </div>
      <div class="d-inline-flex ma-2">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <span v-on="on">
              <v-icon class="mr-2">mdi-clock-outline</v-icon>
              {{ tutorial.extra.duration }}
            </span>
          </template>
          <span>Duración aproximada</span>
        </v-tooltip>
      </div>
      <div class="d-inline-flex ma-2">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <span v-on="on">
              <v-icon class="mr-2">mdi-video-outline</v-icon>
              {{ tutorial.extra.videos }}
            </span>
          </template>
          <span>Vídeos en Youtube</span>
        </v-tooltip>
      </div>
    </v-card-text>
    -->
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
