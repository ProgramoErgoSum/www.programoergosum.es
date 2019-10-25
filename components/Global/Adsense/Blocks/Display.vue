<template>
  <div>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    ></script>
    <ins
      class="adsbygoogle"
      style="display:block; margin: 50px;"
      data-ad-client="ca-pub-6757981017018187"
      :data-ad-slot="dataAdSlot"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
    <script>
      ;(adsbygoogle = window.adsbygoogle || []).push({})
    </script>
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
  }
}
</script>

<style lang="scss"></style>
