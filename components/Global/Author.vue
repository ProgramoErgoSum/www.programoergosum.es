<template>
  <v-chip
    v-if="author"
    pill
    outlined
    class="mr-1"
    label
    :href="author.github"
    rel="noopener noreferrer nofollow"
    target="_blank"
  >
    <v-avatar tile left>
      <VImageLazy :src="author.image" :title="author.name" />
    </v-avatar>
    <span class="font-weight-light">
      {{ author.name }} <v-icon size="10">mdi-open-in-new</v-icon>
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
  },
  data: () => ({
    authors: [
      {
        username: 'migueabellan',
        name: 'Miguel Ángel Abellán',
        image: 'https://avatars.githubusercontent.com/migueabellan',
        github: 'https://github.com/migueabellan'
      },
      {
        username: 'mmanzano',
        name: 'Miguel Manzano',
        image: 'https://avatars.githubusercontent.com/mmanzano',
        github: 'https://github.com/mmanzano'
      },
      {
        username: 'carmenb_mg',
        name: 'Miguel Ángel Abellán',
        image:
          'https://pbs.twimg.com/profile_images/650326709242302464/f27brfje_400x400.jpg',
        github: 'https://twitter.com/carmenb_mg'
      }
    ]
  }),
  computed: {
    author() {
      return this.authors.find(el => el.username === this.username)
    }
  }
}
</script>

<style lang="scss" scoped></style>
