<template>
  <div class="title" :style="background()">
    <v-container class="pb-6">
      <v-row>
        <v-col class="pt-12" cols="12">
          <h1 class="pb-6 font-weight-bold">
            {{ title }}
          </h1>
          <h2 class="font-weight-light">
            {{ description }}
          </h2>
        </v-col>
        <v-col cols="12">
          <v-breadcrumbs
            class="breadcrumb hidden-sm-and-down pa-0"
            :items="breadcrumbs"
            divider=">"
          >
            <template v-slot:item="props">
              <nuxt-link
                :to="props.item.to"
                :class="[props.item.disabled && 'disabled']"
              >
                {{ props.item.text }}
              </nuxt-link>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ''
    },
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    background() {
      const background =
        'background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.7))'
      return this.image !== ''
        ? `${background}, url(${this.image});`
        : background
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  background: #ae4119b7;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
  h1 {
    font-size: 1.7em;
  }
  h2 {
    font-size: 1.5em;
  }
  .breadcrumb {
    font-size: 0.7em;
    font-weight: 400;
    .disabled {
      color: #49525a;
      pointer-events: none;
      text-decoration: none;
    }
  }
}
</style>
