import DocumentService from '../../services/jsonDoc.service'

export const pushDocument = async ({commit}, document) => {
    return DocumentService.pushDocument(document).then(
        document => {
            commit('setDocumentSatus', document)
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