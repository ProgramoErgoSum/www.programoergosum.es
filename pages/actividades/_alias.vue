<template>
  <div class="_alias">
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

import Title from '@/components/Layout/Title'
import Content from '@/components/Markdown/Content'
import Toc from '@/components/Markdown/Toc'

export default {
  components: {
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
      body: file.body
    }

    return {
      title: activity.title,
      description: activity.description,
      image: `/${path}/preview.png`,
      readme: readme
    }
  },
  head() {
    const title = this.title
    const description = this.description
    const image = `${process.env.canonical}${this.image}`
    const canonical = `${process.env.canonical}${this.$route.path}`

    return {
      title: title,
      meta: [
        // Global
        { rel: 'canonical', href: canonical },
        { hid: 'description', name: 'description', content: description },
        // Facebook
        { property: 'og:url', content: canonical },
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
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
