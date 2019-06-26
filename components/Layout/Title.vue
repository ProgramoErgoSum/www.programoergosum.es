<template>
  <div id="title" :style="background()">
    <v-container class="asociacion">
      <v-layout row wrap>
        <v-flex xs12>
          <h2 class="font-weight-black">
            {{ title }}
          </h2>
          <h3 class="font-weight-light">
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
  },
  methods: {
    background() {
      const background =
        'background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.5))'
      return this.image !== ''
        ? `${background}, url(${this.image});`
        : background
    }
  }
}
</script>

<style lang="scss" scoped>
#title {
  margin: 0 0 20px;
  padding: 90px 0 130px;
  background: #2d333927;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: #2d3339;
  h2 {
    margin-bottom: 50px;
    font-size: 40px;
  }
  h3 {
    font-size: 30px;
  }
}
@media only screen and (max-width: 1904px) {
}
@media only screen and (max-width: 1264px) {
  h3 {
    font-size: 26px;
  }
}
@media only screen and (max-width: 960px) {
  #title {
    padding: 30px 0 50px;
    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 24px;
    }
  }
}
@media only screen and (max-width: 600px) {
  #title {
    padding: 30px 0 50px;
    h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }
    h3 {
      font-size: 18px;
    }
  }
}
</style>
