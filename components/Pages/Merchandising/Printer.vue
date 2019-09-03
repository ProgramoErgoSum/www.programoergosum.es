<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Impresión 3D</h2>
      </v-col>
      <v-col
        v-for="item in printer"
        :key="item.link"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="4"
        xl="3"
        class="pa-2"
      >
        <Card :card="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/Pages/Merchandising/Card'

export default {
  components: {
    Card
  },
  data: () => ({
    printer: [
      {
        link: 'https://www.thingiverse.com/thing:2821356',
        img: 'llavero.png',
        title: 'Llavero',
        description: 'Llavero con el logotipo de la asociación.'
      },
      {
        link: 'https://www.thingiverse.com/thing:2869635',
        img: 'trofeo.png',
        title: 'Trofeo',
        description: 'Trofeo con el logotipo de la asociación.'
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
