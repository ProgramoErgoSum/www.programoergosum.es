<template>
  <v-container class="_alias">
    <v-layout row wrap>
      <v-flex sm12 md9>
        <Metas
          :title="title"
          :description="description"
          :image="image"
          :keywords="keywords"
        />
        <Content :content="content" />
      </v-flex>
      <v-flex md3 class="hidden-sm-and-down">
        <div class="toc">
          <Toc :content="content" />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import activities from '@/static/actividades/list.json'

import Metas from '@/components/Layout/Metas'
import Content from '@/components/Markdown/Content'
import Toc from '@/components/Markdown/Toc'

export default {
  components: {
    Metas,
    Content,
    Toc
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

<style lang="scss" scoped>
.toc {
  position: fixed;
}
</style>
