<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div class="ma-5 pa-5 text-xs-center">
          <h1 class="errorcode font-weight-black">
            404
          </h1>
          <h2 class="display">
            <p class="mb-5 pb-5">Página no encontrada <span>&#128534;</span></p>
            <p class="font-weight-light">
              La página a la que estás intentando acceder ya no existe. En su
              lugar puedes acceder a la
              <nuxt-link to="/">página principal</nuxt-link> o navegar a través
              del menú de navegación superior o inferior.
            </p>
          </h2>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head() {
    const title = '404 - Página no encontrada'

    return {
      title: title,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, noarchive, nofollow'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.errorcode {
  text-align: center;
  vertical-align: middle;
  font-size: 170px;
  line-height: 170px;
  color: #d25f34;
  span {
    font-size: 30px;
  }
}
</style>
