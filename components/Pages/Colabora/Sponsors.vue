<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="mb-3">Patrocinadores</h2>
      </v-flex>
      <v-flex
        v-for="item in sponsors"
        :key="item.name"
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
            apoyo de patrocinadores. El importe de los patrocinios estarán
            destinados al
            <span class="stress">
              mantenimiento informático y desarrollo de nuevos proyectos
              educativos </span
            >.
          </p>
          <v-btn to="/contacto" large color="primary">
            Hazte patrocinador
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import collaborators from '@/static/colabora/list.json'
import Card from '@/components/Pages/Colabora/Card'

export default {
  components: {
    Card
  },
  data: () => ({
    sponsors: collaborators.sponsors
  })
}
</script>

<style lang="scss" scoped>
.stress {
  font-weight: bold;
  color: #d25f34;
}
</style>
