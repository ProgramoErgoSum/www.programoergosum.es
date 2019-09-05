<template>
  <v-card :to="`/blog/${blog.alias}`" tile nuxt>
    <v-row no-gutters>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="3">
        <!--
        <v-img
          :src="`/images/blog/${blog.alias}/${blog.image}`"
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
        -->
        <vuetify-lazy-image
          :src="`/images/blog/${blog.alias}/${blog.image}`"
          :title="`${blog.title}`"
          :aspect-ratio="2.25"
        />
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
            <v-chip v-for="tag in blog.tags" :key="tag" class="ml-1" label>
              {{ tag }}
            </v-chip>
          </div>
        </v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Item',
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
