<template>
  <div id="what">
    <v-container>
      <v-layout row justify-center>
        <v-flex>
          <v-layout row wrap>
            <v-flex
              v-for="item in doing"
              :key="item.icon"
              class="text-xs-center pa-3"
              xs12
              sm12
              md4
            >
              <v-card class="card" flat>
                <v-icon class="mb-4" dark large>{{ item.icon }}</v-icon>
                <p class="title">{{ item.title }}</p>
                <p class="subheading font-weight-thin">
                  {{ item.description }}
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    doing: [
      {
        icon: 'fas fa-chalkboard-teacher',
        title: 'Recursos educativos',
        description:
          'Fomentando el uso de la programación, robótica y nuevas tecnologías'
      },
      {
        icon: 'fas fa-code',
        title: 'Código abierto',
        description:
          'Proyectos de código abierto creados con herramientas libres'
      },
      {
        icon: 'fas fa-globe',
        title: 'Online',
        description:
          'Accede a todos nuestros proyectos desde tu casa y sin registrarte'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
#what {
  padding: 50px 0;
  background: #2d3339;
  color: #fff;
  .card {
    width: 200px;
    margin: 0 auto;
    background: transparent;
    color: #f0f0f0;
  }
}
</style>
