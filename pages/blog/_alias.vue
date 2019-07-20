<template>
  <div class="_alias">
    <Title :title="title" :description="description" :image="image" />
    <v-container>
      <v-layout>
        <v-flex>
          <Content :readme="readme" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Content from '@/components/Markdown/Content'

export default {
  components: {
    Content
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
      readme: readme
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

<style lang="scss" scoped></style>
