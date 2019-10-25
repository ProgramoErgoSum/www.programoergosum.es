import metas from '~/store/api/v1/metas.json'

const state = () => ({
  drawer: false,
  metas,
  topNavigation: [
    {
      title: 'Tutoriales de programación',
      icon: '',
      class: '',
      href: 'https://www.programoergosum.com'
    },
    {
      title: 'Plataforma STEM',
      icon: '',
      class: '',
      href: 'https://www.aprendeprogramando.es'
    },
    /*
    {
      title: 'Centros',
      icon: 'mdi-school-outline',
      class: '',
      to: '/centros'
    },
    {
      title: 'Colabora',
      icon: 'mdi-account-heart-outline',
      class: '',
      to: '/colabora'
    },
    */
    {
      title: 'Donaciones',
      icon: 'mdi-paypal',
      class: 'primary',
      href:
        'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7N56RY2QKJJDS&source=url'
    }
  ],
  navigation: [
    {
      title: 'Asociación',
      icon: '',
      to: '/asociacion'
    },
    /*
    {
      title: 'Tutoriales',
      icon: '',
      to: '/tutoriales'
    },
    */
    {
      title: 'Formación del profesorado',
      icon: '',
      to: '/formaciones'
    },
    {
      title: 'Centros',
      icon: 'mdi-school-outline',
      class: '',
      to: '/centros'
    },
    {
      title: 'Colabora',
      icon: 'mdi-account-heart-outline',
      class: '',
      to: '/colabora'
    },
    {
      title: 'Blog',
      icon: '',
      to: '/blog'
    }
  ],
  mobile: [
    {
      title: 'Asociación',
      icon: 'mdi-information-variant',
      to: '/asociacion'
    },
    /*
    {
      title: 'Tutoriales',
      icon: 'mdi-file-document-outline',
      to: '/tutoriales'
    },
    */
    {
      title: 'Formación profesores',
      icon: 'mdi-teach',
      to: '/formaciones'
    },
    {
      title: 'Centros',
      icon: 'mdi-school-outline',
      to: '/centros'
    },
    {
      title: 'Colabora',
      icon: 'mdi-account-heart-outline',
      to: '/colabora'
    },
    {
      title: 'Contacto',
      icon: 'mdi-at',
      to: '/contacto'
    }
  ]
})

const getters = {
  metas: state => state.metas,
  topNavigation: state => state.topNavigation,
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
  mutations
}
