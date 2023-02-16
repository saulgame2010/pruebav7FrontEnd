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
            console.log(response.data)
            return response.data
        })
    }
}

export default new DocumentService()