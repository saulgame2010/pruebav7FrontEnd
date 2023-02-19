/**
 * * Autor: Saúl García Medina
 * * Este código es para crear un store de vuex en donde se especifican los
 * * módulos de la aplicación que van a formar parte de él.
 */

import { createStore } from "vuex";
import { auth } from "./auth.module";
import jsonDocument from './jsonDocument'

const store = createStore({
    modules: {
        auth,
        jsonDocument
    },
});

export default store;