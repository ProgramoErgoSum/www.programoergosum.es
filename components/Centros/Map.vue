<template>
  <div class="map">
    <l-map
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      :center="center"
      :options="mapOptions"
    >
      <v-text-field
        v-model="search"
        label="Buscar centro"
        prepend-inner-icon="mdi-domain"
        append-icon="mdi-map-marker"
        color="primary"
        outlined
      />
      <l-tile-layer :url="url" />
      <Market v-for="(item, index) in list" :key="index" :center="item" />
    </l-map>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Market from './Market'

export default {
  name: 'Map',
  components: {
    Market
  },
  data: () => ({
    minZoom: 6,
    maxZoom: 12,
    center: [40.4636688, -3.7492199],
    url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    mapOptions: {
      scrollWheelZoom: false
    }
  }),
  computed: {
    ...mapGetters('centros', ['filter', 'list']),
    search: {
      get() {
        return this.filter
      },
      set(val) {
        this.setFilter(val)
      }
    }
  },
  methods: {
    ...mapActions('centros', ['setFilter'])
  }
}
</script>

<style lang="scss" scoped>
.map {
  height: 650px;
  position: relative;
  z-index: 1;
  .v-text-field,
  .v-autocomplete {
    position: absolute;
    top: 12px;
    left: 55px;
    z-index: 999;
  }
}
@media only screen and (max-width: 960px) {
  .map {
    height: 450px;
    .v-text-field,
    .v-autocomplete {
      display: none;
    }
  }
}
</style>
