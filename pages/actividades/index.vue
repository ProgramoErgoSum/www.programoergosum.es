<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="activity in activities" :key="activity.alias">
        <nuxt-link :to="`/actividades/${activity.alias}`">
          <h3>{{ activity.title }}</h3>
        </nuxt-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import activities from '@/static/actividades/list.json'

export default {
  asyncData() {
    return {
      activities: activities
    }
  }
}
</script>

<style lang="scss" scoped></style>
