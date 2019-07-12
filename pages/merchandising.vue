<template>
  <div>
    <Title :title="metas.title" :description="metas.description" />
    <Printer />
    <Stickers />
  </div>
</template>

<script>
import metas from '@/static/metas.json'

import Title from '@/components/Layout/Title'
import Printer from '@/components/Pages/Merchandising/Printer'
import Stickers from '@/components/Pages/Merchandising/Stickers'

export default {
  components: {
    Title,
    Printer,
    Stickers
  },
  asyncData() {
    return {
      metas: metas.merchandising
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.canonical}/${this.metas.image}`

    return {
      title: title,
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        // Facebook
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
