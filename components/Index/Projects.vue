<template>
  <section id="projects">
    <div class="section-head">
      <h3 class="section-title">
        Proyectos
      </h3>
      <p class="section-desc">
        Todos los proyectos educativos se encuentran bajo licencia
        <b>Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional.</b>
      </p>
    </div>
    <v-container fluid>
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
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Projects',
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
  })
}
</script>

<style lang="scss" scoped></style>
