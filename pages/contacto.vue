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
                info&#64;programoergosum&#46;com
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
    <Reg />
  </div>
</template>

<script>
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
            title: '¿Cuáles son nuestros objetivos?',
            description:
              'Nuestro objetivo principal es acercar las nuevas tecnologías a todas las edades. Cada alumno de cada escuela debería tener la oportunidad de aprender informática, programación y robótica.'
          },
          {
            title: '¿Puedo realizar una donación?',
            description:
              'Puedes realizar una donación totalmente desinteresada y el importe estará destinado al mantenimiento de las plataformas educativas y nuevas mejoras informáticas.'
          },
          {
            title: '¿Cómo ser un centro colaborador?',
            description:
              'Para ser un centro colaborador deberás solicitar acceso como centro y demostrar que tu centro está colaborando de alguna forma con nosotros.'
          }
        ]
      },
      {
        title: 'Sobre los tutoriales ...',
        items: [
          {
            title: '¿Cuánto tengo que pagar?',
            description:
              'Todos los tutoriales son 100% gratuitos. No tienes que pagar nada ni registrarte para acceder a todos los tutoriales.'
          },
          {
            title: '¿Cómo descargo los materiales?',
            description:
              'Solamente los centros y profesores verificados podrán obtener los materiales con el fin de ayudar a sus alumnos en clase.'
          },
          {
            title: '¿Puedo preguntar dudas por email?',
            description:
              'No, por email ya no resolvemos dudas. Si tienes alguna duda puedes ponerla como comentario en los vídeos de YouTube o en el apartado de dudas.'
          }
        ]
      },
      {
        title: 'Sobre cursos para profesores ...',
        items: [
          {
            title: '¿Cómo puedo realizar los cursos para profesores?',
            description:
              'Los cursos de formación permanente del profesorado se realizan a través del Centro de Profesores y Recursos de la Región de Murcia (CPR Murcia). Para asistir a los cursos deberás cumplir los requisitos de docente en la Región de Murcia.'
          }
        ]
      },
      {
        title: 'Sobre actividades extraescolares ...',
        items: [
          {
            title: '¿Quién puede participar?',
            description:
              'Cualquier niño, niña o jóven sin ningún tipo de discriminación podrá participar en las actividades extraescolares. Al ser actividades gratuitas, el padre, madre o tutor del participante deberá estar presente en todo momento (salvo que se exprese lo contrario) haciéndose responsable de los actos u opiniones del participante.'
          },
          {
            title: '¿Cuánto hay que pagar?',
            description:
              'Todas las actividades extraescolares que realizamos son gratuitas y se accede mediante orden riguroso de reserva previa.'
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
