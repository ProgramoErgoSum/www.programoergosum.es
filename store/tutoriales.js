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
    left: '9837792964', // [PES-es] /tutoriales/{alias} CONTENT-LEFT "display"
    // top: '3707498883', // [PES-es] /tutoriales/{alias} CONTENT-TOP "inarticle"
    bottom: '8576326964' // [PES-es] /tutoriales/{alias} CONTENT-BOTTOM "inarticle"
  },
  list: tutoriales,
  tags
})

const getters = {
  adsense: state => state.adsense,
  related: state => item => {
    const tutoriales = []
    const tags = item.tags.hardware.concat(item.tags.software)
    tags.map(tag => {
      state.list.map(el => {
        if (el.title !== item.title) {
          if (el.tags.hardware.includes(tag) || el.tags.software.includes(tag))
            tutoriales.push(el)
        }
      })
    })
    const ini = Math.floor(Math.random() * tutoriales.length) - 3
    const end = ini + 3
    return tutoriales.slice(ini, end)
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
