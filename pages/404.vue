<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <div class="errorcode text-center">
          <h3 class="font-weight-black">
            404
          </h3>
          <p class="mb-5 pb-5">Página no encontrada <span>&#128534;</span></p>
          <p class="font-weight-light">
            La página a la que estás intentando acceder ya no existe.<br />En su
            lugar puedes acceder a la
            <nuxt-link to="/">página principal</nuxt-link>.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  head() {
    const title = '404 - Página no encontrada'
    return {
      title,
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
  h3 {
    font-size: 170px;
    line-height: 170px;
    color: #ae4119;
  }
  p {
    font-size: 30px;
  }
}
</style>
