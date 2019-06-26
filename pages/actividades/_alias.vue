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
          <Content :readme="readme" />
        </v-flex>
        <v-flex md3 class="hidden-sm-and-down">
          <div class="toc">
            <Toc :readme="readme" />
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
  validate({ params }) {
    const activity = activities.find(e => {
      return e.alias === params.alias
    })
    return activity !== undefined
  },
  async asyncData({ params, router, error }) {
    const activity = activities.find(e => {
      return e.alias === params.alias
    })

    const path = `actividades/${params.alias}`
    const file = await import(`@/static/${path}/README.md`)
    const readme = {
      path: path,
      body: file.body,
      image: `${path}/preview.png`
    }

    return {
      title: activity.title,
      description: activity.description,
      image: readme.image,
      keywords: activity.keywords,
      readme: readme
    }
  }
}
</script>

<style lang="scss" scoped>
.toc {
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
}
</style>
