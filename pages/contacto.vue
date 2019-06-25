<template>
  <div id="contacto">
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
    <Title :title="title" :description="description" />
    <v-container>
      <v-layout>
        <v-flex>
          <p>
            Programo Ergo Sum es una
            <b>iniciativa sin ánimo de lucro</b> inscrita en el Registro de
            Asociaciones por el Director General de Participación Ciudadana,
            Unión Europea y Acción Exterior de la Consejería de Presidencia, con
            el número de registro 12.731/1ª.
          </p>
          <v-list class="subheading">
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-map-marker"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                Región de Murcia
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-envelope"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                info@programoergosum.com
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon class="fas fa-globe"></v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                www.programoergosum.es
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'

export default {
  components: {
    Metas,
    Title
  },
  asyncData() {
    return {
      title: 'Contacta con nosotros',
      description:
        '¿Tienes algo que preguntarnos? Puedes contactar con nosotros a través de nuestro correo electrónico y redes sociales.',
      keywords: ['asociacion', 'murcia', 'contacto'],
      image: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
