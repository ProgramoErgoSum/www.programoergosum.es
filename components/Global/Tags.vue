<template>
  <span>
    <template v-for="(item, index) in tags">
      <v-chip :key="index" class="mr-1" small label>
        {{ item }}
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
  }
}
</script>

<style lang="scss" scoped></style>
