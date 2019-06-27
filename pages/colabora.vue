<template>
  <div id="colabora">
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <div class="pb-5">
      <Sponsors />
    </div>
    <div class="pt-5 pb-5 block-grey">
      <Patrons />
    </div>
    <div class="pt-5 pb-5">
      <Paypals />
    </div>
    <Reg />
  </div>
</template>

<script>
import metas from '@/static/metas.json'

import Title from '@/components/Layout/Title'
import Sponsors from '@/components/Pages/Colabora/Sponsors'
import Patrons from '@/components/Pages/Colabora/Patrons'
import Paypals from '@/components/Pages/Colabora/Paypals'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    Title,
    Sponsors,
    Patrons,
    Paypals,
    Reg
  },
  asyncData() {
    return {
      metas: metas.colabora
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.canonical}/${this.metas.image}`
    const canonical = `${process.env.canonical}${this.$route.path}`

    return {
      title: title,
      meta: [
        // Global
        { rel: 'canonical', href: canonical },
        { hid: 'description', name: 'description', content: description },
        // Facebook
        { property: 'og:url', content: canonical },
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.block-grey {
  background: #f0f0f0;
}
</style>
