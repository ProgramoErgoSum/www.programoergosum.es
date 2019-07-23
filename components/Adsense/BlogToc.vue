<template>
  <div>
    <div v-if="isProduction" class="text-xs-center">
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6757981017018187"
        data-ad-slot="9699220490"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script>
    </div>
    <div v-else>
      <v-alert :value="true" color="warning" icon="priority_high">
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
