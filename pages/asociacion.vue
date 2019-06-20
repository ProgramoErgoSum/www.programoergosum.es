<template>
  <div id="asociacion">
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
    <Title :title="title" :description="description" />
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
import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'
import Content from '@/components/Markdown/Content'

export default {
  components: {
    Metas,
    Title,
    Content
  },
  async asyncData() {
    const path = `asociacion/`
    const readme = await import(`~/static/${path}README.md`)
    const content = readme.body.split('![](').join(`![](${path}`)
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
