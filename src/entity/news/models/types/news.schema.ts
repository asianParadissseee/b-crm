export interface NewsResponse {
  id: number
  backgroundImage: string
  title: string
  description: string
  subDescription?: string
  createAt: string
}

export interface NewsDto {
  backgroundImage: string
  title: string
  description: string
  subDescription?: string
}

export interface NewsSchema {
  dto: NewsDto
  response: NewsResponse
  isError?: boolean
  isLoading?: boolean
  error?: string
}
