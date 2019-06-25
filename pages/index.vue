<template>
  <div>
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />

    <v-container class="home">
      <v-layout row wrap>
        <v-flex xs12>
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

    <What />
    <section class="pt-5 pb-5 block-grey">
      <Sponsors />
    </section>
    <section class="pt-5 pb-5">
      <Patrons :patrons="patrons" />
    </section>
    <section>
      <Reg />
    </section>
  </div>
</template>

<script>
import Metas from '@/components/Layout/Metas'
import What from '@/components/Pages/Home/What'
import Sponsors from '@/components/Pages/Colabora/Sponsors'
import Patrons from '@/components/Pages/Colabora/Patrons'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    Metas,
    What,
    Sponsors,
    Patrons,
    Reg
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
  margin-top: -70px;
  padding: 35vh 20px;
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
.block-grey {
  background: #f0f0f0;
}
@media only screen and (max-width: 1904px) {
}
@media only screen and (max-width: 1264px) {
}
@media only screen and (max-width: 960px) {
  .home {
    min-height: auto;
    max-height: auto;
    margin-top: -50px;
    padding: 150px 20px 70px;
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 20px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .home {
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 20px;
    }
  }
}
</style>
