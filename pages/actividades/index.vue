<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container fluid>
      <v-row>
        <v-col
          v-for="activity in activities"
          :key="activity.alias"
          cols="12"
          xs="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
        >
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
        </v-col>
      </v-row>
    </v-container>

    <section class="py-12 block-grey">
      <Volunteers />
    </section>
  </div>
</template>

<script>
import Volunteers from '@/components/Pages/Colabora/Volunteers'

export default {
  components: {
    Volunteers
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.actividades,
      activities: store.state.activities.list
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title: title,
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        // Facebook
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
