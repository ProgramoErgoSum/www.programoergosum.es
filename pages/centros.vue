<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="12" lg="8" xl="9">
          <!--
          <v-toolbar flat color="secondary" dark>
            <v-btn icon class="mr-1">
              <v-icon>mdi-heart-multiple</v-icon>
            </v-btn>
            {{ centers.length }} centros educativos inscritos
          </v-toolbar>
          <Map :centers="centers" />
          -->
          <Map />
        </v-col>
        <v-col cols="12" md="12" lg="4" xl="3">
          <v-list color="transparent" three-line>
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
            <v-list-item>
              <v-list-item-avatar />
              <v-list-item-content class="mt-3">
                <v-btn
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf5ABk072HFY0JUlAHwcPuGF_7JGMrwpnUANeZuO7N4qNTGrw/viewform"
                  nuxt
                  color="secondary"
                >
                  Solicitud de centro colaborador
                </v-btn>
                <br />
                <p class="mt-3 caption">
                  * Solo si consideramos que estás colaborando o ayudando de
                  alguna forma a la asociación aparecerás en el mapa como centro
                  educativo colaborador.
                </p>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Map from '@/components/Pages/Centros/Map'

export default {
  components: {
    Map
  },
  data: () => ({
    search: '',
    faqs: [
      {
        icon: 'mdi-domain',
        title: 'Centros educativos públicos',
        description: 'Apostamos por una enseñanza pública y gratuita'
      },
      {
        icon: 'mdi-school',
        title: 'En el aula con tus alumnos',
        description: 'Utiliza nuestras plataformas educativas'
      },
      {
        icon: 'mdi-chat',
        title: 'Difunde la iniciativa',
        description: 'Síguenos en las redes sociales y difunde'
      },
      {
        icon: 'mdi-heart-multiple',
        title: 'Colabora con la iniciativa',
        description: 'Puedes colaborar de cualquier forma'
      },
      {
        icon: 'mdi-map-marker',
        title: 'Sitúate en el mapa',
        description: 'Aparecerás en el mapa de centros educativos'
      }
    ]
  }),
  asyncData({ store }) {
    return {
      metas: store.state.metas.centros
      // centers: store.state.centros.list
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title,
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        // Open Graph
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
