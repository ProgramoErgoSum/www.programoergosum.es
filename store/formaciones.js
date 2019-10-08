import formaciones from '~/store/api/v1/formaciones.json'

// ToDo: Add in .env file
const repo = 'ProgramoErgoSum/Formaciones'

const state = () => ({
  repo_url: `https://github.com/${repo}/tree/master`,
  repo_raw: `https://raw.githubusercontent.com/${repo}/master`,
  repo_edit: `https://github.com/${repo}/edit/master`,
  list: formaciones
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
