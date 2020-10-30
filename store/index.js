import metas from '@/doc/metas.json'

import actividades from './modules/actividades'
import blogs from './modules/blogs'
import centros from './modules/centros'
import formaciones from './modules/formaciones'
import tutoriales from './modules/tutoriales'

const state = () => ({
  drawer: false,
  gdpr: null,
  metas,
  navigation: [
    {
      title: 'Scratch',
      icon: '',
      to: '/tutoriales/tags/scratch'
    },
    {
      title: 'Arduino',
      icon: '',
      to: '/tutoriales/tags/arduino'
    },
    {
      title: 'Raspberry Pi',
      icon: '',
      to: '/tutoriales/tags/raspberry-pi'
    },
    {
      title: 'Robótica educativa',
      icon: '',
      to: '/tutoriales/tags/robotica-educativa'
    },
    {
      title: 'Centros',
      icon: 'mdi-domain',
      class: '',
      to: '/centros'
    },
    {
      title: 'Donaciones',
      icon: 'mdi-account-heart-outline',
      class: 'primary',
      to: '/colabora'
    }
  ],
  mobile: [
    {
      title: 'Asociación',
      icon: 'mdi-information-variant',
      to: '/asociacion'
    },
    {
      title: 'Tutoriales',
      icon: 'mdi-school-outline',
      to: '/tutoriales'
    },
    {
      title: 'Cursos de profesores',
      icon: 'mdi-school',
      to: '/formaciones'
    },
    {
      title: 'Centros educativos',
      icon: 'mdi-domain',
      to: '/centros'
    },
    {
      title: 'Donaciones',
      icon: 'mdi-account-heart-outline',
      to: '/colabora'
    }
  ]
})

const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
  SET_GDPR(state, payload) {
    state.gdpr = payload
  }
}

const getters = {
  metas: state => state.metas,
  navigation: state => state.navigation,
  mobile: state => state.mobile,
  gdpr: state => state.gdpr,
  is_gdpr_accepted: state => state.gdpr === 'accepted'
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
