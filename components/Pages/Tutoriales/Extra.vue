<template>
  <div class="body-2 font-weight-regular">
    <div v-if="extra.level" class="d-inline-flex ma-2">
      <v-icon size="18" class="mr-2">mdi-school-outline</v-icon>
      {{ extra.level }}
    </div>
    <div v-if="extra.duration" class="d-inline-flex ma-2">
      <v-icon size="18" class="mr-2">mdi-clock-outline</v-icon>
      {{ extra.duration }}
    </div>
    <div v-if="extra.videos" class="d-inline-flex ma-2">
      <v-icon size="18" class="mr-2">mdi-video-outline</v-icon>
      {{ extra.videos }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Extra',
  props: {
    extra: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
