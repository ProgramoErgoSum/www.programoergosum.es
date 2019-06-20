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
          <Content :readme="readme" />
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
    const path = `asociacion`
    const file = await import(`@/static/${path}/README.md`)
    const readme = {
      path: path,
      body: file.body
      // image: `${path}/images/preview.png`
    }

    return {
      title: process.env.title,
      description: process.env.description,
      keywords: process.env.keywords,
      image: process.env.image,
      readme: readme
    }
  }
}
</script>

<style lang="scss" scoped></style>
