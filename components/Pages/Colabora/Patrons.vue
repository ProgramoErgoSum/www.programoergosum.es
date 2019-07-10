<template>
  <div id="patrons">
    <v-container>
      <v-layout class="sponsors" row wrap>
        <v-flex xs12>
          <h2 class="mb-3">Patronos / Agradecimientos</h2>
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
        <v-flex xs12 sm6 md4 lg3 class="text-xs-center pa-2">
          <v-card class="pa-3">
            <Card :card="empty" />
          </v-card>
        </v-flex>
        <v-flex xs12>
          <div class="mt-3 mb-3">
            <p>
              Puedes <strong>apoyar desinteresadamente</strong> nuestros
              proyectos educativos aportando lo que esté a tu alcance
              <b>a través de la plataforma de crowdfunding Patreon</b>. El
              importe recaudado será destinados al
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
    empty: {
      name: 'Tu nombre',
      image: '',
      description: 'Breve descripción sobre tí y tus aficiones...',
      social: {
        url: 'http://enlace-a-tu-web',
        twitter: 'http://enlace-a-tu-twitter',
        github: 'http://enlace-a-tu-github',
        linkedin: 'http://enlace-a-tu-linkedin'
      }
    },
    patrons: collaborators.patrons
  })
}
</script>

<style lang="scss" scoped>
.stress {
  font-weight: bold;
  color: #d25f34;
}
</style>
