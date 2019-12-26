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
            <Adsense
              v-if="isAdsense"
              :data-ad-slot="adsense.left"
              type="display"
              class="mb-0 pb-0"
            />
          </div>
        </v-col>
        <v-col xs="12" sm="12" md="9" lg="7" xl="8">
          <Content :raw="raw" :cdn="cdn" />
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="2">
          <div class="sticky-top">
            <Toc :raw="raw" />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <Related :blog="blog" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import axios from 'axios'

import Content from '@/components/Markdown/Content'
import Toc from '@/components/Markdown/Toc'
import Related from '@/components/Pages/Blog/Related'

export default {
  components: {
    Content,
    Toc,
    Related
  },
  computed: {
    ...mapGetters({ adsense: 'blogs/adsense' }),
    background() {
      return this.$vuetify.theme.isDark ? 'grey darken-3' : 'grey lighten-3'
    }
  },
  validate({ store, params }) {
    return store.state.blogs.list.find(e => e.alias === params.alias)
  },
  async asyncData({ store, params }) {
    const blog = store.state.blogs.list.find(e => {
      return e.alias === params.alias
    })

    const urlRaw = `${store.state.blogs.repo_raw}/${blog.alias}`
    const endpoint = `${store.state.blogs.repo_raw}/${blog.alias}/README.md`
    const edit = `${store.state.blogs.repo_edit}/${blog.alias}/README.md`

    const file = await axios.get(endpoint).then(res => {
      return res.data
    })

    return {
      blog,

      title: blog.title,
      description: blog.description,
      image: `${urlRaw}/${blog.image}`,

      date: blog.date,
      tags: blog.tags,
      editLink: edit,

      raw: file,
      cdn: `${urlRaw}/`,

      isAdsense: blog.adsense === true,

      breadcrumbs: [
        {
          text: 'Blog',
          disabled: false,
          to: '/blog'
        },
        {
          text: blog.title,
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
      titleTemplate: 'Blog - %s',
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
        { property: 'og:article:section', content: 'Blog' },
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
