<template>
  <div class="popup text-center">
    <v-avatar size="110">
      <VImageLazy :src="center.image" :title="center.name" />
    </v-avatar>
    <p class="ma-0 mt-3 font-weight-bold">
      {{ center.name }}
    </p>
    <p class="ma-0 font-weight-light">
      {{ center.address.city }}, {{ center.address.province }}
    </p>
    <v-btn
      v-if="center.social.url"
      :href="center.social.url"
      icon
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Url"
    >
      <v-icon size="18" color="#000">mdi-link</v-icon>
    </v-btn>
    <v-btn
      v-if="center.social.twitter"
      :href="center.social.twitter"
      icon
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <v-icon size="18" color="#1da1f2">mdi-twitter</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    center: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  width: 200px;
  padding: 5px;
  font-size: 14px;
}
</style>
