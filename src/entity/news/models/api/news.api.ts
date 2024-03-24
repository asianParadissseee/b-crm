import { useNewsState } from '../store/news.store.ts'
import { useQuery } from '@tanstack/vue-query'
import { NewsResponse } from '@/entity/news'
export function useFetchNews() {
  const { getNewsRequest } = useNewsState()

  const { data, error, isLoading } = useQuery<NewsResponse[], Error>({
    queryKey: ['news'],
    queryFn: getNewsRequest
  })

  return { data, error, isLoading }
}
