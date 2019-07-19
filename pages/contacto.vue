<template>
  <div id="contacto">
    <Title :title="metas.title" :description="metas.description" />
    <v-container>
      <v-layout row wrap>
        <v-flex>
          <h2 class="mb-3">
            Resolvemos tus dudas más frecuentes
          </h2>
          <v-expansion-panel popout class="mb-5">
            <v-expansion-panel-content v-for="(item, i) in faqs" :key="i">
              <template v-slot:header>
                <div class="subheading">
                  {{ item.title }}
                </div>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3 subheading">
                  {{ item.description }}
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
        <v-flex>
          <h2 class="mb-3">
            También puedes contactar con nosotros a través de email
          </h2>
          <v-list class="subheading">
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-map-marker"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                Región de Murcia
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-envelope"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                info@programoergosum.com
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-globe"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                www.programoergosum.es
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
    <Reg />
  </div>
</template>

<script>
import metas from '@/store/api/v1/metas.json'

import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    Reg
  },
  data: () => ({
    faqs: [
      {
        title: '¿Qué es Programo Ergo Sum?',
        description:
          'Programo Ergo Sum es una iniciativa sin ánimo de lucro cuyo objetivo pretende acercar la programación y la robótica a todas las edades a través de proyectos educativos libres y abiertos.'
      },
      {
        title: '¿Cómo puedo colaborar con la iniciativa?',
        description:
          'Puedes colaborar con la iniciativa realizando una donación desinteresada a través de la plataforma de crowdfunding Patreon o a través de PayPal. Con la donación podrás aparecer en el apartado de colaboradores solamente.'
      },
      {
        title: '¿Cómo puedo tener una cuenta premium?',
        description: 'En estos momentos no es posible crear una cuenta premium.'
      }
    ]
  }),
  asyncData() {
    return {
      metas: metas.contacto
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title: title,
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        // Facebook
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
