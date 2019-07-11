<template>
  <div
    id="map-wrap"
    style="height: 800px; margin: -43px 0 -20px; position: relative; z-index: 1"
  >
    <l-map :min-zoom="6" :max-zoom="12" :center="[40.4636688, -3.7492199]">
      <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <Market v-for="center in centers" :key="center.name" :center="center" />
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
