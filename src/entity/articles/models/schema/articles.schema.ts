export interface ArticlesResponse {
  _id: string
  backgroundImage: string
  title: string
  subTitle: string
  description: string
  createAt: string
}

export interface ArticlesDto {
  backgroundImage: string
  title: string
  subTitle: string
  description: string
}

export interface ArticlesSchema {
  isLoading?: boolean
  isError?: boolean
  error?: string
  dto: ArticlesDto
  response: ArticlesResponse[]
}
