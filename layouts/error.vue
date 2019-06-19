<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex>
        <div class="text-xs-center">
          <h1 class="errorcode font-weight-black">
            {{ error.statusCode }}
          </h1>
          <h2 class="display">
            <p v-if="error.statusCode == 404">
              Página no encontrada
            </p>
            <p v-else>
              {{ error.message }}
            </p>
          </h2>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
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
