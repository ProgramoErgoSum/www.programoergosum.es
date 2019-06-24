<template>
  <div id="colabora">
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
    <Title :title="title" :description="description" />
    <Sponsors :sponsors="sponsors" />
    <Volunteers :volunteers="volunteers" />
    <Patrons :patrons="patrons" />
  </div>
</template>

<script>
import collaborators from '@/static/colabora/list.json'
import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'
import Sponsors from '@/components/Pages/Colabora/Sponsors'
import Volunteers from '@/components/Pages/Colabora/Volunteers'
import Patrons from '@/components/Pages/Colabora/Patrons'

export default {
  components: {
    Metas,
    Title,
    Sponsors,
    Volunteers,
    Patrons
  },
  asyncData() {
    return {
      title: 'Colabora',
      description:
        '¿Quieres formar parte del proyecto? Únete al equipo aportando tu granito de arena.',
      keywords: process.env.keywords,
      image: process.env.image,
      sponsors: collaborators.sponsors,
      volunteers: collaborators.volunteers,
      patrons: collaborators.patrons
    }
  }
}
</script>

<style lang="scss" scoped></style>
