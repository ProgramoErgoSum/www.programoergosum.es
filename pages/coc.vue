<template>
  <div id="coc">
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
  async asyncData() {
    const path = `coc`
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
    const title = 'Código de conducta'

    return {
      title: title
    }
  }
}
</script>

<style lang="scss" scoped></style>
