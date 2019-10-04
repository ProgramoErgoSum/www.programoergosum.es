import formaciones from '~/store/api/v1/formaciones.json'

// ToDo: Add in .env file
const repo = 'ProgramoErgoSum/Formaciones'

const state = () => ({
  repo_url: `https://github.com/${repo}/tree/master`,
  repo_raw: `https://raw.githubusercontent.com/${repo}/master`,
  repo_edit: `https://github.com/${repo}/edit/master`,
  list: formaciones
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
