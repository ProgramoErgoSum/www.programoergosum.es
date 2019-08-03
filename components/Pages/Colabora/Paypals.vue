<template>
  <v-container>
    <v-layout class="paypals" row wrap>
      <v-flex xs12>
        <h2 class="mb-5">Donaciones</h2>
      </v-flex>
      <v-flex xs12>
        <v-chip v-for="(item, index) in paypals" :key="index">
          <v-avatar>
            <v-icon>account_circle</v-icon>
          </v-avatar>
          {{ item.name }}
        </v-chip>
      </v-flex>
      <v-flex xs12>
        <div class="mt-5 mb-3">
          <p>
            También puedes <strong>realizar una donación</strong> con el importe
            que creas necesario y aparecerás en esta sección. El importe
            recaudado será destinados al mantenimiento informático y desarrollo
            de nuevos proyectos educativos.
          </p>

          <v-btn
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7N56RY2QKJJDS&source=url"
            target="_blank"
            rel="noopener noreferrer"
            x-large
            color="secondary"
          >
            Realiza una donación
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    paypals() {
      return this.$store.state.collaborators.paypals
    }
  }
}
</script>

<style lang="scss" scoped></style>
