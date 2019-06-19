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
      <v-layout row wrap>
        <v-flex sm12 md9>
          <Content :content="content" />
        </v-flex>
        <v-flex md3 class="hidden-sm-and-down">
          <div class="toc">
            <Toc :content="content" />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import activities from '@/static/actividades/list.json'

import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'
import Content from '@/components/Markdown/Content'
import Toc from '@/components/Markdown/Toc'

export default {
  components: {
    Metas,
    Title,
    Content,
    Toc
  },
  async asyncData({ params }) {
    const activity = activities.find(e => {
      return e.alias === params.alias
    })
    const path = `actividades/${params.alias}/`
    const readme = await import(
      `~/static/actividades/${params.alias}/README.md`
    )
    const content = readme.body.split('![](').join(`![](${path}`)
    return {
      title: activity.title,
      description: activity.description,
      image: `${path}/images/preview.png`,
      keywords: activity.keywords,
      content: content
    }
  }
}
</script>

<style lang="scss" scoped>
.toc {
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
  z-index: 2;
}
</style>
