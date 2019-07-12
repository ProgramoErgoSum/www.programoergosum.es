<template>
  <div id="contacto">
    <Title :title="metas.title" :description="metas.description" />
    <v-container>
      <v-layout>
        <v-flex>
          <p>
            Programo Ergo Sum es una
            <b>iniciativa sin ánimo de lucro</b> inscrita en el Registro de
            Asociaciones por el Director General de Participación Ciudadana,
            Unión Europea y Acción Exterior de la Consejería de Presidencia, con
            el número de registro 12.731/1ª.
          </p>
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
  </div>
</template>

<script>
import metas from '@/static/metas.json'

export default {
  components: {},
  asyncData() {
    return {
      metas: metas.contacto
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.canonical}/${this.metas.image}`

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
