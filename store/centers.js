import centers from '~/store/api/v1/centers.json'

const state = () => ({
  list: centers
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
