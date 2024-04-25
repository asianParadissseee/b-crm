import { useQuery } from '@tanstack/vue-query'
import { ArticleDetailService } from '../service/article-detail.service.ts'

export const useFetchArticleDetail = (id: string | number) => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['article-detail'],
    queryFn: () => ArticleDetailService(id)
  })
  return {
    data,
    isLoading,
    isError,
    error
  }
}
