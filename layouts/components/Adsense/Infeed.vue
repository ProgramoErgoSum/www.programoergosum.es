<template>
  <ins
    :data-ad-client="dataAdClient"
    :data-ad-slot="dataAdSlot"
    class="adsbygoogle"
    style="display:block"
    data-ad-format="fluid"
    data-ad-layout-key="-df-2r+b4+7x-14z"
  />
</template>

<script>
export default {
  name: 'Infeed',
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
