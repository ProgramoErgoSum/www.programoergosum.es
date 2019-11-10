import cpr from '~/store/api/v1/centros/cpr.json'
import alicante from '~/store/api/v1/centros/alicante.json'
import almeria from '~/store/api/v1/centros/almeria.json'
import baleares from '~/store/api/v1/centros/baleares.json'
import laCoruna from '~/store/api/v1/centros/la-coruna.json'
import malaga from '~/store/api/v1/centros/malaga.json'
import murcia from '~/store/api/v1/centros/murcia.json'
import sevilla from '~/store/api/v1/centros/sevilla.json'

const state = () => ({
  list: cpr
    .concat(alicante)
    .concat(almeria)
    .concat(baleares)
    .concat(laCoruna)
    .concat(malaga)
    .concat(murcia)
    .concat(sevilla)
})

const getters = {}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
