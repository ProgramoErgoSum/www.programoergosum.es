<template>
  <div id="paypals">
    <v-container>
      <v-layout class="paypals" row wrap>
        <v-flex xs12>
          <h2 class="mb-3">Donaciones / Agradecimientos</h2>
        </v-flex>
        <v-flex
          v-for="item in paypals"
          :key="item.name"
          xs12
          sm6
          md4
          lg3
          class="text-xs-center pa-2"
        >
          <v-chip>
            <v-avatar>
              <v-img :src="item.image" :lazy-src="`/lazy-user.png`" />
            </v-avatar>
            {{ item.name }}
          </v-chip>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 class="text-xs-center pa-2">
          <v-card class="pa-3">
            <v-chip>
              <v-avatar>
                <v-img :src="empty.image" :lazy-src="`/lazy-user.png`" />
              </v-avatar>
              {{ empty.name }}
            </v-chip>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <div class="mt-3 mb-3">
            <p>
              También puedes <strong>realizar una donación</strong> con el
              importe que creas necesario <b> a través de PayPal</b>. El importe
              recaudado será destinados al
              <span class="stress">
                mantenimiento informático y desarrollo de nuevos proyectos
                educativos
              </span>
              y aparecerás en esta sección como colaborador.
            </p>

            <v-btn
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7N56RY2QKJJDS&source=url"
              target="_blank"
              rel="noopener noreferrer"
              x-large
              color="secondary"
            >
              Realiza una donación
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import collaborators from '@/static/colabora/list.json'
// import Card from '@/components/Pages/Colabora/Card'

export default {
  /*
  components: {
    Card
  },
  */
  data: () => ({
    empty: {
      name: 'Nombre del donante',
      image: ''
      /*
      description: 'Breve descripción sobre tí y tus aficiones...',
      social: {
        url: 'http://enlace-a-tu-web',
        twitter: 'http://enlace-a-tu-twitter',
        github: 'http://enlace-a-tu-github'
      }
      */
    },
    paypals: collaborators.paypals
  })
}
</script>

<style lang="scss" scoped>
.stress {
  font-weight: bold;
  color: #d25f34;
}
</style>
