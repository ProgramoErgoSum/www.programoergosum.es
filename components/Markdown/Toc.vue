<template>
  <v-list v-scroll="onScroll" shaped tile color="transparent" class="pa-0">
    <v-list-item-group v-show="title">
      <v-list-item disabled>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold body-1">
            {{ title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    <v-list-item-group color="primary">
      <template v-for="item in menu">
        <v-list-item
          :key="item.anchor"
          :class="[{ 'v-list-item--active': currentAnchor === item.anchor }]"
          @click="goTo(item.anchor, $event)"
        >
          <v-list-item-content :id="item.anchor">
            <v-list-item-title
              class="font-weight-regular body-2"
              v-text="item.content"
            />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
import markdownIt from 'markdown-it'
import toc from 'markdown-it-toc-and-anchor'

export default {
  name: 'Toc',
  props: {
    raw: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
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
    // Doc: https://github.com/markdown-it/markdown-it
    const md = markdownIt('commonmark', {
      html: true,
      linkify: true
    })
    // Add anchor toc
    md.use(toc, {
      anchorClassName: 'toc-anchor',
      tocCallback: (tocMarkdown, tocArray, tocHtml) => {
        if (tocHtml) {
          // this.menu = tocArray
          // Only level 2
          this.menu = tocArray.filter(t => {
            return t.level === 2
          })
        }
      }
    })

    md.render(this.raw)
  },
  methods: {
    goTo(anchor, event) {
      const options = {
        duration: 1000,
        offset: 30,
        easing: 'easeInOutCubic'
      }
      this.$vuetify.goTo(`#${anchor}`, options)
    },
    onScroll() {
      this.currentOffset =
        window.pageYOffset || document.documentElement.offsetTop

      let i = this.menu.findIndex(item => {
        const itemOffsetTop = document.querySelector(`#${item.anchor}`)
        return itemOffsetTop.offsetTop > this.currentOffset
      })
      i = i === -1 ? this.menu.length : i

      if (i <= 0) this.currentAnchor = null
      else this.currentAnchor = this.menu[i - 1].anchor
    }
  }
}
</script>

<style lang="scss" scoped></style>
