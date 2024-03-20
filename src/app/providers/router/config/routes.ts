import { HomePage } from '@/pages/home'
import { NewsPage } from '@/pages/news'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage
  }
]
