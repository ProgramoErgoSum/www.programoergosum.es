import tags from '~/store/api/v1/tags.json'
import tutoriales from '~/store/api/v1/tutoriales.json'

// ToDo: Add in .env file
const repo = 'ProgramoErgoSum/Tutoriales'
const version = 'v1'

const state = () => ({
  repo_url: `https://github.com/${repo}/tree/master/${version}`,
  repo_raw: `https://raw.githubusercontent.com/${repo}/master/${version}`,
  repo_edit: `https://github.com/${repo}/edit/master/${version}`,
  adsense: {
    // ToDo: Add in .env file
    left: 'xxxxxxxxxx', // [PES-es] /tutoriales/{alias} CONTENT-LEFT
    top: 'xxxxxxxxxx', // [PES-es] /tutoriales/{alias} CONTENT-TOP
    bottom: 'xxxxxxxxxx' // [PES-es] /tutoriales/{alias} CONTENT-BOTTOM
  },
  list: tutoriales,
  tags
})

const getters = {
  adsense: state => state.adsense,
  related: state => item => {
    const tutoriales = []
    item.tags.map(tag => {
      state.list.map(el => {
        if (el.tags.includes(tag) && el.title !== item.title)
          tutoriales.push(el)
      })
    })
    return tutoriales.slice(0, 3)
  }
}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
