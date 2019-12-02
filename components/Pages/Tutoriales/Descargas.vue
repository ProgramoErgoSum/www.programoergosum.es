<template>
  <v-card color="secondary" dark class="mt-12 mb-12">
    <v-card-title id="descargas" class="headline">
      <v-icon size="30" class="mr-3">mdi-download</v-icon>
      Descarga los materiales
    </v-card-title>
    <v-divider class="ma-3 mx-3"></v-divider>
    <v-card-text class="headline font-weight-light">
      <p class="mb-6">
        Hazte
        <nuxt-link to="/centros" title="Centros colaboradores">
          centro colaborador
        </nuxt-link>
        y podrás obtener las soluciones a los ejercicios y retos propuestos con
        el objetivo de ayudar a tus alumnos en clase.
      </p>
      <v-list-item v-for="(item, key) in descargas" :key="key">
        <v-list-item-title class="title font-weight-light">
          - {{ item }}
        </v-list-item-title>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Descargas',
  props: {
    descargas: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
