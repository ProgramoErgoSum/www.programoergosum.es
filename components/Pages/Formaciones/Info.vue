<template>
  <v-expansion-panels focusable>
    <v-expansion-panel key="speakers">
      <v-expansion-panel-header class="subtitle-1">
        Profesor
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <template v-for="speaker in speakers">
          <div :key="speaker.name" class="ma-3 mt-6">
            <v-row>
              <v-col class="shrink">
                <v-avatar class="d-inline" size="110">
                  <VImageLazy
                    :src="speaker.image"
                    :title="speaker.name"
                    lazy-src="/lazy-user.png"
                  />
                </v-avatar>
              </v-col>
              <v-col>
                <p class="mb-3">
                  {{ speaker.name }}
                </p>
                <p class="mb-3 font-weight-light subtitle-2">
                  {{ speaker.description }}
                </p>
                <v-btn
                  v-if="speaker.social.url"
                  :href="speaker.social.url"
                  icon
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Url"
                >
                  <v-icon size="18" color="#000">mdi-link</v-icon>
                </v-btn>
                <v-btn
                  v-if="speaker.social.twitter"
                  :href="speaker.social.twitter"
                  icon
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <v-icon size="18" color="#1da1f2">mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  v-if="speaker.social.github"
                  :href="speaker.social.github"
                  icon
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <v-icon size="18" color="#333">mdi-github-circle</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </template>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'Info',
  props: {
    speakers: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
