/**
 * * Autor: Saúl García Medina
 * * Esta es una función encargada de manejar el JWT para la autenticación del usuario
 * * de esta manera, la sesión es manejada del lado del cliente y no del lado del servidor.
 * * El retorno de esta función es un objeto con el JWT del usuario.
 */

export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}