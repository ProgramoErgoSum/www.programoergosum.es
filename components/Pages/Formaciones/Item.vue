<template>
  <v-card :to="`/formaciones/${formacion.alias}`" nuxt>
    <VImageLazy
      :src="absoluteUrlImage"
      :title="formacion.title"
      :height="250"
    />
    <v-card-title primary-title>
      <h3 class="mb-4 title">{{ formacion.title }}</h3>
      <div class="mb-2 subtitle-1">{{ formacion.description }}</div>
      <div class="my-4">
        <Tags :tags="formacion.tags" />
      </div>
    </v-card-title>
    <v-divider class="mx-3 my-3"></v-divider>
    <v-card-text v-if="formacion.editions[0]">
      <p>
        <v-icon>mdi-school</v-icon>
        {{ formacion.editions[0].number }}
      </p>
      <p>
        <v-icon>mdi-map</v-icon>
        {{ formacion.editions[0].center }}
      </p>
      <p>
        <v-icon>mdi-calendar</v-icon>
        {{ formacion.editions[0].date }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Item',
  components: {},
  props: {
    formacion: {
      type: Object,
      required: true
    }
  },
  computed: {
    absoluteUrlImage() {
      return `${this.$store.state.formaciones.repo_raw}/${this.formacion.alias}/${this.formacion.image}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
