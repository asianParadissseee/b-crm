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
    path: "/",
    name: 'home',
    component: HomePage
  },
  {
    path: "/home/articles",
    name: 'articles',
    component: () => import('@/pages/articles')
  },
  {
    path: "/home/card-basket",
    name: 'card-basket',
    component: () => import('@/pages/card-basket')
  },
  {
    path: "/home/catalog",
    name: 'catalog',
    component: () => import('@/pages/catalog')
  },
  {
    path: "/home/catalog/products",
    name: 'catalog-products',
    component: () => import('@/pages/catalog-products')
  },
  {
    path: "/home/private-office",
    name: 'private-office',
    component: () => import('@/pages/profile')
  },
  {
    path: "/home/private-office/profile",
    name: 'profile',
    component: () => import('@/pages/profile')
  },
  {
    path: "/*",
    name: 'not-found',
    component: () => import('@/pages/not-found')
  },
  {
    path: "/home/news",
    name: 'news',
    component: () => import('@/pages/news')
  },
  {
    path: "/home/contacts",
    name: 'contacts',
    component: () => import('@/pages/contacts-page')
  }
]
