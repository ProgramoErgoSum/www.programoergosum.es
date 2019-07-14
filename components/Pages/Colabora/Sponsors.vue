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
            Todos nuestros proyectos educativos son
            <b>libres y de código abierto</b>. Por eso mismo necesitamos el
            apoyo de patrocinadores. El importe recaudado será destinados al
            <span class="stress">
              mantenimiento informático y desarrollo de nuevos proyectos
              educativos
            </span>
            y aparecerás en esta sección como colaborador.
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

<style lang="scss" scoped>
.stress {
  font-weight: bold;
  color: #d25f34;
}
</style>
