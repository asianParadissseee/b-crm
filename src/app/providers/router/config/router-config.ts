import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.ts'

export const routerConfig = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
