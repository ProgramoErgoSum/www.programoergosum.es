<template>
  <time :datetime="mdate" class="body-2 font-weight-light">
    Última actualización: {{ mdate | moment('DD MMMM, YYYY') }}
  </time>
</template>

<script>
export default {
  name: 'Posted',
  props: {
    mdate: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
