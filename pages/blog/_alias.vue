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
import blogs from '@/static/blog/list.json'

import Title from '@/components/Layout/Title'
import Content from '@/components/Markdown/Content'

export default {
  components: {
    Title,
    Content
  },
  validate({ params }) {
    const blog = blogs.find(e => {
      return e.alias === params.alias
    })
    return blog !== undefined
  },
  async asyncData({ params }) {
    const blog = blogs.find(e => {
      return e.alias === params.alias
    })

    const path = `blog/${params.alias}`
    const file = await import(`@/static/${path}/README.md`)
    const readme = {
      path: path,
      body: file.body
    }

    return {
      title: blog.title,
      description: blog.description,
      image: `${path}/preview.png`,
      keywords: blog.keywords,
      readme: readme
    }
  },
  head() {
    const title = this.title
    const description = this.description
    const keywords = this.keywords.toString()
    const image = `${process.env.canonical}/${this.image}`

    return {
      title: title,
      titleTemplate: 'Blog - %s',
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        { hid: 'keywords', name: 'keywords', content: keywords },
        // Facebook
        { hid: 'o:t', property: 'og:title', content: this.title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { hid: 't:t', name: 'twitter:title', content: this.title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
