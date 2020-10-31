<template>
  <div>
    <div v-if="isProduction">
      <div v-if="isGdpr">
        <Display
          v-if="type === 'display'"
          :data-ad-client="dataAdClient"
          :data-ad-slot="dataAdSlot"
        />
        <Inarticle
          v-if="type === 'inarticle'"
          :data-ad-client="dataAdClient"
          :data-ad-slot="dataAdSlot"
        />
        <Infeed
          v-if="type === 'infeed'"
          :data-ad-client="dataAdClient"
          :data-ad-slot="dataAdSlot"
        />
      </div>
    </div>
    <v-alert v-else class="py-12" border="bottom" color="warning" dark>
      <div class="mb-3">{{ dataAdClient }}</div>
      <div>{{ type }} ({{ dataAdSlot }})</div>
    </v-alert>
  </div>
</template>

<script>
import Display from './Display'
import Inarticle from './Inarticle'
import Infeed from './Infeed'

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
    // ToDo: Add in .env file
    dataAdClient: 'ca-pub-6757981017018187',
    isGdpr: null
  }),
  computed: {
    isProduction() {
      return process.env.NODE_ENV === 'production'
    }
  },
  mounted() {
    this.isGdpr = this.$store.state.gdpr === 'accepted'
  },
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
