<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <!--
    <section class="py-12">
      <Sponsors />
    </section>
    -->
    <section class="py-12">
      <Patrons />
    </section>
    <section class="py-12" :class="background">
      <Donations />
    </section>
    <Reg />
  </div>
</template>

<script>
// import Sponsors from '@/components/Pages/Colabora/Sponsors'
import Patrons from '@/components/Pages/Colabora/Patrons'
import Donations from '@/components/Pages/Colabora/Donations'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    // Sponsors,
    Patrons,
    Donations,
    Reg
  },
  computed: {
    background() {
      return this.$vuetify.theme.isDark ? 'grey darken-3' : 'grey lighten-3'
    }
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.colabora
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
