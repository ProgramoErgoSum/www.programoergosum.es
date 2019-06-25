<template>
  <div class="legal">
    <v-container>
      <v-layout>
        <v-flex>
          <div class="text-xs-center">
            <h1 class="errorcode font-weight-black">
              404
            </h1>
            <h2 class="display">
              <p>
                Página no encontrada :(
              </p>
            </h2>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  head() {
    const title = '404 - Página no encontrada'

    return {
      title: title,
      meta: [{ name: 'robots', content: 'nofollow' }]
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
}
</style>
