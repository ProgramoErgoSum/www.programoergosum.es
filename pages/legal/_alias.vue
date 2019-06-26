<template>
  <div class="_alias">
    <v-container>
      <v-layout>
        <v-flex>
          <Content :readme="readme" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Content from '@/components/Markdown/Content'

export default {
  components: {
    Content
  },
  validate({ params }) {
    return params.alias !== undefined
  },
  async asyncData({ params }) {
    const path = `legal/${params.alias}`
    const file = await import(`@/static/${path}/README.md`)
    const readme = {
      path: path,
      body: file.body
    }
    return {
      readme: readme
    }
  },
  head() {
    const title = 'Información'

    return {
      title: title,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, noarchive, nofollow'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
