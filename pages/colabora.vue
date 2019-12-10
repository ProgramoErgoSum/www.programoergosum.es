<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <section class="py-12">
      <Patrons />
    </section>

    <section :class="background" class="py-12">
      <v-container>
        <v-row>
          <v-col cols="12">
            <p class="headline font-weight-light">
              Cuando en 2015 se creó la Asociación Programo Ergo Sum, se
              estableció como una entidad sin ánimo de lucro para que cualquier
              persona pudiera
              <b class="font-weight-bold">
                aprender informática, programación, electrónica y robótica
                educativa gratis
              </b>
              a través de videotutoriales y sin moverse de su casa. Hemos
              trabajado duro durante años para cumplir con los fines y objetivos
              de la
              <nuxt-link to="/asociacion" title="Asociación Programo Ergo Sum">
                asociación
              </nuxt-link>
              y el camino no ha hecho nada más que empezar.
            </p>

            <h2 class="mt-12 mb-3">
              ¿A qué se destinan las donaciones?
            </h2>
            <v-list class="mt-6" color="transparent" three-line disabled>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in faqs" :key="i" class="mb-3">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon" size="40" />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      {{ item.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="body-1">
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

    <section class="py-12">
      <Donations />
    </section>
    <Reg />
  </div>
</template>

<script>
import Patrons from '@/components/Pages/Colabora/Patrons'
import Donations from '@/components/Pages/Colabora/Donations'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
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
          'Disponemos de varios servidores para mejorar la calidad de conexión a los estudiantes.'
      },
      {
        icon: 'mdi-hammer',
        title: 'Mantenimiento',
        text:
          'Actualizamos constantemente el software informático para minimizar los ataques informáticos.'
      },
      {
        icon: 'mdi-code-tags',
        title: 'Desarrollo',
        text:
          'Desarrollamos mejoras en los proyectos educativos para mejorar la calidad en la enseñanza.'
      },
      {
        icon: 'mdi-slack',
        title: 'Soporte',
        text:
          'Resolvemos las dudas de nuestros alumnos de forma gratuita a través de varios canales.'
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
        // Open Graph
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
