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
import metas from '@/store/api/v1/metas.json'

import Sponsors from '@/components/Pages/Colabora/Sponsors'
import Patrons from '@/components/Pages/Colabora/Patrons'
import Paypals from '@/components/Pages/Colabora/Paypals'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
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
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title: title,
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        // Facebook
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
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
