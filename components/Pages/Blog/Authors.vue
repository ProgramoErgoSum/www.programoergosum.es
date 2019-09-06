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
          <v-img
            :src="`https://avatars.githubusercontent.com/${author}`"
            :lazy-src="`/lazy-user.png`"
            :alt="author"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>
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
