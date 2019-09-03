<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <Content :readme="readme" />
        </v-col>
      </v-row>
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
    const file = await import(`@/doc/${path}/README.md`)
    const readme = {
      cdn: path,
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
