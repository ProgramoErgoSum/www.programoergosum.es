import collaborators from '~/store/api/v1/collaborators.json'

const state = () => ({
  sponsors: collaborators.sponsors,
  patrons: collaborators.patrons,
  paypals: collaborators.paypals,
  volunteers: collaborators.volunteers
})

const getters = {
  /*
  patrons(state) {
    return state.patrons.slice(0, 8)
  }
  */
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
