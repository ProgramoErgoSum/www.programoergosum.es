<template>
  <v-list>
    <template v-for="item in menu">
      <v-list-tile :key="item.anchor" @click="goTo(item.anchor, $event)">
        <v-list-tile-content :id="item.anchor" v-text="item.content" />
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
import markdownIt from 'markdown-it'
import toc from 'markdown-it-toc-and-anchor'

export default {
  name: 'Toc',
  props: {
    /**
     * readme.path
     * readme.body
     * readme.image
     */
    readme: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      menu: null
    }
  },
  created() {
    const md = markdownIt({
      html: true,
      xhtmlOut: true,
      breaks: true,
      linkify: true,
      typographer: true
    })
    md.use(toc, {
      anchorClassName: 'toc-anchor',
      tocCallback: (tocMarkdown, tocArray, tocHtml) => {
        if (tocHtml) {
          this.menu = tocArray
        }
      }
    })
    md.render(this.readme.body)
  },
  methods: {
    goTo(anchor, event) {
      this.$vuetify.goTo(`#${anchor}`)
    }
  }
}
</script>

<style lang="scss"></style>
