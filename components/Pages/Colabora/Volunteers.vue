<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Mentores / Voluntarios</h2>
      </v-col>
      <v-col
        v-for="(item, index) in volunteers"
        :key="index"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
        class="pa-2"
      >
        <Card :card="item" />
      </v-col>
      <v-col cols="12">
        <div class="my-6">
          <p>
            Buscamos personas que quieran
            <b>colaborar desinteresadamentes</b>. Personas interesadas en
            aportar sus conocimientos, experiencia y tiempo en los talleres
            gratuitos que hacemos en la Región de Murcia. ¿Te apetece?
          </p>
          <v-btn to="/contacto" nuxt tile outlined>
            Hazte voluntario
          </v-btn>
        </div>
      </v-col>
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
    ...mapGetters({ volunteers: 'collaborators/volunteers' })
  }
}
</script>

<style lang="scss" scoped></style>
