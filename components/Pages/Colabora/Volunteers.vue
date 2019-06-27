<template>
  <div id="volunteers">
    <v-container>
      <v-layout class="sponsors" row wrap>
        <v-flex xs12>
          <h2 class="mb-3">Mentores / Voluntarios</h2>
        </v-flex>
        <v-flex
          v-for="item in volunteers"
          :key="item.name"
          xs12
          sm6
          md4
          lg3
          class="text-xs-center pa-2"
        >
          <Card :card="item" />
        </v-flex>
        <v-flex xs12>
          <div class="mt-3 mb-3">
            <p>
              Buscamos personas que quieran
              <b>colaborar desinteresadamentes</b>. Personas interesadas en
              aportar sus conocimientos, experiencia y tiempo en los talleres
              gratuitos que hacemos en la Región de Murcia. ¿Te apetece?
            </p>
            <v-btn to="/contacto" large outline>
              Hazte voluntario
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import collaborators from '@/static/colabora/list.json'
import Card from '@/components/Pages/Colabora/Card'

export default {
  components: {
    Card
  },
  data: () => ({
    volunteers: collaborators.volunteers
  })
}
</script>

<style lang="scss" scoped></style>
