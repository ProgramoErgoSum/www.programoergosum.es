<template>
  <v-app>
    <v-app-bar :hide-on-scroll="false" elevate-on-scroll fixed app>
      <v-toolbar-title>
        <nuxt-link to="/" aria-label="Inicio">
          <LogoPES class="mt-2" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="SET_NAVIGATION_MENU_TOGGLE"
      />
      <div class="navigation hidden-sm-and-down">
        <template v-for="(item, i) in menu">
          <v-btn
            :key="i"
            :to="item.to"
            :class="item.class"
            class="font-weight-regular text-none px-3 mr-0"
            text
            tile
            nuxt
          >
            <v-icon size="20" color="grey" left>
              {{ item.icon }}
            </v-icon>
            {{ item.title }}
          </v-btn>
        </template>
      </div>
      <v-progress-linear
        v-scroll="onScroll"
        :value="progress"
        height="3"
        background-color="transparent"
        absolute
        bottom
      />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app fixed temporary>
      <nuxt-link to="/" aria-label="Inicio">
        <LogoPES class="mt-2" />
      </nuxt-link>
      <v-list>
        <template v-for="(item, i) in menu">
          <v-list-item-group :key="i">
            <v-list-item v-if="item.to" :to="item.to">
              <v-list-item-icon>
                <v-icon v-text="item.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <nuxt class="nuxt-content" />
    </v-main>

    <div class="secondary white--text">
      <v-container align="center" justify="center">
        <v-row wrap>
          <v-col class="my-5" cols="12">
            <div class="text-md-left text-center">
              <h4 class="mb-3 title font-weight-medium">Síguenos</h4>
              <v-btn
                v-for="social in socials"
                :key="social.icon"
                :href="social.href"
                :aria-label="social.name"
                class="ma-0 mr-2"
                rel="noopener noreferrer"
                target="_blank"
                icon
              >
                <v-icon class="grey--text">
                  {{ social.icon }}
                </v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col class="my-5" cols="12" xs="12" sm="12" md="3" lg="3">
            <div class="text-md-left text-center">
              <h4 class="mb-3 title font-weight-medium">
                Asociación
              </h4>
              <ul class="body-1 font-weight-light">
                <template v-for="(item, index) in association">
                  <li v-if="item.to" :key="index">
                    <nuxt-link :to="item.to" :title="item.title">
                      {{ item.title }}
                    </nuxt-link>
                  </li>
                  <li v-if="item.href" :key="index">
                    <a
                      :href="item.href"
                      :title="item.title"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {{ item.title }}
                      <v-icon class="pl-1" size="12">mdi-open-in-new</v-icon>
                    </a>
                  </li>
                </template>
              </ul>
            </div>
          </v-col>

          <v-col class="my-5" cols="12" xs="12" sm="12" md="3" lg="3">
            <div class="text-md-left text-center">
              <h4 class="mb-3 title font-weight-medium">
                Proyectos educativos
              </h4>
              <ul class="body-1 font-weight-light">
                <template v-for="(item, index) in learning">
                  <li v-if="item.to" :key="index">
                    <nuxt-link :to="item.to" :title="item.title">
                      {{ item.title }}
                    </nuxt-link>
                  </li>
                  <li v-if="item.href" :key="index">
                    <a
                      :href="item.href"
                      :title="item.title"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {{ item.title }}
                      <v-icon class="pl-1" size="12" dark>
                        mdi-open-in-new
                      </v-icon>
                    </a>
                  </li>
                </template>
              </ul>
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
              <LogoCcbysa />
              <br class="my-2" />
              A menos que se especifique lo contrario, todos los contenidos de
              este proyecto están bajo una licencia de
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://creativecommons.org/licenses/by-sa/4.0/"
                class="grey--text"
              >
                Creative Commons Reconocimiento-CompartirIgual 4.0
                Internacional.
              </a>
            </div>
          </v-col>
          <v-col cols="12" class="mt-5 hidden-md-and-down">
            <v-switch
              v-model="$vuetify.theme.dark"
              :label="
                $vuetify.theme.dark
                  ? `Cambia al tema claro`
                  : `Cambia al tema oscuro`
              "
              dark
            />
          </v-col>
          <v-col cols="12" class="mt-5">
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

    <GDPR />
    <ToTop />
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    progress: 0,
    menu: [
      {
        title: 'Tutoriales',
        icon: 'mdi-school-outline',
        class: '',
        to: '/tutoriales'
      },
      {
        title: 'Cursos para profesores',
        icon: 'mdi-school',
        class: '',
        to: '/formaciones'
      },
      {
        title: 'Centros',
        icon: 'mdi-domain',
        class: '',
        to: '/centros'
      },
      {
        title: 'Donaciones',
        icon: 'mdi-account-heart-outline',
        class: 'primary',
        to: '/colabora'
      }
    ],
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
      {
        icon: 'mdi-github',
        name: 'GitHub',
        href: 'https://github.com/ProgramoErgoSum'
      }
    ],
    association: [
      {
        title: 'Nosotros',
        to: '/asociacion'
      },
      {
        title: 'Blog',
        to: '/blog'
      },
      {
        title: 'Contacto',
        to: '/contacto'
      }
    ],
    learning: [
      {
        title: 'Tutoriales',
        to: '/tutoriales'
      },
      {
        title: 'Cursos para profesores',
        to: '/formaciones'
      },
      {
        title: 'Extraescolares',
        to: '/actividades'
      }
    ]
  }),
  computed: {
    ...mapGetters(['navigation']),
    drawer: {
      get() {
        return this.navigation.menu
      },
      set(val) {
        this.SET_NAVIGATION_MENU(val)
      }
    }
  },
  methods: {
    ...mapMutations(['SET_NAVIGATION_MENU', 'SET_NAVIGATION_MENU_TOGGLE']),
    onScroll() {
      this.progress = Math.round(
        (window.scrollY /
          (document.body.scrollHeight -
            document.documentElement.clientHeight)) *
          100
      )
    }
  },
  head() {
    const canonical = `${process.env.www}${this.$route.path}`
    return {
      link: [
        // Global
        { rel: 'canonical', href: canonical }
        // { hid: 'description', name: 'description', content: description }
        // { hid: 'keywords', name: 'keywords', content: tags }
      ],
      meta: [
        // Open Graph https://ogp.me/
        { property: 'og:locale', content: 'es' },
        { property: 'og:site_name', content: 'Asociación Programo Ergo Sum' },
        { property: 'og:url', content: canonical },
        { hid: 'o:ty', property: 'og:type', content: 'website' },
        // { hid: 'o:t', property: 'og:title', content: title }
        // { hid: 'o:d', property: 'og:description', content: description }
        // { hid: 'o:i', property: 'og:image', content: image }

        // Twitter
        { name: 'twitter:site', content: '@ProgramoErgoSum' },
        { name: 'twitter:creator', content: '@ProgramoErgoSum' },
        { name: 'twitter:card', content: 'summary_large_image' }
        // { hid: 't:t', name: 'twitter:title', content: title }
        // { hid: 't:d', name: 'twitter:description', content: description }
        // { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    color: #fff;
    a {
      display: inline-block;
      padding: 5px 0;
      color: #a9a9a9;
    }
  }
}
</style>
