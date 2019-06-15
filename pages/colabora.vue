<template>
  <div id="colabora">
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
    <Title :title="title" :description="description" />
    <v-container>
      <v-layout row wrap>
        <v-flex
          v-for="item in collaborators"
          :key="item.name"
          xs6
          sm4
          md3
          lg2
          class="text-xs-center pa-2"
        >
          <v-avatar size="110">
            <v-img :src="item.image" :lazy-src="item.image">
              <v-layout
                slot="placeholder"
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-layout>
            </v-img>
          </v-avatar>
          <p class="mt-3 mb-0">
            {{ item.name }}
          </p>
          <p class="mt-1 mb-0">{{ item.description }}</p>
          <v-btn
            v-if="item.social.twitter"
            class="mt-0 mx-0"
            icon
            :href="item.social.twitter"
            target="_blank"
          >
            <i class="fab fa-twitter" style="color:#1da1f2"></i>
          </v-btn>
          <v-btn
            v-if="item.social.github"
            class="mt-0 mx-0"
            icon
            :href="item.social.github"
            target="_blank"
          >
            <i class="fab fa-github" style="color:#333"></i>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'
import collaborators from '@/static/colabora/list.json'

export default {
  components: {
    Metas,
    Title
  },
  asyncData() {
    return {
      title: 'Colaboradores',
      description:
        '¿Quieres formar parte del equipo? Conviértete en colaborador.',
      keywords: process.env.keywords,
      image: process.env.image,
      collaborators: collaborators
    }
  }
}
</script>

<style lang="scss" scoped></style>
