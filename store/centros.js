import cpr from '~/store/api/v1/centros/cpr.json'
import alicante from '~/store/api/v1/centros/alicante.json'
import almeria from '~/store/api/v1/centros/almeria.json'
import baleares from '~/store/api/v1/centros/baleares.json'
import granada from '~/store/api/v1/centros/granada.json'
import lacoruna from '~/store/api/v1/centros/la-coruna.json'
import malaga from '~/store/api/v1/centros/malaga.json'
import madrid from '~/store/api/v1/centros/madrid.json'
import murcia from '~/store/api/v1/centros/murcia.json'
import sevilla from '~/store/api/v1/centros/sevilla.json'
import stcruzdetenerife from '~/store/api/v1/centros/st-cruz-tenerife.json'
import toledo from '~/store/api/v1/centros/toledo.json'
import valladolid from '~/store/api/v1/centros/valladolid.json'
import ceutaymelilla from '~/store/api/v1/centros/ceuta-y-melilla.json'

const state = () => ({
  list: cpr
    .concat(alicante)
    .concat(almeria)
    .concat(baleares)
    .concat(granada)
    .concat(lacoruna)
    .concat(malaga)
    .concat(madrid)
    .concat(murcia)
    .concat(sevilla)
    .concat(stcruzdetenerife)
    .concat(toledo)
    .concat(valladolid)
    .concat(ceutaymelilla)
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
