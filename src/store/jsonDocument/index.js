/**
 * * Autor: Saúl García Medina
 * * El siguiente código corresponde al módulo del documento JSON para el store de vuex.
 * * Aquí se encuentra el estado (state), las mutaciones(mutations) y acciones(actions)
 * * que se van a encargar de manjear el store para este módulo.
 */

import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'

const jsonDocument = {
    namespaced: true,
    state,
    // ! LAS MUTACIONES SON SÍNCRONAS!!!!
    mutations,
    // * Las actions son métodos que pueden ser asíncronos
    // ! Las actions nunca pueden modificar directamente el state
    actions,
}

export default jsonDocument