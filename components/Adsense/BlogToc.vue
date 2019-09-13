<template>
  <div>
    <div v-if="isProduction">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <!-- [PES-es] Toc /blog -->
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6757981017018187"
        data-ad-slot="9699220490"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    </div>
    <div v-else>
      <v-alert type="warning">
        ADSENSE
      </v-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogToc',
  computed: {
    isProduction() {
      return process.env.NODE_ENV === 'production'
    }
  }
}
</script>

<style lang="scss"></style>
