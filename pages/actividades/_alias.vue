<template>
  <div class="_alias">
    <Title
      :title="title"
      :description="description"
      :image="image"
      :breadcrumb="breadcrumb"
    />
    <v-container>
      <v-layout row wrap>
        <v-flex sm12 md9>
          <Content :readme="readme" />
        </v-flex>
        <v-flex md3 class="hidden-sm-and-down">
          <div class="toc">
            <Toc :readme="readme" />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <section class="pt-5 pb-5 block-grey">
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
      path: `images/${path}`,
      body: file.body
    }

    return {
      title: activity.title,
      description: activity.description,
      image: `/images/${path}/${activity.image}`,
      readme: readme,
      breadcrumb: [
        {
          text: 'Actividades',
          disabled: false,
          href: 'actividades'
        },
        {
          text: activity.title,
          disabled: true,
          href: ''
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
.toc {
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
}
.block-grey {
  background: #f0f0f0;
}
</style>
