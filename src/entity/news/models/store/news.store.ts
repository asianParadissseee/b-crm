import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { NewsResponse } from '../types/news.schema.ts'

export const useNewsState = defineStore('news-store', () => {
  const news = reactive<NewsResponse[]>([])

  return {
    news
  }
})
