<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col class="errorcode text-center" cols="12">
        <h3 class="font-weight-black">
          {{ error.statusCode }}
        </h3>
        <p>
          {{ error.message }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.error.message
    }
  }
}
</script>

<style lang="scss" scoped>
.errorcode {
  h3 {
    font-size: 170px;
    line-height: 170px;
  }
  p {
    font-size: 30px;
  }
}
</style>
