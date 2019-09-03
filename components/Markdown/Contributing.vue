<template>
  <div class="contributing">
    <!--
    <p class="mb-3 font-weight-light">
      El contenido de esta página se encuentra bajo una licencia
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://creativecommons.org/licenses/by-sa/4.0/"
      >
        Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional.
      </a>
    </p>
    -->
    <p class="font-weight-regular">
      ¿Has encontrado algún error en el texto? &nbsp;
      <a
        :href="fullEditLink"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <i class="fas fa-edit"></i> Edita
      </a>
      el contenido de esta página en GitHub.
    </p>
    <p class="font-weight-light font-italic">
      Última actualización: {{ date }}
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
    },
    date: {
      type: String,
      default: ''
    }
  },
  computed: {
    fullEditLink: function() {
      const repo = 'https://github.com/ProgramoErgoSum/www.programoergosum.es'
      const branch = 'develop'
      return `${repo}/blob/${branch}/${this.editLink}`
    }
  }
}
</script>

<style lang="scss" scoped>
.contributing {
  font-size: 14px;
  p {
    margin: 0 0 5px;
    padding: 0;
  }
}
</style>
