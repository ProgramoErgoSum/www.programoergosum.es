<template>
  <div>
    <section>
      <Cover />
    </section>
    <section>
      <What />
    </section>

    <section class="py-12" :class="background">
      <Patrons />
    </section>
    <section class="py-12">
      <Volunteers />
    </section>

    <section>
      <Reg />
    </section>
  </div>
</template>

<script>
import Cover from '@/components/Pages/Home/Cover'
import What from '@/components/Pages/Home/What'
import Patrons from '@/components/Pages/Colabora/Patrons'
import Volunteers from '@/components/Pages/Colabora/Volunteers'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    Cover,
    What,
    Patrons,
    Volunteers,
    Reg
  },
  computed: {
    background() {
      return this.$vuetify.theme.isDark ? 'grey darken-3' : 'grey lighten-3'
    }
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.index
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

<style lang="scss" scoped></style>
