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