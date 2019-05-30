<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <Full class="mb-5" />
        <Projects class="mb-5" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Full from '@/components/Index/Full'
import Projects from '@/components/Index/Projects'

export default {
  components: {
    Full,
    Projects
  },
  head() {
    const title = process.env.title
    const description = process.env.description
    const keywords = process.env.keywords
    const image = process.env.image
    const url = process.env.canonical + this.$route.path
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
}
</script>

<style lang="scss" scoped></style>
