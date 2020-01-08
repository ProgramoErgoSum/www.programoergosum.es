<template>
  <div>
    <template v-if="isProduction">
      <Display v-if="type === 'display'" :data-ad-slot="dataAdSlot" />
      <Inarticle v-if="type === 'inarticle'" :data-ad-slot="dataAdSlot" />
      <Infeed v-if="type === 'infeed'" :data-ad-slot="dataAdSlot" />
    </template>
    <template v-else>
      <v-alert type="warning">{{ type }} ({{ dataAdSlot }})</v-alert>
    </template>
  </div>
</template>

<script>
import Display from './Blocks/Display'
import Inarticle from './Blocks/Inarticle'
import Infeed from './Blocks/Infeed'

export default {
  name: 'Index',
  components: {
    Display,
    Inarticle,
    Infeed
  },
  props: {
    type: {
      type: String,
      default: 'display' // inarticle, infeed
    },
    dataAdSlot: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isProduction: process.env.NODE_ENV === 'production'
  }),
  /*
  computed: {
    isProduction() {
      return process.env.NODE_ENV === 'production'
    }
  },
  */
  /*
  created() {
    this.isProduction = process.env.NODE_ENV === 'production'
  },
  */
  head() {
    return this.isProduction
      ? {
          script: [
            {
              src:
                'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
              async: true,
              defer: true
            },
            {
              innerHTML: ';(adsbygoogle = window.adsbygoogle || []).push({})'
            }
          ]
        }
      : {}
  }
}
</script>

<style lang="scss"></style>
