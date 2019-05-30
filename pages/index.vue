<template>
  <v-container fill-height>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm12 md7>
        <section class="mb-5">
          <h1 class="mb-3 text-xs-center">
            Asociación Programo Ergo Sum
          </h1>
          <h2 class="text-xs-center">
            Proyectos educativos
            <strong class="orange--text text--darken-4">abiertos</strong>
            para aprender
            <span class="under orange darken-4">programación y robótica</span>
            con herramientas
            <strong class="orange--text text--darken-4">libres</strong>.
          </h2>
        </section>
      </v-flex>
      <v-flex xs12>
        <section class="mb-5">
          <h3 class="mb-3 title text-xs-center">
            Nuestros proyectos educativos
          </h3>
          <v-container grid-list-md text-xs-center>
            <v-layout row wrap justify-center align-center>
              <v-flex v-for="project in projects" :key="project.link" xs12 md3>
                <a :href="`${project.link}`" target="_blank">
                  <img
                    class="logo"
                    :src="`${project.img}`"
                    :title="`${project.title}`"
                  />
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </section>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head() {
    const title = 'Asociación Programo Ergo Sum'
    const description =
      'Proyectos educativos abiertos para aprender programación y robótica con herramientas libres.'
    const keywords = 'asociación, educación'
    const image = 'default.png'
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
  },
  data: () => ({
    projects: [
      {
        link: 'https://www.programoergosum.com',
        img: 'logo-programoergosum.png',
        title: 'Programo Ergo Sum'
      },
      {
        link: 'https://www.aprendeprogramando.es',
        img: 'logo-aprendeprogramando.png',
        title: 'Aprende Programando'
      },
      {
        link: 'https://wikitic.github.io',
        img: 'logo-wikitic.png',
        title: 'Wiki TIC'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
  font-size: 40px;
}
h2 {
  font-weight: 300;
  strong {
    font-weight: 500;
  }
  .under {
    padding: 2px 5px;
    color: #fff;
  }
}
h3 {
  font-weight: 400;
  font-size: 20px;
}
.logo {
  display: inline-block;
  max-height: 60px;
  margin: 0 10px 20px;
}
</style>
