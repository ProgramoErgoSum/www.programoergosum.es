<template>
  <div>
    <Title
      :title="title"
      :description="description"
      :image="image"
      :breadcrumbs="breadcrumbs"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="2" xl="2">
          <div class="sticky-top">
            <!-- -->
          </div>
        </v-col>
        <v-col xs="12" sm="12" md="9" lg="7" xl="8">
          <!--
          <Editions :editions="editions" />
          -->
          <Content :raw="raw" :cdn="cdn" />
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="2">
          <div class="sticky-top">
            <Toc :raw="raw" title="Temario del curso" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

// import Editions from '@/components/Pages/Formaciones/Editions'
import Content from '@/components/Markdown/Content'
import Toc from '@/components/Markdown/Toc'
// import AdsenseDisplay from '@/components/Adsense/Display'
// import AdsenseInarticle from '@/components/Adsense/Inarticle'

export default {
  components: {
    // Editions,
    Content,
    Toc
    // AdsenseDisplay,
    // AdsenseInarticle
  },
  validate({ store, params }) {
    return store.state.formaciones.list.find(e => e.alias === params.alias)
  },
  async asyncData({ store, params }) {
    const formacion = store.state.formaciones.list.find(e => {
      return e.alias === params.alias
    })

    const urlRaw = `${store.state.formaciones.repo_raw}/${formacion.alias}`
    const endpoint = `${store.state.formaciones.repo_raw}/${formacion.alias}/README.md`
    // const edit = `${store.state.formaciones.repo_edit}/${formacion.alias}/README.md`

    const file = await axios.get(endpoint).then(res => {
      return res.data
    })

    return {
      title: formacion.title,
      description: formacion.description,
      image: `${urlRaw}/${formacion.image}`,

      editions: formacion.editions,

      raw: file,
      cdn: `${urlRaw}/`,

      breadcrumbs: [
        {
          text: 'Formación del profesorado',
          disabled: false,
          to: '/formaciones'
        },
        {
          text: formacion.title,
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
      titleTemplate: 'Formación del profesorado - %s',
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
