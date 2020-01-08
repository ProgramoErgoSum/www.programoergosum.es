import { shallowMount } from '@vue/test-utils'

import Display from '@/components/Global/Adsense/Display.vue'

const component = () =>
  shallowMount(Display, {
    propsData: {
      dataAdClient: 'ca-pub-xxxxxxxxxx',
      dataAdSlot: 'xxxxxxxxxx'
    }
  })

describe('Display', () => {
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
