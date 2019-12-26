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
        <v-col cols="12" xs="12" sm="12" md="12" lg="2" xl="2">
          <div class="sticky-top">
            <Adsense :data-ad-slot="adsense.left" type="display" />
          </div>
        </v-col>
        <v-col xs="12" sm="12" md="9" lg="7" xl="8">
          <div class="mb-12">
            <span class="body-2 font-weight-light">Etiquetas:</span>
            <Tags :tags="tags" />
          </div>
          <!--
          <Adsense
            type="inarticle"
            :data-ad-slot="adsense.top"
            class="mb-0 pb-0"
          />
          -->
          <Content :raw="raw" :cdn="cdn" />
          <!--
          <Adsense
            :data-ad-slot="adsense.bottom"
            type="inarticle"
            class="my-0 my-0"
          />
          -->
          <v-divider class="my-6" />
          <Contributing
            :contributors="contributors"
            :edit-link="editLink"
            class="mb-3 pt-3"
          />
          <Posted :mdate="date.mdate" />
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="2">
          <div class="sticky-top">
            <Toc :raw="raw" title="Lecciones" />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <Related :tutorial="tutorial" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import axios from 'axios'

import Tags from '@/components/Pages/Tutoriales/Tags'
import Content from '@/components/Markdown/Content'
import Toc from '@/components/Markdown/Toc'
import Related from '@/components/Pages/Tutoriales/Related'

export default {
  components: {
    Tags,
    Content,
    Toc,
    Related
  },
  computed: {
    ...mapGetters({ adsense: 'tutoriales/adsense' }),
    background() {
      return this.$vuetify.theme.isDark ? 'grey darken-3' : 'grey lighten-3'
    }
  },
  validate({ store, params }) {
    return store.state.tutoriales.list.find(e => e.alias === params.alias)
  },
  async asyncData({ store, params }) {
    const tutorial = store.state.tutoriales.list.find(e => {
      return e.alias === params.alias
    })

    const urlRaw = `${store.state.tutoriales.repo_raw}/${tutorial.alias}`
    const endpoint = `${store.state.tutoriales.repo_raw}/${tutorial.alias}/README.md`
    const edit = `${store.state.tutoriales.repo_edit}/${tutorial.alias}/README.md`

    const file = await axios.get(endpoint).then(res => {
      return res.data
    })

    const tags = tutorial.tags.technology
      .concat(tutorial.tags.hardware)
      .concat(tutorial.tags.software)
      .concat(tutorial.tags.level)
      .concat(tutorial.tags.others)

    return {
      tutorial,

      title: tutorial.title,
      description: tutorial.description,
      image: `${urlRaw}/${tutorial.image}`,

      date: tutorial.date,
      tags,
      editLink: edit,
      contributors: tutorial.contributors,

      raw: file,
      cdn: `${urlRaw}/`,

      breadcrumbs: [
        {
          text: 'Tutoriales',
          disabled: false,
          to: '/tutoriales'
        },
        {
          text: tutorial.title,
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
      titleTemplate: 'Tutoriales - %s',
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
        { property: 'og:article:section', content: 'Tutoriales' },
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
