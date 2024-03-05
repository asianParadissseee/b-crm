import { HomePage } from '@/pages/home'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('@/pages/articles')
  },
  {
    path: '/card-basket',
    name: 'card-basket',
    component: () => import('@/pages/card-basket')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('@/pages/catalog')
  },
  {
    path: '/catalog-products',
    name: 'catalog-products',
    component: () => import('@/pages/catalog-products')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/pages/profile')
  },
  {
    path: '/*',
    name: 'not-found',
    component: () => import('@/pages/not-found')
  }
]
