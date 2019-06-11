export const state = () => ({
  drawer: false
})

export const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer)
}
