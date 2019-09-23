<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Patronos / Colaboradores</h2>
        <p>
          Puedes convertirte en patrono
          <strong>apoyando mensualmente</strong> los proyectos educativos de la
          asociación y aparecerás en esta sección. El importe recaudado será
          destinados al mantenimiento informático y desarrollo de nuevos
          proyectos educativos.
        </p>
      </v-col>
      <v-col
        v-for="(item, index) in patrons"
        :key="index"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="4"
        xl="3"
        class="pa-2"
      >
        <Card :card="item" />
      </v-col>
      <v-col cols="12">
        <div class="my-6">
          <v-btn
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7N56RY2QKJJDS&source=url"
            target="_blank"
            rel="noopener noreferrer"
            tile
            color="primary"
          >
            Apóyanos mensualmente
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import Card from '@/components/Pages/Colabora/Card'

export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters({ patrons: 'collaborators/patrons' })
  }
}
</script>

<style lang="scss" scoped></style>
