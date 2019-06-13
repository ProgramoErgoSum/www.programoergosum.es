<template>
  <v-container class="asociacion">
    <v-layout row wrap>
      <v-flex xs12>
        <Metas
          :title="title"
          :description="description"
          :image="image"
          :keywords="keywords"
        />
        <Content :content="content" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Metas from '@/components/Layout/Metas'
import Content from '@/components/Markdown/Content'

export default {
  components: {
    Metas,
    Content
  },
  async asyncData({ route }) {
    const readme = await import(`~/static/asociacion/README.md`)
    const content = readme.body.split('![](').join(`![](${route.path}`)
    return {
      title: process.env.title,
      description: process.env.description,
      keywords: process.env.keywords,
      image: process.env.image,
      content: content
    }
  }
}
</script>

<style lang="scss" scoped></style>
