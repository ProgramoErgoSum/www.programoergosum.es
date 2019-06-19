<template>
  <div id="proyectos">
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
    <Title :title="title" :description="description" />
    <v-container fluid>
      <v-layout row wrap>
        <v-flex v-for="project in projects" :key="project.link" xs12 md12 lg4>
          <v-card class="ma-3" :href="project.link" target="_blank">
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
import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'

export default {
  components: {
    Metas,
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
  asyncData({ route }) {
    return {
      title: 'Proyectos educativos',
      description: process.env.description,
      keywords: process.env.keywords,
      image: process.env.image
    }
  }
}
</script>

<style lang="scss" scoped></style>
