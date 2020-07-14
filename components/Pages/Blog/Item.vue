<template>
  <v-card :to="`/blog/${blog.alias}`" flat tile nuxt>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4">
          <VImageLazy
            :src="absoluteUrlImage"
            :title="blog.title"
            :height="185"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="8" lg="8">
          <v-card-title primary-title>
            <h3 class="mb-4 title">
              {{ blog.title }}
            </h3>
            <div class="mb-6 body-1 font-weight-light">
              {{ blog.description }}
            </div>
          </v-card-title>
          <v-card-text>
            <Posted :cdate="blog.date.cdate" :mdate="blog.date.mdate" />
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
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
