<template>
  <div>
    <h3 class="mb-3">Contribuciones</h3>
    <p class="mt-2 font-weight-light">
      ¿Has encontrado algún error o quieres contribuir?
      <a :href="editLink" rel="noopener noreferrer nofollow" target="_blank">
        Edita el contenido de esta página
        <v-icon size="14" color="primary">mdi-open-in-new</v-icon>
      </a>
      en <b>GitHub</b> y aparecerás aquí.
    </p>
    <Author
      v-for="(author, index) in authors"
      :key="index"
      :username="author"
    />
  </div>
</template>

<script>
import Author from '@/components/Pages/Blog/Author'

export default {
  name: 'Contributing',
  components: {
    Author
  },
  props: {
    authors: {
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
