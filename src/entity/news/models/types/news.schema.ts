export interface NewsResponse {}

export interface NewsDto {}

export interface NewsSchema {
  dto: NewsDto
  response: NewsResponse
  isError?: boolean
  isLoading?: boolean
  error?: string
}
