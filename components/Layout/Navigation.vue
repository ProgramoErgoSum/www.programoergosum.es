<template>
  <v-navigation-drawer v-model="drawer" fixed app>
    <v-list>
      <v-list-item-group key="menu">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-menu</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Menú
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider />

    <v-list>
      <template v-for="(item, index) in mobile">
        <v-list-item-group :key="index">
          <v-list-item v-if="item.to" :to="item.to" :disabled="item.disabled">
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-if="item.href"
            :href="item.href"
            :disabled="item.disabled"
            rel="noopener noreferrer"
            target="_blank"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
                <v-icon class="pl-1" size="12">mdi-open-in-new</v-icon>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <template v-for="subitem in item.items">
            <v-list-item-group :key="subitem.title">
              <v-list-item :to="subitem.to" :disabled="subitem.disabled">
                <v-list-item-icon>
                  <v-icon v-text="subitem.icon" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="subitem.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </template>

          <v-divider :key="index" />
        </v-list-item-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters(['mobile']),
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    }
  },
  methods: {
    ...mapMutations(['setDrawer'])
  }
}
</script>

<style lang="scss" scoped></style>
