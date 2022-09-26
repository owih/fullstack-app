import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView'
import { AUTH_ROUT, REGISTRATION_ROUT, HOME_ROUT } from "@/routes";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    alias: HOME_ROUT,
  },
  {
    path: AUTH_ROUT,
    name: 'auth',
    component: AuthView,
    alias: REGISTRATION_ROUT,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
