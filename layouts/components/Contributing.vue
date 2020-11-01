<template>
  <div>
    <h3 class="mb-3">Contribuciones</h3>
    <p class="font-weight-light">
      ¿Has encontrado algún error en el contenido?
      <br />
      Edita
      <a :href="editLink" rel="noopener noreferrer nofollow" target="_blank">
        esta página
        <v-icon size="14" color="primary">mdi-open-in-new</v-icon>
      </a>
      en <b>GitHub</b> y aparecerás en este apartado.
    </p>
    <v-chip-group column>
      <v-chip
        v-for="username in contributors"
        :key="username"
        :href="`https://github.com/${username}`"
        pill
        outlined
        class="mr-1"
        label
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <v-avatar tile left>
          <VImageLazy
            :src="`https://avatars.githubusercontent.com/${username}`"
            :title="username"
          />
        </v-avatar>
        <span class="font-weight-light">
          {{ username }} <v-icon size="10">mdi-open-in-new</v-icon>
        </span>
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script>
export default {
  props: {
    contributors: {
      type: Array,
      required: true
    },
    editLink: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
