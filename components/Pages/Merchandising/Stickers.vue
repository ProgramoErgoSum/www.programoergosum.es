<template>
  <div id="printer">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h2 class="mb-3">Adhesivos</h2>
        </v-flex>
        <v-flex
          v-for="item in stickers"
          :key="item.name"
          xs12
          sm6
          md4
          class="pa-2"
        >
          <Card :card="item" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Card from '@/components/Pages/Merchandising/Card'

export default {
  components: {
    Card
  },
  data: () => ({
    stickers: [
      {
        link: '',
        img: 'negro.png',
        title: 'Adhesivo Negro',
        description: 'Adhesivo para portatil claro.'
      },
      {
        link: '',
        img: 'blanco.png',
        title: 'Adhesivo Blanco',
        description: 'Adhesivo para portatil oscuro.'
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
