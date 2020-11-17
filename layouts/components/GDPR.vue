<template>
  <v-dialog v-model="dialog" persistent max-width="640">
    <v-card class="pa-3">
      <v-card-subtitle class="d-none d-md-flex pa-0 mb-3 border">
        <div>
          <p class="mb-1 text-h5 font-weight-bold">Antes de continuar</p>
          <p>Sí, también tenemos cookies...</p>
        </div>
        <v-spacer />
        <LogoPES size="50" />
      </v-card-subtitle>
      <v-card-text class="pa-0 text-caption">
        <p class="mb-1">
          Esta web es un proyecto educativo libre y gratuito de la Asociación
          Programo Ergo Sum y utilizamos cookies que se almacenarán en tu
          navegador solo con tu consentimiento expreso.
        </p>
        <ul class="ma-0 py-2 pl-3">
          <li class="mb-1">
            Utilizamos
            <b>cookies propias técnicas y de terceros para fines analíticos</b>
            que nos ayudan a analizar, medir y comprender cómo utiliza este
            sitio para poder mejorar el proyecto.
          </li>
          <li class="mb-1">
            Utilizamos
            <b
              >cookies de terceros necesarias para reproducir vídeos de
              YouTube</b
            >
            en esta plataforma.
          </li>
          <li class="mb-1">
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
          Puedes
          <span
            class="text-decoration-underline"
            style="cursor: pointer"
            @click="reject"
            >rechazar todas las cookies</span
          >, pero se verá afectada tu experiencia de navegación y
          <b>es posible que no puedas acceder a ciertos contenidos</b> de esta
          plataforma.
        </p>
      </v-card-text>
      <v-card-actions class="ma-0 pa-0">
        <v-btn class="primary" dark block depressed @click="accept">
          Aceptar cookies y continuar
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
      this.$router.push({ path: '/legal/cookies' })
    }
  }
}
</script>

<style lang="scss" scoped>
.border {
  border-bottom: 1px solid #f0f0f0;
}
</style>
