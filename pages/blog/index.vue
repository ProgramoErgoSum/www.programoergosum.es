<template>
  <div id="blog">
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
    <Title :title="title" :description="description" :image="image" />
    <v-container>
      <v-layout column>
        <v-flex v-for="blog in blogs" :key="blog.alias">
          <v-card class="ma-3" :to="`/blog/${blog.alias}`">
            <v-layout row wrap>
              <v-flex xs12 md6 lg4>
                <v-img
                  :src="`/blog/${blog.alias}/images/preview.png`"
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
import blogs from '@/static/blog/list.json'

import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'

export default {
  components: {
    Metas,
    Title
  },
  asyncData() {
    return {
      title: 'Blog',
      description:
        'Últimas noticias sobre actividades y cursos realizados en la asociación.',
      keywords: [
        'noticias',
        'murcia',
        'programación',
        'actividades',
        'asociación'
      ],
      image: 'blog/preview.png',
      blogs: blogs
    }
  }
}
</script>

<style lang="scss" scoped></style>
