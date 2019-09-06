<template>
  <v-card :to="`/blog/${blog.alias}`" tile nuxt>
    <v-row no-gutters>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="3">
        <v-img
          :src="`${repo_raw}/${blog.alias}/img/${blog.image}`"
          :lazy-src="`/lazy.png`"
          :title="`${blog.title}`"
          height="185"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-layout>
          </template>
        </v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="9">
        <v-card-title primary-title>
          <h3 class="mb-4 title">
            {{ blog.title }}
          </h3>
          <div class="mb-6 body-1 font-weight-light">
            {{ blog.description }}
          </div>
          <div>
            <Posted :cdate="blog.date.cdate" :mdate="blog.date.mdate" />
            <Tags :tags="blog.tags" class="ml-3" />
          </div>
        </v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Posted from '@/components/Pages/Blog/Posted'
import Tags from '@/components/Pages/Blog/Tags'

export default {
  name: 'Item',
  components: {
    Posted,
    Tags
  },
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  computed: {
    repo_raw: {
      get() {
        return this.$store.state.blogs.repo_raw
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
