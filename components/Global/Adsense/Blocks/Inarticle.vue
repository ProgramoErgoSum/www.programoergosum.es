<template>
  <div>
    <!--
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    ></script>
    -->
    <ins
      :data-ad-slot="dataAdSlot"
      class="adsbygoogle"
      style="display:block; margin: 50px; text-align:center;"
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-6757981017018187"
    />
    <!--
    <script>
      ;(adsbygoogle = window.adsbygoogle || []).push({})
    </script>
    -->
  </div>
</template>

<script>
export default {
  name: 'Inarticle',
  props: {
    dataAdSlot: {
      type: String,
      required: true
    }
  },
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
}
</script>

<style lang="scss"></style>
