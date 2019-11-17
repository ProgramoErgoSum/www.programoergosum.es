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
      <v-chip v-else :key="tag" class="mr-1" small label disabled>
        {{ tag }}
      </v-chip>
    </template>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({ allTags: 'tutoriales/tags' })
  },
  methods: {
    alias(name) {
      const tag = this.allTags.find(el => el.name === name)
      return tag ? tag.alias : false
    }
  }
}
</script>

<style lang="scss" scoped></style>
