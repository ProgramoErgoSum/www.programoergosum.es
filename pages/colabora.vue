<template>
  <div id="colabora">
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
    <Title :title="title" :description="description" :image="image" />
    <div class="pb-5">
      <Sponsors />
    </div>
    <div class="pt-5 pb-5 block-grey">
      <Patrons :patrons="patrons" />
    </div>
    <div class="pt-5 pb-5">
      <Volunteers :volunteers="volunteers" />
    </div>
    <Reg />
  </div>
</template>

<script>
import collaborators from '@/static/colabora/list.json'
import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'
import Sponsors from '@/components/Pages/Colabora/Sponsors'
import Volunteers from '@/components/Pages/Colabora/Volunteers'
import Patrons from '@/components/Pages/Colabora/Patrons'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    Metas,
    Title,
    Sponsors,
    Volunteers,
    Patrons,
    Reg
  },
  asyncData() {
    const path = `colabora`
    return {
      title: 'Colabora con la iniciativa',
      description:
        'Para poder hacer frente al mantenimiento en todos nuestros proyectos educativos necesitamos tu apoyo. ¿Quieres colaborar?',
      keywords: process.env.keywords,
      image: `${path}/preview.png`,
      volunteers: collaborators.volunteers,
      patrons: collaborators.patrons
    }
  }
}
</script>

<style lang="scss" scoped>
.block-grey {
  background: #f0f0f0;
}
</style>
