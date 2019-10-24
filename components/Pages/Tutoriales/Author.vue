<template>
  <v-chip
    :key="index"
    pill
    outlined
    class="mr-1"
    label
    :href="`https://github.com/${username}`"
    rel="noopener noreferrer nofollow"
    target="_blank"
  >
    <v-avatar tile left>
      <VImageLazy
        :src="`https://avatars.githubusercontent.com/${username}`"
        :title="username"
      />
    </v-avatar>
    <span class="font-weight-light">
      {{ username }} <v-icon size="10">mdi-open-in-new</v-icon>
    </span>
  </v-chip>
</template>

<script>
export default {
  name: 'Author',
  props: {
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
