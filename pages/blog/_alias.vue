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
            <Adsense-Blog-Toc />
          </div>
        </v-col>
        <v-col xs="12" sm="12" md="9" lg="7" xl="8">
          <Posted :cdate="date.cdate" :mdate="date.mdate" />
          <Tags :tags="tags" class="ml-3" />
          <Authors :authors="authors" class="mt-6" />
          <Contributing :edit-link="editLink" class="mt-1" />

          <Content :raw="raw" :cdn="cdn" class="mt-12" />
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="2">
          <div class="sticky-top">
            <Toc :raw="raw" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

import Posted from '@/components/Pages/Blog/Posted'
import Tags from '@/components/Pages/Blog/Tags'
import Authors from '@/components/Pages/Blog/Authors'
import Contributing from '@/components/Pages/Blog/Contributing'
import Content from '@/components/Markdown/Content'
import Toc from '@/components/Markdown/Toc'
import AdsenseBlogToc from '@/components/Adsense/BlogToc'

export default {
  components: {
    Posted,
    Tags,
    Authors,
    Contributing,
    Content,
    Toc,
    AdsenseBlogToc
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
      image: `${urlRaw}/img/${blog.image}`,

      date: blog.date,
      tags: blog.tags,
      editLink: edit,
      authors: blog.authors,

      raw: file,
      cdn: `${urlRaw}/`,

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

    return {
      title,
      titleTemplate: 'Blog - %s',
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
.nuxt-content > .container {
  margin-bottom: 50px;
}
.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 140px;
}
/*
.separation {
  margin: 100px 0 50px;
  border-top: 1px solid #f0f0f0;
}
*/
</style>
