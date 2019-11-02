<template>
  <div>
    <Title
      :title="tag.title"
      :description="tag.description"
      :image="tag.image"
      :breadcrumbs="breadcrumbs"
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
                @click="pagItems += 12"
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
      pagItems: 12,
      tagsSelected: []
    }
  },
  computed: {
    filter() {
      let tutoriales = this.tutoriales

      if (this.tagsSelected.length > 0) {
        tutoriales = tutoriales.filter(
          el =>
            this.tagsSelected.filter(tag => el.tags.includes(tag)).length > 0
        )
      }

      if (this.search !== '' && this.search.length > 2) {
        const search = this.search.toLowerCase()
        tutoriales = tutoriales.filter(el => {
          const title = el.title.toLowerCase()
          const description = el.description.toLowerCase()
          return (
            title.search(search) !== -1 || description.search(search) !== -1
          )
        })
      }

      return tutoriales
    }
  },
  validate({ store, params }) {
    return store.state.tutoriales.tags.find(e => e.alias === params.alias)
  },
  asyncData({ store, params }) {
    const tag = store.state.tutoriales.tags.find(e => {
      return e.alias === params.alias
    })

    return {
      tag,
      tags: store.state.tutoriales.tags,
      tutoriales: store.state.tutoriales.list,
      breadcrumbs: [
        {
          text: 'Tutoriales',
          disabled: false,
          to: '/tutoriales'
        },
        {
          text: tag.name,
          disabled: true,
          to: ''
        }
      ]
    }
  },
  created() {
    this.tagsSelected.push(this.tag.alias)
  },
  head() {
    const title = this.tag.title
    const description = this.tag.description
    const image = `${process.env.cdn}${this.tag.image}`

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
