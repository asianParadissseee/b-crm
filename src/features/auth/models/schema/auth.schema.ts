export interface AuthDto {
  email: string
  name: string
  password: string
  telephone: string
}

export interface AuthResponse {
  token: string
}

export interface AuthSchema {
  isLoading?: boolean
  isError?: boolean
  error?: string
  dto: AuthDto
  response: AuthResponse
}
