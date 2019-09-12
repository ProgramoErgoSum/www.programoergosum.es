<template>
  <v-card :to="`/blog/${blog.alias}`" tile nuxt>
    <VImageLazy
      :src="`${this.$store.state.blogs.repo_raw}/${blog.alias}/${blog.image}`"
      :title="blog.title"
      :height="185"
    />
    <v-card-title primary-title>
      <h3 class="mb-4 title">
        {{ blog.title }}
      </h3>
      <div class="mb-6 body-1 font-weight-light">
        {{ blog.description }}
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'ItemCol',
  components: {},
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
