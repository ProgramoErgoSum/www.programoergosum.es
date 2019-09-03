<template>
  <div>
    <v-container class="home">
      <v-row>
        <v-col cols="12">
          <section class="text-center">
            <h1 class="mb-3">
              Asociación Programo Ergo Sum
            </h1>
            <h2 class="mb-5">
              Proyectos educativos libres de
              <strong>código abierto</strong>
              para aprender
              <span class="stress"
                >informática, programación, electrónica y robótica
                educativa</span
              >
              utilizando herramientas de
              <strong>software y hardware libre</strong>
            </h2>
          </section>
        </v-col>
      </v-row>
    </v-container>

    <section>
      <What />
    </section>

    <!--
    <section class="py-12">
      <Sponsors />
    </section>
    -->
    <section class="py-12 block-grey">
      <Patrons />
    </section>
    <section class="py-12">
      <Volunteers />
    </section>

    <section>
      <Reg />
    </section>
  </div>
</template>

<script>
import What from '@/components/Pages/Home/What'
// import Sponsors from '@/components/Pages/Colabora/Sponsors'
import Patrons from '@/components/Pages/Colabora/Patrons'
import Volunteers from '@/components/Pages/Colabora/Volunteers'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    What,
    // Sponsors,
    Patrons,
    Volunteers,
    Reg
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.index
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
  margin-top: -110px;
  padding: 35vh 20px;
  h1 {
    font-weight: 600;
    font-size: 40px;
  }
  h2 {
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
    line-height: 1.8;
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
