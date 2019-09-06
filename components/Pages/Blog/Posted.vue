<template>
  <span>
    <v-icon>mdi-calendar</v-icon>
    <span class="caption font-weight-light">{{ mdate }}</span>
  </span>
</template>

<script>
export default {
  name: 'Posted',
  props: {
    cdate: {
      type: String,
      default: ''
    },
    mdate: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
