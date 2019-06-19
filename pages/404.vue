<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex>
        <div class="text-xs-center">
          <h1 class="errorcode font-weight-black">
            400
          </h1>
          <h2 class="display">
            <p>
              Página no encontrada
            </p>
          </h2>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  asyncData() {
    return {
      title: 'Error 404',
      description: '',
      keywords: [],
      image: ''
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
