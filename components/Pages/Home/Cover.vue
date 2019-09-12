<template>
  <v-container class="home">
    <v-row>
      <v-col cols="12">
        <section class="text-center">
          <h1 class="mb-3">
            Asociación Programo Ergo Sum
          </h1>
          <h2 class="mb-5">
            Proyectos educativos libres de
            <strong class="primary--text font-weight-medium"
              >código abierto</strong
            >
            para aprender
            <span class="px-3 py-1 white--text primary"
              >informática, programación, electrónica y robótica educativa</span
            >
            utilizando herramientas de
            <strong class="primary--text font-weight-medium"
              >software y hardware libre</strong
            >
          </h2>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Cover'
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
