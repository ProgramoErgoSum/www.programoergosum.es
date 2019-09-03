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
          <Content :readme="readme" />
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="3">
          <div class="sticky-top">
            <Toc :readme="readme" />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <section class="py-12 block-grey">
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
  validate({ store, params }) {
    return store.state.activities.list.find(e => e.alias === params.alias)
  },
  async asyncData({ store, params }) {
    const activity = store.state.activities.list.find(e => {
      return e.alias === params.alias
    })

    const path = `actividades/${params.alias}`
    const file = await import(`@/doc/${path}/README.md`)
    const readme = {
      cdn: `images/${path}`,
      body: file.body
    }

    return {
      title: activity.title,
      description: activity.description,
      image: `/images/${path}/${activity.image}`,
      readme: readme,
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
    const image = `${process.env.cdn}${this.image}`

    return {
      title: title,
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
