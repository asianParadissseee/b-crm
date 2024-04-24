import { useQuery } from '@tanstack/vue-query'
import { NewsResponse } from '@/entity/news'
import { newsDetailService } from '../service/news-detail.service.ts'

export const useFetchNewsDetail = (id: string) => {
  const { data, isError, isLoading, error } = useQuery<NewsResponse, Error>({
    queryKey: ['news-detail'],
    queryFn: () => newsDetailService(id)
  })
  return {
    data,
    isError,
    isLoading,
    error
  }
}
