<template>
  <div id="title">
    <v-container class="asociacion">
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="mb-3 display">
            {{ title }}
          </h1>
          <p>
            {{ description }}
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
#title {
  margin: 0 0 20px;
  padding: 30px 0;
  background: #d25f34;
  color: #fff;
}
</style>
