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
      style="display:block"
      data-ad-format="fluid"
      data-ad-layout-key="-df-2r+b4+7x-14z"
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
  name: 'Infeed',
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
