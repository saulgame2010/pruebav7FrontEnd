/**
 * * Autor: Saúl García Medina
 * * Estas son las mutaciones del módulo del store correspondiente al documento JSON.
 * * Lo que hacen las mutaciones es modificar el estado de este módulo.
 */

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

export const resetDocument = (state) => {
    state.doc = {}
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
    state.docsSearched = newDocs
}