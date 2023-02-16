import { createWebHistory, createRouter } from "vue-router";
import Login from "./pages/Log-in.vue";
import Register from "./pages/Register-user.vue";

const routes = [
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