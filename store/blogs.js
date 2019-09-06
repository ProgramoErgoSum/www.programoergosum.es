import blogs from '~/store/api/v1/blogs.json'

const tags = []
blogs.map(blog => {
  blog.tags.map(tag => {
    if (!tags.includes(tag)) tags.push(tag)
  })
})

const state = () => ({
  repo_url: 'https://github.com/ProgramoErgoSum/Blog/tree/master',
  repo_raw: 'https://raw.githubusercontent.com/ProgramoErgoSum/Blog/master',
  repo_edit: 'https://github.com/ProgramoErgoSum/Blog/edit/master',
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
