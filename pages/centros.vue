<template>
  <div id="centros">
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container fluid>
      <v-row>
        <v-col
          xs="12"
          order-xs="2"
          sm="12"
          order-sm="2"
          md="12"
          order-md="2"
          lg="8"
          order-lg="1"
          xl="9"
          order-xl="1"
        >
          <Map :centers="centers" />
        </v-col>
        <v-col
          xs="12"
          order-xs="1"
          sm="12"
          order-sm="1"
          md="12"
          order-md="1"
          lg="4"
          order-lg="2"
          xl="3"
          order-xl="2"
        >
          <v-toolbar flat>
            <v-toolbar-title>
              ¿Cómo ser un centro Programo Ergo Sum?
            </v-toolbar-title>
          </v-toolbar>
          <v-list three-line>
            <v-list-item v-for="(item, key) in faqs" :key="key">
              <v-list-item-avatar>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item>
              <v-list-item-avatar />
              <v-list-item-content class="mt-3">
                <v-btn to="/contacto" nuxt color="secondary">
                  Más información
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-toolbar primary dark>
            <v-toolbar-title>
              {{ centers.length }} centros educativos inscritos
            </v-toolbar-title>
          </v-toolbar>
          <div class="mt-3" />
          <template v-for="(item, index) in centers">
            <v-card :key="index" class="ma-3 v-card" flat>
              <Popup :center="item" />
            </v-card>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
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
        icon: 'mdi-account-multiple',
        title: 'Un docente (embajador)',
        description: 'Comprometido con las TIC y la educación libre.'
      },
      {
        icon: 'mdi-chat-outline',
        title: 'Haz difusión de la iniciativa',
        description: 'Explícanos cómo usas las plataformas y cómo mejorarlas.'
      },
      {
        icon: 'mdi-school',
        title: 'Enseña los logros conseguidos',
        description: 'Recibirás diplomas para entregar a tus alumnos.'
      },
      {
        icon: 'mdi-map-marker',
        title: 'Sitúate en el mapa',
        description: 'Aparecerás en el mapa como centro colaborador.'
      }
    ]
  }),
  asyncData({ store }) {
    return {
      metas: store.state.metas.centros,
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
