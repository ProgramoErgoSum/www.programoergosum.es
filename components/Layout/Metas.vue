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
    image: {
      type: String,
      default: process.env.image
    }
  },
  head() {
    const title = this.title
    const description = this.description
    const image = `${process.env.canonical}/${this.image}`

    return {
      meta: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image }
      ]
    }
  }
  /*
  head() {
    const title = this.title
    const description = this.description
    const keywords = this.keywords.toString()
    const image = `${process.env.canonical}/${this.image}`
    const url = `${process.env.canonical}/${this.$route.path}`

    return {
      title: title,
      meta: [
        { rel: 'canonical', href: url },
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image }
      ]
    }
  }
  */
}
</script>
