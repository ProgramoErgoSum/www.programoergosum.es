<template>
  <section v-show="related.length > 0" class="mt-12 py-12 grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Artículos relacionados</h2>
        </v-col>
        <v-col
          v-for="item in related"
          :key="item.alias"
          cols="12"
          xs="12"
          sm="12"
          md="4"
        >
          <ItemCol :blog="item" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import ItemCol from '@/components/Pages/Blog/ItemCol'

export default {
  name: 'Related',
  components: {
    ItemCol
  },
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({ list: 'blogs/list' }),
    related() {
      let blogs = this.list
      blogs = blogs.filter(el => el.alias !== this.blog.alias)
      this.blog.tags.map(tag => {
        blogs = blogs.filter(el => el.tags.includes(this.blog.tags[0]))
      })
      return blogs.slice(0, 3)
    }
  }
}
</script>

<style lang="scss" scoped></style>
