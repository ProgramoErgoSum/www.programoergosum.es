<template>
  <div>
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
    <Content :content="content" />
  </div>
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
