import blogs from '~/store/api/v1/blogs.json'

const state = () => ({
  repo_url: 'https://github.com/ProgramoErgoSum/Blog/tree/master',
  repo_raw: 'https://raw.githubusercontent.com/ProgramoErgoSum/Blog/master',
  repo_edit: 'https://github.com/ProgramoErgoSum/Blog/edit/master',
  list: blogs
})

const getters = {
  related: state => item => {
    const blogs = []
    item.tags.map(tag => {
      state.list.map(el => {
        if (el.tags.includes(tag) && el.title !== item.title) blogs.push(el)
      })
    })
    return blogs.slice(0, 3)
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
