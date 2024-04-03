import { HomePage } from '@/pages/home'
import { NewsPage } from '@/pages/news'
import { ArticlesPage } from '@/pages/articles'
import { NotFound } from '@/pages/not-found'
import { AuthPage } from '@/pages/auth'
import { RegistrationPage } from '@/pages/registration'

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
    path: '/auth',
    name: 'auth',
    component: AuthPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPage
  },
  {
    path: '/*',
    name: 'not-found',
    component: NotFound
  }
]
