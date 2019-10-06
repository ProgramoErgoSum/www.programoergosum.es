<template>
  <v-expansion-panels focusable>
    <v-expansion-panel>
      <v-expansion-panel-header class="subtitle-1">
        Ediciones realizadas de este curso
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-timeline>
          <v-timeline-item
            v-for="edition in editions"
            :key="edition.number"
            color="primary"
          >
            <span slot="opposite"> {{ edition.number }}</span>
            <v-card class="elevation-1">
              <v-card-title class="title">
                {{ edition.center }}
              </v-card-title>
              <v-card-text>
                <div class="mb-3">
                  {{ edition.description }}
                </div>
                <div class="text-right">
                  {{ edition.date }}
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'Editions',
  props: {
    editions: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
