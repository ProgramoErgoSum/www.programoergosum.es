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
              type="display"
              :data-ad-slot="adsense.left"
              class="mb-0 pb-0"
            />
          </div>
        </v-col>
        <v-col xs="12" sm="12" md="9" lg="7" xl="8">
          <!--
          <Adsense
            v-if="isAdsense"
            type="inarticle"
            :data-ad-slot="adsense.top"
            class="mb-0 pb-0"
          />
          -->
          <Content :raw="raw" :cdn="cdn" class="pb-6" />
          <!--
          <Adsense
            v-if="isAdsense"
            type="inarticle"
            :data-ad-slot="adsense.bottom"
            class="my-0 my-0"
          />
          -->
          <v-divider class="mt-12 mb-0" />
          <Contributing
            :authors="authors"
            :edit-link="editLink"
            class="mb-0 py-12"
          />
          <Posted :mdate="date.mdate" />
          <Tags :tags="tags" class="ml-3" />
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="2">
          <div class="sticky-top">
            <Toc :raw="raw" />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <section v-show="related.length > 1" class="py-12" :class="background">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>También te puede interesar</h2>
          </v-col>
          <v-col
            v-for="blog in related"
            :key="blog.alias"
            cols="12"
            xs="12"
            sm="12"
            md="4"
          >
            <ItemCol :blog="blog" />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import axios from 'axios'

import Content from '@/components/Markdown/Content'
import ItemCol from '@/components/Pages/Blog/ItemCol'
import Toc from '@/components/Markdown/Toc'

export default {
  components: {
    Content,
    ItemCol,
    Toc
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
      title: blog.title,
      description: blog.description,
      image: `${urlRaw}/${blog.image}`,

      date: blog.date,
      tags: blog.tags,
      editLink: edit,
      authors: blog.authors,

      raw: file,
      cdn: `${urlRaw}/`,

      isAdsense: blog.adsense === true,

      related: store.getters['blogs/related'](blog),

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

<style lang="scss" scoped>
.nuxt-content > .container {
  margin-bottom: 50px;
}
.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 140px;
}
</style>
