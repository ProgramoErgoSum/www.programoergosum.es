<template>
  <div class="_alias">
    <Title
      :title="title"
      :description="description"
      :image="image"
      :breadcrumbs="breadcrumbs"
    />
    <v-container>
      <v-row>
        <v-col xs="12" sm="12" md="9" lg="9" xl="9">
          <Content :raw="raw" :cdn="cdn" />
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="3">
          <div class="sticky-top">
            <Toc :raw="raw" />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <section class="py-12" :class="background">
      <Volunteers />
    </section>
  </div>
</template>

<script>
import Content from '@/components/Markdown/Content'
import Toc from '@/components/Markdown/Toc'
import Volunteers from '@/components/Pages/Colabora/Volunteers'

export default {
  components: {
    Content,
    Toc,
    Volunteers
  },
  computed: {
    background() {
      return this.$vuetify.theme.isDark ? 'grey darken-3' : 'grey lighten-3'
    }
  },
  validate({ store, params }) {
    return store.state.activities.list.find(e => e.alias === params.alias)
  },
  async asyncData({ env, store, params }) {
    const activity = store.state.activities.list.find(e => {
      return e.alias === params.alias
    })

    const path = `actividades/${params.alias}`
    const file = await import(`@/doc/${path}/README.md`)

    return {
      title: activity.title,
      description: activity.description,
      image: `${env.cdn}/images/${path}/${activity.image}`,

      raw: file.body,
      cdn: `${env.cdn}/images/${path}/`,

      breadcrumbs: [
        {
          text: 'Actividades',
          disabled: false,
          to: '/actividades'
        },
        {
          text: activity.title,
          disabled: true,
          to: ''
        }
      ]
    }
  },
  head() {
    const title = this.title
    const description = this.description
    const image = this.image

    return {
      title,
      titleTemplate: 'Actividades - %s',
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

<style lang="scss" scoped>
.nuxt-content > .container {
  margin-bottom: 50px;
}
.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 140px;
}
</style>
