<template>
  <div>
    <Title
      :title="title"
      :description="description"
      :image="image"
      :breadcrumbs="breadcrumbs"
    />
    <v-container fluid>
      <v-row>
        <v-col class="hidden-md-and-down" lg="2" xl="2">
          <div class="sticky-top">
            <!--
            <Adsense
              type="display"
              :data-ad-slot="adsense.left"
              class="mt-0 pt-3"
            />
            -->
          </div>
        </v-col>
        <v-col xs="12" sm="12" md="9" lg="7" xl="8">
          <!--
          <Info :speakers="speakers" :editions="editions" class="mb-12" />
          -->
          <!--
          <Content :raw="raw" :cdn="cdn" />
          -->
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="2">
          <div class="sticky-top">
            <Toc :raw="raw" title="Temario del curso" />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!--
    <section
      v-show="related.length > 1"
      :class="background"
      class="mt-12 py-12"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>Cursos de formación relacionados</h2>
          </v-col>
          <v-col
            v-for="formacion in related"
            :key="formacion.alias"
            cols="12"
            xs="12"
            sm="12"
            md="4"
          >
            <ItemCol :formacion="formacion" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import axios from 'axios'

// import Info from '@/components/Pages/Formaciones/Info'
// import Content from '@/components/Markdown/Content'
// import Toc from '@/components/Markdown/Toc'
// import ItemCol from '@/components/Pages/Formaciones/ItemCol'

export default {
  components: {
    // Info,
    // Content,
    // Toc,
    // ItemCol
  },
  validate({ store, params }) {
    return store.state.formaciones.list.find(e => e.alias === params.alias)
  },
  async asyncData({ store, params }) {
    const formacion = store.state.formaciones.list.find(e => {
      return e.alias === params.alias
    })

    const urlRaw = `${store.state.formaciones.repo_raw}/${formacion.alias}`
    const endpoint = `${store.state.formaciones.repo_raw}/${formacion.alias}/README.md`
    // const edit = `${store.state.formaciones.repo_edit}/${formacion.alias}/README.md`

    const file = await axios.get(endpoint).then(res => {
      return res.data
    })

    return {
      title: formacion.title,
      description: formacion.description,
      image: `${urlRaw}/${formacion.image}`,

      speakers: formacion.speakers,
      editions: formacion.editions,

      date: formacion.date,
      tags: formacion.tags,

      raw: file,
      cdn: `${urlRaw}/`,

      related: store.getters['formaciones/related'](formacion),

      breadcrumbs: [
        {
          text: 'Formación del profesorado',
          disabled: false,
          to: '/formaciones'
        },
        {
          text: formacion.title,
          disabled: true,
          to: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters({ adsense: 'formaciones/adsense' }),
    background() {
      return this.$vuetify.theme.isDark ? 'grey darken-3' : 'grey lighten-3'
    }
  },
  head() {
    const title = this.title
    const description = this.description
    const image = this.image
    const date = this.date
    const tags = this.tags

    return {
      title,
      titleTemplate: 'Formación del profesorado - %s',
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        { hid: 'keywords', name: 'keywords', content: tags },
        // Open Graph
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        { property: 'og:article:published_time', content: date.cdate },
        { property: 'og:article:modified_time', content: date.mdate },
        { property: 'og:article:section', content: 'Formación profesorado' },
        { property: 'og:article:tag', content: tags },
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
