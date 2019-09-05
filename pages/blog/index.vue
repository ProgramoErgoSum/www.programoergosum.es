<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container>
      <v-row>
        <v-col class="hidden-sm-and-down" cols="12">
          <v-chip label dark @click="currentTag = 'todos'">
            Todos
          </v-chip>
          <v-chip
            v-for="tag in tags"
            :key="tag"
            class="ml-1"
            label
            :outlined="tag !== currentTag"
            @click="currentTag = tag"
          >
            {{ tag }}
          </v-chip>
        </v-col>
        <v-col v-for="blog in filterBlogs" :key="blog.alias" cols="12">
          <Item :blog="blog" />
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
  data() {
    return {
      currentTag: 'todos'
    }
  },
  computed: {
    filterBlogs() {
      if (this.currentTag === 'todos') return this.blogs
      return this.$store.getters['blogs/filterByTag'](this.currentTag)
    }
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.blog,
      tags: store.state.blogs.tags,
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
        // Facebook
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
