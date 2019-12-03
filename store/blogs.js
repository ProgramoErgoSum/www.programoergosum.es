import blogs from '~/store/api/v1/blogs.json'

// ToDo: Add in .env file
const repo = 'ProgramoErgoSum/Blog'
// const version = 'v1'

const state = () => ({
  repo_url: `https://github.com/${repo}/tree/master`,
  repo_raw: `https://raw.githubusercontent.com/${repo}/master`,
  repo_edit: `https://github.com/${repo}/edit/master`,
  adsense: {
    // ToDo: Add in .env file
    left: '9699220490' // [PES-es] /blog/{alias} CONTENT-LEFT "display"
    // top: '8749654187', // [PES-es] /blog/{alias} CONTENT-TOP "inarticle"
    // bottom: '8649581830' // [PES-es] /blog/{alias} CONTENT-BOTTOM "inarticle"
  },
  list: blogs
})

const getters = {
  adsense: state => state.adsense,
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
