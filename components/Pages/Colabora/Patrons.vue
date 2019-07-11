<template>
  <div id="patrons">
    <v-container>
      <v-layout class="sponsors" row wrap>
        <v-flex xs12>
          <h2 class="mb-3">Patronos / Agradecimientos</h2>
        </v-flex>
        <v-flex
          v-for="(item, index) in sortedPatrons"
          :key="index"
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
              Puedes <strong>apoyar mensualmente</strong> nuestros proyectos
              educativos aportando lo que esté a tu alcance a través de la
              plataforma de crowdfunding <b>Patreon</b> o a través de
              <b>PayPal</b>. El importe recaudado será destinados al
              <span class="stress">
                mantenimiento informático y desarrollo de nuevos proyectos
                educativos
              </span>
              y aparecerás en esta sección como colaborador.
            </p>
            <v-btn
              href="https://www.patreon.com/ProgramoErgoSum"
              target="_blank"
              rel="noopener noreferrer"
              x-large
              color="primary"
            >
              Apóyanos a través de Patreon
            </v-btn>
            <v-btn
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7N56RY2QKJJDS&source=url"
              target="_blank"
              rel="noopener noreferrer"
              x-large
              color="primary"
            >
              Apóyanos a través de PayPal
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
  computed: {
    sortedPatrons: function() {
      function compare(a, b) {
        if (a.qty < b.qty) return 1
        if (a.qty > b.qty) return -1
        return 0
      }

      return collaborators.patrons.sort(compare)
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
