<template>
  <div>
    <Title :title="metas.title" :description="metas.description" />
    <v-container fluid>
      <v-row justify="center">
        <v-col
          v-for="project in projects"
          :key="project.link"
          cols="12"
          xs="12"
          sm="12"
          md="6"
          lg="4"
        >
          <v-card
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            flat
          >
            <v-img
              :src="`images/proyectos/${project.img}`"
              :lazy-src="`/lazy.png`"
              :alt="`${project.title}`"
              class="white--text"
              height="250"
              gradient="to bottom, rgba(16,26,36,0), rgba(16,26,36,1)"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
              <v-card-title class="align-end fill-height">
                {{ project.title }}
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  asyncData({ store }) {
    return {
      metas: store.state.metas.proyectos
    }
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
      }
      /*
      {
        link: 'https://wikitic.github.io',
        img: 'wikitic.png',
        title: 'Wiki TIC',
        description:
          'Recopilatorio de prácticas educativas para fomentar el uso de las TIC en los niveles de ESO y Bachiller.'
      },
      {
        link: 'https://www.elcableamarillo.cc',
        img: 'elcableamarillo.png',
        title: 'El Cable Amarillo',
        description:
          'Proyecto educativo para fomentar el uso de la programación y la robótica en primaria y secundaria.'
      }
      */
    ]
  }),
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title,
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        // Open Graph
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
