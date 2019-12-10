<template>
  <div class="_alias">
    <Title
      :title="title"
      :description="description"
      :image="image"
      :breadcrumbs="breadcrumbs"
    />
    <v-container>
      <v-row>
        <v-col xs="12" sm="12" md="9" lg="9" xl="9">
          <Content :raw="raw" :cdn="cdn" />
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="3">
          <div class="sticky-top">
            <Toc :raw="raw" />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <section :class="background" class="mt-12 py-12">
      <Volunteers />
    </section>
  </div>
</template>

<script>
import axios from 'axios'

import Content from '@/components/Markdown/Content'
import Toc from '@/components/Markdown/Toc'
import Volunteers from '@/components/Pages/Colabora/Volunteers'

export default {
  components: {
    Content,
    Toc,
    Volunteers
  },
  computed: {
    background() {
      return this.$vuetify.theme.isDark ? 'grey darken-3' : 'grey lighten-3'
    }
  },
  validate({ store, params }) {
    return store.state.actividades.list.find(e => e.alias === params.alias)
  },
  async asyncData({ env, store, params }) {
    const actividad = store.state.actividades.list.find(e => {
      return e.alias === params.alias
    })

    const urlRaw = `${store.state.actividades.repo_raw}/${actividad.alias}`
    const endpoint = `${store.state.actividades.repo_raw}/${actividad.alias}/README.md`
    const edit = `${store.state.actividades.repo_edit}/${actividad.alias}/README.md`

    const file = await axios.get(endpoint).then(res => {
      return res.data
    })

    return {
      title: actividad.title,
      description: actividad.description,
      image: `${urlRaw}/${actividad.image}`,

      date: actividad.date,
      tags: actividad.tags,
      editLink: edit,

      raw: file,
      cdn: `${urlRaw}/`,

      breadcrumbs: [
        {
          text: 'Actividades',
          disabled: false,
          to: '/actividades'
        },
        {
          text: actividad.title,
          disabled: true,
          to: ''
        }
      ]
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
      titleTemplate: 'Actividades - %s',
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        { hid: 'keywords', name: 'keywords', content: tags },
        // Open Graph
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        { hid: 'o:ty', property: 'og:type', content: 'article' },
        { property: 'og:article:published_time', content: date.cdate },
        { property: 'og:article:modified_time', content: date.mdate },
        { property: 'og:article:section', content: 'Extraescolares' },
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
