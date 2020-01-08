import centros from '~/api/v1/centros/index.js'

const state = () => ({
  filter: '',
  list: centros
})

const mutations = {
  SET_FILTER(state, payload) {
    state.filter = payload
  }
}

const getters = {
  filter: state => state.filter,
  list: state =>
    state.list.filter(el => {
      return (
        el.name.search(new RegExp(state.filter, 'i')) !== -1 ||
        el.address.city.search(new RegExp(state.filter, 'i')) !== -1 ||
        el.address.province.search(new RegExp(state.filter, 'i')) !== -1
      )
    })
}

const actions = {
  setFilter({ commit }, payload) {
    commit('SET_FILTER', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
