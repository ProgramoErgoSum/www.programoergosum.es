<template>
  <div class="_alias">
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
    <Title :title="title" :description="description" :image="image" />
    <v-container>
      <v-layout>
        <v-flex>
          <!--
            <Content :readme="readme" />
          -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import blogs from '@/static/blog/list.json'

import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'
// import Content from '@/components/Markdown/Content'

export default {
  components: {
    Metas,
    Title
    // Content
  },
  /*
  validate({ params }) {
    const blog = blogs.find(e => {
      return e.alias === params.alias
    })
    return blog !== undefined
  },
  */
  asyncData({ params, error, redirect }) {
    const readme = {
      path: `blog/${params.alias}`,
      body: '',
      image: ''
    }

    const blog = blogs.find(e => {
      return e.alias === params.alias
    })

    if (blog === undefined) {
      redirect('/404')
      return error({ statusCode: 404 })
    }

    // console.log(readme)
    /*
    try {
      page = await $docs.get(path)
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500 })
      }
      return error({ statusCode: 404 })
    }
    const blog = blogs.find(e => {
      return e.alias === params.alias
    })
    const path = `blog/${params.alias}`
    const file = await import(`@/static/${path}/README.md`)
    const readme = {
      path: path,
      body: file.body,
      image: `${path}/preview.png`
    }
    */
    return {
      title: blog.title,
      description: blog.description,
      image: readme.image,
      keywords: blog.keywords
      // readme: readme
    }
  }
  /*
  async asyncData({ params, error }) {
    const blog = blogs.find(e => {
      return e.alias === params.alias
    })

    const path = `blog/${params.alias}`
    const file = await import(`@/static/${path}/README.md`)
    const readme = {
      path: path,
      body: file.body,
      image: `${path}/preview.png`
    }
    return {
      title: blog.title,
      description: blog.description,
      image: readme.image,
      keywords: blog.keywords,
      readme: readme
    }
  }
  */
}
</script>

<style lang="scss" scoped></style>
