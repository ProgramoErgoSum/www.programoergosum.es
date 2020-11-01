import metas from '@/doc/metas.json'

import actividades from './modules/actividades'
import blogs from './modules/blogs'
import centros from './modules/centros'
import formaciones from './modules/formaciones'
import tutoriales from './modules/tutoriales'

const state = () => ({
  navigation: {
    menu: false
  },
  gdpr: null,
  metas
})

const mutations = {
  SET_NAVIGATION_MENU(state, payload) {
    state.navigation.menu = payload
  },
  SET_NAVIGATION_MENU_TOGGLE(state) {
    state.navigation.menu = !state.navigation.menu
  },
  SET_GDPR(state, payload) {
    state.gdpr = payload
  }
}

const getters = {
  metas: state => state.metas,
  navigation: state => state.navigation,
  gdpr: state => state.gdpr
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    actividades,
    blogs,
    centros,
    formaciones,
    tutoriales
  }
}
