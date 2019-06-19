<template>
  <div
    id="title"
    :style="
      `background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.5)), url(${image});`
    "
  >
    <v-container class="asociacion">
      <v-layout row wrap>
        <v-flex xs12>
          <h2 class="mb-5 display-2 font-weight-black">
            {{ title }}
          </h2>
          <h3 class="title font-weight-regular">
            {{ description }}
          </h3>
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
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
#title {
  margin: 0 0 20px;
  padding: 90px 0 130px;
  background: #2d333927;
  background-size: 100%;
  background-position-y: center;
  color: #2d3339;
}
</style>
