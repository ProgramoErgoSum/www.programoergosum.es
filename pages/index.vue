<template>
  <div>
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />

    <v-container class="home">
      <v-layout row wrap>
        <v-flex xs12>
          <section class="text-xs-center">
            <h1 class="mb-3">
              Asociación Programo Ergo Sum
            </h1>
            <h2 class="mb-5">
              Proyectos educativos
              <strong>abiertos</strong>
              para aprender
              <span class="stress">programación y robótica</span>
              con herramientas
              <strong>libres</strong>
            </h2>
          </section>
        </v-flex>
      </v-layout>
    </v-container>

    <section class="somos">
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
                  <v-icon class="mb-4" large>{{ item.icon }}</v-icon>
                  <p class="title">{{ item.title }}</p>
                  <p class="subheading">{{ item.description }}</p>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="asociacion">
      <v-container>
        <v-layout row wrap>
          <v-flex>
            <p class="font-weight-black">
              Asociación Programo Ergo Sum
            </p>
            <p class="font-weight-light">
              Iniciativa sin ánimo de lucro inscrita en el Registro de
              Asociaciones por el Director General de Participación Ciudadana,
              Unión Europea y Acción Exterior de la Consejería de Presidencia,
              con el número de registro 12.731/1ª.
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
import Metas from '@/components/Layout/Metas'

export default {
  components: {
    Metas
  },
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
  }),
  asyncData() {
    return {
      title: process.env.title,
      description: process.env.description,
      keywords: process.env.keywords,
      image: process.env.image
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  max-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  margin-top: -70px;
  padding: 35vh 20px;
  h1 {
    font-weight: 600;
    font-size: 40px;
  }
  h2 {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
    strong {
      font-weight: 500;
      color: #d25f34;
    }
    .stress {
      padding: 2px 5px;
      background: #d25f34;
      color: #fff;
    }
  }
}
.somos {
  padding: 50px 0;
  background: #fff;
  .card {
    width: 200px;
    margin: 0 auto;
  }
}
.asociacion {
  padding: 50px;
  background: #d25f34;
  color: #fff;
  font-size: 20px;
}
@media only screen and (max-width: 1904px) {
}
@media only screen and (max-width: 1264px) {
}
@media only screen and (max-width: 960px) {
  .home {
    min-height: auto;
    max-height: auto;
    margin-top: -50px;
    padding: 150px 20px 70px;
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 20px;
    }
  }
  .asociacion {
    padding: 20px;
    font-size: 18px;
  }
}
@media only screen and (max-width: 600px) {
  .home {
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 20px;
    }
  }
}
</style>
