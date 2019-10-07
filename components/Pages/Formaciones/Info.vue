<template>
  <v-expansion-panels focusable>
    <v-expansion-panel key="speakers">
      <v-expansion-panel-header class="subtitle-1">
        Ponentes del curso
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <template v-for="speaker in speakers">
          <div :key="speaker.name" class="ma-3 mt-6">
            <v-row>
              <v-col class="shrink">
                <v-avatar class="d-inline" size="110">
                  <VImageLazy
                    :src="speaker.image"
                    lazy-src="/lazy-user.png"
                    :title="speaker.name"
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
                  icon
                  :href="speaker.social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Url"
                >
                  <v-icon size="18" color="#000">mdi-link</v-icon>
                </v-btn>
                <v-btn
                  v-if="speaker.social.twitter"
                  icon
                  :href="speaker.social.twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <v-icon size="18" color="#1da1f2">mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  v-if="speaker.social.github"
                  icon
                  :href="speaker.social.github"
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
    <v-expansion-panel key="edition">
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
  name: 'Info',
  props: {
    speakers: {
      type: Array,
      required: true
    },
    editions: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
