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
            label="Buscar"
            outlined
            rounded
            :messages="`${filter.length} artículos en el blog`"
            append-icon="mdi-magnify"
            validate-on-blur
          />
        </v-col>
        <template v-for="blog in filter">
          <v-col :key="blog.alias" cols="12">
            <Item :blog="blog" />
            <v-divider class="mt-6" />
            <!-- [PES-es] /blog LIST -->
            <!--
            <Adsense-Infeed
              v-if="key === 1"
              class="mt-10"
              data-ad-slot="6318738446"
            />
            -->
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Item from '@/components/Pages/Blog/Item'
// import AdsenseInfeed from '@/components/Adsense/Infeed'

export default {
  components: {
    Item
    // AdsenseInfeed
  },
  data() {
    return {
      search: '',
      maxItems: 5
    }
  },
  computed: {
    filter() {
      let blogs = this.blogs

      if (this.search !== '') {
        const search = this.search.toLowerCase()
        blogs = blogs.filter(el => {
          // const title = el.title.toLowerCase()
          const description = el.description.toLowerCase()
          return (
            // title.search(search) !== -1 ||
            description.search(search) !== -1
          )
        })
      }

      return blogs
    }
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.blog,
      blogs: store.state.blogs.list
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
