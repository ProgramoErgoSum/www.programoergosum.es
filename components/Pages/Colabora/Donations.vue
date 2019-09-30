<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Donaciones</h2>
        <p>
          Realiza una <b>donación totalmente desinteresada</b> con el importe
          que creas necesario y aparecerás en esta sección.
        </p>
      </v-col>
      <v-col cols="12">
        <v-chip v-for="item in donations" :key="item" class="ml-1">
          <v-avatar class="mr-1">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
          {{ item }}
        </v-chip>
      </v-col>
      <v-col cols="12">
        <div class="my-6">
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
export default {
  name: 'Donations',
  data: () => ({
    donations: [
      'Julio Clemente Cordeiro',
      'Nasim Maldonado',
      'David Pons',
      'Carlos Hernán Mora',
      'Julieta Brenda',
      'Andres Montilla'
    ]
  })
}
</script>

<style lang="scss" scoped></style>
