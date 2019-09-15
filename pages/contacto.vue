<template>
  <div>
    <Title :title="metas.title" :description="metas.description" />
    <v-container>
      <v-row>
        <template v-for="faq in faqs">
          <v-col :key="faq.title" cols="12">
            <h2 class="mb-6">
              {{ faq.title }}
            </h2>
            <v-expansion-panels focusable multiple class="mb-12">
              <v-expansion-panel v-for="item in faq.items" :key="item.title">
                <v-expansion-panel-header class="subtitle-1">
                  {{ item.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  class="pt-5 font-weight-regular subtitle-1"
                >
                  {{ item.description }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </template>
        <v-col cols="12">
          <h2 class="mb-6">
            También puedes contactar con nosotros a través de email
          </h2>
          <v-list class="mb-12">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-map</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Región de Murcia
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-email-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                info@programoergosum.com
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-earth</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                www.programoergosum.es
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

    <!--
    <Reg />
    -->
  </div>
</template>

<script>
// import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    // Reg
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
          },
          {
            title: '¿Cómo ser un centro colaborador?',
            description:
              'Cualquier docente (embajador) de un centro educativo podrá inscribir su centro de estudios para aparecer en el mapa de centros colaboradores de la iniciativa.'
          }
        ]
      },
      {
        title: 'Sobre cursos online ...',
        items: [
          {
            title: '¿Cómo accedo a los contenidos?',
            description:
              'En estos momentos solamente los socios y profesores colaboradores pueden acceder a los contenidos y soluciones a los ejercicios propuestos.'
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
      }
    ]
  }),
  asyncData({ store }) {
    return {
      metas: store.state.metas.contacto
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
