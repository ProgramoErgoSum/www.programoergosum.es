<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Adhesivos</h2>
      </v-col>
      <v-col
        v-for="item in stickers"
        :key="item.name"
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
