<template>
  <v-footer id="footer" app fixed absolute inset height="auto">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="follow">
            <span>Síguenos:</span>
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              :href="icon.link"
              rel="noopener noreferrer"
              target="_blank"
              icon
            >
              <v-icon>
                {{ icon.icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <div class="block">
            <h4>Sobre nosotros</h4>
            <ul>
              <li
                v-for="item in association"
                :key="item.link"
                :to="item.link"
                flat
                nuxt
              >
                <nuxt-link :to="item.link" :title="item.title">
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <div class="block">
            <h4>Proyectos educativos</h4>
            <ul>
              <li
                v-for="item in projects"
                :key="item.link"
                :to="item.link"
                flat
                nuxt
              >
                <a
                  target="_blank"
                  :href="item.link"
                  :title="item.title"
                  rel="noopener noreferrer"
                >
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </div>
        </v-flex>
        <v-flex xs12>
          <div class="copyleft">
            <p>
              {{ new Date().getFullYear() }} - Asociación Programo Ergo Sum.
            </p>
            <!--
            <p>
              Made with <span class="heart">&hearts;</span> by
              <a
                href="https://github.com/migueabellan"
                rel="noopener noreferrer"
                target="_blank"
              >
                @migueabellan
              </a>
              . Made with
              <a
                href="https://nuxtjs.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  height="9px"
                  src="https://nuxtjs.org/logos/nuxtjs-typo.svg"
                />
              </a>
              & Vuetify
              <a
                href="https://vuetifyjs.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  height="15px"
                  src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                />
              </a>
            </p>
            -->
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    association: [
      {
        title: 'Asociación',
        link: '/asociacion'
      },
      {
        title: 'Colabora',
        link: '/colabora'
      }
      /*
      {
        title: 'Código de Conducta',
        link: '/coc'
      }
      */
    ],
    projects: [
      {
        title: 'Programo Ergo Sum',
        link: 'https://www.programoergosum.com'
      },
      {
        title: 'Aprende Programando',
        link: 'https://www.aprendeprogramando.es'
      },
      {
        title: 'Wiki TIC',
        link: 'https://wikitic.github.io'
      }
    ],
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
      },
      {
        icon: 'fab fa-slack',
        link: 'https://programoergosum.slack.com/'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
#footer {
  border-top: 1px solid #eaebeb;
  background: #f0f0f0;
  a {
    color: #6c7074;
    &:hover {
      text-decoration: underline;
    }
  }
  .follow {
    margin: 50px 0;
  }
  .block {
    margin: 0 0 50px;
    h4 {
      margin: 0 0 15px;
      font-weight: 400;
      color: #2d3339;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        margin-bottom: 10px;
        font-weight: 100;
        font-size: 16px;
      }
    }
  }
  .v-icon {
    color: #2d3339;
  }
  .copyleft {
    text-align: center;
    font-size: 12px;
    .heart {
      font-size: 20px;
      color: red;
    }
  }
}
@media only screen and (max-width: 1904px) {
}
@media only screen and (max-width: 1264px) {
}
@media only screen and (max-width: 960px) {
  #footer {
    .follow {
      span {
        display: block;
        margin-bottom: 20px;
      }
      .v-btn {
        margin: 5px;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
}
</style>
