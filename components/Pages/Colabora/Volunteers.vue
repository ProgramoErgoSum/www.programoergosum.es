<template>
  <div id="volunteers">
    <v-container>
      <v-layout class="sponsors" row wrap>
        <v-flex xs12>
          <div class="mb-5">
            <h2 class="mb-3">Mentores / Voluntarios</h2>
            <p>
              Buscamos personas que quieran
              <b>colaborar desinteresadamentes</b>. Personas interesadas en
              aportar sus conocimientos, experiencia y tiempo. ¿Te apetece?
            </p>
          </div>
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
        <!--
        <v-flex xs12>
          <v-btn class="mt-5" to="/contacta" outline>
            Hazte voluntario
          </v-btn>
        </v-flex>
        -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Card from '@/components/Pages/Colabora/Card'

export default {
  components: {
    Card
  },
  props: {
    volunteers: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
