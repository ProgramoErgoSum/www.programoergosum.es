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
