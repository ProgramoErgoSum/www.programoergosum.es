<template>
  <section id="full" class="text-xs-center">
    <h1 class="mb-3">
      Asociación Programo Ergo Sum
    </h1>
    <h2>
      Proyectos educativos
      <strong>abiertos</strong>
      para aprender
      <span class="stress">programación y robótica</span>
      con herramientas
      <strong>libres</strong>
    </h2>
  </section>
</template>

<script>
export default {
  name: 'Full'
}
</script>

<style lang="scss" scoped>
#full {
  padding: 50px 0 75px;
}
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
</style>
