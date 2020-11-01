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
            <Adsense :data-ad-slot="adsense.left" type="display" />
          </div>
        </v-col>
        <v-col xs="12" sm="12" md="9" lg="7" xl="8">
          <Content :raw="raw" :cdn="cdn" />
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="2">
          <div class="sticky-top">
            <Toc :raw="raw" title="Temario" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import axios from 'axios'

import Content from '@/components/Markdown/Content'
import Toc from '@/components/Markdown/Toc'

export default {
  middleware: 'needGdpr',
  components: {
    Content,
    Toc
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
          text: 'Cursos para profesores',
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
      titleTemplate: 'Cursos para profesores - %s',
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
        { property: 'og:article:section', content: 'Cursos para profesores' },
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
