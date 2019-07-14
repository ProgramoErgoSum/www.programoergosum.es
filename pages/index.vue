<template>
  <div>
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
    <section class="pt-5 pb-5">
      <Sponsors />
    </section>
    <section class="pt-5 pb-5 block-grey">
      <Patrons />
    </section>
    <section class="pt-5 pb-5">
      <Paypals />
    </section>
    <section>
      <Reg />
    </section>
  </div>
</template>

<script>
import metas from '@/store/api/v1/metas.json'

import What from '@/components/Pages/Home/What'
import Sponsors from '@/components/Pages/Colabora/Sponsors'
import Patrons from '@/components/Pages/Colabora/Patrons'
import Paypals from '@/components/Pages/Colabora/Paypals'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    What,
    Sponsors,
    Patrons,
    Paypals,
    Reg
  },
  asyncData() {
    return {
      metas: metas.index
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title: title,
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        // Facebook
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
