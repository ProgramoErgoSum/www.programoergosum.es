<template>
  <div class="title" :style="background()">
    <v-container class="pb-12">
      <v-row>
        <v-col class="py-12" cols="12">
          <h1 class="font-weight-bold">
            {{ title }}
          </h1>
          <h2 class="font-weight-light">
            {{ description }}
          </h2>
        </v-col>
        <v-col cols="12">
          <v-breadcrumbs
            class="breadcrumb pa-0"
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
        'background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,1))'
      return this.image !== ''
        ? `${background}, url(${this.image});`
        : background
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  background: #d25f34b7;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
  h1 {
    margin-bottom: 30px;
    font-size: 40px;
  }
  h2 {
    font-size: 28px;
    line-height: 1.3;
  }
  .breadcrumb {
    min-height: 35px;
    font-size: 14px;
    font-weight: 400;
    .disabled {
      color: #49525a;
      pointer-events: none;
      text-decoration: none;
    }
  }
}
@media only screen and (max-width: 1904px) {
}
@media only screen and (max-width: 1264px) {
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 26px;
  }
}
@media only screen and (max-width: 960px) {
  .title {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 24px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .title {
    h1 {
      font-size: 20px;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 18px;
    }
  }
}
</style>
