<template>
  <v-card :to="`/actividades/${activity.alias}`" nuxt>
    <v-img
      :src="`/images/actividades/${activity.alias}/${activity.image}`"
      :lazy-src="`/lazy.png`"
      :title="`${activity.title}`"
      height="250"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5" />
        </v-row>
      </template>
    </v-img>
    <!--
    <vuetify-lazy-image
      :src="`/images/actividades/${activity.alias}/${activity.image}`"
      :title="`${activity.title}`"
      :aspect-ratio="1.5"
    />
    -->
    <v-card-title primary-title>
      <h3 class="mb-4 title">{{ activity.title }}</h3>
      <div class="subtitle-1">{{ activity.description }}</div>
    </v-card-title>
    <v-divider class="mx-3 my-3"></v-divider>
    <v-card-text v-if="activity.extra">
      <p>
        <v-icon>mdi-map</v-icon>
        {{ activity.extra.address }}
      </p>
      <p>
        <v-icon>mdi-calendar</v-icon>
        {{ activity.extra.calendar.day }}
      </p>
      <p>
        <v-icon>mdi-clock</v-icon>
        {{ activity.extra.calendar.hour }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Item',
  props: {
    activity: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
