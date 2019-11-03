import actividades from '~/store/api/v1/actividades.json'

// ToDo: Add in .env file
const repo = 'ProgramoErgoSum/Actividades'
// const version = 'v1'

const state = () => ({
  repo_url: `https://github.com/${repo}/tree/master`,
  repo_raw: `https://raw.githubusercontent.com/${repo}/master`,
  repo_edit: `https://github.com/${repo}/edit/master`,
  adsense: {
    // ToDo: Add in .env file
    // left: 'xxxxxxxx'
    // top: 'xxxxxxxx'
    // bottom: 'xxxxxxxx'
  },
  list: actividades
})

const getters = {}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
