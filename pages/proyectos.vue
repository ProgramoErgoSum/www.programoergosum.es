<template>
  <div id="proyectos">
    <Title :title="metas.title" :description="metas.description" />
    <v-container fluid>
      <v-layout row wrap>
        <v-flex v-for="project in projects" :key="project.link" xs12 md12 lg4>
          <v-card
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img
              :src="`proyectos/images/${project.img}`"
              :lazy-src="`/lazy.png`"
              :title="`${project.title}`"
              height="250"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-layout>
              </template>
            </v-img>
            <v-card-title primary-title>
              <h3 class="mb-2">{{ project.title }}</h3>
              <div>{{ project.description }}</div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import metas from '@/static/metas.json'

import Title from '@/components/Layout/Title'

export default {
  components: {
    Title
  },
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
  asyncData() {
    return {
      metas: metas.proyectos
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
