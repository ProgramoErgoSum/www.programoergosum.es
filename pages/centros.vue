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
          <v-list>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-users"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                Un docente comprometido (Embajador)
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-envelope"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                Explícanos cómo usas las plataformas
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-graduation-cap"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                Enseña los logros conseguidos
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-comments"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                Haz difusión de la iniciativa
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-map-marker"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                Sitúate en el mapa
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar />
              <v-list-tile-content class="mt-3">
                <v-btn to="/contacto" x-large color="secondary">
                  Inscríbete
                </v-btn>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import metas from '@/static/metas.json'
import centers from '@/static/centros/list.json'

import Title from '@/components/Layout/Title'
import Map from '@/components/Pages/Centros/Map'

export default {
  components: {
    Title,
    Map
  },
  asyncData() {
    return {
      metas: metas.centros,
      centers: centers
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.canonical}/${this.metas.image}`
    const canonical = `${process.env.canonical}${this.$route.path}`

    return {
      title: title,
      meta: [
        // Global
        { rel: 'canonical', href: canonical },
        { hid: 'description', name: 'description', content: description },
        // Facebook
        { property: 'og:url', content: canonical },
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
