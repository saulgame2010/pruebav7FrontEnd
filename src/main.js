/**
 * * Autor: Saúl García Medina
 * * Este código se encarga de montar la aplicación, añadiendo el router, el store de vuex
 * * y otros componentes como bootsrap y font-awesome.
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'

createApp(App)
    .use(router)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
