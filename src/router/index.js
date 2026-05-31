import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/',        component: HomeView },
  { path: '/projects', component: () => import('../views/ProjectsView.vue') },
  { path: '/contact',  component: () => import('../views/ContactView.vue') },
  { path: '/legal',    component: () => import('../views/LegalView.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})