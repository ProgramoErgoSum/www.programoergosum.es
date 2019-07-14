<template>
  <div id="blog">
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container>
      <v-layout column>
        <v-flex xs12>
          <v-card class="mb-4" flat>
            <v-subheader>Filtro: {{ currentTag }}</v-subheader>
            <div class="px-2">
              <v-chip label dark @click="currentTag = 'todos'">
                Todos
              </v-chip>
              <v-chip
                v-for="tag in tags"
                :key="tag"
                label
                :outline="tag !== currentTag"
                @click="currentTag = tag"
              >
                {{ tag }}
              </v-chip>
            </div>
          </v-card>
        </v-flex>
        <v-flex v-for="blog in filterBlogs" :key="blog.alias">
          <v-card :to="`/blog/${blog.alias}`">
            <v-layout row wrap>
              <v-flex class="pa-1" xs12 md6 lg4>
                <v-img
                  :src="`/images/blog/${blog.alias}/${blog.image}`"
                  :lazy-src="`/lazy.png`"
                  :title="`${blog.title}`"
                  height="185"
                >
                  <template v-slot:placeholder>
                    <v-layout fill-height align-center justify-center ma-0>
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      />
                    </v-layout>
                  </template>
                </v-img>
              </v-flex>
              <v-flex xs12 md6 lg8>
                <v-card-title primary-title>
                  <h3 class="mb-4 title">
                    {{ blog.title }}
                  </h3>
                  <div class="subheading font-weight-thin">
                    {{ blog.description }}
                  </div>
                  <div class="mt-3">
                    <v-chip
                      v-for="tag in blog.tags"
                      :key="tag"
                      label
                      :outline="tag !== currentTag"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import metas from '@/store/api/v1/metas.json'

export default {
  components: {},
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
      metas: metas.blog,
      tags: store.state.blogs.tags,
      blogs: store.state.blogs.list
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title: title,
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
