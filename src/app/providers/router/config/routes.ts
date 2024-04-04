export const routes = [
  {
    path: '/',
    name: 'home',
    component: import('@/pages/home/ui/home-page.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/pages/news/ui/news-page.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('@/pages/articles/ui/articles-page.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/pages/auth/ui/auth-page.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/pages/registration/ui/registration-page.vue')
  },
  {
    path: '/*',
    name: 'not-found',
    component: () => import('@/pages/not-found/ui/not-found.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/pages/contacts-page/ui/contacts-page.vue')
  }
]
