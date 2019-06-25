<template>
  <div class="_alias">
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
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
  async asyncData({ params, error }) {
    const blog = blogs.find(e => {
      return e.alias === params.alias
    })

    const path = `blog/${params.alias}`
    let file = null
    if (blog === undefined) {
      file = await import(`@/static/${path}/README.md`)
    } else {
      file = {
        body: '# 404'
      }
    }

    const readme = {
      path: path,
      body: file.body,
      image: `${path}/preview.png`
    }
    return {
      title: blog.title,
      description: blog.description,
      image: readme.image,
      keywords: blog.keywords,
      readme: readme
    }
  }
}
</script>

<style lang="scss" scoped></style>
