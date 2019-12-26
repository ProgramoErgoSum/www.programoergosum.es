<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Donaciones</h2>
        <p>
          Si te gustan nuestros proyectos educativos y quieres ayudarnos
          aportando tu granito de arena, puedes realizar una
          <b>donación totalmente desinteresada</b>. Para agradecertelo,
          aparecerá tu nombre en esta sección.
        </p>
      </v-col>
      <v-col cols="12">
        <template v-for="(item, key) in donations">
          <v-chip
            v-if="item.twitter"
            :key="key"
            :href="item.twitter"
            label
            outlined
            class="ma-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-avatar class="mr-1">
              <v-icon size="18" color="#00aced">mdi-twitter</v-icon>
            </v-avatar>
            {{ item.name }}
          </v-chip>
          <v-chip
            v-else-if="item.website"
            :key="key"
            :href="item.website"
            label
            outlined
            class="ma-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-avatar class="mr-1">
              <v-icon size="18" color="#333">mdi-link</v-icon>
            </v-avatar>
            {{ item.name }}
          </v-chip>
          <v-chip v-else :key="key" label outlined class="ma-1">
            {{ item.name }}
          </v-chip>
        </template>
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
      // 15
      {
        name: 'Julio Clemente Cordeiro',
        website: 'http://www.edu.xunta.gal/centros/iessalvadormadariaga'
      },
      // 10
      {
        name: 'Juan Antonio Pérez',
        twitter: 'https://twitter.com/profetonino'
      },
      {
        name: 'Sergio Pérez'
      },
      // 5
      {
        name: 'David Pons'
      },
      {
        name: 'Francisco José Marín'
      },
      {
        name: 'Javier Garcia'
      },
      {
        name: 'José Antonio Torrecillas'
      },
      {
        name: 'María Bouvier'
      },
      {
        name: 'Maria Moure'
      },
      {
        name: 'Nasim Maldonado'
      },
      // 1
      {
        name: 'Andres Montilla'
      },
      {
        name: 'Carlos Hernán'
      },
      {
        name: 'Julieta Brenda'
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
