<template>
  <v-snackbar v-model="snackbar" dark bottom left>
    <p class="ma-0 pa-0">
      Utilizamos cookies propias y de terceros para obtener datos estadísticos
      de la navegación de nuestros usuarios. Si continúa navegando consideramos
      que acepta su uso.
      <nuxt-link to="/legal/cookies" rel="noopener noreferrer">
        Ver más
      </nuxt-link>
    </p>
    <v-btn text small @click="snackbar = false">
      Cerrar
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Privacy',
  data() {
    return {
      snackbar: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
