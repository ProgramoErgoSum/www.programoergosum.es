import { shallowMount } from '@vue/test-utils'

import Infeed from '@/components/Global/Adsense/Infeed.vue'

const component = () =>
  shallowMount(Infeed, {
    propsData: {
      dataAdClient: 'ca-pub-xxxxxxxxxx',
      dataAdSlot: 'xxxxxxxxxx'
    }
  })

describe('Infeed', () => {
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
