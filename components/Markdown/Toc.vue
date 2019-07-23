<template>
  <v-list v-scroll="onScroll">
    <template v-for="item in menu">
      <v-list-tile :key="item.anchor" @click="goTo(item.anchor, $event)">
        <v-list-tile-content
          :id="item.anchor"
          :class="[
            { 'primary--text': currentAnchor === item.anchor },
            `level-${item.level}`
          ]"
          v-text="item.content"
        />
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
      menu: null,
      currentAnchor: null,
      currentOffset: 0
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
    },
    onScroll() {
      this.currentOffset =
        window.pageYOffset || document.documentElement.offsetTop

      const items = this.menu
      const i = items.slice().findIndex(item => {
        const itemOffsetTop = document.querySelector(`#${item.anchor}`)
        return itemOffsetTop.offsetTop > this.currentOffset
      })

      if (this.currentOffset < 550) {
        this.currentAnchor = this.menu[0].anchor
      } else {
        const item = i - 1 < 0 ? items.length - 1 : i - 1
        this.currentAnchor = this.menu[item].anchor
      }
    }
  }
}
</script>

<style lang="scss">
.v-list__tile {
  height: auto;
  padding: 5px;
  font-size: 14px;
  font-weight: 300;
  .level-1 {
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    font-weight: 500;
  }
  .level-2 {
    padding-left: 0px;
  }
  .level-3 {
    padding-left: 15px;
  }
  .level-4 {
    padding-left: 30px;
  }
}
</style>
