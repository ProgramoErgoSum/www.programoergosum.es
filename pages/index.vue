<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex shrink>
        <section class="text-xs-center">
          <h1 class="mb-3">
            Asociación Programo Ergo Sum
          </h1>
          <h2 class="mb-5">
            Proyectos educativos
            <strong>abiertos</strong>
            para aprender
            <span class="stress">programación y robótica</span>
            con herramientas
            <strong>libres</strong>
          </h2>
        </section>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'index',
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

<style lang="scss" scoped>
h1 {
  font-weight: 600;
  font-size: 40px;
}
h2 {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  strong {
    font-weight: 500;
    color: #d25f34;
  }
  .stress {
    padding: 2px 5px;
    background: #d25f34;
    color: #fff;
  }
}
</style>
