<template>
  <section v-show="related.length > 0" class="mt-12 py-12 grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Tutoriales relacionados</h2>
        </v-col>
        <v-col
          v-for="item in related"
          :key="item.alias"
          cols="12"
          xs="12"
          sm="12"
          md="4"
        >
          <ItemCol :tutorial="item" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import ItemCol from '@/components/Pages/Tutoriales/ItemCol'

export default {
  name: 'Related',
  components: {
    ItemCol
  },
  props: {
    tutorial: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({ list: 'tutoriales/list' }),
    related() {
      let tutorials = this.list
      tutorials = tutorials.filter(el => el.alias !== this.tutorial.alias)
      if (this.tutorial.tags.hardware.length > 0) {
        tutorials = tutorials.filter(el =>
          el.tags.hardware.includes(this.tutorial.tags.hardware[0])
        )
      }
      if (this.tutorial.tags.software.length > 0) {
        tutorials = tutorials.filter(el =>
          el.tags.software.includes(this.tutorial.tags.software[0])
        )
      }
      // const ini = Math.floor(Math.random() * tutoriales.length) - 3
      // const end = ini + 3
      // return tutoriales.slice(ini, end)
      return tutorials.slice(0, 3)
    }
  }
}
</script>

<style lang="scss" scoped></style>
