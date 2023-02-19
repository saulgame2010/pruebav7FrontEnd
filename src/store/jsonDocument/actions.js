/**
 * * Autor: Saúl García Medina
 * * Estas son las acciones del módulo del store correspondiente al documento JSON.
 * * Estas no son más que funciones las cuales mediante la clase DocumentService, hacen
 * * las peticiones necesarias al backend.
 */

import DocumentService from '../../services/jsonDoc.service'

export const pushDocument = async ({commit}, document) => {
    return DocumentService.pushDocument(document).then(
        document => {
            commit('setDocumentStatus', document)
            commit('resetDocument')
            return Promise.resolve(document)
        },
        error => {
            commit('setDocumentStatus', error)
            return Promise.reject(error)
        }
    )
}

export const getSearchedDocuments = async ({commit}, params) => {
    let docs = (params === "" || params === null)
    ? null
    : await DocumentService.getSearchedDocuments(params)
    commit('getSearchedDocuments', docs)
}

export const getExcelDoc = async ({commit}, docsSearched) => {
    return DocumentService.getExcelDoc(docsSearched).then(
        docsSearched => {
            commit('setDocumentStatus', docsSearched)
            commit('resetDocument')
            return Promise.resolve(document)
        },
        error => {
            commit('setDocumentStatus', error)
            return Promise.reject(error)
        })
}