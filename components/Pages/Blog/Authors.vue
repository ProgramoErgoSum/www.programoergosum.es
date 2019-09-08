<template>
  <div>
    <template v-for="(author, index) in authors">
      <a
        :key="index"
        :href="`https://github.com/${author}`"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <v-avatar size="50">
          <VImageLazy
            :src="`https://avatars.githubusercontent.com/${author}`"
            :title="author"
          />
        </v-avatar>
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Authors',
  props: {
    authors: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
