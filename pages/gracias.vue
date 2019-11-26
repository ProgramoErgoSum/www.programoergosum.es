<template>
  <div>
    <Title :title="title" :description="description" />
    <v-container>
      <v-row>
        <v-col cols="12">
          <p>
            Programo Ergo Sum es una
            <b>iniciativa sin ánimo de lucro</b> inscrita en el Registro de
            Asociaciones por el Director General de Participación Ciudadana,
            Unión Europea y Acción Exterior de la Consejería de Presidencia, con
            el número de registro 12.731/1ª.
          </p>
          <v-list class="px-6 mb-12">
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
  </div>
</template>

<script>
export default {
  components: {},
  asyncData() {
    const title = 'Gracias'
    const description =
      'Gracias por colaborar con la iniciativa. En unos días aparecerás en el apartado de donaciones.'
    return {
      title,
      description
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, noarchive, nofollow'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
