<template>
  <!--
  <v-footer color="secondary" dark inset padless absolute app>
  -->
  <div class="footer">
    <v-container align="center" justify="center">
      <v-row wrap>
        <v-col class="my-5" xs="12" cols="12" sm="12" md="6" lg="6">
          <div class="socials">
            <h4>Síguenos</h4>
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
              <v-icon>
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
          <div class="ccbysa">
            <ccbysa />
            <br />
            A menos que se especifique lo contrario, todos los contenidos de
            este proyecto están bajo una licencia de
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://creativecommons.org/licenses/by-sa/4.0/"
            >
              Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional.
            </a>
          </div>
        </v-col>
        <v-col class="mt-5" cols="12">
          <div class="copyleft">
            <p class="madewith">
              This project is Open Source on
              <a
                href="https://github.com/ProgramoErgoSum/www.programoergosum.es"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              and made with <span class="heart">&hearts;</span> by
              <a
                href="https://www.migueabellan.es"
                rel="noopener noreferrer"
                target="_blank"
              >
                @migueabellan
              </a>
            </p>
            <p>
              2015-{{ new Date().getFullYear() }} Asociación Programo Ergo Sum
              <!--
              <template v-for="item in legal">
                <span :key="item.link" class="px-2">|</span>
                <nuxt-link
                  :key="item.link"
                  :to="item.link"
                  rel="noopener noreferrer nofollow"
                >
                  {{ item.title }}
                </nuxt-link>
              </template>
              -->
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
    ],
    legal: [
      {
        title: 'Código de Conducta',
        link: '/legal/coc'
      },
      {
        title: 'Ley de cookies',
        link: '/legal/cookies'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.footer {
  background: #101a24;
  color: #aeb1b5;
  font-weight: 300;
  a {
    color: #aeb1b5;
    font-weight: 300;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  h4 {
    margin: 0 0 15px;
    font-size: 20px;
    font-weight: 400;
    color: #f0f0f0;
  }
  .socials {
    a {
      &:hover {
        text-decoration: none;
      }
    }
    .v-icon {
      color: #656e77;
    }
  }
  .ccbysa {
    text-align: right;
    font-size: 12px;
    svg {
      margin-bottom: 10px;
    }
  }
  .copyleft {
    text-align: center;
    font-weight: 300;
    font-size: 12px;
    a {
      color: #f0f0f0;
      text-decoration: none;
    }
    p {
      margin: 0;
      padding: 0;
    }
    .madewith {
      margin: 0 0 5px;
      font-size: 14px;
      .heart {
        font-size: 18px;
        color: #f00;
      }
    }
  }
}
@media only screen and (max-width: 960px) {
  .footer {
    .socials {
      span {
        display: block;
        margin-bottom: 20px;
      }
      .v-btn {
        margin: 5px;
      }
    }
    .socials,
    .block,
    .ccbysa {
      text-align: center;
    }
  }
}
</style>
