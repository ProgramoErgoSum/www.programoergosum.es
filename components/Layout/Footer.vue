<template>
  <div class="secondary white--text">
    <v-container align="center" justify="center">
      <v-row wrap>
        <v-col class="my-5" xs="12" cols="12" sm="12" md="6" lg="6">
          <div class="text-md-left text-center">
            <h4 class="mb-3 title font-weight-medium">Síguenos</h4>
            <v-btn
              v-for="social in socials"
              :key="social.icon"
              :href="social.href"
              class="ma-0 mr-2"
              rel="noopener noreferrer"
              target="_blank"
              icon
              :aria-label="social.name"
            >
              <v-icon class="grey--text">
                {{ social.icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col
          class="my-5"
          cols="12"
          xs="12"
          sm="12"
          md="6"
          offset-lg="3"
          lg="3"
        >
          <div class="text-md-right text-center caption font-weight-light">
            <ccbysa />
            <br class="my-2" />
            A menos que se especifique lo contrario, todos los contenidos de
            este proyecto están bajo una licencia de
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://creativecommons.org/licenses/by-sa/4.0/"
              class="grey--text"
            >
              Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional.
            </a>
          </div>
        </v-col>
        <v-col class="mt-5" cols="12">
          <div class="text-center body-2 font-weight-light">
            <p class="ma-0 mb-2">
              This project is Open Source on
              <a
                href="https://github.com/ProgramoErgoSum/www.programoergosum.es"
                rel="noopener noreferrer"
                target="_blank"
                class="grey--text text--lighten-3 font-weight-medium"
              >
                GitHub
              </a>
              and made with <span class="body-1 red--text">&hearts;</span> by
              <a
                href="https://www.migueabellan.es"
                rel="noopener noreferrer"
                target="_blank"
                class="grey--text text--lighten-3 font-weight-bold"
              >
                @migueabellan
              </a>
            </p>
            <p class="ma-0 caption">
              2015-{{ new Date().getFullYear() }} Asociación Programo Ergo Sum
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ccbysa from '@/components/Layout/Logos/ccbysa'

export default {
  name: 'Footer',
  components: {
    ccbysa
  },
  data: () => ({
    socials: [
      {
        icon: 'mdi-twitter',
        name: 'Twitter',
        href: 'https://twitter.com/ProgramoErgoSum'
      },
      {
        icon: 'mdi-youtube',
        name: 'YouTube',
        href: 'https://www.youtube.com/c/ProgramoErgoSum?sub_confirmation=1'
      },
      {
        icon: 'mdi-instagram',
        name: 'Instagram',
        href: 'https://www.instagram.com/programoergosum'
      },
      {
        icon: 'mdi-facebook',
        name: 'Facebook',
        href: 'https://www.facebook.com/ProgramoErgoSum'
      },
      {
        icon: 'mdi-linkedin',
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/programo-ergo-sum'
      },
      /*
      {
        icon: 'mdi-slideshare',
        href: 'https://www.slideshare.net/ProgramoErgoSum'
      },
      */
      {
        icon: 'mdi-github-circle',
        name: 'GitHub',
        href: 'https://github.com/ProgramoErgoSum'
      },
      {
        icon: 'mdi-slack',
        name: 'Slack',
        href: 'https://programoergosum.slack.com/'
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
