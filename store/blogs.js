import blogs from '~/store/api/v1/blogs.json'

const tags = []
blogs.map(blog => {
  blog.tags.map(tag => {
    if (tags.indexOf(tag) === -1) tags.push(tag)
  })
})

const state = () => ({
  list: blogs,
  tags: tags.sort()
})

const getters = {
  filterByTag: state => tag => {
    return state.list.filter(item => item.tags.includes(tag))
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
