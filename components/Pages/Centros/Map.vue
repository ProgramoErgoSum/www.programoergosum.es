<template>
  <div id="map">
    <l-map :min-zoom="6" :max-zoom="12" :center="[40.4636688, -3.7492199]">
      <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <Market v-for="(item, index) in centers" :key="index" :center="item" />
    </l-map>
  </div>
</template>

<script>
import Market from '@/components/Pages/Centros/Market'

export default {
  name: 'Map',
  components: {
    Market
  },
  props: {
    centers: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  height: 600px;
  position: relative;
  z-index: 1;
}
</style>
