<template>
  <div class="_alias">
    <Title
      :title="title"
      :description="description"
      :image="image"
      :breadcrumbs="breadcrumbs"
    />
    <v-container>
      <v-layout row wrap>
        <v-flex sm12 md9>
          <Content :readme="readme" />
        </v-flex>
        <v-flex md3 class="hidden-sm-and-down">
          <div class="toc">
            <Toc :readme="readme" />
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            />
            <!-- [PES-es] Toc /actividades /blog -->
            <ins
              class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-6757981017018187"
              data-ad-slot="9699220490"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>
              ;(adsbygoogle = window.adsbygoogle || []).push({})
            </script>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Content from '@/components/Markdown/Content'
import Toc from '@/components/Markdown/Toc'

export default {
  components: {
    Content,
    Toc
  },
  validate({ store, params }) {
    return store.state.blogs.list.find(e => e.alias === params.alias)
  },
  async asyncData({ store, params }) {
    const blog = store.state.blogs.list.find(e => {
      return e.alias === params.alias
    })

    const path = `blog/${params.alias}`
    const file = await import(`@/doc/${path}/README.md`)
    const readme = {
      path: `images/${path}`,
      body: file.body
    }

    return {
      title: blog.title,
      description: blog.description,
      image: `/images/${path}/${blog.image}`,
      readme: readme,
      breadcrumbs: [
        {
          text: 'Blog',
          disabled: false,
          to: '/blog'
        },
        {
          text: blog.title,
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
      titleTemplate: 'Blog - %s',
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
  margin-left: 15px;
  padding-left: 15px;
  border-left: 4px solid #f0f0f0;
}
</style>
