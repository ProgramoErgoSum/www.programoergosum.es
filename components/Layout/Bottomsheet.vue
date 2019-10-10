<template>
  <v-bottom-sheet v-model="sheet" persistent>
    <v-sheet class="pa-12 text-center" height="300px">
      <h3 class="mb-6 display-1 font-weight-black">
        ¿Quieres colaborar?
      </h3>
      <p class="max-width mb-6 title font-weight-light">
        Está en tus manos que este proyecto educativo
        <b class="font-weight-medium">siga siendo libre y gratuito</b>,
        <b class="font-weight-medium">realiza una donación</b>
        totalmente desinteresada y estarás colaborando.
      </p>
      <v-btn
        class="ma-3"
        color="success"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7N56RY2QKJJDS&source=url"
        @click="sheet = false"
      >
        Realiza una donación
      </v-btn>
      <v-btn class="ma-3" depressed color="error" @click="close">
        Quizá colabore más tarde
      </v-btn>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: 'Bottomsheet',
  data() {
    return {
      sheet: false
    }
  },
  mounted() {
    if (process.browser) {
      setTimeout(() => {
        this.sheet = true
      }, 30 * 1000)
    }
  },
  methods: {
    close() {
      this.sheet = false
      setTimeout(() => {
        this.sheet = true
      }, 60 * 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.max-width {
  max-width: 690px;
  margin: 0 auto;
}
</style>
