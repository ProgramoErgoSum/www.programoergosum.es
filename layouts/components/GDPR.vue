<template>
  <v-dialog v-model="dialog" persistent max-width="640">
    <v-card class="pa-5">
      <v-card-title>
        Antes de continuar
      </v-card-title>
      <v-card-text>
        <p>
          En <b>ProgramoErgoSum</b> Utilizamos cookies propias y de terceros
          para fines analíticos y para mostrarte publicidad personalizada en
          base a un perfil elaborado a partir de tus hábitos de navegación (por
          ejemplo, páginas visitadas).
        </p>
        <p>
          También
          <b
            >utilizamos cookies de terceros necesarias para la reproducción de
            vídeos de YouTube</b
          >
          o cookies para la analítica web que nos ayudan a analizar y comprender
          cómo utiliza este sitio. Estas cookies se almacenarán en tu navegador
          solo con tu consentimiento. También puedes rechazar todas las cookies
          haciendo click
          <span class="text-decoration-underline" @click="reject">aquí</span>,
          pero se verá afectada tu experiencia de navegación.
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn class="primary" dark block depressed @click="accept">
          Aceptar cookies y seguir navegando gratis
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      dialog: false
    }
  },
  mounted() {
    if (process.browser) {
      this.dialog = localStorage.getItem('GDPR') === null
    }
  },
  methods: {
    ...mapMutations(['SET_GDPR']),
    accept() {
      const gdpr = 'accepted'
      localStorage.setItem('GDPR', gdpr)
      this.SET_GDPR(gdpr)
      this.dialog = false
      location.reload()
    },
    reject() {
      const gdpr = 'canceled'
      localStorage.setItem('GDPR', gdpr)
      this.SET_GDPR(gdpr)
      this.dialog = false
      this.$router.push({ path: '/colabora' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
