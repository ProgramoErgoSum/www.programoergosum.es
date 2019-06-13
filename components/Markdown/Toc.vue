<template>
  <v-list>
    <template v-for="item in menu">
      <v-list-tile :key="item.anchor" @click="goTo(item.anchor, $event)">
        <v-list-tile-content v-text="item.content" />
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
    content: {
      type: String,
      default: ''
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
    md.render(this.content)
  },
  methods: {
    goTo(anchor, event) {
      // event.target.classList.toggle('active')
      this.$vuetify.goTo(`#${anchor}`)
    }
  }
}
</script>

<style lang="scss"></style>
