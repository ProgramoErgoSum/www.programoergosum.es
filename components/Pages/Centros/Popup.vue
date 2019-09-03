<template>
  <div class="popup text-center">
    <v-avatar size="110">
      <v-img :src="center.image" :lazy-src="`/lazy-user.png`">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5" />
          </v-row>
        </template>
      </v-img>
    </v-avatar>
    <p class="ma-0 mt-3 font-weight-bold">
      {{ center.name }}
    </p>
    <p class="ma-0 font-weight-light">
      {{ center.address.city }}, {{ center.address.province }}
    </p>
    <v-btn
      v-if="center.social.url"
      icon
      :href="center.social.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon size="18" color="#000">mdi-link</v-icon>
    </v-btn>
    <v-btn
      v-if="center.social.twitter"
      icon
      :href="center.social.twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon size="18" color="#1da1f2">mdi-twitter</v-icon>
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
  width: 200px;
  padding: 5px;
  font-size: 14px;
}
</style>
