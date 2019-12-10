<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" bottom left>
    <p class="ma-0 pa-0">
      Utilizamos cookies propias y de terceros para obtener datos estadísticos
      de la navegación de nuestros usuarios. Si continúa navegando consideramos
      que acepta su uso.
      <nuxt-link
        class="white--text"
        to="/legal/cookies"
        rel="noopener noreferrer"
      >
        Ver más
      </nuxt-link>
    </p>
    <v-btn @click="close" text small>
      Cerrar
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Privacy',
  data() {
    return {
      snackbar: false,
      timeout: 0
    }
  },
  mounted() {
    if (process.browser) {
      this.snackbar = localStorage.getItem('privacy') === null
    }
  },
  methods: {
    close() {
      localStorage.setItem('privacy', false)
      this.snackbar = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
