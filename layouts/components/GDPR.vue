<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" bottom color="white">
    <p class="mb-5 black--text">
      Utilizamos cookies propias y de terceros para obtener datos estadísticos
      de la navegación de nuestros usuarios
      <b>
        con el objetivo de mantener y mejorar nuestros proyectos educativos
        libres y gratuitos</b
      >.
      <nuxt-link to="/legal/cookies" rel="noopener noreferrer">
        Leer más
      </nuxt-link>
    </p>
    <div class="text-center">
      <v-btn small outlined dark class="primary--text" @click="accept">
        Aceptar y seguir navegando gratis
      </v-btn>
      <v-btn small outlined class="primary--text" @click="reject">
        Rechazar
      </v-btn>
    </div>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      timeout: -1
    }
  },
  mounted() {
    if (process.browser) {
      this.snackbar = localStorage.getItem('GDPR') === 'canceled'
    }
  },
  methods: {
    accept() {
      localStorage.setItem('GDPR', 'accepted')
      this.snackbar = false
      location.reload()
    },
    reject() {
      localStorage.setItem('GDPR', 'canceled')
      this.snackbar = false
      this.$router.push({ path: '/colabora' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
