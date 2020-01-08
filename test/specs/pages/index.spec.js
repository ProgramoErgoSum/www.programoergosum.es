import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'

import Index from '@/pages/index.vue'

Vue.use(Vuetify)

const page = () => shallowMount(Index)

describe('Index', () => {
  test('mounts properly', () => {
    const wrapper = page()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  /*
  test('renders properly', () => {
    const wrapper = page()
    expect(wrapper.html()).toMatchSnapshot()
  })
  */
})
