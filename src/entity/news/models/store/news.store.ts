import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { NewsResponse } from '../types/news.schema.ts'
import { http } from '@/shared/api/axios.ts'

export const useNewsState = defineStore('news-store', () => {
  const news = reactive<NewsResponse[]>([])

  async function getNewsRequest(): Promise<NewsResponse[]> {
    return (await http.get<NewsResponse[]>(`/news`)).data
  }

  return {
    news,
    getNewsRequest
  }
})
