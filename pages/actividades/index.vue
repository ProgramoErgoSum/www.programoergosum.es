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
          <Item :activity="activity" />
        </v-col>
      </v-row>
    </v-container>

    <section class="py-12" :class="background">
      <Volunteers />
    </section>
  </div>
</template>

<script>
import Item from '@/components/Pages/Actividades/Item'
import Volunteers from '@/components/Pages/Colabora/Volunteers'

export default {
  components: {
    Item,
    Volunteers
  },
  computed: {
    background() {
      return this.$vuetify.theme.isDark ? 'grey darken-3' : 'grey lighten-3'
    }
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
      title,
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
