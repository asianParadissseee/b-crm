import { createApp } from 'vue'
import App from './app/app.vue'
import '@/app/styles/base.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { createPinia } from 'pinia'
import { routerConfig } from '@/app/providers/router'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import 'vue3-openlayers/styles.css' // vue3-openlayers version < 1.0.0-*
import OpenLayersMap from 'vue3-openlayers'
import { mapOptions } from '@/shared/const/map-options.ts'

const pinia = createPinia()
const app = createApp(App)
const queryClient = new QueryClient()
app.use(pinia)
app.use(routerConfig)
app.use(VueQueryPlugin, { queryClient })
app.use(OpenLayersMap, mapOptions)
app.mount('#app')
