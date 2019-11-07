<template>
  <v-chip
    v-if="alias"
    :to="`/tutoriales/tags/${alias}`"
    class="mr-1"
    small
    label
    nuxt
  >
    {{ name }}
  </v-chip>
  <v-chip v-else class="mr-1" small label disabled>
    {{ name }}
  </v-chip>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tags: []
    }
  },
  computed: {
    existTag() {
      return this.tags.find(el => el.name === this.name)
    },
    alias() {
      const tag = this.tags.find(el => el.name === this.name)
      return tag ? tag.alias : false
    }
  },
  mounted() {
    this.tags = this.$store.state.tutoriales.tags
  }
}
</script>

<style lang="scss" scoped></style>
