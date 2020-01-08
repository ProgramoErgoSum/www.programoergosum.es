import centros from '~/api/v1/centros/index.js'

const state = () => ({
  list: centros
})

const getters = {
  list: state => state.list
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
