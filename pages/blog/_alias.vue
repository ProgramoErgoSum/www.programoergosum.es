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
  /*
  validate({ params }) {
    const blog = blogs.find(e => {
      return e.alias === params.alias
    })
    return blog !== undefined
  },
  */
  async asyncData({ params, error }) {
    const blog = blogs.find(e => {
      return e.alias === params.alias
    })

    if (blog === undefined)
      throw new Error({ statusCode: 404, message: 'Not found' })

    const path = `blog/${params.alias}`
    let file
    try {
      file = await import(`@/static/${path}/README.md`)
    } catch (e) {
      return error({ statusCode: 404, message: 'Not found' })
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
