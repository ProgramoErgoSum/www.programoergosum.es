<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Donaciones</h2>
        <p>
          Desde la Asociación Programo Ergo Sum, apostamos por una
          <b>educación libre, publica y gratuita</b>. Nuestro objetivo es que
          cada alumno de cada escuela tenga la oportunidad de aprender
          informática, programación, electrónica y robótica educativa y queremos
          que sean las propias personas las que apoyen los proyectos educativos.
        </p>
        <p>
          Si te gusta lo que hacemos y quieres ayudarnos economicamente, puedes
          realizar una
          <b>donación totalmente desinteresada</b> con el importe que creas
          necesario y para agradecértelo, tu nombre aparecerá en esta sección.
        </p>
      </v-col>
      <v-col cols="12">
        <template v-for="(item, key) in donations">
          <v-chip
            v-if="item.website"
            :key="key"
            :href="item.website"
            label
            outlined
            class="ma-1"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <v-avatar class="mr-1">
              <v-icon size="18" color="#333">mdi-link</v-icon>
            </v-avatar>
            {{ item.name }}
          </v-chip>
          <v-chip v-else :key="key" label outlined class="ma-1">
            {{ item.name }}
          </v-chip>
        </template>
        <p class="mt-3 mb-0 caption">
          * Donaciones realizadas entre 2015-{{ new Date().getFullYear() }}.
        </p>
      </v-col>
      <v-col cols="12">
        <div class="my-6">
          <v-btn
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7N56RY2QKJJDS&source=url"
            target="_blank"
            rel="nofollow noopener noreferrer"
            tile
            color="secondary"
          >
            Realiza una donación
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Donations',
  data: () => ({
    donations: [
      {
        name: 'David Sánchez',
        website: 'https://twitter.com/davidsanlo78',
        date: '2020-06-01'
      },
      {
        name: 'Tolo Piza',
        website: 'https://twitter.com/tolo_piza',
        date: '2020-06-01'
      },
      {
        name: 'Pepe García',
        website: 'http://ceipvillaespesa.es/',
        date: '2020-06-01'
      },
      {
        name: 'Francisco Román',
        website: 'https://twitter.com/FranciscoRomnC2',
        date: '2020-06-01'
      },
      {
        name: 'Pablo Nuñez',
        website: 'https://twitter.com/eltercerlugar',
        date: '2020-06-01'
      },
      // 15
      {
        name: 'Julio C Cordeiro',
        website: 'http://www.edu.xunta.gal/centros/iessalvadormadariaga',
        date: '2019-09-29'
      },
      // 10
      {
        name: 'Jesús Barrera',
        website: 'https://aprenderconrobots.com',
        date: '2019-12-27'
      },
      {
        name: 'Juan Antonio Pérez',
        website: 'https://sites.google.com/iesmurillo.es/tecnomurillo',
        date: '2019-10-20'
      },
      {
        name: 'Ángel Otalora',
        date: '2020-04-13'
      },
      {
        name: 'Sergio Pérez',
        date: '2019-11-12'
      },
      // 5
      {
        name: 'David Pons',
        date: '2019-07-11'
      },
      {
        name: 'Francisco Javier Carmona',
        date: '2020-03-21'
      },
      {
        name: 'Francisco José Marín',
        date: '2019-11-25'
      },
      {
        name: 'Javier Garcia',
        date: '2019-12-15'
      },
      {
        name: 'José Antonio Torrecillas',
        date: '2019-11-17'
      },
      {
        name: 'María Bouvier',
        date: '2019-12-05'
      },
      {
        name: 'Maria Moure',
        date: '2019-10-30'
      },
      {
        name: 'Nasim Maldonado',
        date: '2019-09-30'
      },
      // 1
      {
        name: 'Andres Montilla',
        date: '2019-07-25'
      },
      {
        name: 'Carlos Hernán',
        date: '2019-07-10'
      },
      {
        name: 'Julieta Brenda',
        date: '2019-07-11'
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
