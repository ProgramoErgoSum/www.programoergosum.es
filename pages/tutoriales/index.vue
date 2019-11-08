<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="2" xl="2">
          <div class="sticky-top">
            <v-card flat color="transparent" class="pa-0 py-2">
              <v-text-field
                v-model="search"
                label="Buscar"
                outlined
                :messages="`${filter.length} tutoriales`"
                append-icon="mdi-magnify"
                validate-on-blur
              />
            </v-card>
            <!--
            <template
              v-for="tag in tags.filter(el => el.category === 'technology')"
            >
              <v-checkbox
                :key="tag.alias"
                v-model="tagsSelected"
                :label="tag.name"
                :value="tag.name"
                :disabled="!tag.visible"
                color="primary"
                hide-details
              />
            </template>
            -->
            <categories :tags="tags" />
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="10" xl="10">
          <v-row>
            <v-col
              v-for="tutorial in filter.slice(0, pagItems)"
              :key="tutorial.alias"
              xs="12"
              sm="6"
              md="4"
              lg="4"
              xl="3"
              class="pa-2"
            >
              <Item :tutorial="tutorial" />
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn
                v-if="filter.length > pagItems"
                depressed
                small
                @click="pagItems += 24"
              >
                Mostrar más
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Categories from '@/components/Pages/Tutoriales/Categories'
import Item from '@/components/Pages/Tutoriales/Item'

export default {
  components: {
    Categories,
    Item
  },
  data() {
    return {
      search: '',
      pagItems: 24
      // tagsSelected: []
    }
  },
  computed: {
    filter() {
      let tutoriales = this.tutoriales
      /*
      if (this.tagsSelected.length > 0) {
        tutoriales = tutoriales.filter(el => {
          const tags = el.tags.technology
            .concat(el.tags.hardware)
            .concat(el.tags.software)
            .concat(el.tags.level)
            .concat(el.tags.others)
          if (this.tagsSelected.filter(tag => tags.includes(tag)).length > 0)
            return el
        })
      }
      */
      if (this.search !== '' && this.search.length > 3) {
        tutoriales = tutoriales.filter(el => {
          return (
            el.title.search(new RegExp(this.search, 'i')) !== -1 ||
            el.description.search(new RegExp(this.search, 'i')) !== -1
          )
        })
      }

      return tutoriales
    }
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.tutoriales,
      tags: store.state.tutoriales.tags,
      tutoriales: store.state.tutoriales.list
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title,
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
