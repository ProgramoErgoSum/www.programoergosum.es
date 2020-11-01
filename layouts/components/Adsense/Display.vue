<template>
  <ins
    :data-ad-client="dataAdClient"
    :data-ad-slot="dataAdSlot"
    class="adsbygoogle"
    style="display:block;"
    data-ad-format="auto"
    data-full-width-responsive="true"
  />
</template>

<script>
export default {
  name: 'Display',
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
