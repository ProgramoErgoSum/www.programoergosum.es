<template>
  <div id="patrons">
    <v-container>
      <v-layout class="sponsors" row wrap>
        <v-flex xs12>
          <div class="mb-5">
            <h2 class="mb-3">Patronos</h2>
            <p>
              Puedes apoyar nuestros proyectos educativos a través del canal de
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.patreon.com/ProgramoErgoSum"
                >Patreon</a
              >
              y aparecerás en esta sección como agradecimiento. ¿Te apuntas?
            </p>
          </div>
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
          <v-btn
            class="mt-5"
            href="https://www.patreon.com/ProgramoErgoSum"
            target="_blank"
            rel="noopener noreferrer"
            outline
          >
            Apóyanos a través de Patreon
          </v-btn>
        </v-flex>
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
    patrons: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
#patrons {
  margin-bottom: 50px;
  padding: 50px;
}
</style>
