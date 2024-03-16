import { HomePage } from '@/pages/home'
import { RouteRecordRaw } from 'vue-router'

export const getRouteHome = () => '/'
export const getRouteArticles = () => '/articles'
export const getRouteCardBasket = () => '/card-basket'
export const getRouteCatalog = () => '/catalog'
export const getRouteCatalogProducts = () => '/catalog/products'
export const getRoutePrivateOffice = () => '/private-office'
export const getRouteProfile = () => '/private-office/profile'
export const getRouteNews = () => '/news'
export const getRouteContacts = () => '/contacts'
export const getRouteNotFound = () => '/*'

export const routes: RouteRecordRaw[] = [
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
    path: '/catalog/products',
    name: 'catalog-products',
    component: () => import('@/pages/catalog-products')
  },
  {
    path: '/private-office',
    name: 'private-office',
    component: () => import('@/pages/profile')
  },
  {
    path: '/private-office/profile',
    name: 'profile',
    component: () => import('@/pages/profile')
  },
  {
    path: '/*',
    name: 'not-found',
    component: () => import('@/pages/not-found')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/pages/news')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/pages/contacts-page')
  }
]
