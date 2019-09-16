<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Con el apoyo de ...</h2>
      </v-col>
      <v-col
        v-for="(item, index) in sponsors"
        :key="index"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="4"
        xl="4"
        class="pa-2"
      >
        <Card :card="item" />
      </v-col>
      <!--
      <v-col cols="12">
        <div class="my-6">
          <p>
            Todos los proyectos educativos que realizamos en la asociación son
            <b>libres, gratuitos y de código abierto</b>. Necesitamos apoyo en
            patrocinios para poder hacer frente a los gastos en mantenimiento
            que supone.
          </p>
          <v-btn to="/contacto" nuxt tile color="primary">
            Hazte patrocinador
          </v-btn>
        </div>
      </v-col>
      -->
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import Card from '@/components/Pages/Colabora/Card'

export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters({ sponsors: 'collaborators/sponsors' })
  }
}
</script>

<style lang="scss" scoped></style>
