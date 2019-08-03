<template>
  <v-container>
    <v-layout class="sponsors" row wrap>
      <v-flex xs12>
        <h2 class="mb-3">Patronos / Colaboradores</h2>
      </v-flex>
      <v-flex
        v-for="(item, index) in patrons"
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
            Puedes colaborar <strong>apoyando mensualmente</strong> los
            proyectos educativos de la asociación y aparecerás en esta sección.
            El importe recaudado será destinados al mantenimiento informático y
            desarrollo de nuevos proyectos educativos.
          </p>
          <!--
          <v-btn
            href="https://www.patreon.com/ProgramoErgoSum"
            target="_blank"
            rel="noopener noreferrer"
            x-large
            color="primary"
          >
            Apóyanos a través de Patreon
          </v-btn>
          -->
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
</template>

<script>
import Card from '@/components/Pages/Colabora/Card'

export default {
  components: {
    Card
  },
  computed: {
    patrons() {
      return this.$store.state.collaborators.patrons
    }
  }
}
</script>

<style lang="scss" scoped></style>
