<template>
  <v-system-bar color="secondary" window dark fixed app>
    <div class="subtitle-1 text-center">
      <v-icon>mdi-message</v-icon>
      ¿Te gustaría que este proyecto educativo siguiese siendo libre y gratuito?
      <a
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7N56RY2QKJJDS&source=url"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ayúdanos realizando una donación
      </a>
    </div>
  </v-system-bar>
</template>

<script>
export default {
  name: 'Systembar'
}
</script>

<style lang="scss" scoped></style>
