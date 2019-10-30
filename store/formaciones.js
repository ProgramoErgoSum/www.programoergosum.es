import formaciones from '~/store/api/v1/formaciones.json'

// ToDo: Add in .env file
const repo = 'ProgramoErgoSum/Formaciones'
// const version = 'v1'

const state = () => ({
  repo_url: `https://github.com/${repo}/tree/master`,
  repo_raw: `https://raw.githubusercontent.com/${repo}/master`,
  repo_edit: `https://github.com/${repo}/edit/master`,
  adsense: {
    // ToDo: Add in .env file
    left: '4490512803' // [PES-es] /formaciones/{alias} CONTENT-LEFT "display"
    // top: 'xxxxxxxxxx', // [PES-es] /formaciones/{alias} CONTENT-TOP "inarticle"
    // bottom: 'xxxxxxxxxx' // [PES-es] /formaciones/{alias} CONTENT-BOTTOM "inarticle"
  },
  list: formaciones
})

const getters = {
  adsense: state => state.adsense,
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
