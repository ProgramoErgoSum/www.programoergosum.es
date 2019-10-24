<template>
  <v-card :to="`/blog/${blog.alias}`" flat tile nuxt>
    <v-row no-gutters>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="3">
        <VImageLazy :src="absoluteUrlImage" :title="blog.title" :height="185" />
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
export default {
  name: 'Item',
  components: {},
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  computed: {
    absoluteUrlImage() {
      return `${this.$store.state.blogs.repo_raw}/${this.blog.alias}/${this.blog.image}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
