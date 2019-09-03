<template>
  <div class="_alias">
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
          <!--
          <Tags :tags="tags" class="my-7" />
          <Authors :authors="authors" />
          -->
          <Content :readme="readme" />
          <!--
          <div class="separation" />
          <Contributing :edit-link="editLink" :date="date" />
          -->
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="2">
          <div class="sticky-top">
            <Toc :readme="readme" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Content from '@/components/Markdown/Content'
// import Contributing from '@/components/Markdown/Contributing'
import Toc from '@/components/Markdown/Toc'
import AdsenseBlogToc from '@/components/Adsense/BlogToc'

export default {
  components: {
    Content,
    // Contributing,
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

    const path = `blog/${params.alias}`
    const file = await import(`@/doc/${path}/README.md`)
    const readme = {
      cdn: `images/${path}`,
      body: file.body
    }

    return {
      title: blog.title,
      description: blog.description,
      image: `/images/${path}/${blog.image}`,
      readme: readme,
      editLink: `doc/${path}/README.md`,
      date: blog.date.mdate,
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
    const image = `${process.env.cdn}${this.image}`

    return {
      title: title,
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
