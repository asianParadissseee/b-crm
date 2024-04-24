export interface ArticlesResponse {
  _id: string
  backgroundImage: string
  title: string
  description: string
  subDescription: string
  createAt: string
}

export interface ArticlesDto {
  backgroundImage: string
  title: string
  description: string
  subDescription: string
}

export interface ArticlesSchema {
  isLoading?: boolean
  isError?: boolean
  error?: string
  dto: ArticlesDto
  response: ArticlesResponse[]
}
