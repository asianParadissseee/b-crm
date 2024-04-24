import { http } from '@/shared/api/axios.ts'
import { ArticlesResponse } from '../schema/articles.schema.ts'

export const getArticlesService = async (): Promise<ArticlesResponse[]> => {
  return (await http.get(`/articles/`)).data
}
