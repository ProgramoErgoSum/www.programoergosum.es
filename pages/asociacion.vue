<template>
  <div id="asociacion">
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container>
      <v-layout>
        <v-flex>
          <Content :readme="readme" />
        </v-flex>
      </v-layout>
    </v-container>
    <section class="pt-5 pb-5 block-grey">
      <Volunteers />
    </section>
    <Reg />
  </div>
</template>

<script>
import metas from '@/static/metas.json'

import Content from '@/components/Markdown/Content'
import Volunteers from '@/components/Pages/Colabora/Volunteers'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    Content,
    Volunteers,
    Reg
  },
  async asyncData() {
    const file = await import('@/doc/asociacion/README.md')
    const readme = {
      path: 'images/asociacion',
      body: file.body
    }

    return {
      metas: metas.asociacion,
      readme: readme
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

<style lang="scss" scoped>
.block-grey {
  background: #f0f0f0;
}
</style>
