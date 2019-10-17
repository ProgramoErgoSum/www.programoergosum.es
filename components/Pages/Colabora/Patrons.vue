<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Donaciones mensuales</h2>
        <p>
          Realiza una <b>donación mensual</b> con el importe que creas necesario
          y aparecerás en esta sección.
        </p>
      </v-col>
      <v-col
        v-for="(item, index) in patrons"
        :key="index"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="4"
        xl="3"
        class="pa-2"
      >
        <Card :card="item" />
      </v-col>
      <v-col cols="12">
        <div class="my-6">
          <v-btn
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7N56RY2QKJJDS&source=url"
            target="_blank"
            rel="noopener noreferrer"
            tile
            color="primary"
          >
            Apóyanos mensualmente
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
    patrons: [
      {
        name: 'David Sánchez',
        image: 'images/colabora/davidsanlo78.jpg',
        description:
          'Maestro de música, Jefe de Estudios en CEIP San Miguel de Nerja y pedagogo. Metido en las TIC desde 2004 y robótica desde 2014.',
        social: {
          url: 'https://scratchdaynerja.wordpress.com',
          twitter: 'https://twitter.com/davidsanlo78',
          github: ''
        }
      },
      {
        name: 'Pepe García',
        image: 'images/colabora/ppgarsan123.jpg',
        description:
          'Director del CEIP Francisco Villaespesa El Parador de Roquetas de Mar. Cacharreando en temas de robótica educativa desde 1978.',
        social: {
          url: '',
          twitter: '',
          github: ''
        }
      },
      {
        name: 'Francisco Román',
        image: 'images/colabora/FranciscoRomnC2.jpg',
        description:
          'Profesor de Secundaria de Robótica, Tecnología y TIC en el Colegio Reina Sofía de Totana (Murcia).',
        social: {
          url: '',
          twitter: 'https://twitter.com/FranciscoRomnC2',
          github: ''
        }
      },
      {
        name: 'Tolo Piza',
        image: 'images/colabora/tolo_piza.jpg',
        description:
          '🏳️‍🌈⚜P.h.D in Science,Teacher. Investigant Didàctica de la Ciència(UIB), Col/Reviewer Scienceinschool.',
        social: {
          url: 'http://Scienceinschool.org',
          twitter: 'https://twitter.com/tolo_piza',
          github: ''
        }
      },
      {
        name: 'Pablo Nuñez',
        image: 'images/colabora/eltercerlugar.jpg',
        description:
          'Maker en @fablableon Fundador de @alac2013. Champion en @coderdojoleon. Hago realidad tus ideas en @fabricotusideas.',
        social: {
          url: 'http://fabricotusideas.com',
          twitter: 'https://twitter.com/eltercerlugar',
          github: 'https://github.com/eltercerlugar'
        }
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
