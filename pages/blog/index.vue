<template>
  <div id="blog">
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container>
      <v-layout column>
        <v-flex v-for="blog in blogs" :key="blog.alias">
          <v-card :to="`/blog/${blog.alias}`">
            <v-layout row wrap>
              <v-flex xs12 md6 lg4>
                <v-img
                  :src="`/blog/${blog.alias}/${blog.image}`"
                  :lazy-src="`/lazy.png`"
                  :title="`${blog.title}`"
                  height="140"
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
                  <h3 class="mb-4 title">{{ blog.title }}</h3>
                  <div class="subheading">{{ blog.description }}</div>
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
import metas from '@/static/metas.json'
import blogs from '@/static/blog/list.json'

import Title from '@/components/Layout/Title'

export default {
  components: {
    Title
  },
  asyncData() {
    return {
      metas: metas.blog,
      blogs: blogs
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.canonical}${this.metas.image}`

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
