import { shallowMount } from '@vue/test-utils'

import Display from '@/components/Global/Adsense/Blocks/Display.vue'

const display = () =>
  shallowMount(Display, {
    propsData: {
      dataAdSlot: 'XXXXXXXX'
    }
  })

describe('Display', () => {
  test('mounts properly', () => {
    const wrapper = display()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  /*
  test('renders properly', () => {
    const wrapper = display()
    expect(wrapper.html()).toMatchSnapshot()
  })
  */
  test('renders props', () => {
    const wrapper = display()
    expect(wrapper.props().dataAdSlot).toBe('XXXXXXXX')
  })
})
