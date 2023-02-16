import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/document/items';

class DocumentService {
    async pushDocument(document) {
        return axios.post(API_URL, {
            ...document
        },
        {
            headers: authHeader()
        })
        .then(response => {
            return response.data
        })
    }

    async getSearchedDocuments(query) {
        return axios.get(API_URL, {
            headers: authHeader(),
            params: {
                query
            }
        })
        .then(response => {
            return response.data
        })
    }
}

export default new DocumentService()