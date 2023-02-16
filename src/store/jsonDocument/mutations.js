export const addProperty = (state, {item, propKey, propValue}) => {
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

export const setDocumentStatus = (state, data) => {
    state.documentStatus = data
}

export const getSearchedDocuments = (state, docs) => {
    let newDocs = docs === null ? null : docs.map(doc => {
        return {
            item: doc.item,
            ...doc.properties
        }
    })
    console.log(newDocs)
    state.docsSearched = newDocs
}