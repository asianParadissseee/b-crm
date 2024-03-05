import { createApp } from 'vue'
import App from './app/app.vue'
import '@/app/styles/base.css'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.mount('#app')
