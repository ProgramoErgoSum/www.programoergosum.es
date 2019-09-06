<template>
  <div>
    <p class="body-2 font-weight-light">
      Contribuye
      <a :href="editLink" rel="noopener noreferrer nofollow" target="_blank">
        editando <v-icon size="14" color="primary">mdi-open-in-new</v-icon>
      </a>
      el contenido de esta página en <b>GitHub</b>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Contributing',
  props: {
    editLink: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
