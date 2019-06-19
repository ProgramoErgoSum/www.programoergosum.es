<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex>
            <div class="text-xs-center">
              <h1 class="errorcode font-weight-black">
                {{ error.statusCode }}
              </h1>
              <h2 class="display ">Página no encontrada</h2>
              <NuxtLink to="/">
                Home page
              </NuxtLink>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
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

<style scoped>
.errorcode {
  text-align: center;
  vertical-align: middle;
  font-size: 170px;
  line-height: 170px;
}
</style>
