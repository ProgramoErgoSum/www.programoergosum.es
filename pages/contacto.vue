<template>
  <div id="contacto">
    <Title :title="metas.title" :description="metas.description" />
    <v-container>
      <v-layout row wrap>
        <template v-for="faq in faqs">
          <v-flex :key="faq.title" xs12>
            <h2 class="mb-3">
              {{ faq.title }}
            </h2>
            <v-expansion-panel popout class="mb-5">
              <v-expansion-panel-content
                v-for="item in faq.items"
                :key="item.title"
              >
                <template v-slot:header>
                  <div class="subheading">
                    {{ item.title }}
                  </div>
                </template>
                <v-card>
                  <v-card-text class="grey lighten-3 subheading">
                    {{ item.description }}
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
        </template>
        <v-flex>
          <h2 class="mb-3">
            También puedes contactar con nosotros a través de email
          </h2>
          <v-list class="subheading">
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-map-marker"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                Región de Murcia
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-envelope"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                info@programoergosum.com
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-globe"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                www.programoergosum.es
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
    <Reg />
  </div>
</template>

<script>
import metas from '@/store/api/v1/metas.json'

import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    Reg
  },
  data: () => ({
    faqs: [
      {
        title: 'Sobre la asociación ...',
        items: [
          {
            title: '¿Qué es Programo Ergo Sum?',
            description:
              'La Asociación Programo Ergo Sum es una iniciativa sin ánimo de lucro cuyo objetivo pretende acercar la programación y la robótica a todas las edades a través de proyectos educativos libres y abiertos.'
          },
          {
            title: '¿Cómo puedo colaborar con la iniciativa?',
            description:
              'Para colaborar, puedes realizar una donación desinteresada a través de la plataforma de crowdfunding Patreon o a través de PayPal, hacerte voluntario para la realización de actividades o de cualquier forma que se te ocurra que pueda ayudar a la asociación.'
          },
          {
            title: '¿Qué beneficios obtengo si hago una donación?',
            description:
              'No se obtiene ningún tipo de beneficio con la donación (como el propio nombre indica), simplemente podrás aparecer en el apartado de colaboradores de la web según el tipo de donación y cantidad.'
          }
        ]
      },
      {
        title: 'Sobre actividades extraescolares ...',
        items: [
          {
            title: '¿Quién puede participar?',
            description:
              'En las actividades extraescolares que organizamos puede participar cualquier niño, niña o jóven sin ningún tipo de discriminación. Al ser actividades gratuitas, el padre, madre o tutor del participante deberá estar presente en todo momento (salvo que se exprese lo contrario) haciéndose responsable de los actos u opiniones del participante.'
          },
          {
            title: '¿Cuándo se realizan?',
            description:
              'En el apartado de actividades podrás consultar las fechas de cada una de las actividades extraescolares de programación y robótica que organizamos desde la asociación.'
          },
          {
            title: '¿Cuánto hay que pagar?',
            description:
              'Todas las actividades extraescolares que realizamos son gratuitas y se accede mediante orden riguroso de reserva previa. En caso de confirmar una asistencia se deberá acudir o avisar obligatoriamente o se sancionará impidiendo el acceso a futuras actividades.'
          },
          {
            title: '¿Quién organiza las actividades?',
            description:
              'Las actividades se organizan a través de la asociación con ayuda de los voluntarios mentores. Si para una actividad no se consiguen voluntarios, se cancelará por falta de mentores voluntarios.'
          }
        ]
      },
      {
        title: 'Sobre plataformas educativas ...',
        items: [
          {
            title: '¿Cómo ser un centro colaborador?',
            description:
              'Cualquier docente (embajador) de un centro educativo podrá inscribir su centro de estudios para aparecer en el mapa de centros colaboradores de la iniciativa.'
          },
          {
            title: '¿Cómo accedo a contenidos para socios?',
            description:
              'En estos momentos estamos actualizando las plataformas y solo los socios ya registrados pueden acceder a los contenidos.'
          },
          {
            title: '¿Cómo puedo tener una cuenta premium?',
            description:
              'En estos momentos no es posible crear una cuenta premium.'
          }
        ]
      }
    ]
  }),
  asyncData() {
    return {
      metas: metas.contacto
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title: title,
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
