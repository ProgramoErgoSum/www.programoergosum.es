<template>
  <v-container fluid class="actividades">
    <v-layout row wrap>
      <Metas
        :title="title"
        :description="description"
        :image="image"
        :keywords="keywords"
      />
      <v-flex v-for="activity in activities" :key="activity.alias" xs12 md6 lg4>
        <v-card class="ma-3" :to="`/actividades/${activity.alias}`">
          <v-img
            :src="`/actividades/${activity.alias}/images/preview.png`"
            :title="`${activity.title}`"
          />
          <v-card-title primary-title>
            <h3 class="mb-3 title">{{ activity.title }}</h3>
            <div class="subheading">{{ activity.description }}</div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Metas from '@/components/Layout/Metas'
import activities from '@/static/actividades/list.json'

export default {
  components: {
    Metas
  },
  asyncData() {
    return {
      title: 'Actividades',
      description: process.env.description,
      keywords: process.env.keywords,
      image: process.env.image,
      activities: activities
    }
  }
}
</script>

<style lang="scss" scoped></style>
