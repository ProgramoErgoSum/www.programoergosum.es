<template>
  <span>
    <template v-for="tag in tags">
      <v-chip
        v-if="alias(tag)"
        :key="tag"
        :to="`/tutoriales/tags/${alias(tag)}`"
        class="mr-1"
        small
        label
        nuxt
      >
        {{ tag }}
      </v-chip>
      <v-chip v-else :key="tag" class="mr-1" small label outlined>
        {{ tag }}
      </v-chip>
    </template>
  </span>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      myTags: []
    }
  },
  mounted() {
    this.myTags = this.$store.state.tutoriales.tags
  },
  methods: {
    alias(name) {
      const tag = this.myTags.find(el => el.name === name)
      return tag ? tag.alias : false
    }
  }
}
</script>

<style lang="scss" scoped></style>
