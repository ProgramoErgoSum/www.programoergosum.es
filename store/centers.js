import centers from '~/store/api/v1/centers.json'

const state = () => ({
  list: centers
})

const getters = {
  filterSearch: state => search => {
    return state.list.filter(item => {
      return (
        item.name.toLowerCase().search(search.toLowerCase()) !== -1 ||
        item.address.city.toLowerCase().search(search.toLowerCase()) !== -1 ||
        item.address.province.toLowerCase().search(search.toLowerCase()) !== -1
      )
    })
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
