export const addProperty = (state, item, propKey, propValue) => {
    let properties = {}
    properties[propKey] = propValue
    state.doc = {
        ...state.doc,
        item,
        ...properties,
    }
}

export const deleteProp = (state, propKey) => {
    delete state.doc[propKey]
}