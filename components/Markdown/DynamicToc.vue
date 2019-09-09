<template>
  <v-list v-scroll="onScroll" shaped tile color="transparent" class="pa-0">
    <!--
    <v-list-item-group>
      <v-list-item disabled>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold body-1">
            Lecciones del tutorial
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    -->
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
  name: 'DynamicToc',
  props: {
    raw: {
      type: String,
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
      this.$router.push(`${this.$route.path}#${anchor}`)
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

<style lang="scss" scoped></style>
