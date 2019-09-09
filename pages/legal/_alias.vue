<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <Content :raw="raw" />
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

    return {
      raw: file.body
    }
  },
  head() {
    const title = 'Información'

    return {
      title,
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
