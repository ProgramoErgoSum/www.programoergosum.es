<template>
  <v-footer app fixed absolute inset height="auto">
    <v-layout justify-center row wrap>
      <v-flex secondary darknes-2 py-3 text-xs-center white--text xs12>
        <div class="mb-3 text-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            :href="icon.link"
            rel="noopener noreferrer"
            target="_blank"
            dark
            icon
          >
            <v-icon>
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </div>
        <p class="ma-0 pa-0 caption">
          {{ new Date().getFullYear() }} - Asociación Programo Ergo Sum
        </p>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      {
        icon: 'fab fa-twitter',
        link: 'https://twitter.com/ProgramoErgoSum'
      },
      {
        icon: 'fab fa-youtube',
        link: 'https://www.youtube.com/c/ProgramoErgoSum?sub_confirmation=1'
      },
      {
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com/programoergosum'
      },
      {
        icon: 'fab fa-facebook',
        link: 'https://www.facebook.com/ProgramoErgoSum'
      },
      {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/company/programo-ergo-sum'
      },
      {
        icon: 'fab fa-slideshare',
        link: 'https://www.slideshare.net/ProgramoErgoSum'
      },
      {
        icon: 'fab fa-github',
        link: 'https://github.com/ProgramoErgoSum'
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
