<template>
  <div id="centros">
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <Map :centers="centers" />
  </div>
</template>

<script>
import metas from '@/static/metas.json'
import centers from '@/static/centros/list.json'

import Title from '@/components/Layout/Title'
import Map from '@/components/Pages/Centros/Map'

export default {
  components: {
    Title,
    Map
  },
  asyncData() {
    return {
      metas: metas.centros,
      centers: centers
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.canonical}/${this.metas.image}`
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

<style lang="scss" scoped></style>
