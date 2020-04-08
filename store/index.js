import centros from './modules/centros'

import metas from '~/store/api/v1/metas.json'

const state = () => ({
  drawer: false,
  metas,
  navigation: [
    /*
    {
      title: 'Cursos y tutoriales',
      icon: 'mdi-school-outline',
      to: '/tutoriales'
    },
    */
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
      title: 'Robot mBot',
      icon: '',
      to: '/tutoriales/tags/mbot'
    },
    {
      title: 'Makey-Makey',
      icon: '',
      to: '/tutoriales/tags/makey-makey'
    },
    /*
    {
      title: 'Centros',
      icon: 'mdi-domain',
      class: '',
      to: '/centros'
    },
    */
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
      title: 'Cursos y tutoriales',
      icon: 'mdi-school-outline',
      to: '/tutoriales'
    },
    {
      title: 'Centros',
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

const getters = {
  metas: state => state.metas,
  navigation: state => state.navigation,
  mobile: state => state.mobile
}

const actions = {}

const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer)
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    centros
  }
}
