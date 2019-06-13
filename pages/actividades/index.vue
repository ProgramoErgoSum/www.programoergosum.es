<template>
  <v-container pa-0 fluid>
    <v-layout row wrap>
      <v-flex v-for="activity in activities" :key="activity.alias" md12 lg4>
        <v-card class="ma-3" :to="activity.alias">
          <v-img
            :src="`/actividades/${activity.alias}/images/preview.png`"
            :title="`${activity.title}`"
          />
          <v-card-title primary-title>
            <h3 class="mb-2">{{ activity.title }}</h3>
            <div>{{ activity.description }}</div>
          </v-card-title>
        </v-card>
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
