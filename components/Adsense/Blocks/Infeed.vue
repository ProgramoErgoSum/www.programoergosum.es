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
        data-ad-format="fluid"
        data-ad-layout-key="-df-2r+b4+7x-14z"
        data-ad-client="ca-pub-6757981017018187"
        :data-ad-slot="dataAdSlot"
      ></ins>
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    </div>
    <div v-else>
      <v-alert type="warning">IN FEED {{ dataAdSlot }}</v-alert>
    </div>
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
  computed: {
    isProduction() {
      return process.env.NODE_ENV === 'production'
    }
  }
}
</script>

<style lang="scss"></style>
