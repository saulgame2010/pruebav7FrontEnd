import DocumentService from '../../services/jsonDoc.service'

export const pushDocument = async ({commit}, document) => {
    return DocumentService.pushDocument(document).then(
        document => {
            commit('documentPushed', document)
            return Promise.resolve(document)
        },
        error => {
            commit('pushFailure')
            return Promise.reject(error)
        }
    )
}