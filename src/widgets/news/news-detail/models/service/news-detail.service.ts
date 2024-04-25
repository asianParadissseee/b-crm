import { http } from '@/shared/api/axios.ts'
import { NewsResponse } from '@/entity/news'
export const newsDetailService = async (id: string): Promise<NewsResponse> => {
  return (await http.get(`/news/${id}`)).data
}
