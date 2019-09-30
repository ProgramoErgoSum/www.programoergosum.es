<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <section class="py-12">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="mb-3">
              ¿Por qué necesitamos patronos / donaciones?
            </h2>
            <p>
              Cuando en 2015 se creó la Asociación Programo Ergo Sum, se
              estableció como una <b>entidad sin ánimo de lucro</b> para que
              cualquier persona pudiera aprender informática, programación,
              electrónica y robótica educativa <b>gratis</b> a través de
              videotutoriales y sin moverse de su casa.
            </p>
            <p>
              Hemos trabajado duro durante años para cumplir con los fines y
              objetivos de la
              <nuxt-link to="/asociacion" title="Asociación Programo Ergo Sum">
                asociación
              </nuxt-link>
              y el camino no ha hecho nada más que empezar. Nuestros proyectos
              educativos, además de gratuitos, son libres y de código abierto,
              lo que significa que puedes acceder a todo el contenido de los
              tutoriales así como al código fuente de los proyectos.
            </p>
            <p>
              Cada día aumentan las visitas de todos nuestros proyectos
              educativos y requieren de atención técnica. En estos momentos
              (septiembre de 2019) acceden una media de 5mil usuarios diarios a
              nuestras plataformas educativas. Además, en el mundo de la
              informática, tienes que estar actualizado a la última para no
              recibir ataques informáticos.
            </p>
            <v-list class="mt-6" color="transparent" disabled>
              <v-subheader class="pa-0 title">
                ¿Quieres saber a qué se destinan las donaciones?
              </v-subheader>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in faqs" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon" />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.text }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!--
    <section class="py-12">
      <Sponsors />
    </section>
    -->
    <section class="py-12" :class="background">
      <Patrons />
    </section>
    <section class="py-12">
      <Donations />
    </section>
    <Reg />
  </div>
</template>

<script>
// import Sponsors from '@/components/Pages/Colabora/Sponsors'
import Patrons from '@/components/Pages/Colabora/Patrons'
import Donations from '@/components/Pages/Colabora/Donations'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    // Sponsors,
    Patrons,
    Donations,
    Reg
  },
  data: () => ({
    faqs: [
      {
        icon: 'mdi-server-network',
        title: 'Infraestructura',
        text:
          'Nuestas plataformas educativas reciben una media de 5mil visitas diarias.'
      },
      {
        icon: 'mdi-hammer',
        title: 'Mantenimiento',
        text:
          'En la informática tienes que estar actualizado a la última para no recibir ataques.'
      },
      {
        icon: 'mdi-code-tags',
        title: 'Desarrollo',
        text:
          'Para mejorar la calidad de los proyectos desarrollamos mejoras en los proyectos.'
      },
      {
        icon: 'mdi-slack',
        title: 'Soporte',
        text:
          'Dedicamos tiempo a resolver dudas de nuestros usuarios a través de varios canales.'
      }
    ]
  }),
  computed: {
    background() {
      return this.$vuetify.theme.isDark ? 'grey darken-3' : 'grey lighten-3'
    }
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.colabora
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title,
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        // Facebook
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
