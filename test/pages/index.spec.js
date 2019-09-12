import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

Vue.use(Vuetify)

describe('Index', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify({
      mocks: {
        $vuetify: {
          theme: {
            isDark: false
          }
        }
      }
    })
  })

  it('mounts properly', () => {
    const wrapper = shallowMount(Index, { vuetify })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
