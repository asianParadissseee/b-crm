import { createApp } from 'vue'
import App from './app/app.vue'
import '@/app/styles/base.css'
import { createPinia } from 'pinia'
import { routerConfig } from '@/app/providers/router'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(routerConfig)
app.mount('#app')
