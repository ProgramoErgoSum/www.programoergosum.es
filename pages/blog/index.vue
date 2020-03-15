<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="search"
            :messages="`${filter.length} artículos en el blog`"
            label="Buscar"
            outlined
            rounded
            append-icon="mdi-magnify"
            validate-on-blur
          />
        </v-col>
        <template v-for="blog in filter.slice(0, pagItems)">
          <v-col :key="blog.alias" cols="12">
            <Item :blog="blog" />
            <v-divider class="mt-6" />
          </v-col>
        </template>
        <v-col cols="12" class="text-center">
          <v-btn
            v-show="pagItems < maxItems"
            depressed
            small
            @click="pagItems += 5"
          >
            Mostrar más
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Item from '@/components/Pages/Blog/Item'

export default {
  components: {
    Item
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.blog,
      blogs: store.state.blogs.list
    }
  },
  data() {
    return {
      search: '',
      maxItems: 0,
      pagItems: 5
    }
  },
  computed: {
    filter() {
      let blogs = this.blogs

      if (this.search !== '' && this.search.length > 2) {
        const search = this.search.toLowerCase()
        blogs = blogs.filter(el => {
          const title = el.title.toLowerCase()
          const description = el.description.toLowerCase()
          return (
            title.search(search) !== -1 || description.search(search) !== -1
          )
        })
      }

      return blogs
    }
  },
  created() {
    this.maxItems = this.blogs.length
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
