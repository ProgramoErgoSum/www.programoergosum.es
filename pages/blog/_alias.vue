<template>
  <div class="_alias">
    <Metas :description="description" />
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

import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'
import Content from '@/components/Markdown/Content'

export default {
  components: {
    Metas,
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

    return {
      title: title,
      titleTemplate: 'Blog - %s'
    }
  }
}
</script>

<style lang="scss" scoped></style>
