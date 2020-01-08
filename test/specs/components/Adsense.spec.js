import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'

import Adsense from '@/components/Global/Adsense/Index.vue'

Vue.use(Vuetify)

const component = () =>
  shallowMount(Adsense, {
    propsData: {
      type: 'display',
      dataAdSlot: 'xxxxxxxxxx'
    }
  })

describe('Adsense', () => {
  test('mounts properly', () => {
    const wrapper = component()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  /*
  test('renders properly', () => {
    const wrapper = component()
    expect(wrapper.html()).toMatchSnapshot()
  })
  */
  test('renders props', () => {
    const wrapper = component()
    expect(wrapper.props().type).toBe('display')
    expect(wrapper.props().dataAdSlot).toBe('xxxxxxxxxx')
  })
})
