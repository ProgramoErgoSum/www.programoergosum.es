<template>
  <v-dialog v-model="dialog" persistent max-width="760">
    <v-card class="pa-5">
      <v-card-title>
        <h3>Antes de continuar</h3>
        <v-spacer />
        <LogoPES size="60" />
      </v-card-title>
      <v-card-subtitle>
        Sí, también tenemos cookies...
      </v-card-subtitle>
      <v-card-text class="pt-5">
        <p>
          Esta web es un proyecto educativo libre y gratuito de la Asociación
          Programo Ergo Sum y utilizamos las siguiente cookies:
        </p>
        <ul class="mb-3">
          <li>
            Utilizamos
            <b>cookies propias técnicas y de terceros para fines analíticos</b>
            que nos ayudan a analizar, medir y comprender cómo utiliza este
            sitio para poder mejorar el proyecto.
          </li>
          <li>
            Utilizamos
            <b
              >cookies de terceros necesarias para que puedas reproducir los
              vídeos de YouTube en esta plataforma</b
            >.
          </li>
          <li>
            Utilizamos
            <b
              >cookies de terceros para mostrar publicidad personalizada
              comportamental</b
            >
            en base a un perfil elaborado a partir de tus hábitos de navegación
            cuando visitas una página web por ejemplo.
          </li>
        </ul>
        <p>
          Estas cookies se almacenarán en tu navegador solo con tu
          consentimiento expreso, aunque también puedes
          <span class="text-decoration-underline" @click="reject"
            >rechazar todas las cookies</span
          >,
          <b
            >pero se verá afectada tu experiencia de navegación y es posible que
            no puedas acceder a ciertos contenidos de la plataforma</b
          >.
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
