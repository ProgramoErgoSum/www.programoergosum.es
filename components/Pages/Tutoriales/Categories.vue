<template>
  <v-card flat color="transparent">
    <v-card-title class="px-1">
      <span class="subtitle-1 font-weight-light">Tecnología</span>
    </v-card-title>
    <v-card-text class="px-1">
      <v-list shaped tile color="transparent" class="pa-0">
        <v-list-item-group color="primary">
          <template
            v-for="tag in tags.filter(el => el.category === 'technology')"
          >
            <v-list-item
              :key="tag.alias"
              :to="`/tutoriales/tags/${tag.alias}`"
              class="pa-0"
            >
              <v-list-item-icon class="ml-1 mr-3">
                <v-icon v-text="tag.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-regular body-2"
                  v-text="tag.name"
                />
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card-text>

    <v-divider class="my-1" />

    <v-card-title class="px-1">
      <span class="subtitle-1 font-weight-light">Programación</span>
    </v-card-title>
    <v-card-text class="px-1">
      <v-list shaped tile color="transparent" class="pa-0">
        <v-list-item-group color="primary">
          <template
            v-for="tag in tags.filter(el => el.category === 'software')"
          >
            <v-list-item
              :key="tag.alias"
              :to="`/tutoriales/tags/${tag.alias}`"
              class="pa-0"
            >
              <v-list-item-icon class="ml-1 mr-3">
                <v-icon v-text="tag.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-regular body-2"
                  v-text="tag.name"
                />
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card-text>

    <v-divider class="my-1" />

    <v-card-title class="px-1">
      <span class="subtitle-1 font-weight-light">Robótica</span>
    </v-card-title>
    <v-card-text class="px-1">
      <v-list shaped tile color="transparent" class="pa-0">
        <v-list-item-group color="primary">
          <template
            v-for="tag in tags.filter(el => el.category === 'hardware')"
          >
            <v-list-item
              :key="tag.alias"
              :to="`/tutoriales/tags/${tag.alias}`"
              class="pa-0"
            >
              <v-list-item-icon class="ml-1 mr-3">
                <v-icon v-text="tag.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-regular body-2"
                  v-text="tag.name"
                />
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Categories',
  components: {},
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
