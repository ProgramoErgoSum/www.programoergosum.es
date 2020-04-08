<template>
  <v-card :to="`/formaciones/${formacion.alias}`" nuxt>
    <!--
    <VImageLazy
      :src="absoluteUrlImage"
      :title="formacion.title"
      :height="300"
    />
    -->
    <v-card-title primary-title>
      <h3 class="mb-4 title">{{ formacion.title }}</h3>
      <div class="mb-2 subtitle-1">{{ formacion.description }}</div>
    </v-card-title>
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
