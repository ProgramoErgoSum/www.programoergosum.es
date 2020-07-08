<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Mentores / Voluntarios</h2>
      </v-col>
      <v-col
        v-for="(item, index) in volunteers"
        :key="index"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
        class="pa-2"
      >
        <Card :card="item" />
      </v-col>
      <v-col cols="12">
        <div class="my-6">
          <p>
            Buscamos personas que quieran
            <b>compartir sus conocimientos desinteresadamente</b>. Personas
            interesadas en aportar su experiencia y tiempo en los talleres
            gratuitos que hacemos en la Región de Murcia. ¿Te apetece?
          </p>
          <v-btn to="/contacto" nuxt tile outlined>
            Hazte voluntario
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/Pages/Colabora/Card'

export default {
  components: {
    Card
  },
  data: () => ({
    volunteers: [
      {
        name: 'Miguel Ángel Abellán',
        image: '/images/voluntarios/migueabellan.png',
        description:
          'Porque disfruto programando y tengo la suerte de aprender todos los días.',
        social: {
          url: 'https://migueabellan.github.io',
          twitter: 'https://twitter.com/migueabellan',
          github: 'https://github.com/migueabellan'
        }
      },
      {
        name: 'Carmen B. Martínez',
        image: '/images/voluntarios/carmenb_mg.jpg',
        description:
          'Psicóloga en constante reinvención. De todas las personas se aprende algo nuevo.',
        social: {
          url: '',
          twitter: 'https://twitter.com/carmenb_mg',
          github: ''
        }
      },
      {
        name: 'Miguel Manzano',
        image: '/images/voluntarios/mmanzano.jpg',
        description:
          'Aporrea el teclado, eso sí, primero hace un commit por si los bytes.',
        social: {
          url: '',
          twitter: 'https://twitter.com/mmanzano',
          github: 'https://github.com/mmanzano'
        }
      },
      {
        name: 'Antonio García',
        image: '',
        description:
          'Productor de televisión al que le apasiona la enseñanza de la programación.',
        social: {
          url: '',
          twitter: '',
          github: ''
        }
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
