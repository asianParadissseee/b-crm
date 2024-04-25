import { HomePage } from '@/pages/home'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/pages/news/ui/news-page.vue')
  },
  {
    path: '/news/:id',
    name: 'news-detail',
    component: () => import('@/pages/news/news-detail/ui/news-detail.page.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('@/pages/articles/ui/articles-page.vue')
  },
  {
    path: '/articles/:id',
    name: 'articles-detail',
    component: () => import('@/pages/articles/article-detail/ui/article-detail.page.vue')
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
