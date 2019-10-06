<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-chip label dark @click="currentTag = 'todos'">
            Todos los puestos docentes
          </v-chip>
          <v-chip
            v-for="tag in tags"
            :key="tag"
            class="ml-1"
            label
            :outlined="tag !== currentTag"
            @click="currentTag = tag"
          >
            {{ tag }}
          </v-chip>
        </v-col>
        <v-col
          v-for="formacion in filter"
          :key="formacion.alias"
          cols="12"
          xs="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
        >
          <Item :formacion="formacion" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Item from '@/components/Pages/Formaciones/Item'

export default {
  components: {
    Item
  },
  data() {
    return {
      tags: ['infantil', 'primaria', 'secundaria', 'bachillerato'],
      currentTag: 'todos'
    }
  },
  computed: {
    filter() {
      let formaciones = this.formaciones
      if (this.currentTag !== 'todos')
        formaciones = formaciones.filter(el =>
          el.tags.includes(this.currentTag)
        )
      return formaciones
    }
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.formaciones,
      formaciones: store.state.formaciones.list
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
