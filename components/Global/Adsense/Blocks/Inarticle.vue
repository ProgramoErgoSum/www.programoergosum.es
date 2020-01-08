<template>
  <ins
    :data-ad-client="dataAdClient"
    :data-ad-slot="dataAdSlot"
    class="adsbygoogle"
    style="display:block; margin: 50px; text-align:center;"
    data-ad-layout="in-article"
    data-ad-format="fluid"
  />
</template>

<script>
export default {
  name: 'Inarticle',
  props: {
    dataAdClient: {
      type: String,
      required: true
    },
    dataAdSlot: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
