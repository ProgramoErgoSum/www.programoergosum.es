<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container>
      <v-row>
        <v-col cols="12">
          <Content :raw="raw" :cdn="cdn" />
        </v-col>
      </v-row>
    </v-container>
    <section class="py-12 block-grey">
      <Volunteers />
    </section>
    <Reg />
  </div>
</template>

<script>
import Content from '@/components/Markdown/Content'
import Volunteers from '@/components/Pages/Colabora/Volunteers'
import Reg from '@/components/Pages/Home/Reg'
export default {
  components: {
    Content,
    Volunteers,
    Reg
  },
  async asyncData({ env, store }) {
    const file = await import('@/doc/asociacion/README.md')

    return {
      metas: store.state.metas.asociacion,
      raw: file.body,
      cdn: `${env.cdn}/images/asociacion/`
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
