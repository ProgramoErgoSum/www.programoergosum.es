<template>
  <v-list shaped tile disabled color="transparent" class="pa-0">
    <v-list-item-group>
      <v-list-item disabled>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold body-1">
            Colabora
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    <v-list-item-group>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-img
              max-width="200px"
              height="auto"
              src="/logos/cprmurcia.png"
              alt="Centro de Profesores y Recursos"
            />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'Collaborators'
}
</script>

<style lang="scss" scoped></style>
