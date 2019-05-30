<template>
  <section id="collaborations">
    <div class="section-head">
      <h3 class="section-title">
        Colaboraciones
      </h3>
      <p class="section-desc">
        Colaboramos en diferentes proyectos nacionales e Internacionales.
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
  name: 'Collaborations',
  data: () => ({
    projects: [
      {
        link: 'https://www.elcableamarillo.cc',
        img: 'elcableamarillo.png',
        title: 'El Cable Amarillo',
        description:
          'Proyecto educativo de código abierto para fomentar el uso de la programación y robótica en los centros educativos utilizando herramientas de software y hardware libre.'
      },
      {
        link: 'https://www.coderdojo.es',
        img: 'coderdojo.png',
        title: 'CoderDojo España',
        description:
          'Agrupación informal de dojos o clubes gratuitos de programación activos en territorio español.'
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
