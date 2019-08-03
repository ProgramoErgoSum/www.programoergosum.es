<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="mb-3">Patrocinadores</h2>
      </v-flex>
      <v-flex
        v-for="(item, index) in sponsors"
        :key="index"
        xs12
        sm6
        md4
        class="text-xs-center pa-2"
      >
        <Card :card="item" />
      </v-flex>
      <v-flex xs12>
        <div class="mt-3 mb-3">
          <p>
            Todos los proyectos educativos que realizamos en la asociación son
            <b>libres, gratuitos y de código abierto</b>. Necesitamos apoyo en
            patrocinios para poder hacer frente a los gastos en mantenimiento
            que supone.
          </p>
          <v-btn to="/contacto" x-large color="primary">
            Hazte patrocinador
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from '@/components/Pages/Colabora/Card'

export default {
  components: {
    Card
  },
  computed: {
    sponsors() {
      return this.$store.state.collaborators.sponsors
    }
  }
}
</script>

<style lang="scss" scoped></style>
