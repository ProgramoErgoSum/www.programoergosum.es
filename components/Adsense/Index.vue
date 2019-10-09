<template>
  <div>
    <template v-if="isProduction">
      <Display v-if="type === 'display'" :data-ad-slot="dataAdSlot" />
      <Inarticle v-if="type === 'inarticle'" :data-ad-slot="dataAdSlot" />
      <Infeed v-if="type === 'infeed'" :data-ad-slot="dataAdSlot" />
    </template>
    <template v-else>
      <v-alert type="warning">{{ type }} ({{ dataAdSlot }})</v-alert>
    </template>
  </div>
</template>

<script>
import Display from '@/components/Adsense/Blocks/Display'
import Inarticle from '@/components/Adsense/Blocks/Inarticle'
import Infeed from '@/components/Adsense/Blocks/Infeed'

export default {
  name: 'Index',
  components: {
    Display,
    Inarticle,
    Infeed
  },
  props: {
    type: {
      type: String,
      default: 'display' // inarticle, infeed
    },
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
