/**
 * * Autor: Saúl García Medina
 * * EL siguiente código corresponde a la configuración del router
 * * de Vue, aquí se indica el path de cada página así como el archivo de Vue
 * * que corresponde a cada ruta. Se hace uso de lazy load para cargar los componentes.
 */

import { createWebHistory, createRouter } from "vue-router";
import Login from "./pages/Log-in.vue";
import Register from "./pages/Register-user.vue";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/mainpage",
    component: () => import(/* webpackChunkName: "MainPage" */ "./pages/MainPage.vue")
  },
  {
    path: '/pushdocument',
    component: () => import(/* webpackChunkName: "PushDocument" */ "./pages/PushDocument.vue")
  },
  {
    path: '/searchdocument',
    component: () => import(/* webpackChunkName: "SearchDocument" */ "./pages/SearchDocument.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;