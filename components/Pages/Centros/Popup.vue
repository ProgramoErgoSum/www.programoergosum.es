<template>
  <div class="popup text-xs-center">
    <v-avatar size="110">
      <v-img :src="center.image" :lazy-src="`/lazy-user.png`">
        <v-layout
          slot="placeholder"
          fill-height
          align-center
          justify-center
          ma-0
        >
          <v-progress-circular indeterminate color="grey lighten-5" />
        </v-layout>
      </v-img>
    </v-avatar>
    <p class="ma-0 mt-3 font-weight-bold">
      {{ center.name }}
    </p>
    <p class="ma-0 font-weight-thin">
      {{ center.address.city }}, {{ center.address.province }}
    </p>
    <v-btn
      v-if="center.social.url"
      class="mt-0 mx-0"
      icon
      :href="center.social.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fas fa-link" style="color:#000"></i>
    </v-btn>
    <v-btn
      v-if="center.social.twitter"
      class="mt-0 mx-0"
      icon
      :href="center.social.twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-twitter" style="color:#1da1f2"></i>
    </v-btn>
    <!--
    <div class="mt-1 text-xs-left">
      <b v-if="center.ambassadors.length > 1">Embajadores</b>
      <b v-else>Embajador</b>
      <ul class="mt-1">
        <li v-for="(ambassador, index) in center.ambassadors" :key="index">
          {{ ambassador.name }}
        </li>
      </ul>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    center: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  width: 150px;
}
</style>
