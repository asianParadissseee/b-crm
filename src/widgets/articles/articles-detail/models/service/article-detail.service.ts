import { http } from '@/shared/api/axios.ts'
import { ArticlesResponse } from '@/entity/articles'
export const ArticleDetailService = async (id: string | number): Promise<ArticlesResponse> => {
  return (await http.get(`articles/${id}`)).data
}
