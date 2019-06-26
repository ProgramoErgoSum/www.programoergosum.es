<template>
  <div id="actividades">
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
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
              :src="`/actividades/${activity.alias}/preview.png`"
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
import metas from '@/static/metas.json'
import activities from '@/static/actividades/list.json'

import Title from '@/components/Layout/Title'

export default {
  components: {
    Title
  },
  asyncData() {
    return {
      metas: metas.actividades,
      activities: activities
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.canonical}${this.metas.image}`
    const canonical = `${process.env.canonical}${this.$route.path}`

    return {
      title: title,
      meta: [
        // Global
        { rel: 'canonical', href: canonical },
        { hid: 'description', name: 'description', content: description },
        // Facebook
        { property: 'og:url', content: canonical },
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
