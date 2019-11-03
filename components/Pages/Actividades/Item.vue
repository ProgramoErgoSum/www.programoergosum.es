<template>
  <v-card :to="`/actividades/${actividad.alias}`" nuxt>
    <VImageLazy
      :src="absoluteUrlImage"
      :title="actividad.title"
      :height="250"
    />
    <v-card-title primary-title>
      <h3 class="mb-4 title">{{ actividad.title }}</h3>
      <div class="subtitle-1">{{ actividad.description }}</div>
    </v-card-title>
    <v-divider class="mx-3 my-3"></v-divider>
    <v-card-text v-if="actividad.extra">
      <p>
        <v-icon>mdi-map</v-icon>
        {{ actividad.extra.address }}
      </p>
      <p>
        <v-icon>mdi-calendar</v-icon>
        {{ actividad.extra.calendar.day }}
      </p>
      <p>
        <v-icon>mdi-clock</v-icon>
        {{ actividad.extra.calendar.hour }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Item',
  props: {
    actividad: {
      type: Object,
      required: true
    }
  },
  computed: {
    absoluteUrlImage() {
      return `${this.$store.state.actividades.repo_raw}/${this.actividad.alias}/${this.actividad.image}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
