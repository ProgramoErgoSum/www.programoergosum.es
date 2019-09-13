<template>
  <div>
    <div v-if="isProduction">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6757981017018187"
        :data-ad-slot="dataAdSlot"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    </div>
    <div v-else>
      <v-alert type="warning">DISPLAY {{ dataAdSlot }}</v-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Display',
  props: {
    dataAdSlot: {
      type: String,
      required: true
    }
  },
  computed: {
    isProduction() {
      return process.env.NODE_ENV === 'production'
    }
  }
}
</script>

<style lang="scss"></style>
