<template>
  <div id="patrons">
    <v-container>
      <v-layout class="sponsors" row wrap>
        <v-flex xs12>
          <h2 class="mb-3">Patronos</h2>
        </v-flex>
        <v-flex
          v-for="item in patrons"
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
              Puedes apoyar nuestros proyectos educativos a través del canal de
              Patreon y aparecerás en esta sección como agradecimiento. ¿Te
              apuntas?
            </p>
            <v-btn
              href="https://www.patreon.com/ProgramoErgoSum"
              target="_blank"
              rel="noopener noreferrer"
              outline
              large
              color="primary"
            >
              Apóyanos a través de Patreon
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
    patrons: collaborators.patrons
  })
}
</script>

<style lang="scss" scoped></style>
