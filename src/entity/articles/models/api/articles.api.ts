import { useQuery } from '@tanstack/vue-query'
import { getArticlesService } from '../service/get-articles.service'
import type { ArticlesResponse } from '../schema/articles.schema.ts'

export function useFetchArticles() {
  const { data, isLoading, error, isError } = useQuery<ArticlesResponse[], Error>({
    queryKey: ['articles'],
    queryFn: getArticlesService
  })
  return { data, error, isLoading , isError}
}
