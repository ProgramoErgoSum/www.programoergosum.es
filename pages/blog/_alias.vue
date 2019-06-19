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
          <Content :content="content" />
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

    const path = `blog/${params.alias}/`
    let readme = ''
    try {
      readme = await import(`~/static/blog/${params.alias}/README.md`)
    } catch (err) {
      return error({ statusCode: 404, message: 'Página no encontrada' })
    }

    const content = readme.body.split('![](').join(`![](${path}`)
    return {
      title: blog.title,
      description: blog.description,
      image: `${path}/images/preview.png`,
      keywords: blog.keywords,
      content: content
    }
  }
}
</script>

<style lang="scss" scoped></style>
