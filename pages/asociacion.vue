<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container>
      <v-row>
        <v-col xs="12" sm="12" md="9" lg="9" xl="9">
          <client-only>
            <DynamicMarkdown
              :cdn="cdn"
              :render-func="renderFunc"
              :static-render-funcs="staticRenderFns"
            />
          </client-only>
        </v-col>
        <v-col class="hidden-sm-and-down" md="3" lg="3" xl="3">
          <div class="sticky-top">
            <client-only>
              <DynamicToc :raw="raw" />
            </client-only>
          </div>
        </v-col>
      </v-row>
      <!--
      <v-row>
        <v-col cols="12">
          <client-only>
            <DynamicMarkdown
              :cdn="cdn"
              :render-func="renderFunc"
              :static-render-funcs="staticRenderFns"
            />
          </client-only>
        </v-col>
      </v-row>
      -->
    </v-container>
    <section class="py-12 block-grey">
      <Volunteers />
    </section>
    <Reg />
  </div>
</template>

<script>
import DynamicMarkdown from '@/components/Markdown/DynamicMarkdown'
import DynamicToc from '@/components/Markdown/DynamicToc'
import Volunteers from '@/components/Pages/Colabora/Volunteers'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    DynamicMarkdown,
    DynamicToc,
    Volunteers,
    Reg
  },
  async asyncData({ store, env }) {
    const file = await import('@/doc/asociacion/README.md')

    return {
      metas: store.state.metas.asociacion,
      raw: file.body,
      cdn: `${env.cdn}/images/asociacion/`,
      renderFunc: file.vue.render,
      staticRenderFns: file.vue.staticRenderFns
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

<style lang="scss" scoped>
.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 140px;
}
</style>
