import { HomePage } from '@/pages/home'
import { NewsPage } from '@/pages/news'
import { ArticlesPage } from '@/pages/articles'
import { NotFound } from '@/pages/not-found'

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
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesPage
  },
  {
    path: '/*',
    name: 'not-found',
    component: NotFound
  }
]
