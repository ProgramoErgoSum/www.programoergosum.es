<template>
  <v-card flat color="transparent">
    <v-list shaped tile color="transparent" class="pa-0">
      <!--
      <v-list-item-group color="primary">
        <template v-for="tag in tags.filter(el => el.category === 'learning')">
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
      <v-divider />
      -->
      <v-list-item-group color="primary">
        <template
          v-for="tag in tags.filter(el => el.category === 'categories')"
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
  </v-card>
  <!--
  <div>
    <template
      v-for="tag in tags.filter(el => el.category === 'learning')"
    >
      <v-checkbox
        :key="tag.alias"
        v-model="tagsSelected"
        :label="tag.name"
        :value="tag.alias"
        :disabled="!tag.visible"
        color="primary"
        hide-details
      />
    </template>
  </div>
  -->
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
