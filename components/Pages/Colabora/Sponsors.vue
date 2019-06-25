<template>
  <div id="sponsors">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="mb-5">
            <h2 class="mb-3">Patrocinadores</h2>
            <p>
              Para llevar a cabo el
              <b>mantenimiento de todos nuestros proyectos educativos</b>,
              necesitamos patrocinadores. ¿Quieres patrocinarnos?
            </p>
          </div>
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
        <!--
        <v-flex xs12>
          <v-btn class="mt-5" to="/contacta" outline>
            Hazte patrocinador
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
    sponsors: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
