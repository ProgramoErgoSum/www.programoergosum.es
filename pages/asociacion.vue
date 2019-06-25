<template>
  <div id="asociacion">
    <Metas
      :title="title"
      :description="description"
      :image="image"
      :keywords="keywords"
    />
    <Title :title="title" :description="description" :image="image" />
    <v-container>
      <v-layout>
        <v-flex>
          <Content :readme="readme" />
        </v-flex>
      </v-layout>
    </v-container>
    <section class="pt-5 pb-5 block-grey">
      <Volunteers />
    </section>
    <Reg />
  </div>
</template>

<script>
import Metas from '@/components/Layout/Metas'
import Title from '@/components/Layout/Title'
import Content from '@/components/Markdown/Content'
import Volunteers from '@/components/Pages/Colabora/Volunteers'
import Reg from '@/components/Pages/Home/Reg'

export default {
  components: {
    Metas,
    Title,
    Content,
    Volunteers,
    Reg
  },
  async asyncData() {
    const path = `asociacion`
    const file = await import(`@/static/${path}/README.md`)
    const readme = {
      path: path,
      body: file.body,
      image: `${path}/preview.png`
    }

    return {
      title: 'Iniciativa Programo Ergo Sum',
      description:
        'Iniciativa sin ánimo de lucro para acercar la programación, robótica educativa y nuevas tecnologías a todas las edades.',
      keywords: ['asociacion', 'murcia', 'programo ergo sum'],
      image: readme.image,
      readme: readme
    }
  }
}
</script>

<style lang="scss" scoped>
.block-grey {
  background: #f0f0f0;
}
</style>
