import activities from '~/store/api/v1/activities.json'

const state = () => ({
  list: activities
})

const getters = {
  findAll: state => state.list
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
