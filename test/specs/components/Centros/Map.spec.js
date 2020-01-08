import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import * as Vue2Leaflet from 'vue2-leaflet'

import Map from '@/components/Centros/Map.vue'
import centros from '@/store/modules/centros'

Vue.use(Vuetify)
Vue.component('l-map', Vue2Leaflet.LMap)
Vue.component('l-tile-layer', Vue2Leaflet.LTileLayer)

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Map', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        centros
      }
    })
  })

  test('mounts properly', () => {
    const wrapper = shallowMount(Map, { store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  /*
  test('renders properly', () => {
    const wrapper = shallowMount(Map, { store, localVue })
    expect(wrapper.html()).toMatchSnapshot()
  })
  */
  /*
  test('count center list', () => {
    expect(store.state.centros.list.length).toBe(67)
  })
  */
})
