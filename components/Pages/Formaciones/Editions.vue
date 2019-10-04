<template>
  <div>
    <h2>Ediciones del curso</h2>
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
  </div>
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

<style lang="scss" scoped>
h2 {
  margin-top: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-size: 1.7rem;
  font-weight: 700;
  border-bottom: 1px solid #f0f0f0;
}
</style>
