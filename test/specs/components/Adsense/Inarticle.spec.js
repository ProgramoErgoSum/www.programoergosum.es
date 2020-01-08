import { shallowMount } from '@vue/test-utils'

import Inarticle from '@/components/Global/Adsense/Inarticle.vue'

const component = () =>
  shallowMount(Inarticle, {
    propsData: {
      dataAdClient: 'ca-pub-xxxxxxxxxx',
      dataAdSlot: 'xxxxxxxxxx'
    }
  })

describe('Inarticle', () => {
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
    expect(wrapper.props().dataAdClient).toBe('ca-pub-xxxxxxxxxx')
    expect(wrapper.props().dataAdSlot).toBe('xxxxxxxxxx')
  })
})
