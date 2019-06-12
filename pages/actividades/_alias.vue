<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex shrink>
        <Metas
          :title="title"
          :description="description"
          :image="image"
          :keywords="keywords"
        />
        <Markdown :content="content" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Metas from '@/components/Layout/Metas'
import Markdown from '@/components/Markdown'

export default {
  components: {
    Metas,
    Markdown
  },
  async asyncData({ route, params }) {
    const metas = await import(
      `~/static/actividades/${params.alias}/config.json`
    )
    const readme = await import(
      `~/static/actividades/${params.alias}/README.md`
    )
    const content = readme.body.split('![](').join(`![](${route.path}`)
    return {
      title: metas.title,
      description: metas.description,
      image: `${route.path}preview.png`,
      keywords: metas.keywords,
      content: content
    }
  }
}
</script>

<style lang="scss" scoped></style>
