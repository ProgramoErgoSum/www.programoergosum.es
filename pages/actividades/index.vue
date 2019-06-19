<template>
  <div id="actividades">
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
    <Title :title="title" :description="description" :image="image" />
    <v-container fluid>
      <v-layout row wrap>
        <v-flex
          v-for="activity in activities"
          :key="activity.alias"
          xs12
          md6
          lg4
        >
          <v-card :to="`/actividades/${activity.alias}`">
            <v-img
              :src="`/actividades/${activity.alias}/images/preview.png`"
              :lazy-src="`/lazy.png`"
              :title="`${activity.title}`"
              height="250"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-layout>
              </template>
            </v-img>
            <v-card-title primary-title>
              <h3 class="mb-4 title">{{ activity.title }}</h3>
              <div class="subheading">{{ activity.description }}</div>
            </v-card-title>
            <v-divider class="mx-3"></v-divider>
            <v-card-text v-if="activity.extra">
              <p>
                <v-icon>map</v-icon>
                {{ activity.extra.address }}
              </p>
              <p>
                <v-icon>insert_invitation</v-icon>
                {{ activity.extra.calendar.day }}
              </p>
              <p>
                <v-icon>watch_later</v-icon>
                {{ activity.extra.calendar.hour }}
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import activities from '@/static/actividades/list.json'

import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'

export default {
  components: {
    Metas,
    Title
  },
  asyncData() {
    return {
      title: 'Actividades',
      description:
        'Talleres y actividades gratuitas de programación y robótica en Murcia.',
      keywords: [
        'robótica',
        'murcia',
        'programación',
        'actividades',
        'extraescolares'
      ],
      image: 'actividades/preview.png',
      activities: activities
    }
  }
}
</script>

<style lang="scss" scoped></style>
