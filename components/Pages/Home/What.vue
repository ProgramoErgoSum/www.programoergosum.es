<template>
  <div class="py-12 white--text secondary">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col
              v-for="item in doing"
              :key="item.icon"
              class="text-center pa-3"
              cols="12"
              xs="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
            >
              <v-card class="white--text secondary" flat>
                <v-icon class="mb-6" dark size="60">{{ item.icon }}</v-icon>
                <p class="title">{{ item.title }}</p>
                <p class="body-1 font-weight-light">
                  {{ item.description }}
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    doing: [
      {
        icon: 'mdi-school',
        title: 'Recursos educativos',
        description:
          'Fomentando el uso de la programación, robótica y nuevas tecnologías'
      },
      {
        icon: 'mdi-open-source-initiative',
        title: 'Código abierto',
        description:
          'Proyectos educativos de código abierto creados con herramientas libres'
      },
      {
        icon: 'mdi-earth',
        title: 'Online',
        description:
          'Accede a todos nuestros proyectos desde tu casa y sin registrarte'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.v-card {
  width: 240px;
  margin: 0 auto;
}
</style>
