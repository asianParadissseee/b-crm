import News from './ui/news.vue'
import { useFetchNews } from './models/api/news.api.ts'
import { NewsDto, NewsSchema, NewsResponse } from './models/types/news.schema.ts'
import { useNewsState } from './models/store/news.store.ts'

export { News, useNewsState, useFetchNews }
export type { NewsDto, NewsSchema, NewsResponse }
