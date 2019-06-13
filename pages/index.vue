<template>
  <v-container pa-0 ma-0 class="home">
    <v-layout row wrap>
      <v-flex xs12>
        <Metas
          :title="title"
          :description="description"
          :image="image"
          :keywords="keywords"
        />
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
      <!--
      <v-layout wrap justify-center class="home-button">
        <v-flex
          md2
          xs6
          :class="{ 'home-link-item': $vuetify.breakpoint.smAndUp }"
          class="text-xs-center"
        >
          <v-btn
            outline
            class="home-link"
            color="white"
            href="http://github.com/KP-Kepra"
            target="_blank"
          >
            <v-icon small left class="fab fa-github-square home-icon" />
            <div class="caption">Github</div>
          </v-btn>
        </v-flex>
        <v-flex
          md2
          xs6
          :class="{ 'home-link-item': $vuetify.breakpoint.smAndUp }"
          class="text-xs-center"
        >
          <v-btn
            outline
            class="home-link"
            color="white"
            href="https://www.linkedin.com/in/kevin-pratama/"
            target="_blank"
          >
            <v-icon small left class="fab fa-linkedin home-icon" />
            <div class="caption">LinkedIn</div>
          </v-btn>
        </v-flex>
        <v-flex
          md2
          xs6
          :class="{ 'home-link-item': $vuetify.breakpoint.smAndUp }"
          class="text-xs-center"
        >
          <v-btn
            outline
            color="white"
            class="home-link"
            href="https://kp-kepra.github.io/static/CV.pdf"
            target="_blank"
          >
            <v-icon small left class="fas fa-pen-square home-icon" />
            <div class="caption">Resume</div>
          </v-btn>
        </v-flex>
        <v-flex
          md2
          xs6
          :class="{ 'home-link-item': $vuetify.breakpoint.smAndUp }"
          class="text-xs-center"
        >
          <v-btn
            outline
            class="home-link"
            color="white"
            href="mailto:kevinpr153@gmail.com"
          >
            <v-icon small left class="fas fa-envelope-square home-icon" />
            <div class="caption">Email</div>
          </v-btn>
        </v-flex>
      </v-layout>
      -->
    </v-layout>
  </v-container>
</template>

<script>
import Metas from '@/components/Layout/Metas'

export default {
  components: {
    Metas
  },
  asyncData() {
    return {
      title: process.env.title,
      description: process.env.description,
      keywords: process.env.keywords,
      image: process.env.image
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  max-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  margin-top: -70px !important;
  padding-top: 35vh !important;
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
}
</style>
