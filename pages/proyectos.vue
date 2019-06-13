<template>
  <v-container fluid class="proyectos">
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap justify-center>
          <v-flex v-for="project in projects" :key="project.link" md12 lg4>
            <v-card class="ma-3" :href="project.link" target="_blank">
              <v-img :src="`${project.img}`" :title="`${project.title}`" />
              <v-card-title primary-title>
                <h3 class="mb-2">{{ project.title }}</h3>
                <div>{{ project.description }}</div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        link: 'https://www.programoergosum.com',
        img: 'programoergosum.png',
        title: 'Programo Ergo Sum',
        description:
          'Plataforma de videotutoriales online para aprender programación y robótica educativa desde cero.'
      },
      {
        link: 'https://www.aprendeprogramando.es',
        img: 'aprendeprogramando.png',
        title: 'Aprende Programando',
        description:
          'Plataforma de aprendizaje STEM a través de la programación en distintos niveles de ESO y Bachiller.'
      },
      {
        link: 'https://wikitic.github.io',
        img: 'wikitic.png',
        title: 'Wiki TIC',
        description:
          'Proyecto educativo de código abierto para fomentar el uso de las TIC en los niveles de ESO y Bachiller.'
      }
    ]
  }),
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
