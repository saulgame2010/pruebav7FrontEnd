/**
 * * Autor: Saúl García Medina
 * * Esta clase se encarga de tener los métodos para hacer el inicio de sesión y
 * * el registro de usuario.
 * * El método login hace una petición al backend, una vez que recibe respuesta,
 * * guarda el nombre de usuario y el JWT en el local storage para el manejo de la sesión.
 * * El método register, manda una petición al backend para guardar el usuario y contraseña.
 * * El método logout, elimina del local storage la información de la sesión del usuario.
 */

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
    async login(user) {
        return axios
            .post(API_URL + 'signin', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            password: user.password
        });
    }
}

export default new AuthService();