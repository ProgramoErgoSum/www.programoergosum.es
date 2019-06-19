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
import activities from '@/static/blog/list.json'

import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'
import Content from '@/components/Markdown/Content'

export default {
  components: {
    Metas,
    Title,
    Content
  },
  async asyncData({ params }) {
    const activity = activities.find(e => {
      return e.alias === params.alias
    })
    const path = `blog/${params.alias}/`
    const readme = await import(`~/static/blog/${params.alias}/README.md`)
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

<style lang="scss" scoped></style>
