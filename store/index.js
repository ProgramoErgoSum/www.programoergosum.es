import metas from '~/store/api/v1/metas.json'

const state = () => ({
  drawer: false,
  metas: metas,
  navigation: [
    {
      title: 'Asociación',
      icon: 'mdi-information-variant',
      to: '/asociacion',
      items: [
        {
          title: 'Asociación',
          icon: '',
          to: '/asociacion'
        },
        {
          title: 'Proyectos',
          icon: '',
          to: '/proyectos'
        },
        {
          title: 'Actividades',
          icon: '',
          to: '/actividades'
        },
        {
          title: 'Blog',
          icon: '',
          to: '/blog'
        },
        {
          title: 'Contacto',
          icon: '',
          to: '/contacto'
        }
      ]
    },
    {
      title: 'Tutoriales',
      icon: 'mdi-code-tags',
      href: 'https://www.programoergosum.com'
    },
    {
      title: 'Colabora',
      icon: 'mdi-account-heart-outline',
      to: '/colabora'
    },
    {
      title: 'Centros',
      icon: 'mdi-school',
      to: '/centros'
    }
  ]
})

const getters = {
  metas: state => state.metas,
  navigation: state => state.navigation,
  subNavigation: state => {
    return state.navigation.find(el => el.to === '/asociacion').items
  }
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
  mutations
}
