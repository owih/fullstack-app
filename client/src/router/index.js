import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthView from '@/views/AuthView'
import ProfileView from "@/views/ProfileView";
import ProfileSettingsView from "@/views/ProfileSettingsView";
import { AUTH_ROUT, REGISTRATION_ROUT, HOME_ROUT, PROFILE_ROUT, PROFILE_SETTINGS, PROFILE_LIST } from "@/stubs/routes";
import ProfilesView from "@/views/ProfilesView";

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
  {
    path: PROFILE_ROUT + '/:id',
    name: 'profile_with_id',
    component: ProfileView,
  },
  {
    path: PROFILE_ROUT,
    name: 'profile',
    component: ProfileView,
  },
  {
    path: PROFILE_SETTINGS,
    name: 'profile-settings',
    component: ProfileSettingsView,
  },
  {
    path: PROFILE_LIST,
    name: 'profiles',
    component: ProfilesView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
