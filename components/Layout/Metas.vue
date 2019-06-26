<template>
  <span v-if="false" />
</template>

<script>
export default {
  name: 'Metas',
  props: {
    title: {
      type: String,
      default: process.env.title
    },
    description: {
      type: String,
      default: process.env.description
    },
    keywords: {
      type: Array,
      default: process.env.keywords
    },
    image: {
      type: String,
      default: process.env.image
    }
  },
  head() {
    const title = this.title
    const description = this.description
    const keywords = this.keywords.toString()
    const image = `${process.env.canonical}/${this.image}`

    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'keywords', name: 'keywords', content: keywords },
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>
