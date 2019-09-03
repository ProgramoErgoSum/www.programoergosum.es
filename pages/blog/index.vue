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
          <v-card :to="`/blog/${blog.alias}`" tile nuxt>
            <v-row no-gutters>
              <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="3">
                <v-img
                  :src="`/images/blog/${blog.alias}/${blog.image}`"
                  :lazy-src="`/lazy.png`"
                  :title="`${blog.title}`"
                  height="185"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      />
                    </v-row>
                  </template>
                </v-img>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="9">
                <v-card-title primary-title>
                  <h3 class="mb-4 title">
                    {{ blog.title }}
                  </h3>
                  <div class="body-1 font-weight-light">
                    {{ blog.description }}
                  </div>
                  <div class="mt-3">
                    <v-chip
                      v-for="tag in blog.tags"
                      :key="tag"
                      class="ml-1"
                      label
                      :outlined="tag !== currentTag"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-title>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
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
