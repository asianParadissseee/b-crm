import { HomePage } from '@/pages/home'

export const getRouteHome = () => '/'
export const getRouteArticles = () => '/home/articles'
export const getRouteCardBasket = () => '/home/card-basket'
export const getRouteCatalog = () => '/home/catalog'
export const getRouteCatalogProducts = () => '/home/catalog/products'
export const getRoutePrivateOffice = () => '/home/private-office'
export const getRouteProfile = () => '/home/private-office/profile'
export const getRouteNews = () => '/home/news'
export const getRouteContacts = () => '/home/contacts'
export const getRouteNotFound = () => '/*'

export const routes = [
  {
    path: getRouteHome(),
    name: 'home',
    component: HomePage
  },
  {
    path: getRouteArticles(),
    name: 'articles',
    component: () => import('@/pages/articles')
  },
  {
    path: getRouteCardBasket(),
    name: 'card-basket',
    component: () => import('@/pages/card-basket')
  },
  {
    path: getRouteCatalog(),
    name: 'catalog',
    component: () => import('@/pages/catalog')
  },
  {
    path: getRouteCatalogProducts(),
    name: 'catalog-products',
    component: () => import('@/pages/catalog-products')
  },
  {
    path: getRoutePrivateOffice(),
    name: 'profile',
    component: () => import('@/pages/profile')
  },
  {
    path: getRouteProfile(),
    name: 'profile',
    component: () => import('@/pages/profile')
  },
  {
    path: getRouteNotFound(),
    name: 'not-found',
    component: () => import('@/pages/not-found')
  },
  {
    path: getRouteNews(),
    name: 'news',
    component: () => import('@/pages/news')
  },
  {
    path: getRouteContacts(),
    name: 'contacts',
    component: () => import('@/pages/contacts-page')
  }
]
