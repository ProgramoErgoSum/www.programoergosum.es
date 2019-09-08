<template>
  <v-img :src="setSrc" :lazy-src="`/lazy.png`" :title="title" :height="height">
    <template v-slot:placeholder>
      <v-layout fill-height align-center justify-center ma-0>
        <v-progress-circular indeterminate color="grey lighten-5" />
      </v-layout>
    </template>
  </v-img>
</template>

<script>
export default {
  name: 'VImageLazy',
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 185
    }
  },
  data: () => ({
    observer: null,
    intersected: false
  }),
  computed: {
    setSrc() {
      return this.intersected ? this.src : ''
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      const image = entries[0]
      if (image.isIntersecting) {
        this.intersected = true
        this.observer.disconnect()
      }
    })
    this.observer.observe(this.$el)
  },
  destroyed() {
    this.observer.disconnect()
  }
}
</script>

<style lang="scss" scoped></style>
