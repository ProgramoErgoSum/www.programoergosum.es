<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="mb-3">Impresión 3D</h2>
      </v-flex>
      <v-flex
        v-for="item in printer"
        :key="item.link"
        xs12
        sm6
        md4
        class="pa-2"
      >
        <Card :card="item" />
      </v-flex>
    </v-layout>
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
