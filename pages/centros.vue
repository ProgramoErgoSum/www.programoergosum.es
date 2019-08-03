<template>
  <div id="centros">
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container fluid>
      <v-layout wrap row>
        <v-flex xs12 order-xs2 md12 order-md2 lg8 order-lg1>
          <v-toolbar primary dark>
            <v-toolbar-title>
              {{ centers.length }} centros educativos inscritos
            </v-toolbar-title>
          </v-toolbar>
          <Map :centers="centers" />
        </v-flex>
        <v-flex xs12 order-xs1 md12 order-md1 lg4 order-lg2>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>
              ¿Cómo ser un centro Programo Ergo Sum?
            </v-toolbar-title>
          </v-toolbar>
          <v-list three-line>
            <v-list-tile v-for="(item, key) in faqs" :key="key">
              <v-list-tile-avatar>
                <v-icon class="fas">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ item.description }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-list>
            <v-list-tile>
              <v-list-tile-avatar />
              <v-list-tile-content class="mt-3">
                <v-btn to="/contacto" x-large color="secondary">
                  Más información
                </v-btn>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout wrap row>
        <v-flex xs12>
          <template v-for="(item, index) in centers">
            <v-card :key="index" class="v-card" flat>
              <Popup :center="item" />
            </v-card>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import metas from '@/store/api/v1/metas.json'

import Map from '@/components/Pages/Centros/Map'
import Popup from '@/components/Pages/Centros/Popup'

export default {
  components: {
    Map,
    Popup
  },
  data: () => ({
    faqs: [
      {
        icon: 'fas fa-users',
        title: 'Un docente (embajador)',
        description: 'Comprometido con las TIC en el ámbito educativo.'
      },
      {
        icon: 'fas fa-comments',
        title: 'Haz difusión de la iniciativa',
        description: 'Explícanos cómo usas las plataformas y cómo mejorarlas.'
      },
      {
        icon: 'fas fa-graduation-cap',
        title: 'Enseña los logros conseguidos',
        description: 'Recibirás diplomas para entregar a tus alumnos.'
      },
      {
        icon: 'fas fa-map-marker',
        title: 'Sitúate en el mapa',
        description: 'Aparecerás en el mapa como centro colaborador.'
      }
    ]
  }),
  asyncData({ store }) {
    return {
      metas: metas.centros,
      centers: store.state.centers.list
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

<style lang="scss" scoped>
.v-card {
  display: inline-block;
}
</style>
