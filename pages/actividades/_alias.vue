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
import activities from '@/static/actividades/list.json'

import Metas from '@/components/Layout/Metas'
import Markdown from '@/components/Markdown'

export default {
  components: {
    Metas,
    Markdown
  },
  async asyncData({ params }) {
    const activity = activities.find(e => {
      return e.alias === params.alias
    })
    const path = `/actividades/${params.alias}/`
    const readme = await import(
      `~/static/actividades/${params.alias}/README.md`
    )
    const content = readme.body.split('![](').join(`![](${path}`)
    return {
      title: activity.title,
      description: activity.description,
      image: `${path}/preview.png`,
      keywords: activity.keywords,
      content: content
    }
  }
}
</script>

<style lang="scss" scoped></style>
