<template>
  <span>
    <!--<v-icon size="20">mdi-calendar</v-icon>-->
    <time :datetime="mdate" class="body-2 font-weight-light">
      Última actualización: {{ mdate | formatDate }}
    </time>
  </span>
</template>

<script>
import { formatDate } from '@/mixins/formatDate'

export default {
  name: 'Posted',
  filters: { formatDate },
  props: {
    cdate: {
      type: String,
      default: ''
    },
    mdate: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
