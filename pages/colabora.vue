<template>
  <v-container class="asociacion">
    <v-layout row wrap>
      <v-flex xs12>
        <Metas
          :title="title"
          :description="description"
          :image="image"
          :keywords="keywords"
        />
        <div class="mb-5">
          <h1 class="mb-3 display">
            Colaboradores
          </h1>
          <p>
            Apartado dedicado a todas aquellas personas que colaboran con la
            iniciativa de una forma u otra.
          </p>
        </div>
      </v-flex>
      <v-flex
        v-for="item in collaborators"
        :key="item.name"
        xs6
        sm4
        md3
        lg2
        class="text-xs-center pa-2"
      >
        <v-avatar size="110">
          <v-img :src="item.image" :lazy-src="item.image">
            <v-layout
              slot="placeholder"
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-layout>
          </v-img>
        </v-avatar>
        <p class="mt-3 mb-0">
          {{ item.name }}
        </p>
        <p class="mt-1 mb-0">{{ item.description }}</p>
        <v-btn
          v-if="item.social.twitter"
          class="mt-0 mx-0"
          icon
          :href="item.social.twitter"
          target="_blank"
        >
          <i class="fab fa-twitter" style="color:#1da1f2"></i>
        </v-btn>
        <v-btn
          v-if="item.social.github"
          class="mt-0 mx-0"
          icon
          :href="item.social.github"
          target="_blank"
        >
          <i class="fab fa-github" style="color:#333"></i>
        </v-btn>
      </v-flex>
      <!--
      <v-flex xs12>
        <v-expansion-panel>
          <v-expansion-panel-content v-for="item in contents" :key="item.title">
            <div slot="header">
              {{ item.title }}
            </div>
            <v-card>
              <v-card-text class="grey lighten-3">
                {{ item.description }}
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      -->
    </v-layout>
  </v-container>
</template>

<script>
import Metas from '@/components/Layout/Metas'
import collaborators from '@/static/colabora/list.json'

export default {
  components: {
    Metas
  },
  /*
  data: () => ({
    contents: [
      {
        title: 'Recursos educativos',
        description:
          'Fomentando el uso de la programación, robótica y nuevas tecnologías'
      },
      {
        title: 'Código abierto',
        description:
          'Proyectos de código abierto creados con herramientas libres'
      },
      {
        title: 'Online',
        description:
          'Accede a todos nuestros proyectos desde tu casa y sin registrarte'
      }
    ]
  }),
  */
  asyncData() {
    return {
      title: 'Colabora',
      description: process.env.description,
      keywords: process.env.keywords,
      image: process.env.image,
      collaborators: collaborators
    }
  }
}
</script>

<style lang="scss" scoped></style>
