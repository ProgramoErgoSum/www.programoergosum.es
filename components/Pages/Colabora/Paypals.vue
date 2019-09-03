<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Donaciones</h2>
      </v-col>
      <v-col cols="12">
        <v-chip v-for="(item, index) in paypals" :key="index" class="ml-1">
          <v-avatar>
            <v-icon>mdi-account-circle</v-icon>
          </v-avatar>
          {{ item.name }}
        </v-chip>
      </v-col>
      <v-col cols="12">
        <div class="my-6">
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
            tile
            color="secondary"
          >
            Realiza una donación
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ paypals: 'collaborators/paypals' })
  }
}
</script>

<style lang="scss" scoped></style>
