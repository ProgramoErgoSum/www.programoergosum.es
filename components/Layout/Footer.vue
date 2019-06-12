<template>
  <v-footer id="footer" app fixed absolute height="auto">
    <v-container grid-list-md>
      <v-layout row wrap justify-center text-xs-center>
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
          <div class="ma-1 text-center">
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
        <v-flex xs12>
          <div class="copyleft">
            <p>{{ new Date().getFullYear() }} - Asociación Programo Ergo Sum</p>
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
        link: 'https://www.programoergosum.com/el-proyecto-programo-ergo-sum'
      },
      /*
      {
        title: 'Colabora',
        link: '/colabora'
      },
      */
      {
        title: 'Hazte socio',
        link: 'https://www.programoergosum.com/registro'
      },
      {
        title: 'Contacta',
        link: 'https://www.programoergosum.com/contacto'
      }
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
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
#footer {
  margin: 0;
  background: #fff;
  .block {
    margin: 0 0 30px;
    h4 {
      margin: 0 0 15px;
      font-weight: 600;
      color: #2d3339;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        margin-bottom: 10px;
        font-weight: 300;
        a {
          color: #2d3339;
        }
      }
    }
  }
  .v-icon {
    color: #2d3339;
  }
  .copyleft {
    font-size: 12px;
    p {
      margin: 0 0 5px;
      padding: 0;
    }
  }
}
</style>
