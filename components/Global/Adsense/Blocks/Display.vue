<template>
  <ins
    :data-ad-slot="dataAdSlot"
    class="adsbygoogle"
    style="display:block;"
    data-ad-client="ca-pub-6757981017018187"
    data-ad-format="auto"
    data-full-width-responsive="true"
  />
</template>

<script>
export default {
  name: 'Display',
  props: {
    dataAdSlot: {
      type: String,
      required: true
    }
  }
  /*
  head() {
    return {
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          async: true,
          defer: true
        },
        {
          innerHTML: ';(adsbygoogle = window.adsbygoogle || []).push({})'
        }
      ]
    }
  }
  */
}
</script>

<style lang="scss"></style>
