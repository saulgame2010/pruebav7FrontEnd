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
            .then(response => response.data)
    }

    async getSearchedDocuments(query) {
        return axios.get(API_URL, {
            headers: authHeader(),
            params: {
                query
            }
        })
            .then(response => response.data)
    }

    async getExcelDoc(docsSearched) {
        return axios.post(API_URL + '/export', docsSearched,
            {
                headers: {
                    'Authorization': authHeader()
                },
                responseType: 'blob'
            })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'data.xlsx');
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default new DocumentService()