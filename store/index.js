import metas from '~/store/api/v1/metas.json'

const state = () => ({
  drawer: false,
  metas: metas,
  navigation: [
    {
      title: 'Asociación',
      icon: 'mdi-information-variant',
      to: '/',
      items: [
        {
          title: 'Nosotros',
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
          title: 'Colabora',
          icon: '',
          to: '/colabora'
        },
        {
          title: 'Centros',
          icon: '',
          to: '/centros'
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
      title: 'Steam',
      icon: 'mdi-language-python',
      href: 'https://www.aprendeprogramando.es'
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
    return state.navigation.find(el => el.to === '/').items
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
