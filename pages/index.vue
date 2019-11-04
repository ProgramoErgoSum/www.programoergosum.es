<template>
  <div>
    <section>
      <Cover />
    </section>
    <section>
      <What />
    </section>
    <section>
      <Map :centers="centers" />
    </section>
    <section>
      <Reg />
    </section>
  </div>
</template>

<script>
import Cover from '@/components/Pages/Home/Cover'
import Map from '@/components/Pages/Centros/Map'
import What from '@/components/Pages/Home/What'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    Cover,
    Map,
    What,
    Reg
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.index,
      centers: store.state.centers.list
    }
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title,
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        // Open Graph
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

<style lang="scss" scoped></style>
