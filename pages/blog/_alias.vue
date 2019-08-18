<template>
  <div class="_alias">
    <Title
      :title="title"
      :description="description"
      :image="image"
      :breadcrumbs="breadcrumbs"
    />
    <v-container>
      <v-layout row wrap>
        <v-flex xs-12 order-xs2 sm12 order-sm2 md9 order-md1>
          <Content :readme="readme" />
          <Contributing :edit-link="editLink" :date="date" />
        </v-flex>
        <v-flex xs-12 order-xs1 sm12 order-sm1 md3 order-md2>
          <div class="position-sticky">
            <div class="hidden-sm-and-down">
              <Toc :readme="readme" />
            </div>
            <div class="px-2 my-4">
              <Adsense-Blog-Toc />
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Content from '@/components/Markdown/Content'
import Contributing from '@/components/Markdown/Contributing'
import Toc from '@/components/Markdown/Toc'
import AdsenseBlogToc from '@/components/Adsense/BlogToc'

export default {
  components: {
    Content,
    Contributing,
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
      path: `images/${path}`,
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
.position-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
}
</style>
